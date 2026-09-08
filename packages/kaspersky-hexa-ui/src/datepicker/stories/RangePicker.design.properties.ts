import type { PropPresentationMap } from '@sb/components/Documentation'

export const rangePickerDesignPropPresentation: PropPresentationMap = {
  state: {
    description: 'Интерактивное состояние компонента',
    type: 'hover | enabled | focus | disabled | readonly'
  },
  placeholder: {
    description: 'Отображение placeholder в полях выбора диапазона дат',
    type: 'false | true'
  },
  validationStatus: {
    description: 'Статус валидации полей выбора диапазона дат',
    type: 'success | critical | none'
  },
  description: {
    description: 'Отображение дополнительного описания под полями',
    type: 'Boolean',
    defaultValue: 'false'
  },
  value: {
    label: '✏️ value',
    description: 'Значение диапазона дат в полях ввода',
    type: 'Text',
    defaultValue: '09/23/2024 — 30/10/2024'
  }
}
