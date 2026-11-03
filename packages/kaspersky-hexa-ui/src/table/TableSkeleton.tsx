import { TestingAttributes } from '@helpers/typesHelpers'
import { Skeleton } from '@src/skeleton'
import cn from 'classnames'
import React from 'react'

import styles from './Table.module.scss'

type TableSkeletonProps = {
  testAttributes?: TestingAttributes
}

const ROWS_COUNT = 15
const COLUMNS_COUNT = 5

export const TableSkeleton = ({
  testAttributes
}: TableSkeletonProps): React.ReactElement => (
  <div {...testAttributes} className={styles.loadingSkeleton}>
    {[...Array(ROWS_COUNT).keys()].map(row => (
      <div key={row} className={styles.skeletonRow}>
        <Skeleton
          size="flex"
          className={cn(styles.skeletonCell, styles.skeletonSelectionCell)}
        />
        {[...Array(COLUMNS_COUNT).keys()].map(column => (
          <Skeleton
            key={column}
            size="flex"
            flexWidth
            className={styles.skeletonCell}
          />
        ))}
      </div>
    ))}
  </div>
)
