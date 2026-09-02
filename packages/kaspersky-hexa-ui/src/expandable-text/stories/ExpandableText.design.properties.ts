import type { PropPresentationMap } from '@sb/components/Documentation'

export const expandableTextDesignPropPresentation: PropPresentationMap = {
  expanded: { description: 'Состояние раскрытия текста', type: 'true | false' },
  useGradient: { description: 'Использовать градиент у обрезанного текста', type: 'true | false' },
  children_: { label: '🔄 children', description: 'Содержимое текстового блока', type: 'Instance Swap' }
}
