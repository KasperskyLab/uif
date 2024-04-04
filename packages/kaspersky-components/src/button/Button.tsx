import React from 'react'
import { Button as AntdButton } from 'antd'
import { useThemedButton } from './useThemedButton'
import styled from 'styled-components'
import { buttonCss, groupCss } from './buttonCss'
import { ButtonProps, ButtonViewProps, ButtonGroupProps } from './types'
import cn from 'classnames'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'

const StyledButton = styled(AntdButton).withConfig({
  shouldForwardProp: (prop) => !['cssConfig'].includes(prop)
})`
  ${buttonCss}
`

export const Button = (rawProps: ButtonProps): JSX.Element => {
  const themedProps: ButtonViewProps = useThemedButton(rawProps)
  const props = useTestAttribute(themedProps)
  return <ButtonView {...props} />
}

export const ButtonView = ({
  className,
  text,
  children,
  type,
  icon,
  iconBefore,
  iconAfter,
  testAttributes,
  ...rest
}: ButtonViewProps): JSX.Element => {
  const child = text || children
  return (
    <StyledButton
      className={cn(className, { 'icon-only': !child })}
      htmlType={type}
      title={text}
      {...testAttributes}
      {...rest}
    >
      {
        child
          ? [
              icon || iconBefore,
              <span key='radio' className='kl-components-button-text'> {child} </span>,
              iconAfter
            ]
          : icon || iconBefore || iconAfter
      }
    </StyledButton>
  )
}

const StyledButtonGroup = styled(AntdButton.Group).withConfig({
  shouldForwardProp: (prop) => !['cssConfig'].includes(prop)
})`
  ${groupCss}
`

Button.Group = (rawProps: ButtonGroupProps): JSX.Element => {
  const { testAttributes, ...rest } = useTestAttribute(rawProps)
  return <StyledButtonGroup {...testAttributes} {...rest} />
}
