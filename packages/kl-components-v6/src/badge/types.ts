import { TextSizes } from '../../design-system/tokens'
import { Theme } from '../../design-system/types'

export type BadgeMode =
  'neutral'
  | 'accent'
  | 'black'
  | 'positive'
  | 'medium'
  | 'high'
  | 'critical'
  | 'new'
  | 'dot'

export type BadgeStateProps = {
  background?: string,
  color?: string
}

export type BadgeCssConfig = BadgeStateProps & BadgeSizeConfig

export type BadgeSizeConfig = TextSizes & {
  padding: string,
  borderRadius: string
}

export type IBadgeProps = {
  /** Color mode */
  mode?: BadgeMode,
  /** Custom theme */
  theme?: Theme,
  /** Displayed number */
  count?: number,
  /** Displayed text (instead of count) */
  text?: string,
  /** Max count to show */
  overflowCount?: number,
  /** Text to show when hovering over the badge */
  title?: string,
  /** Test id */
  klId?: string,
  /** Whether to show badge when count is zero */
  showZero?: boolean
}

export type ThemedBadgeProps = Omit<IBadgeProps, 'theme'> & { cssConfig: BadgeCssConfig }
