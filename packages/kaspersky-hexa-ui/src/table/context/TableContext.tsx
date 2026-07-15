import { SetState } from '@helpers/hooks/useStateProps'
import React, {
  createContext,
  DependencyList,
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState
} from 'react'

import { TableComponent } from '../modules'
import { FilterApi } from '../modules/Filters'
import { ActiveSorting } from '../modules/SortingAndFilters'
import { GetLeftItemsProps } from '../modules/ToolbarIntegration/types'
import {
  ITableProps,
  TableColumn,
  TableRecord,
  TableRef,
  TableRowSelectionData
} from '../types'

export type TableContextProviderProps <T extends TableRecord = TableRecord>= {
  filterApi?: FilterApi<T> | null,
  allColumns: TableColumn<T>[],
  groupBy: string,
  groupsMap?: Map<string, string[]>,
  pagination: {
    setTotal?: SetState<number | undefined>,
    shouldCountClientTotal: boolean,
    useDataSourceFunction: boolean,
  },
  rowSelection?: TableRowSelectionData,
  searchValue: string,
  sorting: ActiveSorting<T>,
  setSorting: SetState<ActiveSorting<T>>,
  toolbarContext: GetLeftItemsProps<T>,
  updateContext: (updates: Partial<TableContextProviderProps<T>>) => void,
  addMethodToRef: <R extends keyof TableRef>(name: R, method?: TableRef[R]) => void
} & Pick<ITableProps<T>, 'useV3TestId' | 'filterVersion' | 'enableNestedFilters' | 'dateFormat'>

const getDefaultContextValue = <T extends TableRecord = TableRecord>(): TableContextProviderProps<T> => ({
  filterApi: null,
  filterVersion: 1,
  enableNestedFilters: false,
  groupBy: '',
  allColumns: [],
  searchValue: '',
  sorting: {},
  setSorting: () => {},
  pagination: {
    shouldCountClientTotal: false,
    useDataSourceFunction: false
  },
  toolbarContext: {},
  updateContext: () => {},
  addMethodToRef: () => {}
})

// Вынуждены использовать any, т.к. при <TableRecord> нельзя нормально типизировать пропы при использовании контекста
export const TableContext = createContext<TableContextProviderProps<any>>(getDefaultContextValue())

export const useTableContext = <T extends TableRecord = TableRecord>() => useContext<TableContextProviderProps<T>>(TableContext)

export const useRefMethod = <T extends keyof TableRef>(name: T, method?: TableRef[T], deps?: DependencyList) => {
  const { addMethodToRef } = useTableContext()

  useEffect(() => (
    addMethodToRef(name, method)
  ), [name, addMethodToRef, ...(deps || [])])
}

export const TableContextProvider = <T extends TableRecord = TableRecord>(
  Component: TableComponent<T>
) => React.forwardRef<TableRef, ITableProps<T>>(function TableWithContextProvider ({
  dateFormat,
  filterVersion = 1,
  enableNestedFilters,
  useV3TestId,
  ...props
}, ref) {
  const methodsRef = useRef<TableRef>({} as TableRef)

  const [contextValue, setContextValue] = useState<Omit<TableContextProviderProps<T>, 'updateContext' | 'addMethodToRef' | 'unregisterMethod'>>({
    ...getDefaultContextValue(),
    dateFormat,
    filterVersion,
    enableNestedFilters,
    useV3TestId
  })

  useEffect(() => {
    setContextValue((prev) => ({
      ...prev,
      dateFormat,
      filterVersion,
      useV3TestId
    }))
  }, [dateFormat, filterVersion, useV3TestId])

  const updateContext = useCallback((updates: Partial<TableContextProviderProps<T>>) => {
    setContextValue(prev => ({ ...prev, ...updates }))
  }, [])

  const addMethodToRef = useCallback<TableContextProviderProps<T>['addMethodToRef']>((name, method) => {
    if (!method) {
      console.warn(`[Hexa-UI][Table] Method ${name} wasn't added to ref: method is empty`)
      return
    }

    methodsRef.current[name] = method

    return () => delete methodsRef.current[name]
  }, [])

  useImperativeHandle(ref, () => methodsRef.current, [])

  const enhancedContext = useMemo(() => ({
    ...contextValue,
    updateContext,
    addMethodToRef
  }), [contextValue, updateContext, addMethodToRef])

  return (
    <TableContext.Provider value={enhancedContext}>
      <Component {...props} ref={ref} />
    </TableContext.Provider>
  )
})
