import React from 'react'

import { Breadcrumbs as HexaBreadcrumbs } from '@src/breadcrumbs'
import { BreadcrumbsProps } from '@src/breadcrumbs/types'

import { previewBreadcrumbRoutes } from '../../preview'

const Breadcrumbs = ({
  routes = previewBreadcrumbRoutes,
  ...props
}: BreadcrumbsProps): JSX.Element => (
  <HexaBreadcrumbs routes={routes} {...props} />
)

export default Breadcrumbs
