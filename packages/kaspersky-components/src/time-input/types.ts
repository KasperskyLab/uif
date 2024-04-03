import { Theme, ThemeKey } from '@design-system/types'
import { InputCssConfig, TextboxClassNamedProps, TextboxProps } from '@src/input/types'
import { TestingProps } from '@helpers/typesHelpers'
import { PickerColorConfig } from '@src/datepicker/types'

export type TimeInputProps = {
  format?: 'HH:mm' | 'HH:mm:ss' | 'HH:mm:ss:ms',
  placeholder?: string,
  theme?: ThemeKey,
  value?: TextboxProps['value'],
  onChange?: TextboxProps['onChange']
} & TestingProps & TextboxClassNamedProps

/** @deprecated Use TimeInputProps instead */
export type ITimeInput = TimeInputProps

export type TimeInputStateProps = {
  theme?: Theme
}

export type TimeInputColorConfig = PickerColorConfig

export type TypeInputCssConfig = {
  cssConfig: InputCssConfig & TimeInputColorConfig
}
