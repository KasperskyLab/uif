import { SetState } from '@helpers/hooks/useStateProps'
import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState
} from 'react'

import { TableModule } from '../modules'
import { EnumOptionsMap, FilterApi } from '../modules/Filters'
import { ActiveSorting } from '../modules/SortingAndFilters'
import { ITableProps, TableCssConfig } from '../types'
import { useThemedTableProps } from '../useThemedTable'

export type TableContextProviderProps = {
  cssConfig: TableCssConfig | null,
  filterApi?: FilterApi | null,
  groupBy: string,
  enumOptionsMap?: EnumOptionsMap,
  pagination: {
    setTotal?: SetState<number | undefined>,
    shouldCountClientTotal: boolean,
    useDataSourceFunction: boolean,
  },
  searchValue: string,
  sorting: ActiveSorting,
  updateContext: (updates: Partial<TableContextProviderProps>) => void
} & Pick<ITableProps, 'useV3TestId' | 'filterVersion' | 'dateFormat'>

const defaultContextValue: TableContextProviderProps = {
  cssConfig: null,
  filterApi: null,
  filterVersion: 1,
  groupBy: '',
  searchValue: '',
  sorting: {},
  pagination: {
    shouldCountClientTotal: false,
    useDataSourceFunction: false
  },
  updateContext: () => {}
}

export const TableContext = createContext<TableContextProviderProps>(defaultContextValue)

export const useTableContext = () => useContext(TableContext)

export const TableContextProvider: TableModule = Component => function TableWithContextProvider (rawProps) {
  const {
    cssConfig,
    dateFormat,
    filterVersion = 1,
    useV3TestId,
    ...props
  } = useThemedTableProps(rawProps)

  const [contextValue, setContextValue] = useState<Omit<TableContextProviderProps, 'updateContext'>>({
    ...defaultContextValue,
    cssConfig,
    dateFormat,
    filterVersion,
    useV3TestId
  })

  const updateContext = useCallback((updates: Partial<TableContextProviderProps>) => {
    setContextValue(prev => ({ ...prev, ...updates }))
  }, [])

  const enhancedContext = useMemo(() => ({
    ...contextValue,
    updateContext
  }), [contextValue, updateContext])

  return (
    <TableContext.Provider value={enhancedContext}>
      <Component {...props} />
    </TableContext.Provider>
  )
}
