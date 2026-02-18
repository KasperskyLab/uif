import { BadgeColorConfig, BadgeMode } from '@src/badge/types'

import { ComponentThemeContext } from '../config'
import { badge as defaultBadge, badgeSize as defaultBadgeSize } from '../light/badge'

export const badge = ({ colors, effects }: ComponentThemeContext): Record<BadgeMode, BadgeColorConfig> =>
  defaultBadge({ colors, effects })

export const badgeSize = defaultBadgeSize
