import { TableContext, useTableContext, useTableUpdate } from './context/TableContext'
import { composeWithModules, tableModules } from './modules'
import { LocalizeColumnTitles } from './modules/LocalizeColumnTitles'
import { Table } from './Table'
export { useVT, type VtOpts } from './virtualizedtableforantd4'

const tableWithModules = composeWithModules(Table, tableModules)
const TableWithoutModules = composeWithModules(Table, [LocalizeColumnTitles])

export {
  TableContext,
  tableWithModules as Table,
  TableWithoutModules,
  useTableContext,
  useTableUpdate
}

export type { ToolbarCommonProps, ToolbarWithAllVisibleTabHeaders, ToolbarWithOnlyOneHiddenTabHeader } from './modules/ToolbarIntegration'
export * from './modules/SidebarFilters'
export type { DateRangeFilter, FilterConfig } from './modules/Filters'
export { FilterOperation, FilterType } from './modules/Filters'
export { isFilterConfig, isFilterFromColumn, isGroup, isSidebarFilter } from './modules/Filters/helpers'
export type { CustomFilterOperations } from './modules/Filters/types'

export type {
  EnumFilterType,
  ITableProps,
  TableColumn,
  TablePaginationProps,
  TableRecord,
  TableRef,
  TableToolbarProps
} from './types'
