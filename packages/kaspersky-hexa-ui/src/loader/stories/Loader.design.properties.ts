import type { PropPresentationMap } from '@sb/components/Documentation'

export const loaderDesignPropPresentation: PropPresentationMap = {
  size: {
    description: 'Размер индикатора загрузки',
    type: 'large | extraSmall | medium | small | extraLarge'
  },
  inverted: {
    description: 'Инвертированный цветовой режим для тёмного фона',
    type: 'true | false'
  },
  description: {
    description: 'Показывать текстовое описание под индикатором',
    type: 'Boolean',
    defaultValue: 'false'
  }
}
