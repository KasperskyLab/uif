import { Theme } from '@design-system/types'
import { TestingProps } from '@helpers/typesHelpers'
import { PopoverProps } from '@src/popover'
import React, { ReactNode } from 'react'

export type FormLabelMode = 'primary' | 'secondary'

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
  /** Is readonly */
  readOnly?: boolean,
  /** Tags after label */
  tagsAfter?: string[],
  /** Popover content */
  tooltip?: ReactNode,
  /** Parent Node which the popover should be rendered to */
  getPopupContainer?: PopoverProps['getPopupContainer'],
  /** Popover position relative to the info icon */
  popoverPlacement?: 'top' | 'left' | 'right' | 'bottom',
  /** Custom width for popover */
  popoverWidth?: number
} & FormLabelThemeProps & TestingProps
