import { useGlobalStyles } from '@helpers/hooks/useGlobalStyles'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { Input as AntdInput } from 'antd'
import classnames from 'classnames'
import React, { FC, useEffect, useRef } from 'react'
import { IMaskInputProps, IMaskMixin } from 'react-imask'
import styled from 'styled-components'

import { inputStyles } from './inputCss'
import { MaskedStyledInputType, TextboxMaskedProps } from './types'
import { useClassNamedTextbox } from './useClassNamedTextbox'
import { useThemedTextbox } from './useThemedTextbox'

const StyledVanillaInput = styled.input.withConfig({
  shouldForwardProp: (prop) => !['cssConfig'].includes(prop)
})`
  ${inputStyles}
`

// retarded lib. incorrect ts types
const MaskedStyledInput = IMaskMixin(({
  className,
  inputRef,
  ...props
}: MaskedStyledInputType) => {
  return (
    <StyledVanillaInput
      className={classnames('ant-input', className)}
      {...props}
      ref={inputRef}
    />
  )
})

export const InputMasked: FC<TextboxMaskedProps> = (props: TextboxMaskedProps) => {
  const {
    className,
    disabled,
    readOnly,
    autoFocus,
    onChange,
    maskOptions,
    testAttributes,
    // just props drilling
    id, value, cssConfig, onBlur, onKeyUp,
    ...rest
  } = useTestAttribute(useThemedTextbox(useClassNamedTextbox(props)))

  useGlobalStyles()

  const ref = useRef<AntdInput | null>(null)
  useEffect(() => {
    if (autoFocus) ref?.current?.focus()
  }, [])

  return (
    <MaskedStyledInput
      inputRef={(inputRef: AntdInput) => { ref.current = inputRef }}
      onAccept={(acceptValue: string, mask?: IMaskInputProps) => {
        if (value === undefined && acceptValue === '') return
        onChange?.(acceptValue, mask)
      }}
      readOnly={readOnly}
      id={id}
      className={className}
      value={value}
      disabled={disabled}
      cssConfig={cssConfig}
      onBlur={onBlur}
      onKeyUp={onKeyUp}
      {...testAttributes}
      {...maskOptions}
      {...rest}
    />
  )
}
