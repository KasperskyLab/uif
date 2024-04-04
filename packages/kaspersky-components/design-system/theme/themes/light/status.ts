import { ComponentThemeContext } from '../config'
import { StatusMode, StatusColorConfig } from '@src/status/types'

export const status = ({ colors }: ComponentThemeContext): Record<StatusMode, StatusColorConfig> => ({
  default: {
    background: colors.bg['base-invert'],
    color: colors.textIconsElements.primary
  },
  'not-active': {
    background: colors.elements['line-solid'],
    color: colors.textIconsElements['disabled-solid']
  },
  new: {
    background: colors.statestatuses.new,
    color: colors.textIconsElements.primary
  },
  update: {
    background: colors.statestatuses.update,
    color: colors.textIconsElements.primary
  },
  inProgress: {
    background: colors.statestatuses['in-progress'],
    color: colors.textIconsElements.primary
  },
  resolved: {
    background: colors.statestatuses['resolved-solved'],
    color: colors.textIconsElements.primary
  },
  inIncident: {
    background: colors.statestatuses['in-incident'],
    color: colors.textIconsElements.primary
  },
  high: {
    background: colors.criticalitystatuses.high,
    color: colors.textIconsElements.primary
  },
  critical: {
    background: colors.criticalitystatuses.critical,
    color: colors.textIconsElements.primary
  },
  medium: {
    background: colors.criticalitystatuses.medium,
    color: colors.textIconsElements.primary
  },
  info: {
    background: colors.criticalitystatuses.info,
    color: colors.textIconsElements.primary
  },
  positive: {
    background: colors.criticalitystatuses.positive,
    color: colors.textIconsElements.primary
  },
  low: {
    background: colors.criticalitystatuses.low,
    color: colors.textIconsElements.primary
  }
})
