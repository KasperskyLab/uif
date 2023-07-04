import React from 'react'
import { Theme } from '@design-system/types'

export type FormLabelMode = 'primary' | 'secondary'
export type FormLabelColorMode = FormLabelMode & 'disabled'

export interface FormLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  klId?: string,
  theme?: Theme,
  mode?: FormLabelMode,
  required?: boolean,
  disabled?: boolean,
  tooltip?: React.ReactNode
}

export type FormLabelColorConfig = {
  text?: string,
  icon?: string,
  asterisk?: string
}

export type FormLabelStateProps = {
  primary: FormLabelColorConfig,
  secondary: FormLabelColorConfig,
  disabled: FormLabelColorConfig
}

export type FormLabelViewProps = FormLabelProps & {
  cssConfig: FormLabelColorConfig
}
