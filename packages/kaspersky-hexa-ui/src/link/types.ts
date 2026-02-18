import { Focus } from '@design-system/tokens/focus'
import { Theme } from '@design-system/types'
import { TestingProps, ToViewProps } from '@helpers/typesHelpers'
import { AnchorHTMLAttributes, HTMLAttributeAnchorTarget, ReactNode } from 'react'

import { TextSizes } from '@kaspersky/hexa-ui-core/typography/js'

type StateProps = {
  color: string
}

export type LinkColorConfig = Focus & {
  enabled: StateProps,
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

export type LinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'type'> & {
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
  /** Controls tooltip visibility only for link with icon */
  isTooltipVisible?: boolean
} & LinkThemeProps & TestingProps

export type LinkViewProps = ToViewProps<LinkProps, LinkCssConfig, LinkThemeProps>
