import { ValidationStatus } from '@helpers/index'
import { TextboxNumberProps } from '@src/input/types'
import { BooleanFilterType, EnumFilterType } from '@src/table/types'

import {
  BooleanFilter,
  DateRangeFilter,
  DateTimeFilter,
  EnumFilter,
  NumberFilter,
  TextFilter
} from '../../../modules/Filters'
import { WithId } from '../../Filters/types'

export type FilterValidation = {
  validationMessage?: string
}

export type InvalidFilter = { id: string } & Required<FilterValidation>

interface BaseItemProps<Filter> {
  index?: number,
  onChange: (filter: WithId<Filter>) => void,
  filter: WithId<Filter>,
  validationStatus?: ValidationStatus
}

export type EnumItemProps = BaseItemProps<EnumFilter> & Pick<EnumFilterType, 'getAvailableOptions' | 'getAvailableValues'>

export type BooleanItemProps = BaseItemProps<BooleanFilter> & Pick<BooleanFilterType, 'onStateName' | 'offStateName'>

export type DateItemProps = BaseItemProps<DateRangeFilter>

export type DateTimeItemProps = BaseItemProps<DateTimeFilter> & {
  /** Show only dates without time for datetime filter */
  dateOnly?: boolean,
}

export type NumberItemProps = BaseItemProps<NumberFilter> & Pick<TextboxNumberProps, 'min'>

export type StringItemProps = BaseItemProps<TextFilter>
