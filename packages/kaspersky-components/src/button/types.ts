import { ButtonGroupProps } from 'antd/es/button'
import { ButtonHTMLType } from 'antd/es/button/button'
import { MouseEventHandler, PropsWithChildren, ReactNode } from 'react'
import { TextSizes } from '../../design-system/tokens'
import { Size, Theme } from '../../design-system/types'

export type ButtonMode =
'primaryBlue'
| 'primaryBlack'
| 'secondary'
| 'tertiary'
| 'danger'
| 'invertedPrimary'
| 'invertedSecondary'
| 'invertedTertiary'

export type ButtonSize = `${Exclude<Size, Size.ExtraSmall>}`

type StateProps = {
  background?: string,
  color?: string,
  border?: string
}

export type ButtonColorConfig = {
  normal?: StateProps,
  hover?: StateProps,
  active?: StateProps,
  focus?: StateProps,
  disabled?: StateProps
}

export type ButtonSizeConfig = TextSizes & {
  padding: string,
  height: string,
  borderRadius: string
}

export type ButtonCssConfig = ButtonColorConfig & ButtonSizeConfig
export interface BaseThemedButtonProps {
  /** Size */
  size?: ButtonSize,
  /** Custom theme */
  theme?: Theme,
  /** Color mode */
  mode?: ButtonMode
}

export type IButtonProps = {
  /** Css class */
  className?: string,
  /** Icon */
  icon?: ReactNode,
  /** Disabled state */
  disabled?: boolean,
  /** Loading state */
  loading?: boolean,
  /** On click handler */
  onClick?: MouseEventHandler<HTMLElement>
} & BaseThemedButtonProps & Omit<IButtonViewProps, 'cssConfig'>

export type IButtonViewProps = PropsWithChildren<{
  /** Text */
  text?: string,
  /** Test id */
  klId?: string,
  /** HTML attribute 'type' */
  type?: ButtonHTMLType,
  cssConfig: ButtonCssConfig
}>

export type IButtonGroupProps = PropsWithChildren<ButtonGroupProps> & {
  klId?: string
}
