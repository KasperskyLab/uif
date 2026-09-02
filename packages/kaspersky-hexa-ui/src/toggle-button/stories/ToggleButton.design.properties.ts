import type { PropPresentationMap } from '@sb/components/Documentation'

export const toggleButtonDesignPropPresentation: PropPresentationMap = {
  mode: {
    description: 'Цветовой режим кнопки',
    type: 'marina | violet | purple | grey | marengo | emerald | grass | yellow | orange | red'
  },
  size: {
    description: 'Размер кнопки',
    type: 'medium | extraSmall | small'
  },
  state: {
    description: 'Интерактивное состояние компонента',
    type: 'active | hover | enabled'
  },
  selected: {
    description: 'Состояние выбора кнопки',
    type: 'True | False'
  },
  disabled: {
    description: 'Недоступность кнопки',
    type: 'false | true'
  },
  loading: {
    description: 'Состояние загрузки кнопки',
    type: 'false | true'
  },
  elementAfter: {
    description: 'Видимость элемента после текста',
    type: 'Boolean',
    defaultValue: 'false'
  },
  iconBefore: {
    description: 'Видимость иконки перед текстом',
    type: 'Boolean',
    defaultValue: 'true'
  },
  iconBefore_: {
    label: '🔄 iconBefore',
    description: 'Иконка перед текстом',
    type: 'Instance Swap'
  },
  text: {
    label: '✏️ text',
    description: 'Текст кнопки',
    type: 'Text',
    defaultValue: 'Toggle button'
  }
}
