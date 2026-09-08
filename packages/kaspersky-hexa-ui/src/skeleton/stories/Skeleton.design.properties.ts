import type { PropPresentationMap } from '@sb/components/Documentation'

export const skeletonDesignPropPresentation: PropPresentationMap = {
  size: {
    description: 'Размер заглушки',
    type: 'small (20px) | medium (24px) | large (32px) | flex'
  },
  flexWidth: {
    description: 'Растягивать заглушку по ширине контейнера',
    type: 'false | true'
  }
}
