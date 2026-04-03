import React from 'react'

import { Size } from '@design-system/types'
import { Skeleton as HexaSkeleton } from '@src/skeleton'
import { SkeletonProps } from '@src/skeleton/types'

const Skeleton = ({
  size = Size.Medium,
  ...props
}: SkeletonProps): JSX.Element => <HexaSkeleton size={size} {...props} />

export default Skeleton
