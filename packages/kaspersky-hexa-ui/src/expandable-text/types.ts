import { Theme } from '@design-system/types'
import { TextProps } from '@src/typography'
import { ReactNode } from 'react'

export type ExpandableTextThemeProps = {
  /** Custom theme */
  theme?: Theme
}

type SafeExpandableTextProps = ExpandableTextThemeProps & {
  /** Alternative text */
  altText?: string,
  /** Function-trigger when text expanded */
  onExpand?: (expanded: boolean) => void,
  /** Fades the trailing edge of clipped text into the background behind it */
  useGradient?: boolean
}

export type ExpandableTextProps = TextProps & SafeExpandableTextProps & { children?: ReactNode }
