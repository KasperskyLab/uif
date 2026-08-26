import type { PropPresentationMap } from '@sb/components/Documentation'

import { Size } from '@design-system/types'

import { SkeletonProps, skeletonSizes } from '../types'

export const defaultArgs = {
  flexWidth: false,
  size: Size.Medium
} satisfies Partial<SkeletonProps>

export const skeletonPropPresentation: PropPresentationMap = {
  size: {
    control: 'select',
    options: [...skeletonSizes],
    description: 'Размер и габариты заглушки'
  },
  flexWidth: {
    control: 'boolean',
    description: 'Растягивать заглушку на доступную ширину'
  }
}
