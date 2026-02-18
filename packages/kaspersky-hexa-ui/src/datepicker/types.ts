import { ThemeKey } from '@design-system/types'
import { TestingProps, ToViewProps, ValidationStatus } from '@helpers/typesHelpers'
import { InputCssConfig } from '@src/input/types'
import { ComponentProps, KeyboardEvent, ReactNode } from 'react'

import { DatePicker } from './DatePicker'

type StateProps = {
  background?: string,
  color?: string,
  border?: string
}

export type PickerStateConfig = {
  enabled?: StateProps,
  hover?: StateProps,
  active?: StateProps,
  disabled?: StateProps
}

export type PickerColorConfig = {
  selected: PickerStateConfig,
  unselected: PickerStateConfig,
  between?: PickerStateConfig,
  separator?: string,
  boxShadow?: string
}

export type PickerInputCssConfig = InputCssConfig

export type PickerCssConfig = PickerColorConfig

export type PickerThemeProps = {
  /** Custom theme */
  theme?: ThemeKey
}

type PropsToOmitFromAntDatepicker = 'value'
  | 'presets'
  | 'size'
  | 'previcon'
  | 'nexticon'
  | 'picker'

export type DateInputValue = Date | null

export type CalendarProps = Omit<ComponentProps<typeof DatePicker>, PropsToOmitFromAntDatepicker> & {
  /** Show time selection */
  showTime?: boolean,
  /** Presets for quick selection */
  presets?: Array<{ title: ReactNode, value: NonNullable<CalendarProps['value']> }>,
  /** Value */
  value?: DateInputValue,
  /** Is disabled */
  disabled?: boolean,
  /** Is readonly */
  readonly?: boolean,
  /** Format to display */
  format?: string,
  /** Validation status */
  validationStatus?: ValidationStatus,
  /** Show today button */
  showToday?: boolean
} & PickerThemeProps & TestingProps

export type RangeDateInputValue = [DateInputValue, DateInputValue] | null

export type RangePickerProps = Omit<ComponentProps<typeof DatePicker['RangePicker']>, 'ranges' | 'size' | 'picker'> & {
  /** CSS class for the dropdown */
  dropdownClassName?: string,
  /** Date value */
  value?: RangeDateInputValue,
  /** Handler for date range changes */
  onChange?: (dates: RangeDateInputValue) => void,
  /** Function to determine if a date is disabled */
  disabledDate?: (currentDate: Date) => boolean,
  /** Custom key down handler for input */
  customKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void,
  /** Regular expression pattern for valid date */
  validDatePattern?: RegExp,
  /** Handler called when date values change */
  onDateValuesChange?: (startDate: string, endDate: string) => void,
  /** Handler called when date validation status changes */
  onDateValidationChange?: (isValid: boolean) => void,
  /** Is disabled */
  disabled?: boolean,
  /** Is readonly */
  readonly?: boolean,
  /** Validation status */
  validationStatus?: ValidationStatus,
  /** Preset date range options */
  presets?: Array<{ title: ReactNode, value: NonNullable<RangePickerProps['value']> }>,
  /** Flag to indicate if reset button should be present */
  hasResetButton?: boolean,
  /** To provide an additional time selection */
  showTime?: boolean,
  /** Date format in input */
  format?: string
} & PickerThemeProps & TestingProps

export type DatepickerCssConfig = {
  pickerCssConfig: PickerCssConfig,
  inputCssConfig: PickerInputCssConfig
}

export type CalendarViewProps = ToViewProps<CalendarProps, DatepickerCssConfig, PickerThemeProps>

export type RangePickerViewProps = ToViewProps<RangePickerProps, DatepickerCssConfig, PickerThemeProps>
