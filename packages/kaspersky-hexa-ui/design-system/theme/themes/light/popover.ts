import { PopoverCssConfig } from '@src/popover/types'

import { ComponentThemeContext } from '../config'

export const popover = ({ colors, effects }: ComponentThemeContext): PopoverCssConfig => ({
  background: colors.popover.bg,
  color: colors.popover.text,
  boxShadow: `${effects.elevation.medium[1]} ${colors.elevation.medium[2]}`,
  boxShadowLine: `${effects.elevation.medium[2]} ${colors.elevation.medium[1]}`,
  arrowBoxShadow: `${effects.elevation.medium[2]} ${colors.elevation.medium[2]}`
})
