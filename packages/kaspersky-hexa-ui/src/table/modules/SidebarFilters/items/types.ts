import { ValidationStatus } from '@helpers/index'

import {
  BooleanFilter,
  DateRangeFilter,
  DateTimeFilter,
  EnumFilter,
  EnumOption,
  LegacyEnumOption,
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

export interface EnumItemProps extends BaseItemProps<EnumFilter> {
  /**
   * `getAvailableValues` is deprecated, use getAvailableOptions instead.
   * If `getAvailableOptions` is provided, `getAvailableValues` will be ignored.
   *
   * @deprecated Use getAvailableOptions instead
   */
  getAvailableValues?: () => Promise<LegacyEnumOption[]>,

  getAvailableOptions?: () => Promise<EnumOption[]>
}

export type BooleanItemProps = BaseItemProps<BooleanFilter>

export type DateItemProps = BaseItemProps<DateRangeFilter>

export type DateTimeItemProps = BaseItemProps<DateTimeFilter> & {
  /** Show only dates without time for datetime filter */
  dateOnly?: boolean,
}

export type NumberItemProps = BaseItemProps<NumberFilter>

export type StringItemProps = BaseItemProps<TextFilter>
