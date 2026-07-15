import {
  PropPresentationMap
} from '@sb/components/Documentation'

const popoverPlacements = [
  'top',
  'left',
  'right',
  'bottom',
  'topLeft',
  'topRight',
  'bottomLeft',
  'bottomRight',
  'leftTop',
  'leftBottom',
  'rightTop',
  'rightBottom'
] as const

const popoverTriggers = ['click', 'hover', 'focus'] as const

export const popoverPropPresentation: PropPresentationMap = {
  placement: {
    description: 'Позиция popover относительно триггера. По умолчанию — `bottom`.',
    control: 'select',
    options: [...popoverPlacements]
  },
  trigger: {
    description: 'Способ открытия popover: `click`, `hover` или `focus`. По умолчанию — `click`.',
    control: 'select',
    options: [...popoverTriggers]
  },
  shouldLimitSize: {
    description: 'Ограничивает максимальную ширину и высоту popover. При переполнении появляется прокрутка.',
    control: 'boolean'
  },
  width: {
    description: 'Ширина popover в пикселях.',
    control: { type: 'number', min: 0, step: 1 }
  },
  height: {
    description: 'Высота popover в пикселях.',
    control: { type: 'number', min: 0, step: 1 }
  },
  defaultVisible: {
    description: 'Открыт ли popover по умолчанию при монтировании.',
    control: 'boolean'
  },
  content: {
    description: 'Содержимое popover: текст или произвольная разметка с компонентами Hexa UI.',
    control: 'text'
  },
  children: {
    description: 'Элемент-триггер, к которому привязан popover. В Playground отображается как Button с переданной подписью.',
    control: 'text'
  }
}
