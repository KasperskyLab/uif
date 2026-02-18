import { Size } from '@design-system/types'
import cn from 'classnames'
import React from 'react'
import styled from 'styled-components'

import { skeletonCss, skeletonTemplateCss } from './skeletonCss'
import { SkeletonProps } from './types'

const SkeletonComponent = ({
  className,
  size,
  flexWidth,
  testAttributes,
  ...rest
}: SkeletonProps): JSX.Element => {
  const cssSizes = {
    small: size === Size.Small,
    medium: size === Size.Medium,
    large: size === Size.Large,
    flex: size === 'flex'
  }
  return (
    <div
      className={cn(className, cssSizes, { 'flex-width': flexWidth })}
      {...testAttributes}
      {...rest}
    />
  )
}

export const Skeleton = styled(SkeletonComponent)`
  ${skeletonCss}
`

export const SkeletonTemplate = styled.div`
  ${skeletonTemplateCss}
`
