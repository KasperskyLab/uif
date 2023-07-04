import { ComponentProps, ReactNode } from 'react'
import { DatePicker } from './DatePicker'
import { Theme } from '../../design-system/types'

type StateProps = {
  background?: string,
  color?: string,
  iconColor?: string,
  separatorColor?: string,
  outline?: string
}

export type PickerColorConfig = {
  normal?: StateProps,
  hover?: StateProps,
  active?: StateProps,
  disabled?: StateProps,
  inRange?: StateProps
}

export type PickerInputColorConfig = {
  normal?: StateProps,
  hover?: StateProps,
  focus?: StateProps,
  active?: StateProps,
  disabled?: StateProps
}

export type PickerInputCssConfig = PickerInputColorConfig

export type PickerCssConfig = PickerColorConfig

export type ICalendarProps = Omit<ComponentProps<typeof DatePicker>, 'value' | 'presets'> & {
  showTime?: boolean,
  presets?: Array<{ title: ReactNode, value: NonNullable<ICalendarProps['value']> }>,
  value?: Date | null,
  defaultValue?: Date | null,
  theme?: Theme,
  disabled?: boolean,
  showToday?: boolean,
  cssConfig?: any
}

export type IRangePickerProps = Omit<ComponentProps<typeof DatePicker['RangePicker']>, 'ranges'> & {
  dropdownClassName?: string,
  value?: [Date | null, Date | null] | null,
  onChange?: (dates: [Date | null, Date | null] | null) => void,
  disabledDate?: (currentDate: Date) => boolean,
  okText?: ReactNode,
  cancelText?: ReactNode,
  resetText?: ReactNode,
  theme?: Theme,
  presets?: Array<{ title: ReactNode, value: NonNullable<IRangePickerProps['value']> }>,
  hasResetButton?: boolean,
  cssConfig?: any
}
