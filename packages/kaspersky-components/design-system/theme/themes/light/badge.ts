import { BadgeMode, BadgeColorConfig } from '@src/badge'
import { ComponentThemeContext } from '../config'

export const badge = ({ colors }: ComponentThemeContext): Record<BadgeMode, BadgeColorConfig> => ({
  neutral: {
    background: colors.elements.separator,
    color: colors.textIconsElements.primary
  },
  black: {
    background: colors.foregroundColor,
    color: colors.textIconsElements['primary-invert']
  },
  accent: {
    background: colors.mainInteractPrimary,
    color: colors.textIconsElements['primary-invert']
  },
  positive: {
    background: colors.criticalitystatuses.positive,
    color: colors.textIconsElements['primary-invert']
  },
  medium: {
    background: colors.criticalitystatuses.medium,
    color: colors.textIconsElements['primary-invert']
  },
  high: {
    background: colors.criticalitystatuses.high,
    color: colors.textIconsElements['primary-invert']
  },
  critical: {
    background: colors.criticalitystatuses.critical,
    color: colors.textIconsElements['primary-invert']
  },
  new: {
    background: colors.statestatuses.new,
    color: colors.textIconsElements['primary-invert']
  },
  dot: {
    background: colors.criticalitystatuses.high,
    color: colors.textIconsElements['primary-invert']
  },
  update: {
    background: colors.statestatuses.update,
    color: colors.textIconsElements['primary-invert']
  },
  'in-progress': {
    background: colors.statestatuses['in-progress'],
    color: colors.textIconsElements['primary-invert']
  },
  resolved: {
    background: colors.statestatuses.resolved_solved,
    color: colors.textIconsElements['primary-invert']
  },
  'in-incident': {
    background: colors.statestatuses['in-incident'],
    color: colors.textIconsElements['primary-invert']
  },
  low: {
    background: colors.criticalitystatuses.low,
    color: colors.textIconsElements['primary-invert']
  },
  info: {
    background: colors.criticalitystatuses.info,
    color: colors.textIconsElements['primary-invert']
  }
})
