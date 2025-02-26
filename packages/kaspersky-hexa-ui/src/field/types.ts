import { LabelType } from '@design-system/tokens'
import { Theme } from '@design-system/types'
import { TestingProps, ToViewProps } from '@helpers/typesHelpers'
import { FormLabelProps } from '@src/form-label'
import { HelpMessageMode } from '@src/help-message'
import React, { ReactNode } from 'react'

export type LabelPosition = 'before' | 'after' | 'top'

export type FieldColorConfig = { helpIconColor: string }

export type FieldCssConfig = FieldColorConfig

export type FieldThemeProps = {
  /** Custom theme */
  theme?: Theme
}

export type FieldProps = Pick<FormLabelProps, 'tooltip' | 'required' | 'popoverWidth'> & {
  /** Custom class name of the field wrapper or fiels items */
  className?: string,
  wrapperClassNames?: {
    labelClassName?: string,
    controlClassName?: string
  },
  /** Label text. If undefined, label isn't shown  */
  label?: string,
  /** Position of the label */
  labelPosition?: LabelPosition,
  /** Label type */
  labelType?: LabelType,
  /** Control item */
  control?: React.ReactElement,
  /** Custom width of control in px */
  controlWidth?: number,
  /** Additional component after description and message */
  additionalComponent?: ReactNode,
  /** Text under control */
  description?: string,
  /** Message text */
  message?: string,
  /** Message color mode */
  messageMode?: HelpMessageMode,
  /** Handler on help icon click */
  onHelpClick?: () => void,
  /** Grid values for grid-template-columns. If it is set, it overrides labelPosition and labelType */
  gridLayout?: {
    firstCol?: string,
    secondCol?: string
  }
} & FieldThemeProps & TestingProps

export type FieldViewProps = ToViewProps<FieldProps, FieldColorConfig, FieldThemeProps>
