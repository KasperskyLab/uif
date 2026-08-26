import { Theme } from '@design-system/types'
import { TextProps } from '@src/typography'

export type ExpandableTextThemeProps = {
  /** Custom theme */
  theme?: Theme
}

type SafeExpandableTextProps = ExpandableTextThemeProps & {
  /** Alternative text */
  altText?: string,
  /** Function-trigger when text expanded */
  onExpand?: (expanded: boolean) => void
}

export type ExpandableTextProps = TextProps & SafeExpandableTextProps
