import React from 'react'
import { notification } from 'antd'
import { v4 as uuidv4 } from 'uuid'
import { NotificationProps, NotificationMode, NotificationModeArray } from './types'
import { ActionButtonMode } from '@src/action-button/types'
import { StatusInfoOutline, StatusOkOutline, StatusWarningOutline } from '@kaspersky/icons/16'
import { ActionButton } from '@src/action-button'

const DEFAULT_DURATION = 20

const modes:NotificationMode[] = [...NotificationModeArray]

type NotificationApiParams = Omit<NotificationProps, 'mode'>
export type NotificationApiFullParams = string | NotificationApiParams
export const defaultContainerId = uuidv4()

const IconInfoMap: { [key in NotificationMode]: React.FC } = {
  error: () => <StatusWarningOutline data-component-id='icon-error' />,
  warning: () => <StatusWarningOutline data-component-id='icon-warning' />,
  success: () => <StatusOkOutline data-component-id='icon-success' />,
  info: () => <StatusInfoOutline data-component-id='icon-info'/>
}

const IconCloseMap: { [key in NotificationMode]: React.FC } = {
  error: () => <ActionButton size='large' mode={'ghostInverted'} />,
  warning: () => <ActionButton size='large' />,
  success: () => <ActionButton size='large' mode={'ghostInverted'} />,
  info: () => <ActionButton size='large' />
}

const openNotificationInstance: any = (config: NotificationProps) => {
  const key = config.key || uuidv4()
  let notDeprecatedMode = config.mode
  let notDeprecatedDuration = config.duration
  if (config.mode === 'infoAccent') {
    // ToDo: move warn to helper @DeprecatedWarn
    console.warn('Deprecated "mode" prop value "infoAccent" use "info" instead')
    notDeprecatedMode = 'info'
  }

  if (config.delay !== undefined) {
    // ToDo: move warn to helper @DeprecatedWarn
    console.warn('Deprecated "delay" prop use "duration" prop instead')
    notDeprecatedDuration = config.delay
  }
  let actionButtonMode: ActionButtonMode = 'ghost'
  if (config.mode === 'error' || config.mode === 'success') actionButtonMode = 'ghostInverted'

  const IconInfoComponent = IconInfoMap[notDeprecatedMode as NotificationMode]
  const IconCloseComponent = IconCloseMap[notDeprecatedMode as NotificationMode]
  const DescriptionComponent = <>
    {config.description}
    {config.actionButton &&
      <ActionButton
        onClick={config.actionButton?.onClick}
        mode={actionButtonMode}
        size={'large'}
        className={'toast-action-button'}
      >
        {config.actionButton.title}
      </ActionButton>
    }
    </>
  notification.open({
    message: '',
    duration: notDeprecatedDuration || DEFAULT_DURATION,
    description: DescriptionComponent,
    getContainer: () => document.getElementById(config.id ? config.id : defaultContainerId)!,
    closeIcon: <IconCloseComponent />,
    className: `ant-notification-notice-${notDeprecatedMode}`,
    icon: <IconInfoComponent />,
    key: key,
    onClose: config.onClose,
    placement: config.place
  })
  return key
}

modes.forEach(el => {
  openNotificationInstance[el] = (params: NotificationApiFullParams) => {
    let config: Omit<NotificationProps, 'mode'>
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
export const openNotification = openNotificationInstance

export const notificationDestroy = (): void => {
  notification.destroy()
}
