import { BadgeMode, BadgeColorConfig } from '@src/badge'
import { ComponentThemeContext } from '../config'
import { badge as defaultBadge } from '../light/badge'

export const badge = ({ colors }: ComponentThemeContext): Record<BadgeMode, BadgeColorConfig> => defaultBadge({ colors })
