import React from 'react'
import { Theme } from '@design-system/types'
import { TestingProps, ToViewProps } from '@helpers/typesHelpers'

export type FormLabelMode = 'primary' | 'secondary' | 'disabled'

export type FormLabelThemeProps = {
  /** Custom theme */
  theme?: Theme,
  /** Color mode */
  mode?: FormLabelMode
}

export type FormLabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & {
  /** Is required */
  required?: boolean,
  /** Is disabled */
  disabled?: boolean,
  /** Tooltip content */
  tooltip?: React.ReactNode
} & FormLabelThemeProps & TestingProps

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

export type FormLabelViewProps = ToViewProps<FormLabelProps, FormLabelColorConfig, FormLabelThemeProps>
