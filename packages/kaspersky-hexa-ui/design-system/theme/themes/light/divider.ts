import { DividerColorConfig, DividerMode } from '@src/divider/types'

import { ComponentThemeContext } from '../config'

export const divider = ({ colors }: ComponentThemeContext): Record<DividerMode, DividerColorConfig> => ({
  normal: {
    color: colors.divider.bg.minimal
  },
  light: {
    color: colors.divider.bg.light
  },
  bold: {
    color: colors.divider.bg.bold
  },
  onLight: {
    color: colors.divider.bg.on_light
  },
  inverted: {
    color: colors.divider.bg.inverted
  }
})
