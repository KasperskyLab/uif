import { IndicatorCssConfig, IndicatorMode } from '@src/indicator/types'

import { ComponentThemeContext } from '../config'

export const indicator = ({ colors }: ComponentThemeContext): Record<IndicatorMode, IndicatorCssConfig> => ({
  accent: {
    background: colors.indicator.icon.accent,
    border: colors.indicator.border
  },
  'not-active': {
    background: colors.indicator.icon.not_active,
    border: colors.indicator.border
  },
  new: {
    background: colors.indicator.icon.new,
    border: colors.indicator.border
  },
  update: {
    background: colors.indicator.icon.update,
    border: colors.indicator.border
  },
  inProgress: {
    background: colors.indicator.icon.in_progress,
    border: colors.indicator.border
  },
  resolved: {
    background: colors.indicator.icon.resolved,
    border: colors.indicator.border
  },
  inIncident: {
    background: colors.indicator.icon.in_incident,
    border: colors.indicator.border
  },
  high: {
    background: colors.indicator.icon.high,
    border: colors.indicator.border
  },
  critical: {
    background: colors.indicator.icon.critical,
    border: colors.indicator.border
  },
  medium: {
    background: colors.indicator.icon.medium,
    border: colors.indicator.border
  },
  info: {
    background: colors.indicator.icon.info,
    border: colors.indicator.border
  },
  positive: {
    background: colors.indicator.icon.positive,
    border: colors.indicator.border
  },
  low: {
    background: colors.indicator.icon.low,
    border: colors.indicator.border
  }
})
