import { ThemeKey } from '@design-system/types'
import { TestingProps, ToViewProps } from '@helpers/typesHelpers'
import { CheckboxColorConfig } from '@src/checkbox/types'
import { ChipProps } from '@src/chip'
import { PaginationProps } from '@src/pagination'
import { RadioColorConfig } from '@src/radio/types'
import { TooltipProps } from '@src/tooltip/types'
import { TableProps } from 'antd'
import { SpinProps } from 'antd/es/spin'
import { ColumnType } from 'antd/lib/table'
import { TableRowSelection as RowSelectionAntd } from 'antd/lib/table/interface'
import { ReactElement, ReactNode } from 'react'

import {
  ActiveFilter,
  EnumOption,
  ExtractFilterConditions,
  FilterAttributes,
  FilterConfig,
  FilterFunction,
  FilterGroup,
  FilterType,
  LegacyEnumOption,
  TableCustomFilterFunction,
  UnitedFilter
} from './modules/Filters'
import {
  ActiveSorting,
  IFiltersSavingSettings
} from './modules/SortingAndFilters'
import { ToolbarProps } from './modules/ToolbarIntegration'

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
    hover: string,
    active: string
  },
  expandable: {
    icon: string
  },
  checkbox: CheckboxColorConfig,
  radio: RadioColorConfig,
  filters: TableFiltersColorConfig,
  pagination: {
    background: string,
    boxShadow: string
  },
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
  /* The properties below (with the _ prefix) are service properties and are needed to manage the state of a specific row in the table. */
  _disabled?: boolean,
  _disabledHint?: string,
  _selectionDisabled?: boolean,
  /* This prop turns on specific background pattern for the row */
  _blendedBackground?: boolean,
  children?: TableRecord[]
}

export type DefaultSorter = <T extends TableRecord>(rows: T[], propName: keyof T, isAsc: boolean, attribute: string) => T[]

export type TablePaginationProps = PaginationProps & {
  paginationDisabled?: boolean,
  showOnlyTotalSummary?: boolean,
  infiniteScrollPageGetter?: (page: number) => null | TableRecord[] | Promise<null>,
  restoreCurrentWhenDataChange?: boolean,
  isServerPagination?: boolean
}

export type TableToolbarProps = ToolbarProps

export type TableRowSelectionData = {
  selectedRowKeys: string[],
  deselectedRowKeys?: string[],
  isSelectedAll?: boolean
}

export type TableRowSelectionAdditionalProps = {
  /** Async function returns keys of the rows should be selected. Works only with builtInRowSelection: true */
  getPreselectedRows?: (rows: TableRecord[]) => Promise<string[]>,
  /** Should render "Select all" checkbox and dropdown. Works only with builtInRowSelection: true */
  hasSelectAll?: boolean,
  /** Callback executes on every change of selection. Works only with builtInRowSelection: true */
  processSelection?: (rowSelectionData: TableRowSelectionData) => void,
  /** Flag that enables the built-in functionality of row selection  */
  builtInRowSelection?: boolean
}

export type TableRowSelection = RowSelectionAntd<TableRecord> & TableRowSelectionAdditionalProps

export type CustomSorter = (a: TableRecord, b: TableRecord, isAsc: boolean) => number

export type TableCustomGroupSorter = (a: any, b: any) => number

export type ColumnFilter = {
  localizationKey?: string,
  name: string,
  elementBefore?: ReactNode,
  filter: FilterFunction
}

// TODO: adjust dropdown and sidebar filter more correctly
export type DropdownOrSidebarFilter = ColumnFilter | FilterConfig

export type EnumFilterType = {
  type: FilterType.Enum,
  /**
   * @deprecated Use **getAvailableOptions** instead
   */
  getAvailableValues?: () => Promise<LegacyEnumOption[]>,
  /**
   * @returns Array of options
   *
   * @example
   * ```ts
   * getAvailableOptions: () => Promise.resolve([
   *  { label: "option1", value: "Option 1" },
   *  { label: <span>Option 2</span>, value: "Option 2" },
   * ])
   * ```
   */
  getAvailableOptions?: () => Promise<EnumOption[]>
} & SharedFilterType<FilterType.Enum>

type TableFilterType =
  {
    type: FilterType.DateTime,
    /** Show only dates without time */
    dateOnly?: boolean,
  } & SharedFilterType<FilterType.DateTime>
  | EnumFilterType
  | { type: FilterType.Text } & SharedFilterType<FilterType.Text>
  | { type: FilterType.Number } & SharedFilterType<FilterType.Number>
  | { type: FilterType.Boolean } & SharedFilterType<FilterType.Boolean>
  | { type: FilterType.DateRange } & SharedFilterType<FilterType.DateRange>
  | { type: FilterType.DaysBefore } & SharedFilterType<FilterType.DaysBefore>
  | { type: FilterType.Radio } & SharedFilterType<FilterType.Radio>
  | { type: FilterType.IP } & SharedFilterType<FilterType.IP>

type SharedFilterType<TFilterType extends FilterType = FilterType> = {
  /**
   * Array of filter operations for chosen filter type. Overrides default filter operations.
   *
   * @example
   * ```ts
   * operations: [
   *  { operation: FilterOperation.eq, label: "Equal" },
   *  { operation: FilterOperation.neq, label: "Not equal" },
   * ]
   * ```
   */
  operations?: ExtractFilterConditions<TFilterType>,
  /** Logic operation for multiple filters */
  logicOperation?: 'AND' | 'OR',
}

export type TableColumn = Omit<
  ColumnType<TableRecord>,
  'key' | 'sorter' | 'filters' | 'dataIndex'
> & {
  key: React.Key,
  title?: string | ReactElement,
  /* Show Dash in empty cell for column */
  hasEmptyCellDash?: boolean,
  dataIndex?: string,
  columnId?: string,
  /* When the content exceeds the width of the cell, an arrow is drawn, and when clicked, the full content is displayed. It works with custom
   * render also and is not compatible with ellipsis: true. If ellipsis: false it disables expandableText also
   */
  expandableText?: boolean,
  isSortable?: boolean,
  allowMultipleFilters?: boolean,
  sorter?: CustomSorter,
  /** @deprecated Use **sorter** for custom column sorting */
  customSorter?: DefaultSorter,
  filteringAvailable?: boolean,
  groupingAvailable?: boolean,
  hideColumnAvailable?: boolean,
  show?: boolean,
  closeDropdownOnSelect?: boolean,
  filters?: ColumnFilter[],
  filterType?: TableFilterType,
  /** 
   * It's used for manually setting the display of filtering icon in column title. 
   * By default, filter icon is displayed when at least one filter is applied to the column,
   * but this option overrides default behaivour 
  */
  showFilterIcon?: boolean,
  width?: number | string,
  isUserDefinedWidth?: boolean,
  renderGroupTitle?: (data: string) => ReactNode,
  resizing?: {
    disabled: boolean
  },
  sortingAttributes?: SortingAttributes,
  filterAttributes?: FilterAttributes
}

export type SortingAttributes = {
  label: string;
  attribute: string;
  /* in case of two or more fields in one table cell (ui-builder control-group) */
  field: string;
}[]

export type TableInternalFilterItemsTagProps = Pick<ChipProps, 'counter' | 'onClose' | 'testId'> & {
  text?: ChipProps['label'],
  key?: string
}

export type TableInternalFilterItems = {
  items?: TableInternalFilterItemsTagProps[],
  clearLinkText?: string,
  onClear?: () => void
}

/** @deprecated Use undefined instead */
type DeprecatedManual = 'manual'

export type TableResizingMode = 'max' | 'last' | 'scroll' | DeprecatedManual

export type TableBgPatterns = 'diagonal'

export type TableFilterVersion = 1 | 2

type TableDataSourceFunctionArgs = {
  page: number,
  pageSize: number,
  params?: {
    filters: FilterConfig[],
    searchString?: string,
    groupBy?: string
  },
  sorting?: Pick<ActiveSorting, 'attribute' | 'field' | 'isDefaultSortDisabled'> & {
    isAsc: boolean
  }
}

type TableDataSourceFunctionReturn<T> = {
  rows: T[],
  isDefaultSortDisabled?: boolean,
  isClientGroupsSortingDisabled?: boolean,
  totalCount: number,
  /** @deprecated If you have only one page, use hideOnSinglePage prop for Table */
  paginationDisabled?: boolean
}

export type TableDataSourceFunction<T = TableRecord> = (config: TableDataSourceFunctionArgs) => Promise<TableDataSourceFunctionReturn<T>>

export type ITableProps<T = TableRecord> = Omit<
  TableProps<T>,
  'columns' | 'dataSource' | 'pagination' | 'rowSelection'
> & TableThemeProps & {
  dataSource?: T[],
  dataSourceFunction?: TableDataSourceFunction<T>,
  patchDataSource?: (rows: T[]) => T[],
  onDataSourceChange?: (rows: T[]) => void,
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
  /** Compares group titles */
  customGroupSorter?: TableCustomGroupSorter,
  useAccordion?: boolean,
  stickyHeader?: number,
  stickyScrollbarOffset?: number,
  stickyFooter?: boolean,
  toolbar?: TableToolbarProps,
  /** Search is done from the product side. For example, when using server-side filtering */
  onSearch?: (searchString: string) => void,
  /** Custom search using internal state of the component for filtered data */
  onClientSearch?: (searchString: string, row: TableRecord, index: number) => boolean,
  groupTitleRender?: (data: string) => ReactNode,
  resizingMode?: TableResizingMode,
  /** Config for controllable row selection */
  rowSelection?: TableRowSelection,
  /** Background pattern that will be visible on rows with _blendedBackground */
  backgroundPattern?: TableBgPatterns,
  enableSearchHighlighting?: boolean,
  maxColumnsForAutoResizing?: number,
  defaultColumnWidth?: number,
  isDefaultSortDisabled?: boolean,
  isClientGroupSortingDisabled?: boolean,
  infiniteScrollEndTableText?: ReactNode,
  infiniteScrollErrorText?: ReactNode,
  infiniteScrollRetryText?: ReactNode,
  /** Config object for spinner while loading */
  loaderProps?: SpinProps,
  useV3TestId?: boolean,
  useDragDrop?: boolean,
  onDragStart?: (rows: T[]) => void,
  onDragEnd?: (rows: T[]) => void,
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
  fullHeight?: boolean,
  /** Date format for filters */
  dateFormat?: string,
  /** Key for localStorage to store different settings - column width, sorting, filters, etc... */
  storageKey?: string,

  // Filters
  /** Filters to set by default. Prop is applied only once, further changes won't change the filters. If you want to
   * dynamically change filters, use externalFilters.
   */
  predefinedFilters?: UnitedFilter[],
  /** Replaces existing filters. Sidebar filters should be in the root, but columns filters should be in the group
   * with id: `column.${dataIndex}`.
   * @example
   * ```ts
   * [
   *   { ...sidebarFilter1 },
   *   { ...sidebarFilter2 },
   *   {
   *     id: 'column.someColumnName',
   *     items: [someColumnFilter]
   *   }
   * ]
   * ```
   */
  externalFilters?: FilterGroup['items'],
  /**
   * 1 - default
   * 2 - add the following operations to v1 filters:
   *   text filter: Regexp, Empty, Not empty
   *   number filter: ≥, ≤, Empty, Not empty
   *   enum filter: Contains (AND), Contains (OR), Doesn't contain, Regexp
   */
  filterVersion?: TableFilterVersion,
  /** Function for custom filtering */
  customFilterFunction?: TableCustomFilterFunction,
  /** Callback for any filters change */
  onFiltersChange?: (val: UnitedFilter[]) => void,
  /** Activate sidebar filters */
  useFiltersSidebar?: boolean,
  /** @deprecated Use externalFilters instead. Prop was used as setter of controlled sidebar filters */
  sidebarFilters?: FilterConfig[],
  /** Flag indicates that server filtering is used, client filtering is disabled */
  isServerFiltering?: boolean,
  /** Call back when sidebar close */
  onCloseFilterSidebar?: () => void,
  /** Whether to open filters sidebar, the prop is used in toolbar integration */
  showFilterSidebar?: boolean,
  /**
   * Defines which source of filters is the priority.
   * -merge: merge of localStorage and predefinedFilters
   * -predefined-overrides: predefinedFilters overrides localStorage filters
   */
  storageMergeFiltersMode?: 'merge' | 'predefined-overrides',

  // deprecated Filters props
  /** @deprecated Use predefinedFilters instead. Prop was used as setter of default sidebar filters */
  defaultFiltersConfig?: FilterConfig[],
  /** @deprecated Use predefinedFilters instead. Prop was used as setter of default sidebar filters */
  defaultSidebarFilters?: FilterConfig[],
  /** @deprecated Use externalFilters instead. Prop was used as setter of external column filters. */
  appliedFilters?: ActiveFilter,
  /** @deprecated Use predefinedFilters instead. Prop was used as setter of default column filters */
  initialFilters?: ActiveFilter,
  /** @deprecated Use onFiltersChange instead. Callback when sidebar filters are applied */
  onSidebarFiltersChange?: (filters: FilterConfig[]) => void,
  /** @deprecated Use onFiltersChange instead. Call back when dropdown filters changed */
  onDropdownFiltersChange?: (filters: DropdownOrSidebarFilter[]) => void,
  /** @deprecated Use onFiltersChange instead. Call back when filters from dropdown or from sidebar changed */
  onFilterChange?: (val: ActiveFilter) => void,
  /** @deprecated FilterItems set by FilterApi inside table. An array of filters to show */
  filterItems?: TableInternalFilterItems,
  /** @deprecated Use storageKey instead. Object with key name of saved filters: saveFilters.storageKey */
  saveFilters?: IFiltersSavingSettings,

  /** Experimental flag to enable virtualization. Not ready to use in production */
  __EXPERIMENTAL__VIRTUAL?: boolean
} & TestingProps

export type TableViewProps = ToViewProps<ITableProps, TableCssConfig, TableThemeProps> & Required<TableThemeProps>
