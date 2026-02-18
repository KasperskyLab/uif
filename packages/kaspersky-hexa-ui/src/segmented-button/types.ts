import { Focus } from '@design-system/tokens/focus'
import { Size, Theme } from '@design-system/types'
import { TestingProps, ToViewProps } from '@helpers/typesHelpers'
import { ReactNode } from 'react'

export type SegmentedButtonToViewProps<T> = ToViewProps<T, SegmentedButtonCssConfig, SegmentedButtonThemeProps>

// Styles
export const segmentedButtonSize = [Size.Medium as string, Size.Large as string] as const
export type SegmentedButtonSize = typeof segmentedButtonSize[number]

export type SegmentedButtonSizeConfig = {
  padding?: string,
  height?: string,
  borderRadius?: string,
  minWidth?: string
}

export type SegmentedButtonMode =
  'grey' | 'red' | 'orange' | 'yellow' | 'grass' | 'emerald' | 'marengo' | 'marina' | 'purple' | 'violet'

type StateProps = {
  background?: string,
  color?: string,
  border?: string
}

type CheckedUncheckedProps = {
  enabled?: StateProps,
  hover?: StateProps,
  active?: StateProps,
  disabled?: StateProps
}

export type SegmentedButtonColorConfig = Focus & {
  checked?: CheckedUncheckedProps,
  unchecked?: CheckedUncheckedProps
}

export type SegmentedButtonCssConfig = SegmentedButtonSizeConfig & SegmentedButtonColorConfig

// Helpers
export type SegmentedButtonThemeProps = {
  /** @deprecated Not used, always defaults to marina */
  mode?: SegmentedButtonMode,
  /** Size */
  size?: SegmentedButtonSize,
  /** Custom theme */
  theme?: Theme
}
/** @deprecated checkbox is deprecated, use ToggleButtonGroup instead. Radio button is used by default */
export type SegmentedButtonType = 'checkbox' | 'radio'

export type SegmentedButtonItemClickFunc = (handledValue: string, selectedValues: string[]) => void

// SegmentedButton Props
export type SegmentedButtonProps = {
  /** @deprecated Checkbox or radio behavior the default is radio if checkbox behavior is needed,
  * use ToggleButtonGroup
  */
  type?: SegmentedButtonType,
  /** Is SegmentedButton stretched to the full container's width */
  isStretch?: boolean,
  /** Is disabled */
  disabled?: boolean,
  /** Array of options */
  items: SegmentedButtonOption[],
  /** Controlled array value of selected options */
  value: string[],
  /** Handler */
  onChange: (value: string[]) => void,
  /** Custom class name of the container */
  className?: string,
  style?: React.CSSProperties
} & SegmentedButtonThemeProps & TestingProps

// SegmentedButtonItem Props
export type SegmentedButtonOption = {
  value: string,
  text?: ReactNode,
  className?: string,
  disabled?: boolean,
  tooltip?: string,
  mode?: SegmentedButtonMode,
  componentsBefore?: ReactNode[],
  componentsAfter?: ReactNode[]
} & TestingProps

export type SegmentedButtonOptionMapped = SegmentedButtonOption & {
  id: string
}

export type SegmentedButtonItemProps = SegmentedButtonOptionMapped & {
  type: SegmentedButtonType,
  name?: string,
  selectedValues: string[],
  onChange: SegmentedButtonItemClickFunc
} & Omit<SegmentedButtonThemeProps, 'mode'>

export type SegmentedButtonItemViewProps = SegmentedButtonToViewProps<SegmentedButtonItemProps>
