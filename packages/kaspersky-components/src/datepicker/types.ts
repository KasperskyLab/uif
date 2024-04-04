import { ComponentProps, ReactNode, KeyboardEvent } from 'react'
import { ThemeKey } from '@design-system/types'
import { InputCssConfig } from '@src/input/types'
import { TestingProps, ToViewProps } from '@helpers/typesHelpers'
import { DatePicker } from './DatePicker'

type StateProps = {
  background?: string,
  color?: string,
  borderColor?: string
}

export type PickerStateConfig = {
  normal?: StateProps,
  hover?: StateProps,
  active?: StateProps,
  disabled?: StateProps
}

export type PickerColorConfig = {
  selected: PickerStateConfig,
  unSelected: PickerStateConfig,
  inRange?: PickerStateConfig,
  iconColor?: string,
  separatorColor?: string,
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
  /** Is invalid */
  invalid?: boolean,
  /** Is valid */
  valid?: boolean,
  /** Show today button */
  showToday?: boolean,
  /** @deprecated Size of the input box */
  size?: 'large' | 'middle' | 'small'
} & PickerThemeProps & TestingProps

export type RangeDateInputValue = [DateInputValue, DateInputValue] | null

export type RangePickerProps = Omit<ComponentProps<typeof DatePicker['RangePicker']>, 'ranges' | 'size'> & {
  /** CSS class for the dropdown */
  dropdownClassName?: string,
  /** Date value */
  value?: RangeDateInputValue,
  /** Handler for date range changes */
  onChange?: (dates: [Date | null, Date | null] | null) => void,
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
  /** Is invalid */
  invalid?: boolean,
  /** Is valid */
  valid?: boolean,
  /** Preset date range options */
  presets?: Array<{ title: ReactNode, value: NonNullable<RangePickerProps['value']> }>,
  /** Flag to indicate if reset button should be present */
  hasResetButton?: boolean,
  /** To provide an additional time selection */
  showTime?: boolean
} & PickerThemeProps & TestingProps

export type DatepickerCssConfig = {
  pickerCssConfig: PickerCssConfig,
  inputCssConfig: PickerInputCssConfig
}

export type CalendarViewProps = ToViewProps<CalendarProps, DatepickerCssConfig, PickerThemeProps>

export type RangePickerViewProps = ToViewProps<RangePickerProps, DatepickerCssConfig, PickerThemeProps>

/** @deprecated Use CalendarProps instead */
export type ICalendarProps = CalendarProps
/** @deprecated Use RangePickerProps instead */
export type IRangePickerProps = RangePickerProps
