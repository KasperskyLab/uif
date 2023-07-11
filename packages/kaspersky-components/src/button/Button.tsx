import React, { FC } from 'react'

import { Button as AntdButton } from 'antd'
import { useThemedButton } from './useThemedButton'
import styled from 'styled-components'
import { buttonCss, groupCss } from './buttonCss'
import { IButtonProps, IButtonViewProps, IButtonGroupProps } from './types'

const StyledButton = styled(AntdButton).withConfig({
  shouldForwardProp: prop => !['cssConfig'].includes(prop)
})`${buttonCss}`

export const Button = (rawProps: IButtonProps): JSX.Element => {
  const props = useThemedButton(rawProps)
  return <ButtonView {...props} />
}

export const ButtonView: FC<IButtonViewProps> = ({
  text,
  children,
  type,
  klId,
  ...rest
}) => {
  return (
    <StyledButton
      htmlType={type}
      kl-id={klId}
      title={text}
      {...rest}
    >
      {(text || children) && <span className='kl-components-button-text'>{text || children}</span>}
    </StyledButton>
  )
}

const StyledButtonGroup = styled(AntdButton.Group)`${groupCss}`

Button.Group = ({ klId, ...rest }: IButtonGroupProps): JSX.Element => {
  return <StyledButtonGroup {...rest} kl-id={klId} />
}
