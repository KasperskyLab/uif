import React, {
  ChangeEvent, FC, ForwardedRef,
  forwardRef, useEffect, useRef
} from 'react'
import { Input as AntdInput } from 'antd'
import styled from 'styled-components'
import { inputAddonStyles, inputStyles } from './inputCss'
import { useThemedTextbox } from './useThemedTextbox'
import { useClassNamedTextbox } from './useClassNamedTextbox'
import {
  TextboxProps, TextboxMappedProps, TextboxViewProps,
  TextboxVariants, TextboxViewVariants
} from './types'
import { Textarea, TextareaView } from './Textarea'
import { InputNumber, InputNumberView } from './InputNumber'
import { InputPassword, InputPasswordView } from './InputPassword'
import { InputMasked, InputMaskedView } from './InputMasked'
/** @deprecated Decided to compose components like this in product layout */
import { UrlInput, UrlInputView } from './UrlInput'
import { WithGlobalStyles } from '@helpers/hocs/WithGlobalStyles'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'

export const StyledInput = styled(AntdInput).withConfig({
  shouldForwardProp: (prop) => !['cssConfig'].includes(prop)
})`
  ${inputStyles}
  ${inputAddonStyles}
`

// With ref
export const TextboxWithRef = forwardRef<AntdInput, TextboxProps>(
  (rawProps: TextboxProps, ref) => {
    const mappedProps: TextboxMappedProps = useClassNamedTextbox<TextboxProps>(rawProps)
    const themedProps: TextboxViewProps = useThemedTextbox(mappedProps)
    const props = useTestAttribute(themedProps)
    return <TextboxViewRef {...props} ref={ref} />
  }
)

export const TextboxViewRef = forwardRef<AntdInput, TextboxViewProps>(({
  onChange,
  testAttributes,
  ...rest
}: TextboxViewProps, parentRef: ForwardedRef<AntdInput>) => {
  return (
    <StyledInput
      ref={parentRef}
      onChange={(event) => onChange?.((event as ChangeEvent<HTMLInputElement>).target.value)}
      {...testAttributes}
      {...rest}
    />
  )
})

// Textbox
export const Textbox: FC<TextboxProps> & TextboxVariants = (rawProps: TextboxProps) => {
  // during removing deprecated you should delete this redirection to Textbox.Masked
  if (rawProps.maskOptions) return <Textbox.Masked {...rawProps}/>

  const mappedProps: TextboxMappedProps = useClassNamedTextbox<TextboxProps>(rawProps)
  const themedProps: TextboxViewProps = useThemedTextbox(mappedProps)
  const props = useTestAttribute(themedProps)
  return <TextboxView {...props} />
}

Textbox.Textarea = Textarea
Textbox.Password = InputPassword
Textbox.Number = InputNumber
Textbox.Masked = InputMasked
/** @deprecated Decided to compose components like this in product layout */
Textbox.Url = UrlInput

// TextboxView
const TextboxViewComponent: FC<TextboxViewProps> & TextboxViewVariants = ({
  autoFocus,
  onChange,
  /** @deprecated */
  maskOptions,
  testAttributes,
  ...rest
}: TextboxViewProps) => {
  const ref = useRef<AntdInput | null>(null)
  useEffect(() => {
    if (autoFocus) ref?.current?.focus()
  }, [])

  return (
    <StyledInput
      ref={ref}
      data-component-version="v6"
      onChange={(event) => typeof event === 'object' ? onChange?.(event.target.value) : undefined}
      {...testAttributes}
      {...rest}
    />
  )
}

TextboxViewComponent.Textarea = TextareaView
TextboxViewComponent.Password = InputPasswordView
TextboxViewComponent.Number = InputNumberView
TextboxViewComponent.Masked = InputMaskedView
/** @deprecated Decided to compose components like this in product layout */
TextboxViewComponent.Url = UrlInputView

export const TextboxView = WithGlobalStyles(TextboxViewComponent)
