import React, { FC } from 'react'
import styled from 'styled-components'
import { Input } from 'antd'
import { inputPasswordStyles, inputStyles } from './inputCss'
import { PasswordHide, PasswordShow } from '@kaspersky/icons/16'
import { ActionButton } from '@src/action-button'
import { useThemedTextbox } from './useThemedTextbox'
import { useClassNamedTextbox } from './useClassNamedTextbox'
import { TextboxPasswordMappedProps, TextboxPasswordProps, TextboxPasswordViewProps } from './types'
import { WithGlobalStyles } from '@helpers/hocs/WithGlobalStyles'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'

const StyledPassword = styled(Input.Password).withConfig({
  shouldForwardProp: prop => !['cssConfig'].includes(prop)
})`
  ${inputStyles}
  ${inputPasswordStyles}
`

export const InputPasswordComponent: FC<TextboxPasswordProps> = (rawProps: TextboxPasswordProps) => {
  const mappedProps: TextboxPasswordMappedProps = useClassNamedTextbox<TextboxPasswordProps>(rawProps)
  const props: TextboxPasswordViewProps = useThemedTextbox(mappedProps)
  const { testAttributes } = useTestAttribute(props)
  return <InputPasswordView testAttributes={testAttributes} {...props} />
}

export const InputPasswordView: FC<TextboxPasswordViewProps> = ({
  onChange,
  testId,
  klId,
  testAttributes,
  ...rest
}: TextboxPasswordViewProps) => {
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
      onChange={({ target: { value } }: { target: { value: string }}) => onChange?.(value)}
      {...testAttributes}
      {...rest}
    />
  )
}

export const InputPassword = WithGlobalStyles(InputPasswordComponent)
