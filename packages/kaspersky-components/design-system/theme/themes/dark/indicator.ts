import { ComponentThemeContext } from '../config'
import {
  IndicatorMode,
  IndicatorModeDeprecated,
  IndicatorCssConfig
} from '@src/indicator/types'
import { indicator as defaultIndicator } from '../light/indicator'

export const indicator = ({
  colors
}: ComponentThemeContext): Record<IndicatorMode | IndicatorModeDeprecated, IndicatorCssConfig> =>
  defaultIndicator({ colors })
