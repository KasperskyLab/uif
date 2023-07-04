import React, { ReactElement } from 'react'

import styled from 'styled-components'
import { Input } from 'antd'
import { inputStyles } from './inputCss'
import classnames from 'classnames'
import { Icon } from '../icon'
import { useThemedTextbox } from './useThemedTextbox'
import { InputCssConfig, IPasswordProps } from './types'

const StyledPassword = styled(Input.Password).withConfig({
  shouldForwardProp: prop => !['cssConfig'].includes(prop)
})`
  ${inputStyles}
`

export const InputPassword = (rawProps: IPasswordProps): ReactElement<IPasswordProps> => {
  const props = useThemedTextbox(rawProps)
  return <InputPasswordView {...props} />
}

export const InputPasswordView = ({
  error,
  disabled,
  onChange,
  className,
  theme,
  size,
  klId,
  ...rest
}: IPasswordProps & { cssConfig: InputCssConfig }): ReactElement<IPasswordProps> => {
  return (
    <StyledPassword
      kl-id={klId}
      className={classnames({ error: error && !disabled }, className)}
      disabled={disabled}
      iconRender={(visible) => <Icon size='small' name={visible ? 'PasswordShow' : 'PasswordHide'} />}
      onChange={({ target: { value } }) => onChange?.(value)}
      {...rest}
    />
  )
}
