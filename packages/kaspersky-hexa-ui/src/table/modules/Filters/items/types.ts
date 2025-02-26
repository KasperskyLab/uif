import {
  DateRangeFilter,
  EnumFilter,
  NumberFilter,
  TextFilter
} from '@src/table/modules/Filters/types'

interface BaseItemProps<Filter, Operation> {
  onConditionChange: (filter: Operation) => void,
  onChange: (filter: Filter) => void
}

export interface EnumItemProps extends BaseItemProps<EnumFilter, TextFilter['condition']> {
  filter: EnumFilter,
  getAvailableValues?: () => Promise<any[]>
}

export interface DateItemProps extends BaseItemProps<DateRangeFilter, DateRangeFilter['condition']> {
  filter: DateRangeFilter
}

export interface NumberItemProps extends BaseItemProps<NumberFilter, NumberFilter['condition']> {
  filter: NumberFilter
}

export interface StringItemProps extends BaseItemProps<TextFilter, TextFilter['condition']> {
  filter: TextFilter
}
