import { PropsWithChildren, ReactNode } from 'react'
import { SwitchProps } from 'antd/es/switch'
import { TextSizes } from '@design-system/tokens'
import { Theme } from '@design-system/types'
import { Focus } from '@design-system/tokens/focus'
import { TestingProps, ToViewProps } from '@helpers/typesHelpers'

export type StateProps = {
  color?: string,
  bgOn?: string,
  bgOff?: string,
  dotColorOn?: string,
  dotColorOff?: string
}

export type ToggleColorConfig = Focus & {
  normal?: StateProps,
  hover?: StateProps,
  active?: StateProps,
  disabled?: StateProps,
  readonly?: StateProps
}

export type ToggleCssConfig = ToggleColorConfig & TextSizes

export type ToggleThemeProps = {
  /** Custom theme */
  theme?: Theme
}

export type ToggleProps = SwitchProps & PropsWithChildren<{
  /** React children */
  children?: ReactNode,
  /** Custom class name */
  className?: string,
  /** Icon */
  icon?: ReactNode,
  /** Disabled state */
  disabled?: boolean,
  /** Readonly state */
  readonly?: boolean,
  /** Label position */
  labelPosition?: 'after' | 'before',
  /** Text */
  text?: string,
  /** @deprecated Toggle has one size */
  size?: 'small' | 'default',
  /** If form label is required */
  required?: boolean,
  /** Form label tooltip */
  tooltip?: ReactNode
}> & ToggleThemeProps & TestingProps

export type ToggleViewProps = ToViewProps<ToggleProps, ToggleCssConfig>

/** @deprecated Use ToggleProps instead */
export type IToggleProps = ToggleProps
/** @deprecated Use ToggleViewProps instead */
export type IToggleViewProps = ToggleViewProps
