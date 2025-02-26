import { WithGlobalStyles } from '@helpers/hocs/WithGlobalStyles'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { ActionButton } from '@src/action-button'
import { Input } from 'antd'
import React, { FC, useState } from 'react'
import styled from 'styled-components'

import { PasswordHide, PasswordShow } from '@kaspersky/icons/16'

import { inputPasswordStyles, inputStyles } from './inputCss'
import { TextboxPasswordMappedProps, TextboxPasswordProps, TextboxPasswordViewProps } from './types'
import { useClassNamedTextbox } from './useClassNamedTextbox'
import { useThemedTextbox } from './useThemedTextbox'

const StyledPassword = styled(Input.Password).withConfig({
  shouldForwardProp: prop => !['cssConfig'].includes(prop)
})`
  ${inputStyles}
  ${inputPasswordStyles}
`

const InputPasswordComponent: FC<TextboxPasswordProps> = (rawProps: TextboxPasswordProps) => {
  const mappedProps: TextboxPasswordMappedProps = useClassNamedTextbox<TextboxPasswordProps>(rawProps)
  const props: TextboxPasswordViewProps = useThemedTextbox(mappedProps)
  const { testAttributes } = useTestAttribute(props)
  return <InputPasswordView testAttributes={testAttributes} {...props} />
}

const InputPasswordView: FC<TextboxPasswordViewProps> = ({
  onChange,
  testId,
  klId,
  testAttributes,
  value: passValue,
  clearBeforeFirstChange = false,
  onFocus,
  onBlur,
  visibilityToggle,
  ...rest
}: TextboxPasswordViewProps) => {
  const [inFocus, setInFocus] = useState(false)
  const [changedOnce, setChangedOnce] = useState(false)
  const [showVisibilityToggle, setShowVisibilityToggle] = useState(!clearBeforeFirstChange)

  const clearValue = inFocus && clearBeforeFirstChange && !changedOnce
  return (
    <StyledPassword
      iconRender={(visible: boolean) => (
        <ActionButton
          interactive={false}
          icon={visible ? <PasswordHide /> : <PasswordShow />}
          klId={klId ? `${klId}-input-password-icon` : undefined}
          testId={testId ? `${testId}-input-password-icon` : undefined}
        />
      )}
      onChange={({ target: { value } }: { target: { value: string }}) => {
        onChange?.(value)
        setChangedOnce(true)
      }}
      value={clearValue ? '' : passValue}
      visibilityToggle={visibilityToggle !== undefined ? visibilityToggle : showVisibilityToggle}
      onFocus={(event) => {
        setInFocus(true)
        onFocus && onFocus(event)
      }}
      onBlur={(event) => {
        setInFocus(false)
        if (changedOnce) setShowVisibilityToggle(true)
        onBlur && onBlur(event)
      }}
      {...testAttributes}
      {...rest}
    />
  )
}

export const InputPassword = WithGlobalStyles(InputPasswordComponent)
