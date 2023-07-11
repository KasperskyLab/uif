import { Input } from 'antd'
import { PropsWithChildren, RefObject, ComponentProps, ChangeEvent } from 'react'
import { IMaskInputProps } from 'react-imask'
import { TextSizes } from '../../design-system/tokens'
import { SizingType, ThemeKey } from '../../design-system/types'

export type ISizeType = Extract<SizingType, 'small' | 'medium' | 'large'>

export type StateProps = {
  placeholderColor?: string,
  color?: string,
  background?: string,
  outline?: string
}

export type InputColorConfig = {
  normal?: StateProps,
  hover?: StateProps,
  active?: StateProps,
  focus?: StateProps,
  disabled?: StateProps,
  readonly?: StateProps,
  negative?: StateProps,
  positive?: StateProps
}

export type InputSize = TextSizes & {
  padding: string,
  height: string,
  borderRadius: string
}
export type InputSizeConfig = Record<ISizeType, InputSize>

export type MaskedStyledInputType = {
  inputRef:
  | ((instance: HTMLInputElement | null) => void)
  | RefObject<HTMLInputElement>
  | null
  | undefined,
  error: boolean | undefined,
  positive: boolean | undefined,
  className: string,
  disabled: boolean | undefined,
  readOnly: boolean | undefined,
  cssConfig: InputCssConfig
}

export type InputCssConfig = InputColorConfig & InputSize

export type IInputStyleProps = PropsWithChildren<{
  size?: ISizeType,
  theme?: ThemeKey
}>

export interface ITextboxProps extends Omit<ComponentProps<typeof Input>, 'onChange' | 'value' | 'defaultValue'| 'onInput' | 'size'> {
  onChange?: (value: string | ChangeEvent<HTMLInputElement>, mask?: IMaskInputProps) => void,
  error?: boolean,
  positive?: boolean,
  value?: string,
  maskOptions?: IMaskInputProps,
  klId?: string,
  theme?: ThemeKey,
  size?: ISizeType
}

export interface IPasswordProps extends Omit<ComponentProps<typeof Input.Password>, 'onChange' | 'size'> {
  /** handler */
  onChange?: (value: string) => void,
  /** error flag */
  error?: boolean,
  /** value */
  value?: string,
  /** theme options */
  theme?: ThemeKey,
  /** unique id */
  klId?: string,
  size?: ISizeType
}

export interface IUrlInputProps extends Omit<ITextboxProps, 'onChange' | 'size' | 'maskOptions'> {
  onPathChange?: (value: string | ChangeEvent<HTMLInputElement>) => void,
  onPortChange?: (value: string | ChangeEvent<HTMLInputElement>) => void,
  pathValue?: string,
  portValue?: string
}
