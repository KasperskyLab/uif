import { IndicatorCssConfig, IndicatorMode } from '@src/indicator/types'

import { ComponentThemeContext } from '../config'
import { indicator as defaultIndicator } from '../light/indicator'

export const indicator = ({ colors, effects }: ComponentThemeContext): Record<IndicatorMode, IndicatorCssConfig> =>
  defaultIndicator({ colors, effects })
