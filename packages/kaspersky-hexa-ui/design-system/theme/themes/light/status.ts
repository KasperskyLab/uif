import { StatusMode, StatusColorConfig } from '@src/status/types'

import { ComponentThemeContext } from '../config'

export const status = ({ colors }: ComponentThemeContext): Record<StatusMode, StatusColorConfig> => ({
  default: {
    icon: colors.status.icon.default,
    color: colors.status.text.default
  },
  'not-active': {
    icon: colors.status.icon.not_active,
    color: colors.status.text.not_active
  },
  new: {
    icon: colors.status.icon.new,
    color: colors.status.text.new
  },
  update: {
    icon: colors.status.icon.update,
    color: colors.status.text.update
  },
  inProgress: {
    icon: colors.status.icon.in_progress,
    color: colors.status.text.in_progress
  },
  resolved: {
    icon: colors.status.icon.resolved,
    color: colors.status.text.resolved
  },
  inIncident: {
    icon: colors.status.icon.in_incident,
    color: colors.status.text.in_incident
  },
  high: {
    icon: colors.status.icon.high,
    color: colors.status.text.high
  },
  critical: {
    icon: colors.status.icon.critical,
    color: colors.status.text.critical
  },
  medium: {
    icon: colors.status.icon.medium,
    color: colors.status.text.medium
  },
  info: {
    icon: colors.status.icon.info,
    color: colors.status.text.info
  },
  positive: {
    icon: colors.status.icon.positive,
    color: colors.status.text.positive
  },
  low: {
    icon: colors.status.icon.low,
    color: colors.status.text.low
  }
})
