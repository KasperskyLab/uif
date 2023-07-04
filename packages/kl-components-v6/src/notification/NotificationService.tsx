import React from 'react'
import { notification } from 'antd'
import { NotificationProps, NotificationMode } from './types'
import { CheckCircleOutlined, InfoCircleOutlined } from '@ant-design/icons'
import { CloseBox } from './notificationCss'

export const IconMap: { [key in NotificationMode]: React.FC } = {
  info: () => <InfoCircleOutlined data-component-id='icon-info'/>,
  infoAccent: () => <InfoCircleOutlined data-component-id='icon-info-accent' />,
  success: () => <CheckCircleOutlined data-component-id='icon-success' />,
  error: () => <InfoCircleOutlined data-component-id='icon-error' />
}

export const getTopRoot = () => {
  try {
    return (top?.document.querySelector('#mount-root') as HTMLElement) || top?.document.body
  } catch (error) {
    return document.body
  }
}

export const openNotification = (config: NotificationProps) => {
  const IconComponent = IconMap[config.mode]
  notification.open({
    message: '',
    duration: config.delay || 20,
    description: config.description,
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    getContainer: () => document.getElementById(config.id)!,
    closeIcon: <CloseBox role="closable-icon" />,
    className: `ant-notification-notice-${config.mode}`,
    icon: <IconComponent />,
    placement: config.place
  })
}

export const notificationDestroy = (): void => {
  notification.destroy()
}
