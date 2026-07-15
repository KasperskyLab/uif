import { DateInputValue } from '@src/datepicker/types'
import { ReactNode } from 'react'

import { TableColumn, TableRecord } from '../../types'

import { ParseDateFunction } from './helpers'

/** ======== I. Sidebar-like filters ======== */

/** Enum of filter kinds that can be rendered in the sidebar UI */
export enum FilterType {
  Text = 'text',
  Number = 'number',
  Boolean = 'boolean',
  Enum = 'enum',
  DateTime = 'datetime',
  /** @deprecated Needed for backward compatibility. Use DateTime filter instead */
  DateRange = 'dateRange',
  /** @deprecated Needed for backward compatibility. Use DateTime filter instead */
  DaysBefore = 'daysBefore',
  /** @deprecated Needed for backward compatibility */
  Radio = 'radio',
  /** @deprecated Needed for backward compatibility */
  IP = 'ip'
}

/** Enum of supported filter operations (e.g. =, >, contains) */
export enum FilterOperation {
  eq = '=',
  neq = '≠',
  gt = '>',
  ge = '≥',
  lt = '<',
  le = '≤',
  cont = '⊆',
  ncont = '⊄',
  cont_and = 'cont_and',
  cont_or = 'cont_or',
  ncont_or = 'ncont_or',
  regexp = '*=',
  empty = 'empty',
  nempty = 'nempty',
  range = 'range',
  nrange = 'nrange',
  /** Custom filter operation. Works only for server-side filtering and only in single instance. */
  custom = 'filters'
}

/** -------- 1. Operations grouped by filter type -------- */

export type EqualsOperations = FilterOperation.eq | FilterOperation.neq

export type EmptyOperations = FilterOperation.empty | FilterOperation.nempty

export type ComparisonOperations = FilterOperation.gt | FilterOperation.ge | FilterOperation.lt | FilterOperation.le

export type ContainsOperations = FilterOperation.cont | FilterOperation.ncont

export type TextOperations = EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations

export type NumberOperations = EqualsOperations | ComparisonOperations | EmptyOperations

export type BooleanOperations = EqualsOperations

export type EnumOperations = EqualsOperations |
  FilterOperation.cont_and |
  FilterOperation.cont_or |
  FilterOperation.ncont_or |
  FilterOperation.regexp

export type DateTimeOperations = EqualsOperations |
  ComparisonOperations |
  EmptyOperations |
  FilterOperation.range |
  FilterOperation.nrange

/** -------- 2. Filter definition -------- */

/**
 * Generic shape of a filter definition:
 * `Condition` – the allowed operations for the filter,
 * `Attribute` – optional additional attribute metadata.
 */
type BasicFilter<Condition, Attribute extends { name: string } = { name: string }> = {
  name: string,
  condition: Condition | FilterOperation.custom,
  attribute?: Attribute,
  isUserDefined?: boolean
}

export type TextFilter = BasicFilter<TextOperations> & {
  type: FilterType.Text | FilterType.Radio,
  value: string | null
}

export type NumberFilter = BasicFilter<NumberOperations> & {
  type: FilterType.Number,
  /** Can use '>' and '<' in conditions */
  exact?: boolean,
  value: number | null
}

export type BooleanFilter = BasicFilter<BooleanOperations> & {
  type: FilterType.Boolean,
  value: boolean | null
}

export type EnumOption = {
  value: string | number | boolean,
  label?: ReactNode
}

export type EnumOptionsMap = Record<string, EnumOption[]>

export type EnumFilter = BasicFilter<EnumOperations, {
  name: string,
  getAvailableOptions: () => Promise<EnumOption[]>
}> & {
  type: FilterType.Enum,
  value: any
}

export type DateTimeRange = { from: number | null, to: number | null }

export type DateTimeFilterValue = number | DateTimeRange | null

export type DateTimeFilter = BasicFilter<DateTimeOperations> & {
  type: FilterType.DateTime,
  value: DateTimeFilterValue
}

/** Union of all possible sidebar filter configurations */
export type FilterConfig =
  TextFilter |
  NumberFilter |
  BooleanFilter |
  EnumFilter |
  DateRangeFilter |
  DateTimeFilter

/** Configuration object for a single filter operation */
export type FilterOperationConfig<TOperation> = {
  /** Operation */
  readonly operation: TOperation,
  /** Label for operation. If not provided, operation will be used as label */
  readonly label?: ReactNode
}

/** Helper type that extracts the list of allowed operations for a given `FilterType` */
export type ExtractFilterConditions<TFilterType extends FilterType> =
  TFilterType extends FilterType.Enum
    ? FilterOperationConfig<EnumFilter['condition']>[]
    : TFilterType extends FilterType.Text
      ? FilterOperationConfig<TextFilter['condition']>[]
      : TFilterType extends FilterType.DateRange
        ? FilterOperationConfig<DateRangeFilter['condition']>[]
        : TFilterType extends FilterType.Number
          ? FilterOperationConfig<NumberFilter['condition']>[]
          : never

/** ======== II. Column-like filters ======== */

/** Mapping of column names to their active filter predicates */
export type ActiveFilter = {
  /** Column name that has filters */
  [fieldName: string]: {
    /** Filter name set in columns[N].filters or initialFilters prop (e.g. 'Greater than 2') */
    [filterName: string]: (arg0: any) => boolean
  }
}

/** Function that evaluates a single table record against a filter */
export type FilterFunction<T extends TableRecord = TableRecord> = (record: T) => boolean

/** Definition of a filter that originates from a table column */
export type FilterFromColumn<T extends TableRecord = TableRecord> = {
  name: string,
  filterName: string,
  predicate?: FilterFunction<T>,
  isUserDefined?: boolean
}

/** ======== III. Common (both sidebar and column filters) ======== */

/** -------- 1. Public types -------- */

export type FilterLogicOperation = 'AND' | 'OR'

/** Union type for a filter */
export type UnitedFilter<T extends TableRecord = TableRecord> = FilterConfig | FilterFromColumn<T> | FilterGroup<T>

/** Recursive structure that groups filters with a logical operation */
export type FilterGroup<T extends TableRecord = TableRecord> = {
  id: string,
  items: UnitedFilter<T>[],
  logicOperation?: FilterLogicOperation
}

/** Union type for a sidebar filter */
export type SidebarFilter<T extends TableRecord = TableRecord> = FilterConfig | SidebarFilterGroup<T>

/** Recursive structure that groups only sidebar filters with a logical operation */
export type SidebarFilterGroup<T extends TableRecord = TableRecord> = Omit<FilterGroup, 'items'> & {
  items: SidebarFilter<T>[]
}

/** Array of attribute definitions that describe how a filter should be rendered (label, name, type, etc.) */
export type FilterAttributes = {
  label: string,
  name: string,
  filter: {
    type: FilterType,
    getAvailableOptions?: () => Promise<EnumOption[]>
  }
}[]

/** Props passed to the internal `isMatch` helper and public `customFilterFunction.params.isMatch` function */
export type FilterIsMatchProps = {
  filterName: string,
  filterValue: any,
  fieldValue: any,
  condition: FilterOperation,
  type: FilterType
}

/** Signature of a custom filter function. Allows to implement complex filtering logic */
export type TableCustomFilterFunction<T extends TableRecord = TableRecord> = (
  rows: T[],
  /**
   * Sidebar filters to apply. Plain `FilterConfig`s, but with `enableNestedFilters`
   * it can also contain nested OR/AND groups, so use `rowMatchesGroup` for `FilterGroup` items.
   */
  filters: SidebarFilter<T>[],
  renderList: (rows: T[]) => void,
  params: {
    isMatch: (props: FilterIsMatchProps) => boolean,
    localizedFields?: TableColumn<T>[],
    parseDate: ParseDateFunction,
    rowMatchesFilter: (row: T, filter: FilterConfig, translateFn?: (key: string) => string) => boolean,
    rowMatchesGroup: (row: T, group: FilterGroup<T>, translateFn?: (key: string) => string) => boolean
  }
) => void

/** -------- 2. Internal types -------- */

/** Generic wrapper that adds a unique identifier to a type */
export type WithId<T> = T & { id: string }

/** Internal version of `EnumFilter` that always carries an `id` */
export type EnumFilterInternal = WithId<EnumFilter>

/** Internal version of `FilterConfig` that always carries an `id` */
export type FilterConfigInternal = WithId<FilterConfig>

/** Union type for an internal filter */
export type UnitedFilterInternal<T extends TableRecord> = FilterConfigInternal | FilterFromColumn<T> | FilterGroupInternal<T>

/** Internal version of `FilterGroup` where every nested filter has an `id` */
export type FilterGroupInternal<T extends TableRecord> = Omit<FilterGroup, 'items'> & {
  items: UnitedFilterInternal<T>[]
}

/** Union type for an internal sidebar filter */
export type SidebarFilterInternal<T extends TableRecord> = FilterConfigInternal | SidebarFilterGroupInternal<T>

/** Internal version of `SidebarFilterGroup` where every nested filter has an `id` */
export type SidebarFilterGroupInternal<T extends TableRecord> = Omit<SidebarFilterGroup, 'items'> & {
  items: SidebarFilterInternal<T>[]
}

/** ======== IV. Deprecated types ======== */

/** @deprecated Operations for deprecated date-range filter */
export type DateRangeOperations = EqualsOperations

/** @deprecated Union type for deprecated date-range filter value */
export type DateRangeFilterValue = OldDateInputValue | number

/** @deprecated Date-range filter configuration. Use date-time filter instead */
export type DateRangeFilter = BasicFilter<DateRangeOperations> & {
  type: FilterType.DateRange,
  value: { from: DateRangeFilterValue, to: DateRangeFilterValue }
}

/** @deprecated Date object is not serializable. Use number of ms instead */
type OldDateInputValue = DateInputValue

/** @deprecated Use DateRangeOperations instead */
export type DateOperations = DateRangeOperations

/** @deprecated Use EnumOption instead */
export type LegacyEnumOption = string | number | boolean
