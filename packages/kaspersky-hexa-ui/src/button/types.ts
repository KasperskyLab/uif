import { Size, Theme } from '@design-system/types'
import { TestingProps } from '@helpers/typesHelpers'
import { DropdownProps } from '@src/dropdown'
import { ButtonGroupProps as AntdButtonGroupProps } from 'antd/es/button'
import { ButtonHTMLType } from 'antd/es/button/button'
import { MouseEventHandler, ReactNode } from 'react'

export const buttonModes = [
  'primary',
  'secondary',
  'tertiary',
  'dangerFilled',
  'dangerOutlined',
  'ai'
] as const

export type ButtonMode = typeof buttonModes[number]

export const splitButtonModes = ['primary', 'secondary', 'dangerFilled'] as const

export type SplitButtonMode = typeof splitButtonModes[number]

export type ButtonSize = `${Exclude<Size, Size.ExtraSmall>}`

export type BaseThemedButtonProps = {
  /** Size */
  size?: ButtonSize,
  /** Custom theme */
  theme?: Theme,
  /** Color mode */
  mode?: ButtonMode
}

export type ButtonProps = BaseThemedButtonProps & {
  /** Element id */
  id?: string;
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

export type ButtonGroupProps = AntdButtonGroupProps & {
  /** React children */
  children?: ReactNode
} & TestingProps

export type SplitButtonProps = Omit<ButtonProps, 'size' | 'mode' | 'iconAfter' | 'isPressed'> & {
  /** Color mode */
  mode?: SplitButtonMode,
  /** Dropdown overlay */
  items: DropdownProps['overlay'],
  /** Dropdown items */
  dropdownPlacement?: DropdownProps['placement']
}
