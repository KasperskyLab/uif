import { AlertColorConfig, AlertMode } from '@src/alert/types'

import { ComponentThemeContext } from '../config'

export const alert = ({ colors }: ComponentThemeContext): Record<AlertMode, AlertColorConfig> => ({
  error: {
    background: colors.alert.critical.bg,
    color: colors.alert.critical.text,
    border: colors.alert.critical.border,
    icon: colors.alert.critical.icon,
    separator: colors.divider.bg.bold
  },
  warning: {
    background: colors.alert.warning.bg,
    color: colors.alert.warning.text,
    border: colors.alert.warning.border,
    icon: colors.alert.warning.icon,
    separator: colors.divider.bg.bold
  },
  success: {
    background: colors.alert.success.bg,
    color: colors.alert.success.text,
    border: colors.alert.success.border,
    icon: colors.alert.success.icon,
    separator: colors.divider.bg.bold
  },
  info: {
    background: colors.alert.info.bg,
    color: colors.alert.info.text,
    border: colors.alert.info.border,
    icon: colors.alert.info.icon,
    separator: colors.divider.bg.bold
  }
})
