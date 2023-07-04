import { ReactNode, MouseEvent } from 'react'
import { Theme } from '../../design-system/types/Theme'

export type AnchorLinkColorConfig = {
  normal?: {
    color?: string,
    hover?: {
      color?: string
    }
  },
  active?: {
    color?: string,
    background?: string,
    hover?: {
      color?: string,
      background?: string
    }
  }
}

export type AnchorLinkSizeConfig = {
  links?: {
    padding?: string,
    borderRadius?: string,
    fontSize?: string
  }
}

export type AnchorLinkCssConfig = AnchorLinkColorConfig & AnchorLinkSizeConfig

export type AnchorColorConfig = {
  background?: string
}

export type AnchorSizeConfig = {
  wrapper?: {
    padding?: string,
    borderRadius?: string
  }
}

export type AnchorCssConfig = AnchorColorConfig & AnchorSizeConfig

export type AnchorStyleProps = {
  /** Custom theme */
  theme?: Theme,
  /** CSS Config */
  cssConfig?: AnchorLinkStyleProps
}

export type AnchorLinkProps = {
  /**
   * The target of hyperlink
   */
  href: string,
  /**
   * Specifies where to display the linked URL
   */
  target?: string,
  /**
   * The content of hyperlink
   */
  title: ReactNode,
  /**
   *  React children
   */
  children?: ReactNode | undefined
} & AnchorLinkStyleProps

export type AnchorLinkStyleProps = {
  /** Custom theme */
  theme?: Theme,
  /** CSS Config */
  cssConfig?: AnchorLinkCssConfig
}

export type IAnchorProps = {
  /**
   * Test id
   */
  klId?: string,
  /**
   * Fixed mode of Anchor    true
   */
  affix?: boolean,
  /**
   * Bounding distance of anchor area
   */
  bounds?: number,
  /**
   * Scrolling container
   */
  getContainer?: () => HTMLElement,
  /**
   * Customize the anchor highlight
   */
  getCurrentAnchor?: (activeLink?: string) => string,
  /**
   * Pixels to offset from top when calculating position of scroll  number  0
   */
  offsetTop?: number,
  /**
   * Whether show ink-balls when affix={false} false
   */
  showInkInFixed?: boolean,
  /**
   * Anchor scroll offset, default as offsetTop, example
   */
  targetOffset?: number,
  /**
   * Listening for anchor link change
   */
  onChange?: (currentActiveLink?: string) => void,
  /**
   * Set the handler to handle click event
   */
  onClick?: (e: MouseEvent<HTMLElement>, link: AnchorLinkProps) => void,
  /**
   *  React children
   */
  children?: ReactNode | undefined
} & AnchorStyleProps

export type IAnchorViewProps = AnchorStyleProps & IAnchorProps
