import { NotificationColorConfig, NotificationMode } from '@src/notification/types'

import { ComponentThemeContext } from '../config'
import { notification as defaultNotification } from '../light/notification'

export const notification = ({ colors, effects }: ComponentThemeContext): Record<NotificationMode, NotificationColorConfig> =>
  defaultNotification({ colors, effects })
