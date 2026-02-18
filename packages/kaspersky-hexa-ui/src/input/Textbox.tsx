import { useGlobalStyles } from '@helpers/hooks/useGlobalStyles'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { Input as AntdInput } from 'antd'
import React, { ChangeEvent, FC, forwardRef, useEffect, useRef } from 'react'
import styled from 'styled-components'

import { inputStyles } from './inputCss'
import { InputMasked } from './InputMasked'
import { InputNumber } from './InputNumber'
import { InputPassword } from './InputPassword'
import { Textarea } from './Textarea'
import { TextboxProps, TextboxVariants } from './types'
import { UrlInput } from './UrlInput'
import { useClassNamedTextbox } from './useClassNamedTextbox'
import { useThemedTextbox } from './useThemedTextbox'

const StyledInput = styled(AntdInput).withConfig({
  shouldForwardProp: (prop) => !['cssConfig'].includes(prop)
})`
  ${inputStyles}
`

export const TextboxWithRef = forwardRef<AntdInput, TextboxProps>((props: TextboxProps, ref) => {
  const {
    onChange,
    onKeyDown,
    testAttributes,
    ...rest
  } = useTestAttribute(useThemedTextbox(useClassNamedTextbox(props)))

  useGlobalStyles()

  return (
    <StyledInput
      ref={ref}
      onChange={(event) => onChange?.((event as ChangeEvent<HTMLInputElement>).target.value)}
      onKeyDown={(event) => { event.stopPropagation(); onKeyDown?.(event) }}
      {...testAttributes}
      {...rest}
    />
  )
})

export const Textbox: FC<TextboxProps> & TextboxVariants = (props: TextboxProps) => {
  const {
    autoFocus,
    onChange,
    onKeyDown,
    testAttributes,
    ...rest
  } = useTestAttribute(useThemedTextbox(useClassNamedTextbox(props)))

  useGlobalStyles()

  const ref = useRef<AntdInput | null>(null)
  useEffect(() => {
    if (autoFocus) ref?.current?.focus()
  }, [autoFocus])

  return (
    <StyledInput
      ref={ref}
      onChange={(event) => typeof event === 'object' ? onChange?.(event.target.value) : undefined}
      onKeyDown={(event) => { event.stopPropagation(); onKeyDown?.(event) }}
      {...testAttributes}
      {...rest}
    />
  )
}

Textbox.Textarea = Textarea
Textbox.Password = InputPassword
Textbox.Number = InputNumber
Textbox.Masked = InputMasked
/** @deprecated Compose components like this in product layout */
Textbox.Url = UrlInput
