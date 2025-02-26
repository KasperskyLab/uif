import { Theme } from '@design-system/types'
import { TestingProps, ToViewProps } from '@helpers/typesHelpers'
import { ArgsProps as AntdNotificationProps } from 'antd/lib/notification'
import { ReactNode } from 'react'

export const NotificationModeArray = ['error', 'success', 'info', 'warning'] as const

export type NotificationMode = typeof NotificationModeArray[number]

export type NotificationColorConfig = {
  background?: string,
  color?: string,
  separator?: string
}

export type NotificationCssConfig = Record<NotificationMode, NotificationColorConfig>

export type NotificationThemeProps = {
  /** Custom theme */
  theme?: Theme
}

export type NotificationProps = {
  /** Notification Container id */
  id?: string,
  /** Component visual variant: 'error' | 'success' | 'info' | 'warning' */
  mode: NotificationMode,
  /** Duration of showing Toast */
  duration?: number,
  /** Text inside notification */
  description?: ReactNode,
  /** The unique identifier of the Notification */
  key?: AntdNotificationProps['key'],
  /** @deprecated No effect */
  place?: AntdNotificationProps['placement'],
  /** Action button before close icon */
  actionButton?: {
    title: string,
    onClick: (arg: any) => void
  },
  /** Callback on close */
  onClose?: () => void
}

export type NotificationApiParams = Omit<NotificationProps, 'mode'>

export type NotificationContainerProps = {
  id?: string,
  /** Don't show first icon */
  noIcon?: boolean
} & NotificationThemeProps & TestingProps

export type NotificationContainerViewProps = ToViewProps<NotificationContainerProps, NotificationCssConfig, NotificationThemeProps>
