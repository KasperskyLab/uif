import { PopoverCssConfig } from '@src/popover/types'

import { ComponentThemeContext } from '../config'
import { popover as defaultPopover } from '../light/popover'

export const popover = ({ colors, effects }: ComponentThemeContext): PopoverCssConfig =>
  defaultPopover({ colors, effects })
