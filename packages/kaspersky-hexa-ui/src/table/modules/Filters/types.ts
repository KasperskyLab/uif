import { DateInputValue } from '@src/datepicker/types'
import { ReactNode } from 'react'

import { TableColumn, TableRecord } from '../../types'

import { ParseDateFunction } from './helpers'

/** ======== Sidebar-like filters ======== */
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
  IP = 'ip',
}

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

// Operations by type
export type EqualsOperations = FilterOperation.eq | FilterOperation.neq

export type EmptyOperations = FilterOperation.empty | FilterOperation.nempty

export type ComparisonOperations = FilterOperation.gt | FilterOperation.ge | FilterOperation.lt | FilterOperation.le

export type ContainsOperations = FilterOperation.cont | FilterOperation.ncont

// Operations for filters
export type TextOperations = EqualsOperations | ContainsOperations | FilterOperation.regexp | EmptyOperations

export type NumberOperations = EqualsOperations | ComparisonOperations | EmptyOperations

export type BooleanOperations = EqualsOperations

export type EnumOperations = EqualsOperations
  | FilterOperation.cont_and
  | FilterOperation.cont_or
  | FilterOperation.ncont_or
  | FilterOperation.regexp

export type DateRangeOperations = EqualsOperations

export type DateTimeOperations = EqualsOperations
  | ComparisonOperations
  | EmptyOperations
  | FilterOperation.range
  | FilterOperation.nrange

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
  // Can use '>' and '<' in conditions
  exact?: boolean,
  value: number | null
}

export type BooleanFilter = BasicFilter<BooleanOperations> & {
  type: FilterType.Boolean,
  value: boolean | null
}

export type EnumFilter = BasicFilter<EnumOperations, {
  name: string,
  getAvailableOptions: () => Promise<EnumOption[]>
}> & {
  type: FilterType.Enum,
  value: any
}

/** @deprecated Date object is not serializable. Use number of ms instead */
type OldDateInputValue = DateInputValue

export type DateRangeFilterValue = OldDateInputValue | number

export type DateRangeFilter = BasicFilter<DateRangeOperations> & {
  type: FilterType.DateRange,
  value: { from: DateRangeFilterValue, to: DateRangeFilterValue }
}

export type DateTimeRange = { from: number | null, to: number | null }
export type DateTimeFilterValue = number | DateTimeRange | null

export type DateTimeFilter = BasicFilter<DateTimeOperations> & {
  type: FilterType.DateTime,
  value: DateTimeFilterValue
}

export type FilterConfig =
  | TextFilter
  | NumberFilter
  | BooleanFilter
  | EnumFilter
  | DateRangeFilter
  | DateTimeFilter

export type FilterOperationConfig<TOperation> = {
  /** Operation */
  readonly operation: TOperation,
  /** Label for operation. If not provided, operation will be used as label. */
  readonly label?: ReactNode
}

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


/** ======== Column-like filters ======== */
export type ActiveFilter = {
  /** Column name that has filters */
  [fieldName: string]: {
    /** Filter name set in columns[N].filters or initialFilters prop (for ex. 'Greater than 2') */
    [filterName: string]: (arg0: any) => boolean
  }
}

export type FilterFunction = (record: TableRecord) => boolean

export type FilterFromColumn = {
  name: string,
  filterName: string,
  predicate?: FilterFunction,
  isUserDefined?: boolean
}

/** ======== Common ======== */
export type FilterGroup = {
  id: string,
  items: (FilterConfig | FilterFromColumn | FilterGroup)[],
  logicOperation?: 'AND' | 'OR'
}

export type UnitedFilter = FilterGroup['items'][number]

export type WithId<T> = T & { id: string }

export type FilterConfigInternal = WithId<FilterConfig>

export type FilterGroupInternal = Omit<FilterGroup, 'items'> & {
  items: (FilterConfigInternal | FilterFromColumn | FilterGroupInternal)[]
}

export type UnitedFilterInternal = FilterGroupInternal['items'][number]

export type EnumOption = {
  value: string | number | boolean,
  label?: ReactNode
}

export type FilterAttributes = {
  label: string,
  name: string,
  filter: {
    type: FilterType,
    getAvailableOptions?: (() => Promise<EnumOption[]>)
  }
}[]

export type EnumOptionsMap = Record<string, EnumOption[]>

export type FilterIsMatchProps = {
  filterName: string, 
  filterValue: any
  fieldValue: any
  condition: FilterOperation
  type: FilterType
}

export type TableCustomFilterFunction = <T extends TableRecord>(
  rows: T[],
  filters: FilterConfig[],
  renderList: (rows: T[]) => void,
  params: {
    isMatch: (props: FilterIsMatchProps) => boolean,
    localizedFields?: TableColumn[],
    parseDate: ParseDateFunction,
    rowMatchesFilter: (row: T, filter: FilterConfig) => boolean
  }
) => void

/** @deprecated Use DateRangeOperations instead. */
export type DateOperations = DateRangeOperations

/** @deprecated Use EnumOption instead */
export type LegacyEnumOption = string | number | boolean
