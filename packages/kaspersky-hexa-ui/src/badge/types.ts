import { Size, Theme } from '@design-system/types'
import { TestingProps } from '@helpers/typesHelpers'

export const badgeTransparentModes = [
  'neutral_transparent',
  'critical_transparent'
] as const

export const badgeModes = [
  'neutral',
  'info',
  'new',
  'update',
  'in-progress',
  'resolved',
  'positive',
  'accent',
  'low',
  'medium',
  'high',
  'in-incident',
  'critical',
  ...badgeTransparentModes
] as const

export type BadgeLargeMode = typeof badgeTransparentModes[number]
export type BadgeMediumMode = typeof badgeModes[number]

export type BadgeMode = BadgeMediumMode | BadgeLargeMode

export const badgeSizes = [`${Size.Medium}`, `${Size.Large}`] as const

export type BadgeSize = typeof badgeSizes[number]

export type BadgeLargeConfig = {
  /** Size */
  size?: `${Size.Large}`,
  /** Color mode */
  mode?: BadgeLargeMode
}

export type BadgeMediumConfig = {
  /** Size */
  size?: `${Size.Medium}`,
  /** Color mode */
  mode?: BadgeMediumMode
}

export type BadgeProps = {
  /** Custom theme */
  theme?: Theme,
  /** Custom class name */
  className?: string,
  /** Displayed number */
  count?: number,
  /** Displayed text (instead of count) */
  text?: string,
  /** Max count to show */
  overflowCount?: number,
  /** @deprecated Text to show when hovering over the badge */
  title?: string,
  /** Whether to show badge when count is zero */
  showZero?: boolean
} & TestingProps & (BadgeLargeConfig | BadgeMediumConfig)
