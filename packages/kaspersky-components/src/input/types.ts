import { Input, InputNumber as AntdInputNumber } from 'antd'
import { PropsWithChildren, RefObject, ComponentProps, ChangeEvent, ReactNode, FC } from 'react'
import { IMaskInputProps } from 'react-imask'
import { TextSizes } from '@design-system/tokens'
import { SizingType, ThemeKey } from '@design-system/types'
import { ToViewProps, TestingProps } from '@helpers/typesHelpers'
import { Focus } from '@design-system/tokens/focus'

export type ISizeType = Extract<
  SizingType,
  'medium'
  /** @deprecated Only medium size allowed */
  | 'small'
  /** @deprecated Only medium size allowed */
  | 'large'
>

export type StateProps = {
  placeholderColor?: string,
  color?: string,
  background?: string,
  borderColor?: string
}

export type InputColorConfig = Focus & {
  enabled?: StateProps,
  normal?: StateProps,
  hover?: StateProps,
  active?: StateProps,
  disabled?: StateProps,
  readonly?: StateProps,
  invalid?: StateProps,
  valid?: StateProps
}

export type InputSize = TextSizes & {
  padding: string,
  height: string,
  borderRadius: string
}

export type InputSizeConfig = Record<ISizeType, InputSize>

export type InputCssConfig = InputColorConfig & InputSize

// Helping
export type TextboxThemedProps = {
  /** @deprecated Only 'medium' size allowed and was set by default */
  size?: ISizeType,
  /** Custom theme */
  theme?: ThemeKey
}

export type TextboxClassNamedProps = {
  className?: string,
  /** Disabled */
  disabled?: boolean,
  /** Read only */
  readOnly?: boolean,
  /** Is invalid */
  invalid?: boolean,
  /** Is valid */
  valid?:boolean,
  /** @deprecated Use 'invalid' prop instead */
  error?: boolean,
  /** @deprecated Use 'valid' prop instead */
  positive?: boolean
}

// Helping
type BaseTextboxProps = TextboxClassNamedProps & TestingProps & TextboxThemedProps

type TypesToOmit = 'onChange' | 'value' | 'defaultValue'| 'onInput' | 'size' | 'disabled' | 'readOnly' | 'className'

type ToMappedProps<T> = Omit<T, 'invalid' | 'valid' | 'error' | 'positive'>

export type TextboxToViewProps<T> = ToViewProps<T, InputCssConfig, TextboxThemedProps>

// Basic Textbox
export type TextboxProps = PropsWithChildren<Omit<ComponentProps<typeof Input>, TypesToOmit> & {
  /** @deprecated Use Textbox.Masked instead of giving 'maskOptions' prop to default Textbox component */
  maskOptions?: IMaskInputProps,
  /** Handler */
  onChange?: (value: string, mask?: IMaskInputProps) => void,
  /** Controlled Value */
  value?: string
} & BaseTextboxProps>

export type TextboxMappedProps = ToMappedProps<TextboxProps>

export type TextboxViewProps = TextboxToViewProps<TextboxMappedProps>

export type TextboxVariants = {
  Textarea: FC<TextboxTextareaProps>,
  Password: FC<TextboxPasswordProps>,
  Number: FC<TextboxNumberProps>,
  Masked: FC<TextboxMaskedProps>,
  /** @deprecated Decided to compose components like this in product layout */
  Url: FC<IUrlInputProps>
}

export type TextboxViewVariants = {
  Textarea: FC<TextboxTextareaViewProps>,
  Password: FC<TextboxPasswordViewProps>,
  Number: FC<TextboxNumberViewProps>,
  Masked: FC<TextboxMaskedViewProps>,
  /** @deprecated Decided to compose components like this in product layout */
  Url: FC<IUrlInputProps & { cssConfig: InputCssConfig}>
}

// Textbox.Masked
export type TextboxMaskedProps = Omit<TextboxProps, 'maskOptions'> & {
  /** Mask options */
  maskOptions?: IMaskInputProps
}

export type TextboxMaskedMappedProps = ToMappedProps<TextboxMaskedProps>

export type TextboxMaskedViewProps = TextboxToViewProps<TextboxMaskedMappedProps>

export type MaskedStyledInputType = {
  inputRef:
    | ((instance: HTMLInputElement | null) => void)
    | RefObject<HTMLInputElement>
    | null
    | undefined,
  className?: string,
  disabled?: boolean,
  readOnly?: boolean,
  invalid?: boolean,
  valid?: boolean,
  cssConfig: InputCssConfig,
  /** @deprecated Use 'invalid' prop instead */
  error?: boolean,
  /** @deprecated Use 'valid' prop instead */
  positive?: boolean
}

// Textbox.Password
export type TextboxPasswordProps = Omit<ComponentProps<typeof Input.Password>, TypesToOmit> & {
  /** Handler */
  onChange?: (value: string) => void,
  /** Controlled Value */
  value?: string
} & Omit<BaseTextboxProps, 'readOnly'>

export type TextboxPasswordMappedProps = ToMappedProps<TextboxPasswordProps>

export type TextboxPasswordViewProps = TextboxToViewProps<TextboxPasswordMappedProps>

// Textbox.Number
export type TextboxNumberProps = Omit<ComponentProps<typeof AntdInputNumber>, TypesToOmit | 'controls'> & {
  /** Handler  */
  onChange?: (value: number) => void,
  /** (optional) Icons for controls */
  controls?: boolean | undefined | any | {
    upIcon?: ReactNode,
    downIcon?: ReactNode
  },
  /** Controlled Value */
  value?: number
} & BaseTextboxProps

export type TextboxNumberMappedProps = ToMappedProps<TextboxNumberProps>

export type TextboxNumberViewProps = TextboxToViewProps<TextboxNumberMappedProps>

// Textbox.Textarea
export type TextboxTextareaProps = Omit<
  ComponentProps<typeof Input.TextArea>,
  TypesToOmit | 'showCount' | 'maxLength'
> & {
  /** Is counter shown */
  showCount?: boolean,
  /** Max length */
  maxLength?: number,
  /** Handler */
  onChange?: (value: string) => void,
  /** Controlled Value */
  value?: string
} & BaseTextboxProps

export type TextboxTextareaMappedProps = ToMappedProps<TextboxTextareaProps>

export type TextboxTextareaViewProps = TextboxToViewProps<TextboxTextareaMappedProps>

// Deprecated
/** @deprecated Use TextboxProps instead */
export interface ITextboxProps extends Omit<ComponentProps<typeof Input>, 'onChange' | 'value' | 'defaultValue'| 'onInput' | 'size'> {
  onChange?: (value: string | ChangeEvent<HTMLInputElement>, mask?: IMaskInputProps) => void,
  error?: boolean,
  positive?: boolean,
  value?: string,
  maskOptions?: IMaskInputProps,
  /** Test ID */
  testId?: string,
  /** @deprecated Test ID */
  klId?: string,
  theme?: ThemeKey,
  size?: ISizeType
}

/** @deprecated Use TextboxPasswordProps instead */
export interface IPasswordProps extends Omit<ComponentProps<typeof Input.Password>, 'onChange' | 'size'> {
  onChange?: (value: string) => void,
  error?: boolean,
  value?: string,
  theme?: ThemeKey,
  testId?: string,
  klId?: string,
  size?: ISizeType
}

/** @deprecated Decided to compose components like this in product layout */
export interface IUrlInputProps extends Omit<TextboxProps, 'onChange' | 'size' | 'maskOptions'> {
  onPathChange?: (value: string | ChangeEvent<HTMLInputElement>) => void,
  onPortChange?: (value: string | ChangeEvent<HTMLInputElement>) => void,
  pathValue?: string,
  portValue?: string
}
