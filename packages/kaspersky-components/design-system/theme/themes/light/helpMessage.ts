import { HelpMessageStateProps, HelpMessageMode } from '../../../../src/help-message/types'
import { ComponentThemeContext } from '../config'

export const helpMessage = ({ colors }: ComponentThemeContext): Record<HelpMessageMode, HelpMessageStateProps> => ({
  error: {
    color: colors.dangerInteract.primary
  },
  warning: {
    color: colors.criticalitystatuses.medium
  },
  success: {
    color: colors.criticalitystatuses.positive
  },
  common: {
    color: colors['text-icons-elements'].secondary
  }
})
