import type { PropPresentationMap } from '@sb/components/Documentation'

export const datePickerDesignPropPresentation: PropPresentationMap = {
  state: {
    description: 'Интерактивное состояние компонента',
    type: 'hover | enabled | focus | disabled | readonly'
  },
  placeholder: {
    description: 'Наличие плейсхолдера в поле',
    type: 'false | true'
  },
  validationStatus: {
    description: 'Статус валидации поля',
    type: 'success | critical | none'
  },
  description: {
    description: 'Отображение дополнительного описания под полем',
    type: 'Boolean',
    defaultValue: 'false'
  },
  value: {
    label: '✏️ value',
    description: 'Значение даты в поле ввода',
    type: 'Text',
    defaultValue: '10/23/2024'
  }
}
