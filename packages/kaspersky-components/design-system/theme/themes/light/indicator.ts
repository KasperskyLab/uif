import { ComponentThemeContext } from '../config'
import {
  IndicatorMode,
  IndicatorModeDeprecated,
  IndicatorCssConfig
} from '@src/indicator/types'

export const indicator = ({
  colors
}: ComponentThemeContext): Record<IndicatorMode | IndicatorModeDeprecated, IndicatorCssConfig> => ({
  default: {
    background: colors.bg['base-invert'],
    borderColor: colors.bg.base
  },
  accent: {
    background: colors.mainInteractPrimary,
    borderColor: colors.bg.base
  },
  'not-active': {
    background: colors.elements['line-solid'],
    borderColor: colors.bg.base
  },
  new: {
    background: colors.statestatuses.new,
    borderColor: colors.bg.base
  },
  update: {
    background: colors.statestatuses.update,
    borderColor: colors.bg.base
  },
  inProgress: {
    background: colors.statestatuses['in-progress'],
    borderColor: colors.bg.base
  },
  resolved: {
    background: colors.statestatuses['resolved-solved'],
    borderColor: colors.bg.base
  },
  inIncident: {
    background: colors.statestatuses['in-incident'],
    borderColor: colors.bg.base
  },
  high: {
    background: colors.criticalitystatuses.high,
    borderColor: colors.bg.base
  },
  critical: {
    background: colors.criticalitystatuses.critical,
    borderColor: colors.bg.base
  },
  medium: {
    background: colors.criticalitystatuses.medium,
    borderColor: colors.bg.base
  },
  info: {
    background: colors.criticalitystatuses.info,
    borderColor: colors.bg.base
  },
  positive: {
    background: colors.criticalitystatuses.positive,
    borderColor: colors.bg.base
  },
  low: {
    background: colors.criticalitystatuses.low,
    borderColor: colors.bg.base
  }
})
