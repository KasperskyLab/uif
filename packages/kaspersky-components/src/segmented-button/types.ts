import { ReactNode } from 'react'
import { Size, Theme } from '@design-system/types'
import { ToViewProps, TestingProps } from '@helpers/typesHelpers'
import { Focus } from '@design-system/tokens/focus'

export type SegmentedButtonToViewProps<T> = ToViewProps<T, SegmentedButtonCssConfig, SegmentedButtonThemeProps>

// Styles
export type SegmentedButtonSize = `${Extract<Size, Size.Medium | Size.Large>}`

export type SegmentedButtonSizeConfig = {
  padding?: string,
  height?: string,
  borderRadius?: string,
  minWidth?: string
}

export type SegmentedButtonMode =
  'grey' | 'red' | 'orange' | 'yellow' | 'grass'
  | 'emerald' | 'marengo' | 'marina' | 'purple' | 'violet'

type StateProps = {
  background?: string,
  color?: string,
  border?: string
}

type CheckedUncheckedProps = {
  normal?: StateProps,
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
  /** Default color mode of checked state */
  mode?: SegmentedButtonMode,
  /** Size */
  size?: SegmentedButtonSize,
  /** Custom theme */
  theme?: Theme
}

export type SegmentedButtonType = 'checkbox' | 'radio'

export type SegmentedButtonItemClickFunc = (handledValue: string, selectedValues: string[]) => void

// SegmentedButton Props
export type SegmentedButtonProps = {
  /** Checkbox or radio behavior */
  type?: SegmentedButtonType,
  /** Is disabled */
  disabled?: boolean,
  /** Array of options */
  items: SegmentedButtonOption[],
  /** Controlled array value of selected options */
  value: string[],
  /** Handler */
  onChange: (value: string[]) => void,
  /** Custom class name of the container */
  className?: string
} & SegmentedButtonThemeProps & TestingProps

// SegmentedButtonItem Props
export type SegmentedButtonOption = {
  value: string,
  text?: ReactNode,
  className?: string,
  disabled?: boolean,
  mode?: SegmentedButtonMode,
  componentsBefore?: ReactNode[],
  componentsAfter?: ReactNode[],
  testId?: string
}

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
