import { Table } from '../Table'
import { LocalizeColumnTitles } from './LocalizeColumnTitles'
import { SortingAndFilters } from './SortingAndFilters'
import { Pagination } from './Pagination'
import { ResizableColumns } from './ResizableColumns'
import { InfiniteScroll } from './InfiniteScroll'
// import { ExpandableRows } from './ExpandableRows'
import { ToolbarIntegration } from './ToolbarIntegration'
import { ColumnsSelection } from './ColumnsSelection'
import { TableAccordion } from './Accordion'
import { Groups } from './Groups'
import { DraggableTable } from './Draggable'
import { Reductions } from './Reductions'
import { TableContextProvider } from '../context/TableContext'
import { FilterSidebar } from './Filters'

export type TableModule = (Component: typeof Table) => typeof Table

export const composeWithModules = (Component: typeof Table, modules: TableModule[]) => {
  const TableWithModules = modules.reduce((Component, module) => module(Component), Component)
  return TableContextProvider(TableWithModules)
}

/**
 * Order is important, because of ColumnDropdown transforms column.title
 * into ReactElement, which cannot be localized now
 */
export const tableModules: TableModule[] = [
  Groups,
  // ExpandableRows,
  Pagination,
  SortingAndFilters,
  Reductions,
  LocalizeColumnTitles,
  ResizableColumns,
  TableAccordion,
  DraggableTable,
  ColumnsSelection,
  FilterSidebar,
  InfiniteScroll,
  ToolbarIntegration
]

export { useTableModules } from './hooks'
