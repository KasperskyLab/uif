import { SeverityColorConfig, SeverityMode } from '../../../../src/severity/types'
import { ComponentThemeContext } from '../config'

export const severity = ({ colors }: ComponentThemeContext): Record<SeverityMode, SeverityColorConfig> => ({
  critical: {
    normal: {
      background: colors.tags.red,
      color: colors.textIconsElements.primary
    }
  },
  high: {
    normal: {
      background: colors.tags.orange,
      color: colors.textIconsElements.primary
    }
  },
  medium: {
    normal: {
      background: colors.tags.yellow,
      color: colors.textIconsElements.primary
    }
  },
  low: {
    normal: {
      background: colors.tags.neutral,
      color: colors.textIconsElements.primary
    }
  },
  info: {
    normal: {
      background: colors.tags.purple,
      color: colors.textIconsElements.primary
    }
  },
  positive: {
    normal: {
      background: colors.tags.emerald,
      color: colors.textIconsElements.primary
    }
  }
})
