import type { PropPresentationMap } from '@sb/components/Documentation'

export const anchorNavigationDesignPropPresentation: PropPresentationMap = {
  scrollbar: {
    description: 'Отображение полосы прокрутки навигационной панели',
    type: 'Boolean',
    defaultValue: 'false'
  },
  title: {
    description: 'Отображение заголовка над списком пунктов навигации',
    type: 'Boolean',
    defaultValue: 'true'
  },
  titleText: {
    label: '✏️ title',
    description: 'Текст заголовка навигационной панели',
    type: 'Text',
    defaultValue: 'Page content'
  }
}

export const navigationItemDesignPropPresentation: PropPresentationMap = {
  state: {
    description: 'Интерактивное состояние компонента',
    type: 'enabled | hover | active'
  },
  selected: {
    description: 'Выбранный пункт навигации',
    type: 'false | true'
  },
  level: {
    description: 'Уровень вложенности пункта в иерархии навигации',
    type: '1 | 2 | 3'
  },
  text: {
    label: '✏️ text',
    description: 'Текстовая подпись пункта навигации',
    type: 'Text',
    defaultValue: 'anchor link item'
  },
  elementAfter: {
    description: 'Отображение дополнительного элемента справа от подписи',
    type: 'Boolean',
    defaultValue: 'false'
  },
  elementAfter_: {
    label: '🔄 elementAfter',
    description: 'Слот для elementAfter — можно заменить любым компонентом',
    type: 'Instance Swap'
  }
}
