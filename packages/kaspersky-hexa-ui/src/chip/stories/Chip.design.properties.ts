import type { PropPresentationMap } from '@sb/components/Documentation'

export const chipDesignPropPresentation: PropPresentationMap = {
  size: {
    description: 'Размер chip',
    type: 'large | medium'
  },
  state: {
    description: 'Интерактивное состояние компонента',
    type: 'active | hover | disabled | enabled'
  },
  disabled: {
    description: 'Неактивное состояние: chip недоступен для взаимодействия',
    type: 'false | true'
  },
  IconBefore: {
    description: 'Отображение иконки перед меткой',
    type: 'Boolean',
    defaultValue: 'false'
  },
  counter: {
    description: 'Отображение числового счётчика справа от метки',
    type: 'Boolean',
    defaultValue: 'false'
  },
  text: {
    label: '✏️ text',
    description: 'Текстовая метка chip',
    type: 'Text',
    defaultValue: 'Label'
  },
  iconBefore_: {
    label: '🔄 iconBefore',
    description: 'Слот для иконки перед меткой. Слот можно заменить любой иконкой размером 16 px',
    type: 'Instance Swap'
  }
}
