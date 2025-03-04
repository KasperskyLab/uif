import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { showDeprecationWarn } from '@helpers/showDeprecationWarn'
import { ActionButton } from '@src/action-button'
import { Link } from '@src/link'
import { Space } from '@src/space'
import cn from 'classnames'
import React, { FC, useState } from 'react'
import styled from 'styled-components'

import { StatusDangerOutline1, StatusInfoOutline, StatusOkOutline, StatusWarningOutline } from '@kaspersky/hexa-ui-icons/16'

import { alertCss, IconStyled, SpaceBox } from './alertCss'
import { AlertMode, alertModes, AlertProps, AlertViewProps } from './types'
import { useThemedAlert } from './useThemedAlert'

const IconMap: { [key in AlertMode]: React.FC } = {
  error: () => <StatusDangerOutline1 data-testid="alert-error-icon" data-component-id="icon-error" />,
  warning: () => <StatusWarningOutline data-testid="alert-warning-icon" data-component-id="icon-warning" />,
  success: () => <StatusOkOutline data-testid="alert-success-icon" data-component-id="icon-success" />,
  info: () => <StatusInfoOutline data-testid="alert-info-icon" data-component-id="icon-info" />
}

const StyledAlert = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    !['cssConfig', 'componentId'].includes(prop)
})`
  ${alertCss}
`

export const Alert = (rawProps: AlertProps): JSX.Element => {
  const { mode, ...notDeprecatedProps } = rawProps

  let notDeprecatedMode = mode
  if (!alertModes.includes(mode)) {
    notDeprecatedMode = 'info'
    showDeprecationWarn('mode', mode)
  }

  const themedProps = useThemedAlert({ ...notDeprecatedProps, mode: notDeprecatedMode })
  const props = useTestAttribute(themedProps)
  return <AlertView {...props} />
}

const AlertView: FC<AlertViewProps> = (props: AlertViewProps) => {
  const { mode, closable, children, cssConfig } = props
  const { actions, testAttributes, ...forwardedProps } = props
  const [visibility, setVisibility] = useState(true)
  const IconComponent = IconMap[mode as AlertMode]

  const closeNotification = () => {
    if (props.onClose) props.onClose()
    setVisibility(false)
  }

  if (!visibility) return null

  return (
    <StyledAlert {...testAttributes} {...forwardedProps}>
      <IconStyled cssConfig={cssConfig}>
        <IconComponent/>
      </IconStyled>
      <SpaceBox
        gap={8}
        direction="horizontal"
        align="flex-start"
      >
        <SpaceBox
          gap={24}
          direction="horizontal"
          align="flex-start"
        >
          {children}
          {actions && (
            <Space gap={8} className={cn(closable && 'alert-action-separator')} direction="horizontal">
              {actions.FIRST_ACTION && (
                <Link {...actions.FIRST_ACTION}>
                  {actions.FIRST_ACTION.text}
                </Link>
              )}
              {actions.SECOND_ACTION && (
                <Link {...actions.SECOND_ACTION}>
                  {actions.SECOND_ACTION.text}
                </Link>
              )}
            </Space>
          )}
        </SpaceBox>
        {closable && <ActionButton size="large" onClick={() => closeNotification()}/>}
      </SpaceBox>
    </StyledAlert>
  )
}

Alert.displayName = 'Alert'
