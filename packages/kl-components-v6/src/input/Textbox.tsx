import React, { ChangeEvent, useEffect, useRef } from 'react'
import { Input as AntdInput } from 'antd'
import { InputProps } from 'antd/lib/input'
import styled from 'styled-components'
import classnames from 'classnames'
import { IMaskMixin, IMaskInputProps } from 'react-imask'
import { inputAddonStyles, inputStyles } from './inputCss'
import { Textarea, TextareaView } from './Textarea'
import { InputNumber, InputNumberView } from './InputNumber'
import { InputPassword, InputPasswordView } from './InputPassword'
import { useThemedTextbox } from './useThemedTextbox'
import { InputCssConfig, ITextboxProps, MaskedStyledInputType } from './types'
import { UrlInput, UrlInputView } from './UrlInput'

export const StyledInput = styled(AntdInput).withConfig<
  InputProps & { cssConfig: InputCssConfig }
>({
  shouldForwardProp: (prop) => !['cssConfig'].includes(prop)
})`
  ${inputStyles}
  ${inputAddonStyles}
`

const StyledVanillaInput = styled.input.withConfig({
  shouldForwardProp: (prop) => !['cssConfig'].includes(prop)
})`
  ${inputStyles}
`

// retarded lib
// uncorrect ts types
const MaskedStyledInput = IMaskMixin(
  ({
    inputRef,
    error,
    positive,
    className,
    disabled,
    readOnly,
    ...props
  }: MaskedStyledInputType) => (
    <StyledVanillaInput
      className={classnames('ant-input', className, {
        error: error && !disabled,
        positive: positive && !disabled
      })}
      disabled={disabled}
      {...props}
      ref={inputRef}
    />
  )
)

export const TextboxWithRef = React.forwardRef<AntdInput, ITextboxProps>(
  (rawProps, ref) => {
    const props = useThemedTextbox(rawProps)
    return <TextboxViewRef {...props} ref={ref} />
  }
)
export const TextboxViewRef = React.forwardRef<
  AntdInput,
  ITextboxProps & { cssConfig: InputCssConfig }
>(
  (
    {
      id,
      value,
      error,
      positive,
      disabled,
      readOnly,
      onChange,
      cssConfig,
      className = 'antd-input',
      theme,
      size,
      ...rest
    },
    parentRef
  ) => {
    return (
      <StyledInput
        id={id}
        className={classnames(className, {
          error: error && !disabled,
          positive: positive && !disabled
        })}
        ref={parentRef}
        onChange={(event) => onChange?.((event as ChangeEvent<HTMLInputElement>).target.value)}
        value={value}
        disabled={disabled}
        readOnly={readOnly}
        cssConfig={cssConfig}
        {...rest}
      />
    )
  }
)
export const Textbox: React.FC<ITextboxProps> & {
  Textarea: typeof Textarea,
  Password: typeof InputPassword,
  Number: typeof InputNumber,
  Url: typeof UrlInput
} = (rawProps) => {
  const props = useThemedTextbox(rawProps)
  return <TextboxView {...props} />
}
Textbox.Textarea = Textarea
Textbox.Password = InputPassword
Textbox.Number = InputNumber
Textbox.Url = UrlInput

export const TextboxView: React.FC<
  ITextboxProps & { cssConfig: InputCssConfig }
> & {
  Textarea: typeof TextareaView,
  Password: typeof InputPasswordView,
  Number: typeof InputNumberView,
  Url: typeof UrlInputView
} = ({
  id,
  value,
  error,
  positive,
  disabled,
  readOnly,
  autoFocus,
  onChange,
  cssConfig,
  size,
  className = 'antd-input',
  maskOptions,
  theme,
  klId,
  onBlur,
  onKeyUp,
  ...rest
}) => {
  const ref = useRef<AntdInput | null>(null)

  useEffect(() => {
    if (autoFocus) ref?.current?.focus()
  }, [])

  return (maskOptions
    ? (
        <MaskedStyledInput
          id={id}
          kl-id={klId}
          inputRef={(inputRef: AntdInput) => { ref.current = inputRef }}
          value={value}
          onAccept={(value: string, mask?: IMaskInputProps) => onChange?.(value, mask)}
          disabled={disabled}
          readOnly={readOnly}
          error={error}
          positive={positive}
          className={className}
          cssConfig={cssConfig}
          onBlur={onBlur}
          onKeyUp={onKeyUp}
          {...maskOptions}
        />
      )
    : (
        <StyledInput
          id={id}
          kl-id={klId}
          className={classnames(className, {
            error: error && !disabled,
            positive: positive && !disabled
          })}
          ref={ref}
          onChange={(event) => typeof event === 'object' ? onChange?.(event.target.value) : undefined}
          value={value}
          disabled={disabled}
          readOnly={readOnly}
          cssConfig={cssConfig}
          onBlur={onBlur}
          onKeyUp={onKeyUp}
          {...rest}
        />
      )
  )
}

TextboxView.Textarea = TextareaView
TextboxView.Password = InputPasswordView
TextboxView.Number = InputNumberView
TextboxView.Url = UrlInputView
