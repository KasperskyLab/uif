import { TableProps } from 'antd'
import { SpinProps } from 'antd/es/spin'
import { TablePaginationConfig } from 'antd/es/table/interface'
import { ReactNode } from 'react'
import { TextSizes } from '../../design-system/tokens'
import { ThemeKey } from '../../design-system/types'
import { CheckboxCssConfig } from '../checkbox/types'
import { ActiveFilter, ActiveSorting, IFiltersSavingSettings } from './modules/SortingAndFilters'
import { ToolbarProps } from './modules/ToolbarIntegration'
import { FilterItemTagProps } from './modules/ToolbarIntegration/FilterItems'

type ColorConfig<StateProps> = {
  normal?: StateProps,
  hover?: StateProps,
  active?: StateProps,
  focus?: StateProps,
  disabled?: StateProps
}

type TableHeadCellStateProps = {
  borderColor: string
}
type TableCellStateProps = {
  borderColor?: string,
  backgroundColor?: string
}

export type TableColorConfig = {
  headCell: ColorConfig<TableHeadCellStateProps>,
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
  checkbox: CheckboxCssConfig
}

export type TableSizeConfig = {
  headSizes: TextSizes,
  cellSizes: TextSizes,
  dragHandler: {
    size: string
  }
}

export type TableCssConfig = TableColorConfig & TableSizeConfig

type BaseThemedTableProps = {
  theme?: ThemeKey
}

type PaginationProps = TablePaginationConfig & {
  infiniteScrollPageGetter?: (page: number) => null | Record<string, unknown>[] | Promise<null | Record<string, unknown>[]>,
  restoreCurrentWhenDataChange?: boolean
}

interface TablePropsWithTypedColumns {
  columns?: { dataIndex?: string }[]
}

export type ITableProps<T = Record<string, unknown>> = TablePropsWithTypedColumns & TableProps<T> & BaseThemedTableProps & {
  columns?: any[],
  onSortChange?: (val: ActiveSorting) => void,
  onFilterChange?: (val: ActiveFilter) => void,
  onFiltersChange?: (filters: unknown[]) => void,
  onColumnResize?: (column: any) => void,
  onGroupByChange?: (dataIndex: string) => void,
  search?: boolean,
  header?: string,
  pagination?: false | PaginationProps,
  initialSorting?: ActiveSorting,
  initialFilters?: ActiveFilter,
  showColumnsSelector?: boolean,
  onCloseColumnsSelector?: () => void,
  onColumnsChange?: (columns: any[]) => void,
  klId?: string | number,
  groupBy?: string,
  useAccordion?: boolean,
  stickyHeader?: number,
  toolbar?: ToolbarProps,
  filterItems?: FilterItemTagProps[] | undefined,
  onSearch?: (searchString: string) => void,
  groupTitleRender?: (data: string) => ReactNode,
  saveFilters?: IFiltersSavingSettings,
  resizingMode?: 'max' | 'last' | 'manual' | 'scroll',
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
  onDragEnd?: (rows: unknown[]) => void,
  externalSorting?: ActiveSorting,
  setExternalSorting?: (arg0: ActiveSorting) => void,
  appliedFilters?: ActiveFilter,
  expandable?: TableProps<T>['expandable'] & { expandColumnName?: string }
}

export type ThemedTableProps = Omit<ITableProps, 'theme'> & { cssConfig: TableCssConfig, theme: ThemeKey }
