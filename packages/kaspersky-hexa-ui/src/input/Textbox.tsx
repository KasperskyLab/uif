import { WithGlobalStyles } from '@helpers/hocs/WithGlobalStyles'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { Input as AntdInput } from 'antd'
import React, {
  ChangeEvent, FC, ForwardedRef,
  forwardRef, useEffect, useRef
} from 'react'
import styled from 'styled-components'

import { inputAddonStyles, inputStyles } from './inputCss'
import { InputMasked } from './InputMasked'
import { InputNumber } from './InputNumber'
import { InputPassword } from './InputPassword'
import { Textarea } from './Textarea'
import {
  TextboxMappedProps,
  TextboxProps,
  TextboxVariants, TextboxViewProps
} from './types'
import { UrlInput } from './UrlInput'
import { useClassNamedTextbox } from './useClassNamedTextbox'
import { useThemedTextbox } from './useThemedTextbox'

const StyledInput = styled(AntdInput).withConfig({
  shouldForwardProp: (prop) => !['cssConfig'].includes(prop)
})`
  ${inputStyles}
  ${inputAddonStyles}
`

export const TextboxWithRef = forwardRef<AntdInput, TextboxProps>(
  (rawProps: TextboxProps, ref) => {
    const mappedProps: TextboxMappedProps = useClassNamedTextbox<TextboxProps>(rawProps)
    const themedProps: TextboxViewProps = useThemedTextbox(mappedProps)
    const props = useTestAttribute(themedProps)
    return <TextboxViewRef {...props} ref={ref} />
  }
)

const TextboxViewRef = forwardRef<AntdInput, TextboxViewProps>(({
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

export const Textbox: FC<TextboxProps> & TextboxVariants = (rawProps: TextboxProps) => {
  const mappedProps: TextboxMappedProps = useClassNamedTextbox<TextboxProps>(rawProps)
  const themedProps: TextboxViewProps = useThemedTextbox(mappedProps)
  const props = useTestAttribute(themedProps)
  return <TextboxView {...props} />
}

Textbox.Textarea = Textarea
Textbox.Password = InputPassword
Textbox.Number = InputNumber
Textbox.Masked = InputMasked
/** @deprecated Compose components like this in product layout */
Textbox.Url = UrlInput

const TextboxViewComponent: FC<TextboxViewProps> = ({
  autoFocus,
  onChange,
  onKeyDown,
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
      onKeyDown={(event) => { event.stopPropagation(); onKeyDown?.(event) }}
      {...testAttributes}
      {...rest}
    />
  )
}

const TextboxView = WithGlobalStyles(TextboxViewComponent)
