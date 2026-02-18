import { Theme, ThemeKey } from '@design-system/types'
import { TestingProps } from '@helpers/typesHelpers'
import { TextboxClassNamedProps, TextboxProps } from '@src/input/types'

export const timeFormat = ['HH:mm', 'HH:mm:ss', 'HH:mm:ss.ms', 'h:mm aaa'] as const
export type TimeFormat = typeof timeFormat[number]

export type TimeInputProps = {
  format?: TimeFormat,
  placeholder?: string,
  theme?: ThemeKey,
  value?: TextboxProps['value'],
  onBlur?: TextboxProps['onBlur'],
  onChange?: TextboxProps['onChange']
} & TestingProps & TextboxClassNamedProps

export type TimeInputStateProps = {
  theme?: Theme
}

export type RangeTimeInputProps = {
  format?: TimeFormat,
  placeholder?: string,
  theme?: ThemeKey,
  valueStart?: string,
  valueEnd?: string,
  onChangeStart?: TextboxProps['onChange'],
  onChangeEnd?: TextboxProps['onChange']
} & TestingProps
