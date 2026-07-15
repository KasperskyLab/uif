import type { PropPresentationMap } from '@sb/components/Documentation'

export const tagDesignPropPresentation: PropPresentationMap = {
  mode: {
    description: 'Цветовой режим тега',
    type: 'emerald | ai | red | marina | purple | marengo | grass | yellow | orange | violet | grey | neutral | ghost | filled | onLight | ghostInverted'
  },
  outlined: {
    description: 'Контурный вариант тега',
    type: 'true | false'
  },
  size: {
    description: 'Размер тега',
    type: 'medium | small | large'
  },
  state: {
    description: 'Интерактивное состояние компонента',
    type: 'hover | enabled | active | readonly | disabled'
  },
  invalid: {
    description: 'Невалидное состояние тега',
    type: 'false | true'
  },
  variant: {
    description: 'Вариант отображения — с текстом или только с иконкой',
    type: 'iconButton | button'
  },
  iconBefore: {
    description: 'Видимость иконки перед текстом тега',
    type: 'Boolean',
    defaultValue: 'false'
  },
  dismissible: {
    description: 'Видимость кнопки закрытия тега',
    type: 'Boolean',
    defaultValue: 'false'
  },
  text: {
    label: '✏️ text',
    description: 'Текстовое содержимое тега',
    type: 'Text',
    defaultValue: 'Tag'
  },
  iconBefore_: {
    label: '🔄 iconBefore',
    description: 'Слот для иконки перед текстом тега',
    type: 'Instance Swap'
  },
  elementAfter: {
    description: 'Видимость элемента после текста тега',
    type: 'Boolean',
    defaultValue: 'false'
  }
}

export const tagGroupDesignPropPresentation: PropPresentationMap = {
  orientation: {
    description: 'Направление расположения тегов в группе',
    type: 'horizontal | vertical'
  }
}
