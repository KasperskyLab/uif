import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { Breadcrumbs } from '@src/breadcrumbs'
import { Tag } from '@src/tag'
import { H3, Text } from '@src/typography'
import cn from 'classnames'
import React from 'react'

import styles from './PageHeader.module.scss'
import { PageHeaderProps } from './types'

export const PageHeader = (props: PageHeaderProps): JSX.Element => {
  const {
    breadcrumbs,
    description,
    iconBefore,
    tagsAfter,
    elementAfter,
    title,
    testAttributes,
    className
  } = useTestAttribute(props)

  return (
    <div className={cn('hexa-ui-page-header', className, styles.pageHeader)} {...testAttributes}>
      {breadcrumbs && <Breadcrumbs {...breadcrumbs} size="small" />}
      <div className={styles.content}>
        <div className={styles.contentLeft}>
          {iconBefore && <div className={styles.contentLeftBefore}>{iconBefore}</div>}
          <div className={styles.contentLeftMain}>
            <div className={styles.contentLeftMainTitle}>
              <H3>{title}</H3>
              {tagsAfter && tagsAfter.length && (
                <div className={styles.contentLeftMainTitleTags}>
                  <Tag.Group items={tagsAfter} />
                </div>
              )}
            </div>
            {description && <Text type="BTR2">{description}</Text>}
          </div>
        </div>
        {elementAfter && <div className={styles.contentRight}>{elementAfter}</div>}
      </div>
    </div>
  )
}
