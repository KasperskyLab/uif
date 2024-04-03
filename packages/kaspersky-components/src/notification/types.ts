import { ReactNode } from 'react'
import { ArgsProps as AntdNotificationProps } from 'antd/lib/notification'
import { Theme } from '@design-system/types'
import { TestingProps, ToViewProps } from '@helpers/typesHelpers'

/** * @deprecated Use 'info' mode instead */
export type NotificationModeDeprecated = 'infoAccent'

export const NotificationModeArray = ['error', 'success', 'info', 'warning'] as const
export type NotificationMode = typeof NotificationModeArray[number];
// export type NotificationMode = 'error' | 'success' | 'info' | 'warning'

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
  /** Node unique id */
  id?: string,
  /** Component visual variant: 'error' | 'success' | 'info' | 'warning' */
  mode: NotificationMode | NotificationModeDeprecated,
  /** Duration of showing Toast */
  duration?: number,
  /** Text inside notification */
  description?: ReactNode,
  /** The unique identifier of the Notification */
  key?: AntdNotificationProps['key'],
  /** Position of Toast: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' */
  place?: AntdNotificationProps['placement'],
  /** Action button before close icon */
  actionButton?: {
    title: string,
    onClick: (arg: any) => void
  },
  /** Callback on close */
  onClose?: () => void,
  /** Don't show first icon */
  noIcon?: boolean,
  /** @deprecated Use 'duration' prop instead */
  delay?: number
} & NotificationThemeProps & TestingProps

// TODO move to global types
type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>

// TODO clean NotificationContainerProps and NotificationProps
export type NotificationContainerProps = Optional<NotificationProps, 'mode'>
export type NotificationContainerViewProps = ToViewProps<NotificationContainerProps, NotificationCssConfig, NotificationThemeProps>
