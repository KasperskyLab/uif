import React from 'react'

import { Notification as HexaNotification, openNotification } from '@src/notification'
import { NotificationContainerProps } from '@src/notification/types'

import { PreviewSurface } from '../../preview'

const Notification = (props: NotificationContainerProps): JSX.Element => {
  const notificationKeyRef = React.useRef<string>()
  const containerId = React.useMemo(
    () => props.id ?? `uxpin-notification-${Math.random().toString(36).slice(2, 10)}`,
    [props.id]
  )

  React.useEffect(() => {
    notificationKeyRef.current = openNotification({
      id: containerId,
      mode: 'info',
      duration: 0,
      description: 'Notification preview'
    })

    return () => {
      if (notificationKeyRef.current) {
        openNotification.close(notificationKeyRef.current)
      }
    }
  }, [containerId])

  return (
    <PreviewSurface minHeight={140}>
      <HexaNotification id={containerId} {...props} />
    </PreviewSurface>
  )
}

export default Notification
