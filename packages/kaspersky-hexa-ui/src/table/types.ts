import { ThemeKey } from '@design-system/types'
import { TestingProps, ToViewProps } from '@helpers/typesHelpers'
import { CheckboxColorConfig } from '@src/checkbox/types'
import { PaginationProps } from '@src/pagination'
import { RadioColorConfig } from '@src/radio/types'
import { TooltipProps } from '@src/tooltip/types'
import { TableProps } from 'antd'
import { SpinProps } from 'antd/es/spin'
import { ColumnType } from 'antd/lib/table'
import { ReactElement, ReactNode } from 'react'

import { FilterConfig, FilterType } from './modules/Filters/types'
import { ActiveFilter, ActiveSorting, IFiltersSavingSettings } from './modules/SortingAndFilters'
import { ToolbarProps } from './modules/ToolbarIntegration'
import { FilterItemTagProps } from './modules/ToolbarIntegration/FilterItems'

type ColorConfig<StateProps> = {
  enabled?: StateProps,
  hover?: StateProps,
  active?: StateProps,
  selected?: StateProps,
  disabled?: StateProps
}

type TableCellStateProps = {
  border?: string,
  background?: string
}

export type TableFiltersColorConfig = {
  toolbar: {
    background: string
  },
  item: {
    icon: string,
    background: string,
    title: {
      color: string
    }
  }
}

export type TableColorConfig = {
  headCell: ColorConfig<TableCellStateProps>,
  cell: ColorConfig<TableCellStateProps>,
  root: {
    background: string,
    color: string
  },
  resize: {
    enabled: string,
    hover: string
  },
  expandable: {
    icon: string
  },
  checkbox: CheckboxColorConfig,
  radio: RadioColorConfig,
  filters: TableFiltersColorConfig,
  validation: {
    outline: string
  }
}

export type TableCssConfig = TableColorConfig

export type TableThemeProps = {
  theme?: ThemeKey
}

export type TableRecord = {
  [key: string]: any,
  children?: TableRecord[]
}

export type DefaultSorter = <T extends TableRecord>(rows: T[], propName: keyof T, isAsc: boolean) => T[]

export type TablePaginationProps = PaginationProps & {
  infiniteScrollPageGetter?: (page: number) => null | TableRecord[] | Promise<null>,
  restoreCurrentWhenDataChange?: boolean
}

export type TableToolbarProps = ToolbarProps

export type CustomSorter = (a: TableRecord, b: TableRecord, isAsc: boolean) => number

export type ColumnFilter = {
  localizationKey?: string,
  name: string,
  filter: (record: TableRecord) => boolean
}

export type TableColumn = Omit<ColumnType<TableRecord>, 'key' | 'sorter' | 'filters'> & {
  key: React.Key,
  title?: string | ReactElement,
  dataIndex?: string,
  columnId?: string,
  isSortable?: boolean,
  allowMultipleFilters?: boolean,
  sorter?: CustomSorter,
  /** @deprecated Use **sorter** for custom column sorting */
  customSorter?: DefaultSorter,
  groupingAvailable?: boolean,
  hideColumnAvailable?: boolean,
  show?: boolean,
  filters?: ColumnFilter[],
  filterType?: {
    type: FilterType,
    getAvailableValues?: () => Promise<any>
  },
  width?: number | string,
  renderGroupTitle?: (data: string) => ReactNode,
  resizing?: {
    disabled: boolean
  }
}

export type ITableProps<T = TableRecord> = Omit<TableProps<T>, 'columns' | 'dataSource' | 'pagination'> & TableThemeProps & {
  dataSource?: T[],
  columns?: TableColumn[],
  /** This prop should be memoized */
  onColumnResize?: (column: any) => void,
  /** This prop should be memoized */
  onManualColumnResize?: (column: TableRecord) => void,
  onGroupByChange?: (dataIndex: string) => void,
  search?: boolean,
  header?: string,
  pagination?: false | TablePaginationProps,
  showColumnsSelector?: boolean,
  onCloseColumnsSelector?: () => void,
  onColumnsChange?: (columns: any[]) => void,
  groupBy?: string,
  useAccordion?: boolean,
  stickyHeader?: number,
  toolbar?: TableToolbarProps,
  onSearch?: (searchString: string) => void,
  groupTitleRender?: (data: string) => ReactNode,
  resizingMode?: 'max' | 'last' | 'manual' | 'scroll',
  enableSearchHighlighting?: boolean,
  stickyScrollingContainer?: Element,
  maxColumnsForAutoResizing?: number,
  defaultColumnWidth?: number,
  isDefaultSortDisabled?: boolean,
  infiniteScrollEndTableText?: ReactNode,
  infiniteScrollErrorText?: ReactNode,
  infiniteScrollRetryText?: ReactNode,
  /** Config object for spinner while loading */
  loaderProps?: SpinProps,
  useDragDrop?: boolean,
  onDragStart?: (rows: unknown[]) => void,
  onDragEnd?: (rows: unknown[]) => void,
  expandable?: TableProps<T>['expandable'] & { expandColumnName?: string },
  emptyText?: ReactNode,
  columnVerticalAlign?: 'top' | 'middle' | 'bottom' | 'inherit',
  rowMode?: 'standard' | 'compact',
  disabled?: boolean,
  isValid?: boolean,
  // Sorting props
  /** Call back when sort changed */
  onSortChange?: (val: ActiveSorting) => void,
  showSorterTooltip?: boolean | TooltipProps,
  initialSorting?: ActiveSorting,
  externalSorting?: ActiveSorting,
  setExternalSorting?: (arg0: ActiveSorting) => void,
  // Filters props
  useFiltersSidebar?: boolean,
  /** Call back when filter from sidebar changed */
  onFilterChange?: (val: ActiveFilter) => void,
  /** Call back when filters from dropdown changed */
  onFiltersChange?: (filters: FilterConfig[]) => void,
  appliedFilters?: ActiveFilter,
  /**  Object with key name of saved filters: saveFilters.storageKey */
  saveFilters?: IFiltersSavingSettings,
  /** An array of filters to show */
  filterItems?: { items: FilterItemTagProps[], clearLinkText?: string, onClear?: () => void },
  /** Call back when sidebar close */
  onCloseFilterSidebar?: () => void,
  showFilterSidebar?: boolean,
  /** Filters to set by default */
  initialFilters?: ActiveFilter,
  /** Filter config to apply for data */
  defaultFiltersConfig?: FilterConfig[],
  /** Experimental flag to enable virtualization. Not ready to use in production */
  __EXPERIMENTAL__VIRTUAL?: boolean
} & TestingProps

export type TableViewProps = ToViewProps<ITableProps, TableCssConfig, TableThemeProps> & Required<TableThemeProps>
