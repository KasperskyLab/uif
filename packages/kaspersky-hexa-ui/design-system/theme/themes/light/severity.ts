import { SeverityColorConfig, SeverityMode } from '@src/severity/types'

import { ComponentThemeContext } from '../config'

export const severity = ({ colors }: ComponentThemeContext): Record<SeverityMode, SeverityColorConfig> => ({
  critical: {
    background: colors.tag.red.bg.hover_outlined,
    color: colors.tag.red.text
  },
  high: {
    background: colors.tag.orange.bg.hover_outlined,
    color: colors.tag.orange.text
  },
  medium: {
    background: colors.tag.yellow.bg.hover_outlined,
    color: colors.tag.yellow.text
  },
  low: {
    background: colors.tag.grey.bg.hover_outlined,
    color: colors.tag.grey.text
  },
  info: {
    background: colors.tag.purple.bg.hover_outlined,
    color: colors.tag.purple.text
  },
  positive: {
    background: colors.tag.emerald.bg.hover_outlined,
    color: colors.tag.emerald.text
  }
})
