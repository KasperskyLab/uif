import type { PropPresentationMap } from '@sb/components/Documentation'

export const linkDesignPropPresentation: PropPresentationMap = {
  size: {
    description: 'Размер типографики ссылки',
    type: 'medium (14) | large (16)'
  },
  state: {
    description: 'Интерактивное состояние компонента',
    type: 'active | disabled | hover | default'
  },
  visited: {
    description: 'Визуальное состояние посещённой ссылки',
    type: 'false | true'
  },
  placement: {
    description: 'Позиция тултипа относительно ссылки',
    type: 'top | bottom | left | right | leftBottom | rightBottom | rightTop | top-right | top-left | bottomRight | bottomLeft | leftTop'
  },
  text: {
    label: '✏️ text',
    description: 'Текстовая подпись ссылки',
    type: 'Text',
    defaultValue: 'Ссылка'
  },
  'Icon after': {
    description: 'Отображение иконки после текста',
    type: 'Boolean',
    defaultValue: 'true'
  },
  tooltip: {
    description: 'Отображение тултипа с адресом ссылки',
    type: 'Boolean',
    defaultValue: 'false'
  },
  iconBefore: {
    description: 'Отображение иконки перед текстом',
    type: 'Boolean',
    defaultValue: 'false'
  },
  IconBefore_: {
    label: '🔄 IconBefore',
    description: 'Слот для иконки перед текстом. Слот можно заменить любой иконкой размером 16 px',
    type: 'Instance Swap'
  },
  IconAfter_: {
    label: '🔄 IconAfter',
    description: 'Слот для иконки после текста. Слот можно заменить любой иконкой размером 16 px',
    type: 'Instance Swap'
  }
}
