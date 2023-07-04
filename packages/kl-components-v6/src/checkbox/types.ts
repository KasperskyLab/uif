import { FocusEvent, PropsWithChildren, ReactNode } from 'react'
import { Theme } from '../../design-system/types'
import { CheckboxProps, CheckboxGroupProps } from 'antd/es/checkbox'

export type StateProps = {
  color?: string,
  radius?: string,
  bgColor?: string,
  borderColor?: string,
  checkColor?: string,
  checkBgColor?: string,
  outline?: string,
  iconColor?: string
}

export type CheckboxColorConfig = {
  normal?: StateProps,
  hover?: StateProps,
  active?: StateProps,
  focus?: StateProps,
  disabled?: StateProps
}

export type CheckboxCssConfig = CheckboxColorConfig

export type ICheckboxProps = CheckboxProps & {
  children?: ReactNode,
  className?: string,
  disabled?: boolean,
  theme?: Theme,
  componentId?: string,
  role?: string,
  onFocus?: FocusEvent<HTMLElement>
}

export type ICheckboxViewProps = PropsWithChildren<{
  cssConfig: CheckboxCssConfig
} & ICheckboxProps>

export interface ICheckboxGroupViewProps extends CheckboxGroupProps {
  onChange?: (checkedValue: any) => void,
  componentId?: string,
  cssConfig: CheckboxCssConfig
}
export interface ICheckboxGroupProps extends Omit<ICheckboxGroupViewProps, 'onChange' | 'cssConfig'> {
  componentId?: string,
  onChange?: (checkedValue: any) => void
}
