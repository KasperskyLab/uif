import type { PropPresentationMap } from '@sb/components/Documentation'

export const searchDesignPropPresentation: PropPresentationMap = {
  state: {
    description: 'Интерактивное состояние компонента',
    type: 'focus | hover | disabled | enabled'
  },
  placeholder: {
    description: 'Отображение подсказки-плейсхолдера в пустом поле',
    type: 'true | false'
  },
  value: {
    label: '✏️ value',
    description: 'Текст в поле поиска',
    type: 'Text',
    defaultValue: 'Search'
  },
  showProposedOptions: {
    description: 'Видимость блока с предложенными вариантами поиска',
    type: 'true | false',
    defaultValue: 'true'
  }
}
