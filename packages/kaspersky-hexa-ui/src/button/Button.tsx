import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { showDeprecationWarn } from '@helpers/showDeprecationWarn'
import { Button as AntdButton } from 'antd'
import cn from 'classnames'
import React from 'react'
import styled from 'styled-components'

import { buttonCss, groupCss } from './buttonCss'
import { ButtonGroupProps, buttonModes, ButtonProps, ButtonViewProps } from './types'
import { useThemedButton } from './useThemedButton'

const StyledButton = styled(AntdButton).withConfig({
  shouldForwardProp: (prop) => !['cssConfig', 'isPressed'].includes(prop)
})`
  ${buttonCss}
`

export const Button = (rawProps: ButtonProps): JSX.Element => {
  const { mode = 'primary', ...notDeprecatedProps } = rawProps

  let notDeprecatedMode = mode
  if (!buttonModes.includes(mode)) {
    notDeprecatedMode = 'primary'
    showDeprecationWarn('mode', mode)
  }

  const themedProps = useThemedButton({ ...notDeprecatedProps, mode: notDeprecatedMode })
  const props = useTestAttribute(themedProps)
  return <ButtonView {...props} />
}

const ButtonView = ({
  className,
  text,
  children,
  type,
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
      {...testAttributes}
      {...rest}
      icon={undefined}
    >
      {
        child
          ? [
              iconBefore,
              <span key="radio" className="kl-components-button-text"> {child} </span>,
              iconAfter
            ]
          : iconBefore || iconAfter
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
