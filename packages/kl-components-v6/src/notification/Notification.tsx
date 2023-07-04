/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { NotificationCssConfig, NotificationProps } from './types'
import { useThemedNotification } from './useThemeNotification'
import styled from 'styled-components'
import { NotificationCss } from './notificationCss'

const StyledNotification = styled('div').withConfig({
  shouldForwardProp: prop => !['cssConfig', 'noIcon', 'componentId'].includes(prop)
})`
 ${NotificationCss}
`

export const Notification = (rawProps: NotificationProps): JSX.Element => {
  const props = useThemedNotification(rawProps)
  return <NotificationView data-component-id={props.componentId} {...props} />
}

const NotificationView: React.FC<NotificationProps & {
  cssConfig: NotificationCssConfig
}> = (props): JSX.Element => {
  return <StyledNotification {...props} />
}

Notification.displayName = 'Notification'
