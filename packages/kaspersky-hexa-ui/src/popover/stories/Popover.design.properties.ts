import type { PropPresentationMap } from '@sb/components/Documentation'

export const popoverDesignPropPresentation: PropPresentationMap = {
  placement: {
    description: 'Позиция popover относительно триггера',
    type: 'bottom | top | right | left | bottomLeft | topLeft | bottomRight | topRight | rightTop | rightBottom | leftTop | leftBottom'
  },
  value: {
    description: 'Тип содержимого popover',
    type: 'text | slot'
  },
  scrollbar: {
    description: 'Отображение полосы прокрутки внутри popover',
    type: 'Boolean',
    defaultValue: 'false'
  },
  children_: {
    label: '🔄 children',
    description: 'Слот для элемента-триггера',
    type: 'Instance Swap'
  }
}
