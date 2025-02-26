import { ScrollbarColorConfig } from '@src/scrollbar/types'

import { ComponentThemeContext } from '../config'

export const scrollbar = ({ colors }: ComponentThemeContext): ScrollbarColorConfig => ({
  enabled: {
    trackColor: colors.scrollbar.bg.enabled,
    thumbColor: colors.scrollbar.bar.enabled
  },
  hover: {
    trackColor: colors.scrollbar.bg.hover,
    thumbColor: colors.scrollbar.bar.hover
  },
  active: {
    trackColor: colors.scrollbar.bg.active,
    thumbColor: colors.scrollbar.bar.active
  }
})
