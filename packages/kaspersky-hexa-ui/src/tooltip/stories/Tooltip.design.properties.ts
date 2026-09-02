import type { PropPresentationMap } from '@sb/components/Documentation'

export const tooltipDesignPropPresentation: PropPresentationMap = {
  placement: {
    description: 'Расположение подсказки относительно элемента в макете',
    type: 'leftTop | leftBottom | rightTop | rightBottom | top-left | top-right | bottomRight | bottomLeft | left | right | top | bottom'
  },
  text: {
    label: '✏️ text',
    description: 'Текстовое содержимое подсказки в макете',
    type: 'Text',
    defaultValue: 'Какой-то короткий текст'
  }
}
