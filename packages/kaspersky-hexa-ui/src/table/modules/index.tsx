import { TableContextProvider } from '../context/TableContext'
import { Table } from '../Table'

import { TableAccordion } from './Accordion'
import { ColumnsSelection } from './ColumnsSelection'
import { DraggableTable } from './Draggable'
import { FilterSidebar } from './Filters'
import { Groups } from './Groups'
import { InfiniteScroll } from './InfiniteScroll'
import { LocalizeColumnTitles } from './LocalizeColumnTitles'
import { Pagination } from './Pagination'
import { Reductions } from './Reductions'
import { ResizableColumns } from './ResizableColumns'
import { SortingAndFilters } from './SortingAndFilters'
// import { ExpandableRows } from './ExpandableRows'
import { ToolbarIntegration } from './ToolbarIntegration'
import { VirtualTanstack as Virtual } from './Virtual'

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
  FilterSidebar, // in developing, not ready for use
  InfiniteScroll,
  ToolbarIntegration,
  Virtual // in developing, not ready for use
]

export { useTableModules } from './hooks'
