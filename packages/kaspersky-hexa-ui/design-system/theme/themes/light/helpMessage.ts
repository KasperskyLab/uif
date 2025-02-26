import { HelpMessageStateProps, HelpMessageMode } from '@src/help-message/types'

import { ComponentThemeContext } from '../config'

export const helpMessage = ({ colors }: ComponentThemeContext): Record<HelpMessageMode, HelpMessageStateProps> => ({
  error: {
    color: colors.help_message.critical
  },
  warning: {
    color: colors.help_message.warning
  },
  success: {
    color: colors.help_message.success
  },
  common: {
    color: colors.help_message.none
  }
})
