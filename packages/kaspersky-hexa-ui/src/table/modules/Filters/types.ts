import { DateInputValue } from '@src/datepicker/types'

export enum FilterType {
  Text = 'text',
  Number = 'number',
  Radio = 'radio',
  Boolean = 'boolean',
  Enum = 'enum',
  DateRange = 'dateRange',
  DaysBefore = 'daysBefore',
  IP = 'ip',
}

export type ActiveFilter = {
  [fieldName: string]: {
    [filterName: string]: (arg0: any) => boolean
  }
}

type BasicFilter<Condition> = {
  name: string,
  condition: Condition
}

export enum FilterOperation {
  eq = '=',
  neq = '≠',
  gt = '>',
  lt = '<',
  cont = '⊆',
  ncont = '⊄',
  custom = 'filters'
}

// Operations by type
export type EqualsOperations =
  FilterOperation.eq |
  FilterOperation.neq

export type ComparisonOperations =
  FilterOperation.gt |
  FilterOperation.lt

export type ContainsOperations =
  FilterOperation.cont |
  FilterOperation.ncont

// Operations for filters
export type TextOperations =
  EqualsOperations |
  ContainsOperations|
  FilterOperation.custom

export type DateOperations =
  EqualsOperations |
  FilterOperation.custom

export type EnumOperations =
  EqualsOperations |
  FilterOperation.custom

export type NumberOperations =
  EqualsOperations |
  ComparisonOperations|
  FilterOperation.custom

export type EnumFilter = BasicFilter<EnumOperations> & {
  type: FilterType.Enum,
  value: any
}

export type NumberFilter = BasicFilter<NumberOperations> & {
  type: FilterType.Number,
  // Can use '>' and '<' in conditions
  exact?: boolean,
  value: number | null
}

export type TextFilter = BasicFilter<TextOperations> & {
  type: FilterType.Text | FilterType.Radio,
  value: string | null
}

export type DateRangeFilter = BasicFilter<DateOperations> & {
  type: FilterType.DateRange,
  value: { from: DateInputValue, to: DateInputValue }
}

export type FilterConfig = TextFilter | DateRangeFilter | NumberFilter | EnumFilter;
