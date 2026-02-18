import { TooltipCssConfig } from '@src/tooltip/types'

import { ComponentThemeContext } from '../config'

export const tooltip = ({ colors }: ComponentThemeContext): TooltipCssConfig => ({
  background: colors.tooltip.bg,
  color: colors.tooltip.text,
  boxShadow: colors.elevation.medium[2],
  boxShadowLine: colors.elevation.medium[1]
})
