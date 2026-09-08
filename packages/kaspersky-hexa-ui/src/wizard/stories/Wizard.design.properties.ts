import type { PropPresentationMap } from '@sb/components/Documentation'

export const wizardPageDesignPropPresentation: PropPresentationMap = {
  orientation: {
    description: 'Расположение шагов в макете',
    type: 'horizontal | vertical'
  },
  children_: {
    label: '🔄 children',
    description: 'Содержимое шага мастера',
    type: 'Instance Swap'
  }
}

export const wizardSidebarDesignPropPresentation: PropPresentationMap = {
  size: {
    description: 'Ширина сайдбара в макете',
    type: '1200 | flex'
  }
}
