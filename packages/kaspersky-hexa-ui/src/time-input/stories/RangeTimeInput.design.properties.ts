import type { PropPresentationMap } from '@sb/components/Documentation'

export const rangeTimeInputDesignPropPresentation: PropPresentationMap = {
  state: {
    description: 'Интерактивное состояние компонента',
    type: 'readonly | disabled | focus | hover | enabled'
  },
  placeholder: {
    description: 'Отображение placeholder в полях выбора диапазона времени',
    type: 'false | true'
  },
  validationStatus: {
    description: 'Статус валидации полей выбора диапазона времени',
    type: 'success | critical | none'
  },
  description: {
    description: 'Отображение дополнительного описания под полями',
    type: 'Boolean',
    defaultValue: 'false'
  },
  value: {
    label: '✏️ value',
    description: 'Значение диапазона времени в полях ввода',
    type: 'Text',
    defaultValue: '08:30:00.000 – 14:30:00.000'
  }
}
