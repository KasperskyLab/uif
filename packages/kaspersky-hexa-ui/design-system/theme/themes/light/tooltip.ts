import { TooltipCssConfig } from '@src/tooltip/types'

import { ComponentThemeContext } from '../config'

export const tooltip = ({ colors }: ComponentThemeContext): TooltipCssConfig => ({
  background: colors.tooltip.bg,
  color: colors.tooltip.text
})
