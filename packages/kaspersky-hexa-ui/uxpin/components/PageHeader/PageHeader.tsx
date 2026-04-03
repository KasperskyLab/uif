import React from 'react'

import { Button } from '@src/button'
import { PageHeader as HexaPageHeader } from '@src/page-header'
import { PageHeaderProps } from '@src/page-header/types'

import { Placeholder } from '@kaspersky/hexa-ui-icons/24'

import {
  FrameFill,
  previewBreadcrumbRoutes,
  previewPageHeaderTags
} from '../../preview'

const PageHeader = ({
  breadcrumbs = { routes: previewBreadcrumbRoutes },
  description = 'Page description',
  elementAfter = <Button text="Create" />,
  iconBefore = <Placeholder />,
  tagsAfter = previewPageHeaderTags,
  title = 'Page title',
  ...props
}: PageHeaderProps): JSX.Element => (
  <FrameFill>
    <HexaPageHeader
      breadcrumbs={breadcrumbs}
      description={description}
      elementAfter={elementAfter}
      iconBefore={iconBefore}
      tagsAfter={tagsAfter}
      title={title}
      {...props}
    />
  </FrameFill>
)

export default PageHeader
