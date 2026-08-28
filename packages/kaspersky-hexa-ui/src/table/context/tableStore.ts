import { SetState } from '@helpers/hooks/useStateProps'
import { shallowEqual } from '@helpers/shallowEqual'
import {
  createContext,
  DependencyList,
  MutableRefObject,
  useContext,
  useEffect
} from 'react'
import { useSyncExternalStoreWithSelector } from 'use-sync-external-store/shim/with-selector'

import { FilterApi } from '../modules/Filters'
import { ActiveSorting } from '../modules/SortingAndFilters'
import { GetLeftItemsProps } from '../modules/ToolbarIntegration/types'
import {
  ITableProps,
  TableRecord,
  TableRef,
  TableRowSelectionData
} from '../types'

export type TableContextProviderProps <T extends TableRecord = TableRecord>= {
  filterApi?: FilterApi<T> | null,
  groupBy: string,
  groupsMap?: Map<string, string[]>,
  pagination: {
    setTotal?: SetState<number | undefined>,
    shouldCountClientTotal: boolean,
  },
  useDataSourceFunction: boolean,
  rowSelection?: TableRowSelectionData,
  searchValue: string,
  sorting: ActiveSorting<T>,
  setSorting: SetState<ActiveSorting<T>>,
  toolbarContext: GetLeftItemsProps<T>,
  /**
   * Whether the filters sidebar is open. Kept here rather than threaded through
   * the module chain: it has exactly one consumer, but as a prop it passed
   * through thirteen un-memoised module layers into antd's Table, so toggling it
   * re-rendered the whole body — measured at 10,719 fibers for one click on a
   * 100x40 table. Selector subscriptions mean only the sidebar re-renders now.
   */
  showFilterSidebar?: boolean,
  /** Whether the column-settings sidebar is open. See showFilterSidebar. */
  showColumnsSelector?: boolean,
} & Pick<ITableProps<T>, 'useV3TestId' | 'filterVersion' | 'enableNestedFilters' | 'dateFormat'>

export type UpdateTableContext<T extends TableRecord = TableRecord> =
  (updates: Partial<TableContextProviderProps<T>>) => void

export type AddMethodToRef = <R extends keyof TableRef>(name: R, method?: TableRef[R]) => void

export const getDefaultContextData = <T extends TableRecord = TableRecord>(): TableContextProviderProps<T> => ({
  filterApi: null,
  filterVersion: 1,
  enableNestedFilters: false,
  groupBy: '',
  searchValue: '',
  sorting: {},
  setSorting: () => {},
  pagination: {
    shouldCountClientTotal: false
  },
  useDataSourceFunction: false,
  showFilterSidebar: false,
  showColumnsSelector: false,
  toolbarContext: {}
})

export type TableStore<T extends TableRecord = TableRecord> = {
  getSnapshot: () => TableContextProviderProps<T>,
  subscribe: (listener: () => void) => () => void,
  update: UpdateTableContext<T>,
  addMethodToRef: AddMethodToRef
}

export const createTableStore = <T extends TableRecord = TableRecord> (
  initialData: TableContextProviderProps<T>,
  methodsRef: MutableRefObject<TableRef>
): TableStore<T> => {
  const listeners = new Set<() => void>()
  let snapshot: TableContextProviderProps<T> = initialData

  const update: UpdateTableContext<T> = (updates) => {
    snapshot = { ...snapshot, ...updates }
    listeners.forEach(listener => listener())
  }

  const addMethodToRef: AddMethodToRef = (name, method) => {
    if (!method) {
      console.warn(`[Hexa-UI][Table] Method ${name} wasn't added to ref: method is empty`)
      return
    }

    methodsRef.current[name] = method

    return () => delete methodsRef.current[name]
  }

  return {
    getSnapshot: () => snapshot,
    subscribe: (listener) => {
      listeners.add(listener)
      return () => { listeners.delete(listener) }
    },
    update,
    addMethodToRef
  }
}

const DEFAULT_SNAPSHOT: TableContextProviderProps = getDefaultContextData()

const defaultStore: TableStore = {
  getSnapshot: () => DEFAULT_SNAPSHOT,
  subscribe: () => () => {},
  update: () => {},
  addMethodToRef: () => {}
}

// Вынуждены использовать any, т.к. при <TableRecord> нельзя нормально типизировать пропы при использовании контекста
export const TableStoreContext = createContext<TableStore<any>>(defaultStore)

const identity = <State>(state: State): State => state

export function useTableContext<T extends TableRecord = TableRecord> (): TableContextProviderProps<T>
export function useTableContext<Selected> (
  selector: (state: TableContextProviderProps<any>) => Selected,
  isEqual?: (a: Selected, b: Selected) => boolean
): Selected
export function useTableContext (
  selector: (state: TableContextProviderProps<any>) => unknown = identity,
  isEqual: (a: unknown, b: unknown) => boolean = shallowEqual
): unknown {
  const store = useContext(TableStoreContext)

  return useSyncExternalStoreWithSelector(
    store.subscribe,
    store.getSnapshot,
    store.getSnapshot,
    selector,
    isEqual
  )
}

export const useTableUpdate = <T extends TableRecord = TableRecord>(): UpdateTableContext<T> =>
  useContext(TableStoreContext).update as UpdateTableContext<T>

export const useTableStore = <T extends TableRecord = TableRecord>(): TableStore<T> =>
  useContext(TableStoreContext) as TableStore<T>

export const useRefMethod = <T extends keyof TableRef>(name: T, method?: TableRef[T], deps?: DependencyList) => {
  const { addMethodToRef } = useContext(TableStoreContext)

  useEffect(() => (
    addMethodToRef(name, method)
  ), [name, addMethodToRef, ...(deps || [])])
}
