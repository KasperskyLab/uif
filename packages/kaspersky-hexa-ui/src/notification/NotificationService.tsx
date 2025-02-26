import { showDeprecationWarn } from '@helpers/showDeprecationWarn'
import { ActionButton, ActionButtonMode } from '@src/action-button'
import { notification } from 'antd'
import React from 'react'
import { v4 as uuidv4 } from 'uuid'

import { StatusDangerOutline1, StatusInfoOutline, StatusOkOutline, StatusWarningOutline } from '@kaspersky/icons/16'

import { Description } from './notificationCss'
import { NotificationApiParams, NotificationMode, NotificationModeArray, NotificationProps } from './types'

const DEFAULT_DURATION = 5

export type NotificationApiFullParams = string | NotificationApiParams
export const defaultContainerId = uuidv4()

const IconInfoMap: { [key in NotificationMode]: React.FC } = {
  error: () => <StatusDangerOutline1 data-component-id="icon-error" />,
  warning: () => <StatusWarningOutline data-component-id="icon-warning" />,
  success: () => <StatusOkOutline data-component-id="icon-success" />,
  info: () => <StatusInfoOutline data-component-id="icon-info" />
}

const IconCloseMap: { [key in NotificationMode]: React.FC } = {
  error: () => <ActionButton size="large" mode="ghostInverted" />,
  warning: () => <ActionButton size="large" mode="onLight" />,
  success: () => <ActionButton size="large" mode="ghostInverted" />,
  info: () => <ActionButton size="large" mode="ghostInverted" />
}

const openNotificationInstance: any = (config: NotificationProps) => {
  const key = config.key || uuidv4()

  let notDeprecatedMode = config.mode
  if (!NotificationModeArray.includes(config.mode)) {
    notDeprecatedMode = 'info'
    showDeprecationWarn('mode', config.mode)
  }

  const actionButtonMode: ActionButtonMode = config.mode === 'warning' ? 'ghost' : 'ghostInverted'

  const IconInfoComponent = IconInfoMap[notDeprecatedMode as NotificationMode]
  const IconCloseComponent = IconCloseMap[notDeprecatedMode as NotificationMode]
  const DescriptionComponent = <Description data-toasttype={notDeprecatedMode}>
    {config.description}
    {config.actionButton &&
      <ActionButton
        onClick={config.actionButton?.onClick}
        mode={actionButtonMode}
        size="large"
        className="toast-action-button"
      >
        {config.actionButton.title}
      </ActionButton>
    }
  </Description>

  notification.open({
    message: '',
    duration: config.duration || DEFAULT_DURATION,
    description: DescriptionComponent,
    getContainer: () => document.getElementById(config.id ? config.id : defaultContainerId)!,
    closeIcon: <IconCloseComponent />,
    className: `ant-notification-notice-${notDeprecatedMode}`,
    icon: <IconInfoComponent />,
    key: key,
    onClose: config.onClose,
    placement: 'topRight'
  })

  return key
}

NotificationModeArray.forEach(el => {
  openNotificationInstance[el] = (params: NotificationApiFullParams) => {
    let config: NotificationApiParams
    if (typeof params === 'string') {
      config = {
        description: params
      }
    } else {
      config = params as NotificationApiParams
    }
    return openNotificationInstance({
      ...config,
      mode: el
    })
  }
})

openNotificationInstance.close = (key: string) => notification.close(key)

export const openNotification: {
  (params: NotificationProps): string,
  close: (key: string) => void
} & {
  [key in NotificationMode]: (params: NotificationApiFullParams) => string
} = openNotificationInstance

export const notificationDestroy = (): void => {
  notification.destroy()
}
