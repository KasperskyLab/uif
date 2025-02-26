import { WithGlobalStyles } from '@helpers/hocs/WithGlobalStyles'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { Input as AntdInput } from 'antd'
import classnames from 'classnames'
import React, { FC, useEffect, useRef } from 'react'
import { IMaskInputProps, IMaskMixin } from 'react-imask'
import styled from 'styled-components'

import { inputStyles } from './inputCss'
import {
  MaskedStyledInputType,
  TextboxMaskedMappedProps,
  TextboxMaskedProps,
  TextboxMaskedViewProps
} from './types'
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
      data-component-version="v6"
      className={classnames('ant-input', className)}
      {...props}
      ref={inputRef}
    />
  )
})

const InputMaskedComponent: FC<TextboxMaskedProps> = (rawProps: TextboxMaskedProps) => {
  const mappedProps: TextboxMaskedMappedProps = useClassNamedTextbox<TextboxMaskedProps>(rawProps)
  const themedProps: TextboxMaskedViewProps = useThemedTextbox(mappedProps)
  const props = useTestAttribute(themedProps)
  return <InputMaskedView {...props} />
}

const InputMaskedView: FC<TextboxMaskedViewProps> = ({
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
