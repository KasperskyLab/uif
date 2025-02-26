import { Theme } from '@design-system/types'
import { TestingProps, ToViewProps } from '@helpers/typesHelpers'
import { AnchorLinkProps } from '@src/anchor-links'
import { MouseEvent } from 'react'

export type AnchorColorConfig = {
  background?: string
}

export type AnchorCssConfig = AnchorColorConfig

export type AnchorThemeProps = {
  /** Custom theme */
  theme?: Theme
}

export type AnchorProps = {
  /** Fixed mode of Anchor */
  affix?: boolean,
  /** Bounding distance of anchor area */
  bounds?: number,
  /** Scrolling container */
  getContainer?: () => HTMLElement,
  /** Customize the anchor highlight */
  getCurrentAnchor?: (activeLink?: string) => string,
  /** Pixels to offset from top when calculating position of scroll */
  offsetTop?: number,
  /** Whether show ink-balls when affix={false} */
  showInkInFixed?: boolean,
  /** Anchor scroll offset, default as offsetTop */
  targetOffset?: number,
  /** Listening for anchor link change */
  onChange?: (currentActiveLink?: string) => void,
  /** Set the handler to handle click event */
  onClick?: (e: MouseEvent<HTMLElement>, link: AnchorLinkProps) => void,
  /** Anchor links */
  items: AnchorLinkProps[]
} & AnchorThemeProps & TestingProps

export type AnchorViewProps = ToViewProps<AnchorProps, AnchorCssConfig, AnchorThemeProps>
