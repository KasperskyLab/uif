import { Size, Theme } from '@design-system/types'
import { TestingProps, ToViewProps } from '@helpers/typesHelpers'

import { TextSizes } from '@kaspersky/hexa-ui-core/typography/js'

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

export type BadgeColorConfig = {
  background?: string,
  color?: string
}

export const badgeSizes = [`${Size.Medium}`, `${Size.Large}`] as const

export type BadgeSize = typeof badgeSizes[number]

export type BadgeSizeConfig = TextSizes

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

export type BadgeCssConfig = BadgeColorConfig & BadgeSizeConfig

export type BadgeThemeProps = (BadgeLargeConfig | BadgeMediumConfig) & {
  /** Custom theme */
  theme?: Theme
}

export type BadgeProps = {
  /** CSS Class name */
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
} & BadgeThemeProps & TestingProps

export type BadgeViewProps = ToViewProps<BadgeProps, BadgeCssConfig, BadgeThemeProps> & {
  dot?: boolean
}
