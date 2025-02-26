import { BadgeMode, BadgeSize as Size, BadgeSizeConfig as SizeConfig, BadgeColorConfig } from '@src/badge/types'
import { getTextSizes } from '@design-system/tokens/typography'

import { TextTypes } from '@kaspersky/hexa-ui-core/typography/js'

import { ComponentThemeContext } from '../config'

export const badge = ({ colors }: ComponentThemeContext): Record<BadgeMode, BadgeColorConfig> => ({
  neutral: {
    background: colors.badge.bg.neutral,
    color: colors.badge.text.neutral
  },
  accent: {
    background: colors.badge.bg.accent,
    color: colors.badge.text.accent
  },
  positive: {
    background: colors.badge.bg.positive,
    color: colors.badge.text.positive
  },
  medium: {
    background: colors.badge.bg.medium,
    color: colors.badge.text.medium
  },
  high: {
    background: colors.badge.bg.high,
    color: colors.badge.text.high
  },
  critical: {
    background: colors.badge.bg.critical,
    color: colors.badge.text.critical
  },
  new: {
    background: colors.badge.bg.new,
    color: colors.badge.text.new
  },
  update: {
    background: colors.badge.bg.update,
    color: colors.badge.text.update
  },
  'in-progress': {
    background: colors.badge.bg.in_progress,
    color: colors.badge.text.in_progress
  },
  resolved: {
    background: colors.badge.bg.resolved,
    color: colors.badge.text.resolved
  },
  'in-incident': {
    background: colors.badge.bg.in_incident,
    color: colors.badge.text.in_incident
  },
  low: {
    background: colors.badge.bg.low,
    color: colors.badge.text.low
  },
  info: {
    background: colors.badge.bg.info,
    color: colors.badge.text.info
  },
  neutral_transparent: {
    background: 'transparent',
    color: colors.badge.text.neutral_transparent
  },
  critical_transparent: {
    background: 'transparent',
    color: colors.badge.text.critical_transparent
  }
})

export const badgeSize: Record<Size, SizeConfig> = {
  medium: {
    ...getTextSizes(TextTypes.BTR4)
  },
  large: {
    ...getTextSizes(TextTypes.BTR3)
  }
}
