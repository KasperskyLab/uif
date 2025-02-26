import { Focus } from '@design-system/tokens/focus'
import { Theme } from '@design-system/types'
import { TestingProps, ToViewProps } from '@helpers/typesHelpers'
import { ReactNode } from 'react'

type ColorStateProps = {
  background?: string,
  color?: string
}

export type AnchorLinkColorConfig = Focus & {
  default?: {
    enabled?: ColorStateProps,
    hover?: ColorStateProps,
    pressed?: ColorStateProps
  },
  active?: ColorStateProps,
  boxShadow?: string
}

export type AnchorLinkCssConfig = AnchorLinkColorConfig

export type AnchorLinkThemeProps = {
  theme?: Theme
}

export type AnchorLinkProps = {
  /** The target of hyperlink */
  href: string,
  /** Specifies where to display the linked URL */
  target?: number,
  /** The content of hyperlink */
  title: string,
  /** Counter value */
  counter?: number,
  /** Does the anchor link have notification dot */
  hasNotification?: boolean,
  /** If anchor link is hidden in dropdown */
  hidden?: boolean,
  /** React children */
  children?: ReactNode | undefined
} & AnchorLinkThemeProps & TestingProps

export type AnchorLinkViewProps = ToViewProps<AnchorLinkProps, AnchorLinkCssConfig, AnchorLinkThemeProps>
