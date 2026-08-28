import { Theme } from '@design-system/types'
import { TextProps } from '@src/typography'
import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

type OwnProps<E extends ElementType> = {
  children?: ReactNode
  className?: string
  /** Element or component to render as the root. Defaults to a plain `div`. */
  as?: E
  /** Fades the trailing edge of clipped content into the background behind it. */
  useGradient?: boolean
  /** Called when the content is expanded or collapsed. */
  onExpand?: (expanded: boolean) => void
  /** Extra class applied while the content does not fit. */
  clippedClassName?: string
  /** Extra class applied while the content is expanded. */
  expandedClassName?: string
  /** Native tooltip offered while the content is clipped. */
  clippedTitle?: string
}

export type ExpandableContentProps<E extends ElementType = 'div'> =
  OwnProps<E> & Omit<ComponentPropsWithoutRef<E>, keyof OwnProps<E>>

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

export type ExpandableTextProps = TextProps & SafeExpandableTextProps
