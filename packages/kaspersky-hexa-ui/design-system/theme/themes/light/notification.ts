import { NotificationColorConfig, NotificationMode } from '@src/notification/types'

import { ComponentThemeContext } from '../config'

export const notification = ({ colors }: ComponentThemeContext): Record<NotificationMode, NotificationColorConfig> => ({
  error: {
    background: colors.toast.bg.critical,
    color: colors.toast.text.critical,
    separator: colors.divider.bg.inverted
  },
  warning: {
    background: colors.toast.bg.warning,
    color: colors.toast.text.warning,
    separator: colors.divider.bg.on_light
  },
  success: {
    background: colors.toast.bg.success,
    color: colors.toast.text.success,
    separator: colors.divider.bg.inverted
  },
  info: {
    background: colors.toast.bg.info,
    color: colors.toast.text.info,
    separator: colors.divider.bg.inverted
  },
  ai: {
    background: `linear-gradient(90deg, ${colors.toast.bg.ai.green} 0%, ${colors.toast.bg.ai.green_0} 42.48%),
      linear-gradient(247.36deg, ${colors.toast.bg.ai.marina} 8.9%, ${colors.toast.bg.ai.violet} 62.99%)`,
    color: colors.toast.text.ai,
    separator: colors.divider.bg.inverted
  }
})
