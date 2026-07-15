import { FC } from 'react'

import { TableContextProvider } from '../context/TableContext'
import { ITableProps, TableRecord, TableRef } from '../types'

import { TableAccordion } from './Accordion'
import { ColumnsSelection } from './ColumnsSelection'
import { ContextMenu } from './ContextMenu'
import { DraggableTable } from './Draggable'
import { EmptyCellDash } from './EmptyCellDash'
import { Filters } from './Filters'
import { Groups } from './Groups'
import { InfiniteScroll } from './InfiniteScroll'
import { Initial } from './Initial'
import { LocalizeColumnTitles } from './LocalizeColumnTitles'
import { MemoizeProps } from './MemoizeProps'
import { Pagination } from './Pagination'
import { Reductions } from './Reductions'
import { ResizableColumns } from './ResizableColumns/ResizableColumns'
import { SidebarFilters } from './SidebarFilters'
import { SortingAndFilters } from './SortingAndFilters'
// import { ExpandableRows } from './ExpandableRows'
import { ToolbarIntegration } from './ToolbarIntegration'
import { VirtualTanstack as Virtual } from './Virtual'

export type TableComponent<T extends TableRecord = TableRecord> = FC<ITableProps<T> & React.RefAttributes<TableRef>>
export type TableModule<T extends TableRecord = TableRecord> = (Component: TableComponent<T>) => TableComponent<T>

export const composeWithModules = (Component: TableComponent, modules: TableModule[]) => {
  const TableWithModules = modules.reduce((Component, module) => module(Component), Component)
  return TableContextProvider(TableWithModules)
}

/**
 * Order is important, because of ColumnDropdown transforms column.title
 * into ReactElement, which cannot be localized now.
 * Existing rules for the order of modules:
 * -Filters must be below SidebarFilters, ToolbarIntegration and SortingAndFilters
 * -ToolbarIntegration must be below SidebarFilters
 * -LocalizeColumnTitles must be below SortingAndFilters and SidebarFilters
 * -Groups must be above ColumnsSelection
 * -to be continued...
 */
export const tableModules: TableModule[] = [
  Groups,
  // ExpandableRows,
  Pagination,
  SortingAndFilters,
  Reductions,
  ResizableColumns,
  TableAccordion,
  EmptyCellDash,
  DraggableTable,
  ColumnsSelection,
  SidebarFilters,
  InfiniteScroll,
  ContextMenu,
  ToolbarIntegration,
  Virtual, // in developing, not ready for use
  LocalizeColumnTitles,
  Filters,
  Initial,
  MemoizeProps('columns')
] // calls in reverse order - tableModules[n], tableModules[n-1] etc...

export { useTableModules } from './hooks'
