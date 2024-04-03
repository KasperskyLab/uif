import React, { FC, useEffect, useRef } from 'react'
import { Input as AntdInput } from 'antd'
import styled from 'styled-components'
import classnames from 'classnames'
import { IMaskMixin, IMaskInputProps } from 'react-imask'
import { inputStyles } from './inputCss'
import { useThemedTextbox } from './useThemedTextbox'
import {
  TextboxMaskedProps,
  TextboxMaskedMappedProps,
  TextboxMaskedViewProps,
  MaskedStyledInputType
} from './types'
import { useClassNamedTextbox } from './useClassNamedTextbox'
import { WithGlobalStyles } from '@helpers/hocs/WithGlobalStyles'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'

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
      data-component-version="v6"
      className={classnames('ant-input', className)}
      {...props}
      ref={inputRef}
    />
  )
})

export const InputMaskedComponent: FC<TextboxMaskedProps> = (rawProps: TextboxMaskedProps) => {
  const mappedProps: TextboxMaskedMappedProps = useClassNamedTextbox<TextboxMaskedProps>(rawProps)
  const themedProps: TextboxMaskedViewProps = useThemedTextbox(mappedProps)
  const props = useTestAttribute(themedProps)
  return <InputMaskedView {...props} />
}

export const InputMaskedView: FC<TextboxMaskedViewProps> = ({
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
}: TextboxMaskedViewProps) => {
  const ref = useRef<AntdInput | null>(null)
  useEffect(() => {
    if (autoFocus) ref?.current?.focus()
  }, [])

  return (
    <MaskedStyledInput
      inputRef={(inputRef: AntdInput) => { ref.current = inputRef }}
      onAccept={(value: string, mask?: IMaskInputProps) => onChange?.(value, mask)}
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

export const InputMasked = WithGlobalStyles(InputMaskedComponent)
