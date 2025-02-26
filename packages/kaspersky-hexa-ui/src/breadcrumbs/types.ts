import { Focus } from '@design-system/tokens/focus'
import { Theme } from '@design-system/types'
import { TestingProps, ToViewProps } from '@helpers/typesHelpers'

import { TextSizes } from '@kaspersky/hexa-ui-core/typography/js'

type StateProps = {
  color?: string
}

export type BreadcrumbsColorConfig = Focus & {
  enabled?: StateProps,
  hover?: StateProps,
  selected?: StateProps,
  disabled?: StateProps
}

export type BreadcrumbsSize = 'medium' | 'small'

export type BreadcrumbsSizeConfig = TextSizes & {
  gap?: string
}

export type BreadcrumbsCssConfig = BreadcrumbsColorConfig & BreadcrumbsSizeConfig

export type BreadcrumbsThemeProps = {
  /** Custom theme */
  theme?: Theme,
  /** Size */
  size?: BreadcrumbsSize
}

export type BreadcrumbsItemProps = {
  route: Route,
  isLastItem?: boolean,
  cssConfig: BreadcrumbsCssConfig,
  size: BreadcrumbsSize
}

export type Route = {
  /** Name of the breadcrumb */
  name: string,
  /** Disabled state */
  disabled?: boolean,
  /** URL of the breadcrumb */
  url?: string,
  /** Handler of the click event */
  onClick?: () => void
}

export type BreadcrumbsProps = BreadcrumbsThemeProps & TestingProps & {
  /** Array of routes for breadcrumbs */
  routes?: Route[]
}

export type BreadcrumbsViewProps = ToViewProps<BreadcrumbsProps, BreadcrumbsCssConfig, Omit<BreadcrumbsThemeProps, 'size'>>
