import { LabelType } from '@design-system/tokens'
import { Theme } from '@design-system/types'
import { TestingProps, ToViewProps } from '@helpers/typesHelpers'
import { HelpMessageMode } from '@src/help-message'
import { PopoverProps } from '@src/popover'
import { ReactElement, ReactNode } from 'react'

export type LabelPosition = 'before' | 'after' | 'top'

export type FieldColorConfig = { helpIconColor: string }

export type FieldCssConfig = FieldColorConfig

export type FieldThemeProps = {
  /** Custom theme */
  theme?: Theme
}

export const LayoutPreset = {
  p_6: '6fr',
  p_8: '8fr',
  p_12: '12fr',
  p_3_6: '3fr 6fr',
  p_4_6: '4fr 6fr',
  p_3_8: '3fr 8fr',
  p_4_8: '4fr 8fr'
} as const

export type LayoutPresetKey = (typeof LayoutPreset)[keyof typeof LayoutPreset]

export type FieldProps = {
  /** Custom class name of the field wrapper or fiels items */
  className?: string,
  wrapperClassNames?: {
    labelClassName?: string,
    controlClassName?: string
  },
  /** Label text. If undefined, label isn't shown  */
  label?: string | ReactNode,
  /** Position of the label */
  labelPosition?: LabelPosition,
  /** Label type */
  labelType?: LabelType,
  /** Control item */
  control?: ReactElement,
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
   /** Parent Node which the popover should be rendered to */
  getPopupContainer?: PopoverProps['getPopupContainer'],
  /** Grid values for grid-template-columns. If it is set, it overrides labelPosition and labelType */
  gridLayout?: string | {
    firstCol?: string,
    secondCol?: string
  },
  gridPreset?: LayoutPresetKey,
  /** Popover position relative to the info icon */
  popoverPlacement?: 'top' | 'left' | 'right' | 'bottom',
  /** Custom width for popover */
  popoverWidth?: number,
  /** Is required */
  required?: boolean,
  style?: React.CSSProperties,
  /** Popover content */
  tooltip?: ReactNode
} & FieldThemeProps & TestingProps

export type FieldViewProps = ToViewProps<FieldProps, FieldColorConfig, FieldThemeProps>
