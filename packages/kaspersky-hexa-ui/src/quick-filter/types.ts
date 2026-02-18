import { TestingProps } from '@helpers/typesHelpers'
import { CalendarProps, RangePickerProps } from '@src/datepicker'
import { SegmentedButtonProps } from '@src/segmented-button/types'
import { SelectProps } from '@src/select/types'
import { ToggleProps } from '@src/toggle/types'
import { ToggleButtonGroupProps } from '@src/toggle-button'

type QuickFilterLabelConfig = { label: string }

export type QuickFilterItem =
  ({ component: 'select', width?: string } & SelectProps & QuickFilterLabelConfig)
  | ({ component: 'segmented-button' } & SegmentedButtonProps & QuickFilterLabelConfig)
  | ({ component: 'toggle' } & ToggleProps)
  | ({ component: 'toggle-button-group' } & ToggleButtonGroupProps & QuickFilterLabelConfig)
  | ({ component: 'date-picker' } & CalendarProps & QuickFilterLabelConfig)
  | ({ component: 'range-picker' } & RangePickerProps & QuickFilterLabelConfig)

export type QuickFilterProps = {
  /** Custom class name */
  className?: string,
  /** Filters array */
  filters: QuickFilterItem[],
  /** Label position */
  labelPosition?: 'before' | 'top',
  /** Disabled state */
  disabled?: boolean
} & TestingProps
