import {
  SectionMessageCssConfig,
  SectionMessageMode
} from '../../../../src/section-message/types'
import { ComponentThemeContext } from '../config'

export const sectionMessage = ({ colors }: ComponentThemeContext): Record<SectionMessageMode, SectionMessageCssConfig> => ({
  error: {
    icon: {
      color: colors.criticalitystatuses.high
    },
    sectionMessage: {
      background: colors.surface.red,
      color: colors.textIconsElements.primary,
      borderColor: colors.criticalitystatuses.high
    }
  },
  warning: {
    icon: {
      color: colors.criticalitystatuses.medium
    },
    sectionMessage: {
      background: colors.surface.yellow,
      color: colors.textIconsElements.primary,
      borderColor: colors.criticalitystatuses.medium
    }
  },
  success: {
    icon: {
      color: colors.criticalitystatuses.positive
    },
    sectionMessage: {
      background: colors.surface.emerald,
      color: colors.textIconsElements.primary,
      borderColor: colors.criticalitystatuses.positive
    }
  },
  info: {
    icon: {
      color: colors.statestatuses.new
    },
    sectionMessage: {
      background: colors.surface.marengo,
      color: colors.textIconsElements.primary,
      borderColor: colors.statestatuses.new
    }
  }
})
