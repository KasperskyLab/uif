import { ThemeKey } from '@design-system/types'
import { SetState } from '@helpers/hooks/useStateProps'
import { TestingProps } from '@helpers/typesHelpers'
import { ButtonProps } from '@src/button'
import { ChipProps } from '@src/chip'
import { PaginationProps } from '@src/pagination'
import { ToolbarItems } from '@src/toolbar'
import { TooltipProps } from '@src/tooltip/types'
import type { TableProps } from 'antd'
import { SpinProps } from 'antd/es/spin'
import { ColumnType } from 'antd/lib/table'
import { TableRowSelection as RowSelectionAntd } from 'antd/lib/table/interface'
import { ReactElement, ReactNode, RefAttributes } from 'react'

import {
  ActiveFilter,
  EnumOption,
  ExtractFilterConditions,
  FilterAttributes,
  FilterConfig,
  FilterFunction,
  FilterGroup,
  FilterLogicOperation,
  FilterType,
  LegacyEnumOption,
  SidebarFilter,
  TableCustomFilterFunction,
  UnitedFilter
} from './modules/Filters'
import { GroupTitleItem } from './modules/Groups/types'
import {
  ActiveSorting,
  IFiltersSavingSettings
} from './modules/SortingAndFilters'
import { GetLeftItemsProps, ToolbarProps } from './modules/ToolbarIntegration'

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

export type DefaultSorter<T extends TableRecord> = (rows: T[], propName: keyof T, isAsc: boolean, attribute: string) => T[]

export type TablePaginationProps<T extends TableRecord = TableRecord> = PaginationProps & {
  paginationDisabled?: boolean,
  showOnlyTotalSummary?: boolean,
  /** Page getter function when infinite scrolling is enabled */
  infiniteScrollPageGetter?: (page: number) => null | T[] | Promise<null | T[]>,
  /** Experimental flag to enable infinite scrolling with virtualization */
  virtualInfiniteScroll?: boolean,
  /** Row height in pixels. Has effect when virtualInfiniteScroll flag is enabled */
  rowHeight?: number,
  /** Table body height in pixels. Has effect when virtualInfiniteScroll flag is enabled */
  tableBodyHeight?: number,
  restoreCurrentWhenDataChange?: boolean,
  isServerPagination?: boolean
}

export const DEFAULT_TABLE_PAGE_SIZE = 50
export const DEFAULT_TABLE_PAGE_SIZE_OPTIONS = ['20', '50', '100']

export type TableToolbarProps = ToolbarProps

export type TableRowSelectionData<T extends TableRecord = TableRecord> = {
  selectedRowKeys: string[],
  selectedRows?: T[],
  deselectedRowKeys?: string[],
  deselectedRows?: T[],
  isSelectedAll?: boolean
}

export type TableRowSelectionAdditionalProps<T extends TableRecord = TableRecord> = {
  /** @deprecated Use 'hasSelectAll' and 'builtInRowSelection' instead */
  selections?: RowSelectionAntd<T>['selections'],
  /** Async function returns keys of the rows should be selected. Works only with builtInRowSelection: true */
  getPreselectedRows?: (rows: T[]) => Promise<string[]>,
  /** Should render "Select all" checkbox and dropdown. Works only with builtInRowSelection: true */
  hasSelectAll?: boolean,
  /** Callback executes on every change of selection. Works only with builtInRowSelection: true */
  processSelection?: (rowSelectionData: TableRowSelectionData) => void,
  /** Flag that enables the built-in functionality of row selection  */
  builtInRowSelection?: boolean
}

export type TableRowSelection<T extends TableRecord = TableRecord> = Omit<RowSelectionAntd<T>, 'selections'> & TableRowSelectionAdditionalProps<T>
export type TableRowSelectionInternal<T extends TableRecord = TableRecord> = Omit<RowSelectionAntd<T>, 'selectedRowKeys'> & TableRowSelectionData<T>

export type CustomSorter<T extends TableRecord = TableRecord> = (a: T, b: T, isAsc: boolean) => number

type SortGroupArg = string | number | { text?: string }
export type TableCustomGroupSorter = (a: SortGroupArg, b: SortGroupArg) => number

export type ColumnFilter<T extends TableRecord = TableRecord> = {
  localizationKey?: string,
  name: string,
  elementBefore?: ReactNode,
  filter: FilterFunction<T>
}

// TODO: adjust dropdown and sidebar filter more correctly
export type DropdownOrSidebarFilter<T extends TableRecord = TableRecord> = ColumnFilter<T> | FilterConfig

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

export type BooleanFilterType = {
  type: FilterType.Boolean,
  onStateName?: string,
  offStateName?: string
} & SharedFilterType<FilterType.Boolean>

type TableFilterType =
  {
    type: FilterType.DateTime,
    /** Show only dates without time */
    dateOnly?: boolean
  } & SharedFilterType<FilterType.DateTime> |
  EnumFilterType |
  BooleanFilterType |
  { type: FilterType.Text } & SharedFilterType<FilterType.Text> |
  {
    type: FilterType.Number,
    /** The min value */
    min?: number
  } & SharedFilterType<FilterType.Number> |
  { type: FilterType.DateRange } & SharedFilterType<FilterType.DateRange> |
  { type: FilterType.DaysBefore } & SharedFilterType<FilterType.DaysBefore> |
  { type: FilterType.Radio } & SharedFilterType<FilterType.Radio> |
  { type: FilterType.IP } & SharedFilterType<FilterType.IP>

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
  logicOperation?: FilterLogicOperation,
}

export type TableColumn<T extends TableRecord = TableRecord> = Omit<
  ColumnType<T>,
  'key' | 'sorter' | 'filters' | 'dataIndex' | 'onFilter'
> & {
  /** Field is used to uniquely identify the column. */
  key: React.Key,
  title?: string | ReactElement,
  /* Show Dash in empty cell for column */
  hasEmptyCellDash?: boolean,
  /** Field is used to display the data record property that will be rendered in the cell. */
  dataIndex?: string,
  /** Field is used only for adapter in NWC. For component-driven development use only `key` */
  columnId?: string,
  /** Field is used only for adapter in NWC. For component-driven development use only `key` */
  columnServerField?: string,
  /** If non-empty, a filter is created with prop name = `column.filterName` instead of `column.key`. Only for server filtering */
  filterName?: string,
  /* When the content exceeds the width of the cell, an arrow is drawn, and when clicked, the full content is displayed. It works with custom
   * render also and is not compatible with ellipsis: true. If ellipsis: false it disables expandableText also
   */
  expandableText?: boolean,
  /** Function to render tooltip for truncated text */
  ellipsisTooltip?: (value: any, record: TableRecord, index: number) => string
  isSortable?: boolean,
  allowMultipleFilters?: boolean,
  sorter?: CustomSorter,
  /** @deprecated Use **sorter** for custom column sorting */
  customSorter?: DefaultSorter<T>,
  filteringAvailable?: boolean,

  // Grouping props
  /** Grouping by this column is available */
  groupingAvailable?: boolean,
  /** Grouping by this column is available when it is hidden */
  forceGroupingAvailable?: boolean,
  /** Grouping by this column enables expanding groups */
  expandableGrouping?: boolean,
  /** Function for sorting grouped data, enabled by expandableGrouping */
  sortGroupsFunction?: (a: T | GroupTitleItem<T>, b: T | GroupTitleItem<T>) => number,
  /**
   * Getter function to get grouping **string** value from complex row structures.
   *
   * **When you DON'T need this function:** the grouping field value is a string.
   * Example: `groupBy = 'status'` and `row = { a: 1, status: 'active', c: 2 }`
   *
   * **When you DO need this function:** the grouping field value is NOT a string (e.g., an object).
   * Example: `groupBy = 'status'` and `row = { a: 1, status: { value: 1, text: 'active' }, c: 2 }`
   */
  resolveGroupingValue?: (row: T, groupBy: string) => string,
  /** Custom group title renderer */
  renderGroupTitle?: (text: string, row: T) => ReactNode,
  /** Group title icon renderer */
  renderGroupTitleIcon?: (text: string, row: T) => ReactNode,
  /** Show groups counter */
  showGroupsCounter?: boolean,

  hideColumnAvailable?: boolean,
  /** Determines the order of displayed columns */
  sortIndex?: number,
  show?: boolean,
  closeDropdownOnSelect?: boolean,
  filters?: ColumnFilter<T>[],
  filterType?: TableFilterType,
  /** When true, renders sidebar enum options in column dropdown. Synced with sidebar enum filters  */
  showEnumFiltersInColumn?: boolean,
  /**
   * It's used for manually setting the display of filtering icon in column title.
   * By default, filter icon is displayed when at least one filter is applied to the column,
   * but this option overrides default behavior
  */
  showFilterIcon?: boolean,
  /** Is the column for filtering only. If true, it ignores the 'show' prop and this column is always hidden. */
  onlyForFiltering?: boolean,
  width?: number | string,
  /** column minimum width */
  minWidth?: number,
  isUserDefinedWidth?: boolean,
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

export type TableDataSourceFunctionArgs<T extends TableRecord = TableRecord> = {
  page: number,
  pageSize: number,
  params?: {
    filters: SidebarFilter<T>[],
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

export type TableDataSourceFunction<T extends TableRecord = TableRecord> =
  (config: TableDataSourceFunctionArgs) => Promise<TableDataSourceFunctionReturn<T>>

export type TableRef = {
  /** Resets selection. Works only if rowSelection.builtInRowSelection = true */
  resetSelection?: () => void,
  /** Resets FilterApi to its initial state. Only works when storageMergeFiltersMode = 'merge'.
   * In 'predefined-overrides' mode it doesn't make sense — filters are immediately saved to localStorage
   * and will be restored from there during reinit, so the state won't change.
   */
  reinitFilterApi?: () => void,
  /** Re-fetches dataSourceFunction without params changes. Only works when dataSourceFunction is provided. */
  triggerDataSourceFunction?: () => void,
  /** Re-applies preselected rows from rowSelection.getPreselectedRows.
   * Works only if rowSelection.builtInRowSelection = true and getPreselectedRows is provided.
   */
  setPreselectedRows?: () => void
}

export type ITableProps<T extends TableRecord = TableRecord> = Omit<
  TableProps<T>,
  'columns' | 'dataSource' | 'pagination' | 'rowSelection'
> & TableThemeProps & RefAttributes<TableRef> & {
  dataSource?: T[],
  dataSourceFunction?: TableDataSourceFunction<T>,
  patchDataSource?: (rows: T[]) => T[],
  onDataSourceChange?: (rows: T[]) => void,
  columns?: TableColumn<T>[],
  /**
   * Show context menu for table rows
   *
   * @param rows - Rows for which the context menu is invoked.
   *               If some of the rows are selected and the right-clicked row is one of them, contains all selected rows.
   *               Otherwise, contains the single row that was right-clicked
   * @params context
   * @returns Items to display in the context menu
   */
  contextMenu?: (rows: T[], context: GetLeftItemsProps<T>) => ToolbarItems[] | Promise<ToolbarItems[]>,
  /** This prop should be memoized */
  onColumnResize?: (column: TableColumn<T>) => void,
  /** This prop should be memoized */
  onManualColumnResize?: (column: TableColumn<T>) => void,

  // Grouping props
  /** Default column key to group data by */
  defaultGroupBy?: string,
  /** Column key to group data by */
  groupBy?: string,
  /** Callback executed when groupBy changes */
  onGroupByChange?: (key: string) => void,
  /** Expanded group keys */
  expandedGroupKeys?: readonly React.Key[],
  /** Callback executed when expanded group keys change */
  onExpandedGroupKeysChange?: (keys: readonly React.Key[]) => void,
  /** Callback executed when group keys change. The callback is necessary to get the group keys initially */
  onGroupKeysUpdate?: (keys: React.Key[]) => void,
  /** Function for sorting initial data by groupBy column - compares group titles */
  customGroupSorter?: TableCustomGroupSorter,

  search?: boolean,
  header?: string,
  pagination?: false | TablePaginationProps<T>,
  showColumnsSelector?: boolean,
  onResetColumnsSettings?: () => void,
  onCloseColumnsSelector?: () => void,
  /** Called only when columns has changed via Table setting ('gear' icon) */
  onColumnsChange?: (columns: TableColumn<T>[]) => void,
  /** Called on every column change. Returns the final columns after all modifications */
  onPatchedColumnsChange?: (columns: TableColumn<T>[]) => void,
  useAccordion?: boolean,
  stickyHeader?: number,
  stickyScrollbarOffset?: number,
  stickyFooter?: boolean,
  toolbar?: TableToolbarProps,
  /** Search is done from the product side. For example, when using server-side filtering */
  onSearch?: (searchString: string) => void,
  /** Custom search using internal state of the component for filtered data */
  onClientSearch?: (searchString: string, row: T, index: number) => boolean,
  groupTitleRender?: (data: string) => ReactNode,
  resizingMode?: TableResizingMode,
  /** render :after as last column to compensate width in case table-width < screen-width */
  afterColumn?: boolean
  /** Config for controllable row selection */
  rowSelection?: TableRowSelection<T>,
  /** Background pattern that will be visible on rows with _blendedBackground */
  backgroundPattern?: TableBgPatterns,
  /** Table styled with vertical and horizontal borders */
  borderedStyle?: boolean,
  enableSearchHighlighting?: boolean,
  maxColumnsForAutoResizing?: number,
  defaultColumnWidth?: number,
  isDefaultSortDisabled?: boolean,
  isClientGroupSortingDisabled?: boolean,
  infiniteScrollEndTableText?: ReactNode,
  infiniteScrollErrorText?: ReactNode,
  infiniteScrollRetryText?: ReactNode,
  /** Indicates that the table is ready to render data */
  isInited?: boolean,
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
  onSortChange?: (val: ActiveSorting<T>) => void,
  showSorterTooltip?: boolean | TooltipProps,
  initialSorting?: ActiveSorting<T>,
  externalSorting?: ActiveSorting<T>,
  setExternalSorting?: SetState<ActiveSorting<T>>,
  fullHeight?: boolean,
  /** Date format for filters */
  dateFormat?: string,
  /** Key for localStorage to store different settings - column width, sorting, filters, etc... */
  storageKey?: string,

  // Filters
  /** Filters to set by default. Prop is applied only once, further changes won't change the filters. If you want to
   * dynamically change filters, use externalFilters.
   */
  defaultFilters?: UnitedFilter<T>[],
  /** Replaces existing filters. Sidebar filters should be in the root, but columns filters should be in the group
   * with id: `column.${key}`.
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
  externalFilters?: FilterGroup<T>['items'],
  /**
   * 1 - default
   * 2 - add the following operations to v1 filters:
   *   text filter: Regexp, Empty, Not empty
   *   number filter: ≥, ≤, Empty, Not empty
   *   enum filter: Contains (AND), Contains (OR), Doesn't contain, Regexp
   */
  filterVersion?: TableFilterVersion,
  /** Enable nested OR filtering */
  enableNestedFilters?: boolean,
  /** Function for custom filtering */
  customFilterFunction?: TableCustomFilterFunction<T>,
  /** Callback for any filters change */
  onFiltersChange?: (val: UnitedFilter<T>[]) => void,
  /** Activate sidebar filters */
  useFiltersSidebar?: boolean,
  /** Flag indicates that server filtering is used, client filtering is disabled */
  isServerFiltering?: boolean,
  /** Call back when sidebar close */
  onCloseFilterSidebar?: () => void,
  /** Whether to open filters sidebar, the prop is used in toolbar integration */
  showFilterSidebar?: boolean,
  /**
   * Defines which source of filters is the priority.
   * -merge: merge of localStorage and defaultFilters
   * -predefined-overrides: defaultFilters overrides localStorage filters
   */
  storageMergeFiltersMode?: 'merge' | 'predefined-overrides',
  getFiltersSidebarToolbarButtons?: (params: {
    sorting: ActiveSorting<T>,
    sidebarFilters: SidebarFilter<T>[],
    applyFilters: () => void,
    setSorting: (newSorting: ActiveSorting<T>) => void,
    setSidebarFilters: (newFilters: SidebarFilter<T>[]) => void,
    columns: TableColumn<T>[]
  }) => Promise<ButtonProps[]>,
  // deprecated Filters props
  /**
   * @deprecated Use defaultFilters instead. The old name doesn't clearly show that the value is only for the initial render.
   *
   * Filters to set by default. Prop is applied only once, further changes won't change the filters. If you want to
   * dynamically change filters, use externalFilters.
   */
  predefinedFilters?: UnitedFilter<T>[],
  /** @deprecated Use defaultFilters instead. Prop was used as setter of default sidebar filters */
  defaultFiltersConfig?: FilterConfig[],
  /** @deprecated Use defaultFilters instead. Prop was used as setter of default sidebar filters */
  defaultSidebarFilters?: FilterConfig[],
  /** @deprecated Use externalFilters instead. Prop was used as setter of external column filters. */
  appliedFilters?: ActiveFilter,
  /** @deprecated Use defaultFilters instead. Prop was used as setter of default column filters */
  initialFilters?: ActiveFilter,
  /** @deprecated Use externalFilters instead. Prop was used as setter of controlled sidebar filters */
  sidebarFilters?: FilterConfig[],
  /** @deprecated Use onFiltersChange instead. Callback when sidebar filters are applied */
  onSidebarFiltersChange?: (filters: FilterConfig[]) => void,
  /** @deprecated Use onFiltersChange instead. Call back when dropdown filters changed */
  onDropdownFiltersChange?: (filters: DropdownOrSidebarFilter<T>[]) => void,
  /** @deprecated Use onFiltersChange instead. Call back when filters from dropdown or from sidebar changed */
  onFilterChange?: (val: ActiveFilter) => void,
  /** @deprecated FilterItems set by FilterApi inside table. An array of filters to show */
  filterItems?: TableInternalFilterItems,
  /** @deprecated Use storageKey instead. Object with key name of saved filters: saveFilters.storageKey */
  saveFilters?: IFiltersSavingSettings,

  /** Experimental flag to enable group selection. Not ready to use in production. Group selection works only if builtInRowSelection is set to true */
  __EXPERIMENTAL__GROUP__SELECTION?: boolean
  /** Experimental flag to enable virtualization. Not ready to use in production */
  __EXPERIMENTAL__VIRTUAL?: boolean
} & TestingProps
