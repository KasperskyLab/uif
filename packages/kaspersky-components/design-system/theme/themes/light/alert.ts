import { AlertColorConfig, AlertMode } from '../../../../src/alert/types'
import { ComponentThemeContext } from '../config'

export const alert = ({ colors }: ComponentThemeContext): Record<AlertMode, AlertColorConfig> => ({
  error: {
    icon: {
      color: colors.criticalitystatuses.high
    },
    alert: {
      background: colors.surface.red,
      color: colors.textIconsElements.primary,
      borderColor: colors.criticalitystatuses.high,
      separator: colors.elements.separator
    }
  },
  warning: {
    icon: {
      color: colors.criticalitystatuses.medium
    },
    alert: {
      background: colors.surface.yellow,
      color: colors.textIconsElements.primary,
      borderColor: colors.criticalitystatuses.medium,
      separator: colors.elements.separator
    }
  },
  success: {
    icon: {
      color: colors.criticalitystatuses.positive
    },
    alert: {
      background: colors.surface.emerald,
      color: colors.textIconsElements.primary,
      borderColor: colors.criticalitystatuses.positive,
      separator: colors.elements.separator
    }
  },
  info: {
    icon: {
      color: colors.statestatuses.new
    },
    alert: {
      background: colors.surface.marengo,
      color: colors.textIconsElements.primary,
      borderColor: colors.statestatuses.new,
      separator: colors.elements.separator
    }
  }
})
