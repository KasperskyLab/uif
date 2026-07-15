import type { PropPresentationMap } from '@sb/components/Documentation'

export const popoverDesignPropPresentation: PropPresentationMap = {
  placement: {
    description: 'Позиция popover относительно триггера',
    type: 'rightBottom | rightTop | right | left | leftBottom | leftTop | bottom | bottomRight | bottomLeft | top | topRight | topLeft'
  },
  value: {
    description: 'Тип содержимого popover',
    type: 'slot | text'
  },
  variant: {
    description: 'Визуальный вариант popover',
    type: 'compact | simple | default'
  },
  orientation: {
    description: 'Ориентация содержимого popover',
    type: 'horizontal | vertical'
  },
  state: {
    description: 'Интерактивное состояние компонента',
    type: 'active | hover | enabled'
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
