import { ComponentThemeContext } from '@design-system/theme'
import { TooltipCssConfig } from '@src/tooltip/types'
import { tooltip as defaultTooltip } from '../light/tooltip'

export const tooltip = ({ colors }: ComponentThemeContext): TooltipCssConfig => defaultTooltip({ colors })
