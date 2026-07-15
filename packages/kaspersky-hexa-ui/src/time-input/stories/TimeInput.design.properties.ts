import type { PropPresentationMap } from '@sb/components/Documentation'

export const timeInputDesignPropPresentation: PropPresentationMap = {
  state: {
    description: 'Интерактивное состояние компонента',
    type: 'focus | hover | enabled | readonly | disabled'
  },
  placeholder: {
    description: 'Отображение подсказки-плейсхолдера вместо введённого значения',
    type: 'false | true'
  },
  validationStatus: {
    description: 'Визуальный статус валидации поля',
    type: 'critical | success | none'
  },
  description: {
    description: 'Показывать дополнительное описание под полем',
    type: 'Boolean',
    defaultValue: 'false'
  },
  value: {
    label: '✏️ value',
    description: 'Значение времени в поле ввода',
    type: 'Text',
    defaultValue: '08:32:56.456'
  }
}
