import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { Breadcrumbs } from '@src/breadcrumbs'
import { Tag } from '@src/tag'
import { H3, Text } from '@src/typography'
import React from 'react'
import styled from 'styled-components'

import { pageHeaderCss, prefixClass } from './pageHeaderCss'
import { PageHeaderProps } from './types'

const StyledPageHeader = styled.div`
  ${pageHeaderCss}
`

export const PageHeader = (props: PageHeaderProps): JSX.Element => {
  const {
    breadcrumbs,
    description,
    iconBefore,
    tagsAfter,
    elementAfter,
    title,
    testAttributes
  } = useTestAttribute(props)

  return (
    <StyledPageHeader className={prefixClass} {...testAttributes}>
      {breadcrumbs && <Breadcrumbs {...breadcrumbs} size="small" />}
      <div className={`${prefixClass}-content`}>
        <div className={`${prefixClass}-content-left`}>
          {iconBefore && <div className={`${prefixClass}-content-left-before`}>{iconBefore}</div>}
          <div className={`${prefixClass}-content-left-main`}>
            <div className={`${prefixClass}-content-left-main-title`}>
              <H3>{title}</H3>
              {tagsAfter && tagsAfter.length && (
                <div className={`${prefixClass}-content-left-main-title-tags`}>
                  <Tag.Group items={tagsAfter} />
                </div>
              )}
            </div>
            <Text type="BTR2">{description}</Text>
          </div>
        </div>
        {elementAfter && <div className={`${prefixClass}-content-right`}>{elementAfter}</div>}
      </div>
    </StyledPageHeader>
  )
}
