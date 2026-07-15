import type { PropPresentationMap } from '@sb/components/Documentation'

export const accordionDesignPropPresentation: PropPresentationMap = {
  withBorder: {
    description: 'Рамка и фон вокруг панели аккордеона.',
    type: 'true | false'
  },
  titleSize: {
    description: 'Размер типографики заголовка панели.',
    type: 'extraSmall | small | medium | large'
  },
  state: {
    description: 'Интерактивное состояние компонента.',
    type: 'enabled | disabled'
  },
  disabled: {
    description: 'Неактивное состояние: панель недоступна для раскрытия и взаимодействия.',
    type: 'false | true'
  },
  expanded: {
    description: 'Состояние панели: развёрнута (true) или свёрнута (false).',
    type: 'true | false'
  },
  children_: {
    label: '🔄 children',
    description: 'Слот для содержимого панели, отображаемого при развёрнутом состоянии.',
    type: 'Instance Swap'
  },
  tagBefore: {
    description: 'Отображение Tag перед заголовком.',
    type: 'Boolean',
    defaultValue: 'false'
  },
  indicatorBefore: {
    description: 'Отображение Indicator перед заголовком.',
    type: 'Boolean',
    defaultValue: 'false'
  },
  title: {
    description: 'Текст основного заголовка панели.',
    type: 'Text',
    defaultValue: 'Title'
  },
  tagAfter: {
    description: 'Отображение Tag сразу после заголовка.',
    type: 'Boolean',
    defaultValue: 'false'
  },
  additionalText: {
    description: 'Отображение дополнительного текста в шапке справа от заголовка и тега.',
    type: 'Boolean',
    defaultValue: 'false'
  },
  elementAfter: {
    description: 'Отображение дополнительного элемента в конце шапки.',
    type: 'Boolean',
    defaultValue: 'false'
  },
  elementAfter_: {
    label: '🔄 elementAfter',
    description: 'Слот для elementAfter. Можно заменить любым компонентом.',
    type: 'Instance Swap'
  },
  actions: {
    description: 'Отображение кнопки меню действий (Action Button) в правой части шапки.',
    type: 'Boolean',
    defaultValue: 'false'
  }
}
