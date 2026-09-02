import type { PropPresentationMap } from '@sb/components/Documentation'

export const textboxDesignPropPresentation: PropPresentationMap = {
  state: {
    description: 'Интерактивное состояние компонента',
    type: 'focus | readonly | disabled | hover | enabled'
  },
  placeholder: {
    description: 'Отображение подсказки-плейсхолдера в пустом поле',
    type: 'true | false'
  },
  validationStatus: {
    description: 'Визуальный статус валидации поля',
    type: 'default | success | error'
  },
  description: {
    description: 'Показывать дополнительное описание под полем',
    type: 'Boolean',
    defaultValue: 'false'
  },
  value: {
    label: '✏️ value',
    description: 'Текст в поле ввода',
    type: 'Text',
    defaultValue: 'Text'
  },
  clearable: {
    description: 'Показывать кнопку очистки значения',
    type: 'Boolean',
    defaultValue: 'false'
  }
}
