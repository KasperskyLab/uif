import { AnchorHTMLAttributes, HTMLAttributeAnchorTarget, ReactNode } from 'react'
import { Theme } from '@design-system/types'
import { TextSizes, TextTypes } from '@design-system/tokens'
import { TestingProps, ToViewProps } from '@helpers/typesHelpers'
import { Focus } from '@design-system/tokens/focus'

type StateProps = {
  color: string
}

export type LinkColorConfig = Focus & {
  normal: StateProps,
  visited: StateProps,
  hover: StateProps,
  active: StateProps,
  disabled: StateProps
}

export type LinkSizeConfig = Partial<TextSizes> & {
  borderRadius: string,
  borderWidth: string
}

export type LinkThemeProps = {
  /** Custom theme */
  theme?: Theme,
  /** Link text size */
  size?: LinkSize
}

export type LinkCssConfig = LinkColorConfig & LinkSizeConfig

export type LinkSize = 'medium' | 'large' | 'noSize'

export type LinkDecorationType = 'icon' | 'none'

export type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  /** Link text */
  text?: string,
  /** With icon or not */
  decoration?: LinkDecorationType,
  /** Disabled state */
  disabled?: boolean,
  /** Link can be visited */
  visited?: boolean,
  /** Icon */
  icon?: ReactNode,
  /** Icon Position */
  iconPosition?: 'before' | 'after',
  /** Link */
  href?: string,
  /** Same as 'target' <a> attribute */
  target?: HTMLAttributeAnchorTarget,
  /** Css class */
  className?: string,
  /** Name for anchor */
  name?: string,
  /** HTML attribute 'title' */
  title?: string,
  /** @deprecated Text type - use size instead */
  type?: keyof typeof TextTypes
} & LinkThemeProps & TestingProps

export type LinkViewProps = ToViewProps<LinkProps, LinkCssConfig, LinkThemeProps>

/** @deprecated Use LinkThemeProps instead */
export type LinkStyleProps = LinkThemeProps
/** @deprecated Use LinkProps instead */
export type ILinkProps = LinkProps
/** @deprecated Use LinkViewProps instead */
export type ILinkViewProps = LinkViewProps
