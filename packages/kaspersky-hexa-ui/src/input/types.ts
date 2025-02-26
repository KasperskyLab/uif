import { Focus } from '@design-system/tokens/focus'
import { SizingType, ThemeKey } from '@design-system/types'
import { TestingProps, ToViewProps, ValidationStatus } from '@helpers/typesHelpers'
import { Input, InputNumber as AntdInputNumber } from 'antd'
import { ComponentProps, FC, FocusEventHandler, PropsWithChildren, ReactNode, RefObject } from 'react'
import { IMaskInputProps } from 'react-imask'

export type ISizeType = Extract<
  SizingType,
  'medium'
>

export type StateProps = {
  placeholderColor?: string,
  color?: string,
  background?: string,
  border?: string
}

export type InputColorConfig = Focus & {
  enabled?: StateProps,
  hover?: StateProps,
  active?: StateProps,
  disabled?: StateProps,
  readonly?: StateProps
} & Partial<Record<ValidationStatus, StateProps>>

export type InputSizeConfig = {
  padding: string,
  height: string,
  borderRadius: string
}

export type InputCssConfig = InputColorConfig & InputSizeConfig

export type TextboxThemedProps = {
  /** Custom theme */
  theme?: ThemeKey
}

export type TextboxClassNamedProps = {
  className?: string,
  /** Disabled */
  disabled?: boolean,
  /** Read only */
  readOnly?: boolean,
  /** Validation status */
  validationStatus?: ValidationStatus
}

// Helping
type BaseTextboxProps = TextboxClassNamedProps & TestingProps & TextboxThemedProps

type TypesToOmit = 'onChange' | 'value' | 'defaultValue'| 'onInput' | 'size' | 'disabled' | 'readOnly' | 'className'

export type TextboxToViewProps<T> = ToViewProps<T, InputCssConfig, TextboxThemedProps>

// Basic Textbox
export type TextboxProps = PropsWithChildren<Omit<ComponentProps<typeof Input>, TypesToOmit> & {
  /** Handler */
  onChange?: (value: string, mask?: IMaskInputProps) => void,
  /** Controlled Value */
  value?: string,
  onBlur?: FocusEventHandler
} & BaseTextboxProps>

export type TextboxMappedProps = TextboxProps

export type TextboxViewProps = TextboxToViewProps<TextboxMappedProps>

export type TextboxVariants = {
  Textarea: FC<TextboxTextareaProps>,
  Password: FC<TextboxPasswordProps>,
  Number: FC<TextboxNumberProps>,
  Masked: FC<TextboxMaskedProps>,
  /** @deprecated Decided to compose components like this in product layout */
  Url: FC<IUrlInputProps>
}

// Textbox.Masked
export type TextboxMaskedProps = Omit<TextboxProps, 'maskOptions'> & {
  /** Mask options */
  maskOptions?: IMaskInputProps
}

export type TextboxMaskedMappedProps = TextboxMaskedProps

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
  cssConfig: InputCssConfig,
  /** Validation status */
  validationStatus?: ValidationStatus
}

// Textbox.Password
export type TextboxPasswordProps = Omit<ComponentProps<typeof Input.Password>, TypesToOmit> & {
  /** Handler */
  onChange?: (value: string) => void,
  /** Controlled Value */
  value?: string,
  /** Clear value before first change */
  clearBeforeFirstChange?: boolean
} & Omit<BaseTextboxProps, 'readOnly'>

export type TextboxPasswordMappedProps = TextboxPasswordProps

export type TextboxPasswordViewProps = TextboxToViewProps<TextboxPasswordMappedProps>

// Textbox.Number
export type TextboxNumberProps = Omit<ComponentProps<typeof AntdInputNumber>, TypesToOmit | 'controls'> & {
  /** Handler  */
  onChange?: (value: TextboxNumberProps['value']) => void,
  /** (optional) Icons for controls */
  controls?: boolean | undefined | any | {
    upIcon?: ReactNode,
    downIcon?: ReactNode
  },
  /** Allow input have not the value  */
  allowEmpty?: boolean,
  /** Controlled Value */
  value?: number | ''
} & BaseTextboxProps

export type TextboxNumberMappedProps = TextboxNumberProps

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

export type TextboxTextareaMappedProps = TextboxTextareaProps

export type TextboxTextareaViewProps = TextboxToViewProps<TextboxTextareaMappedProps>

/** @deprecated */
export interface IUrlInputProps extends Omit<TextboxProps, 'onChange' | 'size' | 'maskOptions'> {
  onPathChange?: (value: string | React.ChangeEvent<HTMLInputElement>) => void,
  onPortChange?: (value: string | React.ChangeEvent<HTMLInputElement>) => void,
  pathValue?: string,
  portValue?: string
}
