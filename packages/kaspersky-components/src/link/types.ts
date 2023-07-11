import { AnchorHTMLAttributes, ReactNode } from 'react'
import { TextSizes, TextTypes } from '../../design-system/tokens'
import { Theme } from '../../design-system/types'

type StateProps = {
  color: string
}

export type LinkColorConfig = {
  normal: StateProps,
  hover: StateProps,
  focus: StateProps,
  active: StateProps,
  disabled: StateProps,
  focusOutline: StateProps
}

export type LinkSizeConfig = {
  gap: string,
  borderRadius: string,
  outlineWidth: string
}

export type LinkStyleProps = {
  /** Custom theme */
  theme?: Theme,
  /** Text type */
  type?: keyof typeof TextTypes
}

export type LinkCssConfig = LinkColorConfig & LinkSizeConfig & TextSizes

export type ILinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & LinkStyleProps & {
  /** Text */
  text?: string,
  /** Underline */
  decoration?: 'underline' | 'icon' | 'none',
  /** Disabled state */
  disabled?: boolean,
  /** Test id */
  klId?: string,
  /** Link */
  href?: string,
  /** Same as 'target' <a> attribute */
  target?: string,
  /** Css class */
  className?: string,
  /** Name for anchor */
  name?: string,
  /** HTML attribute 'title' */
  title?: string,
  /** Icon */
  icon?: ReactNode,
  /** Icon Position */
  iconPosition?: 'before' | 'after'
}

export type ILinkViewProps = Omit<ILinkProps, keyof LinkStyleProps> & { cssConfig: LinkCssConfig }
