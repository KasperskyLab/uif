import { TableContext, useTableContext } from './context/TableContext'
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
  useTableContext
}

export type { ToolbarCommonProps, ToolbarWithAllVisibleTabHeaders, ToolbarWithOnlyOneHiddenTabHeader } from './modules/ToolbarIntegration'
export * from './modules/SidebarFilters'
export type { DateRangeFilter, FilterConfig } from './modules/Filters'
export { FilterOperation, FilterType } from './modules/Filters'
export { isFilterConfig, isFilterFromColumn, isGroup, isSidebarFilter } from './modules/Filters/helpers'

export type {
  ITableProps,
  TableColumn,
  TablePaginationProps,
  TableRecord,
  TableRef,
  TableToolbarProps
} from './types'
