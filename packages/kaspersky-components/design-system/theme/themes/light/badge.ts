import { BadgeMode, BadgeSizeConfig, BadgeStateProps } from '../../../../src/badge'
import { ComponentThemeContext } from '../config'
import { BORDER_RADIUS, SPACES } from '../variables'
import { getTextSizes, TextTypes } from './typography'

export const badge = ({ colors }: ComponentThemeContext): Record<BadgeMode, BadgeStateProps> => ({
  neutral: {
    background: colors.elements.separator,
    color: colors.textIconsElements.primary
  },
  black: {
    background: colors.foregroundColor,
    color: colors.textIconsElements['primary-invert']
  },
  accent: {
    background: colors.foregroundColor,
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
    background: colors.mainInteractPrimary,
    color: colors.textIconsElements['primary-invert']
  },
  dot: {
    background: colors.criticalitystatuses.high,
    color: colors.textIconsElements['primary-invert']
  }
})

export const badgeSize: BadgeSizeConfig = {
  padding: `0px ${SPACES[3]}px`,
  borderRadius: `${BORDER_RADIUS[4]}px`,
  ...getTextSizes(TextTypes.L4)
}
