import { Theme } from '@design-system/types'
import { TestingProps } from '@helpers/typesHelpers'
import { ReactNode } from 'react'

export const toggleButtonModes = [
  'grey',
  'red', 
  'orange',
  'yellow',
  'grass',
  'emerald',
  'marengo',
  'marina',
  'purple',
  'violet'
] as const

export type ToggleButtonMode = typeof toggleButtonModes[number]

export const toggleButtonSizes = [
  'extraSmall',
  'small', 
  'medium'
] as const

export type ToggleButtonSize = typeof toggleButtonSizes[number]

export type ToggleButtonProps = {
  id?: string,
  /** Disables the control. */
  disabled?: boolean,
  /** Shows a loading state. */
  loading?: boolean,
  /** Change handler. */
  onChange?: (value: string, checked: boolean) => void
  /** Custom class name. */
  className?: string,
  /** Visual size of the control. */
  size?: ToggleButtonSize,
  /** Inline styles for the wrapper. */
  style?: React.CSSProperties,
  /** Icon rendered before the text. */
  iconBefore?: ReactNode,
  /** Element rendered after the text. */
  elementAfter?: ReactNode,
  /** Color mode used when the control is selected. */
  mode?: ToggleButtonMode,
  /** Custom theme injection. */
  theme?: Theme,
  /** Tooltip content shown on hover/focus. */
  tooltip?: string,
  text?: string,
  /** Value that identifies this button */
  value: string,
  /** Is selected */
  selected?: boolean,
} & Pick<TestingProps, 'testId' | 'componentType'>

export type ToggleButtonGroupProps = Pick<
  ToggleButtonProps,
  'loading' | 'disabled' | 'className' | 'style'
> & {
  /** Is ToggleButton.Group stretched to the full container's width */
  isStretch?: boolean,
  /** Array of options */
  items: ToggleButtonProps[],
  /** Controlled array value of selected options */
  value: string[],
  /** Handler for group value change */
  onChange: (value: string[]) => void,
} & TestingProps
