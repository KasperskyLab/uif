import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import React, { FC } from 'react'
import styled from 'styled-components'

import { NotificationCss } from './notificationCss'
import { defaultContainerId } from './NotificationService'
import { NotificationContainerProps, NotificationContainerViewProps } from './types'
import { useThemedNotification } from './useThemedNotification'

const StyledNotification = styled.div.withConfig<NotificationContainerViewProps>({
  shouldForwardProp: prop => !['cssConfig', 'noIcon'].includes(prop)
})`
 ${NotificationCss}
`

export const Notification: FC<NotificationContainerProps> = ({ id = defaultContainerId, ...rawProps }) => {
  const { testAttributes, ...props } = useTestAttribute(useThemedNotification(rawProps))

  return <StyledNotification id={id} {...testAttributes} {...props} />
}

Notification.displayName = 'Notification'
