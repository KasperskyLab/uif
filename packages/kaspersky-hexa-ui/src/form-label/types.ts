import { Theme } from '@design-system/types'
import { TestingProps, ToViewProps } from '@helpers/typesHelpers'
import React from 'react'

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
  /** Tags after label */
  tagsAfter?: string[],
  /** Tooltip content */
  tooltip?: React.ReactNode,
  /** Custom width for tooltip (popover) */
  popoverWidth?: number
} & FormLabelThemeProps & TestingProps

export type FormLabelColorConfig = {
  text?: string,
  asterisk?: string
}

export type FormLabelStateProps = {
  primary: FormLabelColorConfig,
  secondary: FormLabelColorConfig,
  disabled: FormLabelColorConfig
}

export type FormLabelViewProps = ToViewProps<FormLabelProps, FormLabelColorConfig, Omit<FormLabelThemeProps, 'mode'>>
