import { Theme } from '@design-system/types'
import { TestingProps, ToViewProps } from '@helpers/typesHelpers'

export type BadgeMode =
  | 'neutral'
  | 'accent'
  | 'black'
  | 'positive'
  | 'medium'
  | 'high'
  | 'critical'
  | 'new'
  | 'dot'
  | 'update'
  | 'in-progress'
  | 'resolved'
  | 'in-incident'
  | 'low'
  | 'info';

export type BadgeColorConfig = {
  background?: string,
  color?: string
}

export type BadgeCssConfig = BadgeColorConfig

export type BadgeThemeProps = {
  /** Color mode */
  mode?: BadgeMode,
  /** Custom theme */
  theme?: Theme
}

export type BadgeProps = {
  /** Displayed number */
  count?: number,
  /** Displayed text (instead of count) */
  text?: string,
  /** Max count to show */
  overflowCount?: number,
  /** Text to show when hovering over the badge */
  title?: string,
  /** Whether to show badge when count is zero */
  showZero?: boolean
} & BadgeThemeProps & TestingProps

export type BadgeViewProps = ToViewProps<BadgeProps, BadgeCssConfig, BadgeThemeProps> & {
  dot?: boolean
}

/** @deprecated Use BadgeViewProps instead */
export type ThemedBadgeProps = Omit<BadgeProps, 'theme'> & { cssConfig: BadgeCssConfig }

/** @deprecated Use BadgeProps instead */
export type IBadgeProps = BadgeProps
