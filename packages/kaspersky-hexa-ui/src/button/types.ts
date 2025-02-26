import { Focus } from '@design-system/tokens/focus'
import { Size, Theme } from '@design-system/types'
import { TestingProps, ToViewProps } from '@helpers/typesHelpers'
import { ButtonGroupProps as AntdButtonGroupProps } from 'antd/es/button'
import { ButtonHTMLType } from 'antd/es/button/button'
import { MouseEventHandler, ReactNode } from 'react'

import { TextSizes } from '@kaspersky/hexa-ui-core/typography/js'

export type ButtonToViewProps<T> = ToViewProps<T, ButtonCssConfig, BaseThemedButtonProps>

export const buttonModes = [
  'primary',
  'secondary',
  'tertiary',
  'dangerFilled',
  'dangerOutlined'
] as const

export type ButtonMode = typeof buttonModes[number]

export type ButtonSize = `${Exclude<Size, Size.ExtraSmall>}`

export type ButtonSizeConfig = TextSizes & {
  padding: string,
  height: string,
  borderRadius: string,
  minWidth: string
}

type StateProps = {
  background?: string,
  color?: string,
  border?: string
}

export type ButtonColorConfig = Focus & {
  enabled?: StateProps,
  hover?: StateProps,
  active?: StateProps,
  disabled?: StateProps
}

export type ButtonCssConfig = ButtonColorConfig & ButtonSizeConfig

export type BaseThemedButtonProps = {
  /** Size */
  size?: ButtonSize,
  /** Custom theme */
  theme?: Theme,
  /** Color mode */
  mode?: ButtonMode
}

export type ButtonProps = BaseThemedButtonProps & {
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
  /** React children */
  children?: ReactNode,
  style?: React.CSSProperties
} & TestingProps

export type ButtonViewProps = ButtonToViewProps<ButtonProps>

export type ButtonGroupProps = AntdButtonGroupProps & {
  /** React children */
  children?: ReactNode
} & TestingProps
