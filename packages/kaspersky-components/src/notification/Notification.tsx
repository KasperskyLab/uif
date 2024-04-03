import React, { FC } from 'react'
import { NotificationContainerProps, NotificationContainerViewProps } from './types'
import { useThemedNotification } from './useThemedNotification'
import styled from 'styled-components'
import { NotificationCss } from './notificationCss'
import { defaultContainerId } from './NotificationService'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'

const StyledNotification = styled('div').withConfig({
  shouldForwardProp: prop => !['cssConfig', 'noIcon'].includes(prop)
})`
 ${NotificationCss}
`

export const Notification: FC<NotificationContainerProps> = (rawProps: NotificationContainerProps) => {
  const themedProps = useThemedNotification(rawProps)
  const props = useTestAttribute(themedProps)
  return <NotificationView {...props} />
}

const NotificationView: FC<NotificationContainerViewProps> = ({
  id = defaultContainerId, testAttributes, ...props
}: NotificationContainerViewProps) => {
  return <StyledNotification {...testAttributes} {...props} id={id} />
}

Notification.displayName = 'Notification'
