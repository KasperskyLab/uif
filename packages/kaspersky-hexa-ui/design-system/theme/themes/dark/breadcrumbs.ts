import { BreadcrumbsColorConfig } from '@src/breadcrumbs/types'

import { ComponentThemeContext } from '../config'
import {
  breadcrumbs as defaultBreadcrumbs,
  breadcrumbsSize as defaultBreadcrumbsSize
} from '../light/breadcrumbs'

export const breadcrumbs = ({ colors, effects }: ComponentThemeContext): BreadcrumbsColorConfig =>
  defaultBreadcrumbs({ colors, effects })

export const breadcrumbsSize = defaultBreadcrumbsSize
