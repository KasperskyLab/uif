import { BadgeMode, BadgeStateProps } from '../../../../src/badge'
import { ComponentThemeContext } from '../config'
import { badge as defaultBadgeCreator, badgeSize as defaultBadgeSize } from '../light/badge'

export const badge = ({ colors }: ComponentThemeContext): Record<BadgeMode, BadgeStateProps> => {
  const defaultBadge = defaultBadgeCreator({ colors })

  return {
    ...defaultBadge,
    neutral: {
      ...defaultBadge.neutral,
      background: colors.elements.separator,
      color: colors.textIconsElements.primary
    },
    black: {
      ...defaultBadge.black,
      background: colors.foregroundColor,
      color: colors.textIconsElements['primary-invert']
    },
    accent: {
      ...defaultBadge.accent,
      background: colors.foregroundColor,
      color: colors.textIconsElements['primary-invert']
    },
    positive: {
      ...defaultBadge.positive,
      background: colors.criticalitystatuses.positive,
      color: colors.textIconsElements['primary-invert']
    },
    medium: {
      ...defaultBadge.medium,
      background: colors.criticalitystatuses.medium,
      color: colors.textIconsElements['primary-invert']
    },
    high: {
      ...defaultBadge.high,
      background: colors.criticalitystatuses.high,
      color: colors.textIconsElements['primary-invert']
    },
    critical: {
      ...defaultBadge.critical,
      background: colors.criticalitystatuses.critical,
      color: colors.textIconsElements['primary-invert']
    },
    new: {
      ...defaultBadge.new,
      background: colors.mainInteractPrimary,
      color: colors.textIconsElements['primary-invert']
    },
    dot: {
      ...defaultBadge.dot,
      background: colors.criticalitystatuses.high,
      color: colors.textIconsElements['primary-invert']
    }
  }
}

export const badgeSize = defaultBadgeSize
