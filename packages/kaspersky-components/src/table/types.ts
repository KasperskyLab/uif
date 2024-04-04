import { TableProps } from 'antd'
import { SpinProps } from 'antd/es/spin'
import { TablePaginationConfig } from 'antd/es/table/interface'
import { ColumnType } from 'antd/lib/table'
import { ReactNode } from 'react'
import { ThemeKey } from '@design-system/types'
import { CheckboxColorConfig } from '../checkbox/types'
import { RadioColorConfig } from '../radio/types'
import { ActiveFilter, ActiveSorting, IFiltersSavingSettings } from './modules/SortingAndFilters'
import { ToolbarProps } from './modules/ToolbarIntegration'
import { FilterItemTagProps } from './modules/ToolbarIntegration/FilterItems'
import { ITooltipProps } from '../tooltip/types'
import { TestingProps, ToViewProps } from '@helpers/typesHelpers'

type ColorConfig<StateProps> = {
  normal?: StateProps,
  hover?: StateProps,
  active?: StateProps,
  disabled?: StateProps
}

type TableCellStateProps = {
  borderColor?: string,
  backgroundColor?: string
}

export type TableFiltersColorConfig = {
  toolbar: {
    backgroundColor: string
  },
  item: {
    backgroundColor: string,
    title: {
      color: string
    }
  }
}

export type TableColorConfig = {
  headCell: ColorConfig<TableCellStateProps>,
  cell: ColorConfig<TableCellStateProps>,
  root: {
    backgroundColor: string,
    color: string
  },
  disabled: {
    backgroundColor: string
  },
  resize: {
    borderColor: string
  },
  selected: {
    backgroundColor: string
  },
  checkbox: CheckboxColorConfig,
  radio: RadioColorConfig,
  filters: TableFiltersColorConfig
}

export type TableCssConfig = TableColorConfig

export type TableThemeProps = {
  theme?: ThemeKey
}

export type Sorter = <T extends Record<string, unknown>>(rows: T[], propName: keyof T, isAsc: boolean) => T[]

export type PaginationProps = TablePaginationConfig & {
  infiniteScrollPageGetter?: (page: number) => null | Record<string, any>[] | Promise<null | Record<string, any>[]>,
  restoreCurrentWhenDataChange?: boolean
}

export type TableRecord = Record<string, any>

export type TableCustomColumn =
  & Omit<ColumnType<TableRecord>, 'key'>
  & {
      key: React.Key,
      dataIndex?: string | number | (string | number)[],
      [key: string]: any
    };

export type ITableProps<T = Record<string, any>> = Omit<TableProps<T>, 'columns'> & TableThemeProps & {
  columns?: TableCustomColumn[],
  onSortChange?: (val: ActiveSorting) => void,
  onFilterChange?: (val: ActiveFilter) => void,
  onFiltersChange?: (filters: unknown[]) => void,
  /** This prop should be memoized */
  onColumnResize?: (column: any) => void,
  /** This prop should be memoized */
  onManualColumnResize?: (column: Record<string, any>) => void,
  onGroupByChange?: (dataIndex: string) => void,
  search?: boolean,
  header?: string,
  pagination?: false | PaginationProps,
  initialSorting?: ActiveSorting,
  initialFilters?: ActiveFilter,
  showColumnsSelector?: boolean,
  showFilterSidebar?: boolean,
  onCloseColumnsSelector?: () => void,
  onCloseFilterSidebar?: () => void,
  onColumnsChange?: (columns: any[]) => void,
  groupBy?: string,
  useAccordion?: boolean,
  stickyHeader?: number,
  toolbar?: ToolbarProps,
  filterItems?: { items: FilterItemTagProps[], clearLinkText?: string, onClear?: () => void },
  onSearch?: (searchString: string) => void,
  groupTitleRender?: (data: string) => ReactNode,
  saveFilters?: IFiltersSavingSettings,
  resizingMode?: 'max' | 'last' | 'manual' | 'scroll',
  showSorterTooltip?: boolean | ITooltipProps,
  enableSearchHighlighting?: boolean,
  stickyScrollingContainer?: Element,
  maxColumnsForAutoResizing?: number,
  defaultColumnWidth?: number,
  isDefaultSortDisabled?: boolean,
  infiniteScrollEndTableText?: ReactNode,
  infiniteScrollErrorText?: ReactNode,
  infiniteScrollRetryText?: ReactNode,
  loaderProps?: SpinProps,
  useDragDrop?: boolean,
  onDragStart?: (rows: unknown[]) => void,
  onDragEnd?: (rows: unknown[]) => void,
  externalSorting?: ActiveSorting,
  setExternalSorting?: (arg0: ActiveSorting) => void,
  appliedFilters?: ActiveFilter,
  expandable?: TableProps<T>['expandable'] & { expandColumnName?: string },
  emptyText?: ReactNode,
  columnVerticalAlign?: 'top' | 'middle' | 'bottom' | 'inherit',
  rowMode?: 'standard' | 'compact',
  disabled?: boolean
} & TestingProps

export type TableViewProps = ToViewProps<ITableProps, TableCssConfig, TableThemeProps> & Required<TableThemeProps>

/** @deprecated Use TableViewProps instead */
export type ThemedTableProps = TableViewProps
