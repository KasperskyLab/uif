import { useGlobalStyles } from '@helpers/hooks/useGlobalStyles'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import AntdInput from 'antd/es/input'
import React, { ChangeEvent, FC, forwardRef } from 'react'

import { InputMasked } from './InputMasked'
import { InputNumber } from './InputNumber'
import { InputPassword } from './InputPassword'
import { Textarea } from './Textarea'
import { StyledInput, TextboxInternal } from './TextboxInternal'
import { TextboxInternalProps, TextboxProps, TextboxVariants } from './types'
import { UrlInput } from './UrlInput'
import { useClassNamedTextbox } from './useClassNamedTextbox'
import { useThemedTextbox } from './useThemedTextbox'

// @deprecated Use Textbox instead
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

export const Textbox: FC<TextboxProps> & TextboxVariants = (props: TextboxProps) =>
  <TextboxInternal {...props as TextboxInternalProps} />

Textbox.Textarea = Textarea
Textbox.Password = InputPassword
Textbox.Number = InputNumber
Textbox.Masked = InputMasked
/** @deprecated Compose components like this in product layout */
Textbox.Url = UrlInput
