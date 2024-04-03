import { ComponentThemeContext } from '../config'
import { TooltipCssConfig } from '@src/tooltip/types'

export const tooltip = ({ colors }: ComponentThemeContext): TooltipCssConfig => ({
  background: colors.bg['base-invert'],
  color: colors['text-icons-elements']['primary-invert']
})
