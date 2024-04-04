import { ButtonGroupProps as AntdButtonGroupProps } from 'antd/es/button'
import { ButtonHTMLType } from 'antd/es/button/button'
import { MouseEventHandler, PropsWithChildren, ReactNode } from 'react'
import { TextSizes } from '@design-system/tokens'
import { Size, Theme } from '@design-system/types'
import { Focus } from '@design-system/tokens/focus'
import { TestingProps, ToViewProps } from '@helpers/typesHelpers'

export type ButtonToViewProps<T> = ToViewProps<T, ButtonCssConfig, BaseThemedButtonProps>

/**
 * Modes
*/
/** @deprecated  */
export type ButtonModeDeprecated =
  'primaryBlue'
| 'danger'
| 'primaryBlack'
| 'invertedPrimary'
| 'invertedSecondary'
| 'invertedTertiary'

export type ButtonModeActual =
  'primary'
| 'secondary'
| 'tertiary'
| 'dangerFilled'
| 'dangerOutlined'

export type ButtonMode = ButtonModeActual | ButtonModeDeprecated

/**
 * Sizes
*/
export type ButtonSize = `${Exclude<Size, Size.ExtraSmall>}`

export type ButtonSizeConfig = TextSizes & {
  padding: string,
  height: string,
  borderRadius: string,
  minWidth: string
}

/**
 * Colors
*/
type StateProps = {
  background?: string,
  color?: string,
  border?: string
}

export type ButtonColorConfig = Focus & {
  normal?: StateProps,
  hover?: StateProps,
  active?: StateProps,
  disabled?: StateProps
}

export type ButtonCssConfig = ButtonColorConfig & ButtonSizeConfig

/**
 * Props
*/
export type BaseThemedButtonProps = {
  /** Size */
  size?: ButtonSize,
  /** Custom theme */
  theme?: Theme,
  /** Color mode */
  mode?: ButtonMode
}

export type ButtonProps = PropsWithChildren<BaseThemedButtonProps & {
  /** Disabled state */
  disabled?: boolean,
  /** Loading state */
  loading?: boolean,
  /** Css class */
  className?: string,
  /** Icon before text */
  iconBefore?: ReactNode,
  /** Icon after text */
  iconAfter?: ReactNode,
  /** On click handler */
  onClick?: MouseEventHandler<HTMLElement>,
  /** Text */
  text?: string,
  /** HTML attribute 'type' */
  type?: ButtonHTMLType,
  /** Display in :active state */
  isPressed?: boolean,
  /** @deprecated Use 'iconBefore' prop instead */
  icon?: ReactNode
}> & TestingProps

export type ButtonViewProps = ButtonToViewProps<ButtonProps>

export type ButtonGroupProps = PropsWithChildren<AntdButtonGroupProps> & TestingProps

/** @deprecated Use ButtonProps instead */
export type IButtonProps = ButtonProps
/** @deprecated Use ButtonViewProps instead */
export type IButtonViewProps = ButtonViewProps

/** @deprecated Use ButtonGroupProps instead */
export type IButtonGroupProps = ButtonGroupProps
