import React, { ReactNode } from 'react'
import { Theme } from '@design-system/types'
import { LabelType } from '@design-system/tokens'
import { TestingProps, ToViewProps } from '@helpers/typesHelpers'
import { HelpMessageMode } from '@src/help-message'

export type LabelPosition = 'before' | 'after' | 'top'

export type FieldColorConfig = { helpIconColor: string }

export type FieldCssConfig = FieldColorConfig

export type FieldThemeProps = {
  /** Custom theme */
  theme?: Theme
}

export type FieldProps = {
  /** Custom class name of the field wrapper */
  className?: string,
  /** Is disabled */
  disabled?: boolean,
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
  /** @deprecated Use labelType = 'stretch' instead */
  stretch?: boolean,
  /** Handler on help icon click */
  onHelpClick?: () => void,
  /** Is required */
  required?: boolean,
  /** Tooltip text. If undefined, tooltip icon isn't shown */
  tooltip?: string,
  /** Grid values for grid-template-columns. If it is set, it overrides labelPosition and labelType */
  gridLayout?: {
    firstCol?: string,
    secondCol?: string
  }
} & FieldThemeProps & TestingProps

export type FieldViewProps = ToViewProps<FieldProps, FieldColorConfig, FieldThemeProps>
