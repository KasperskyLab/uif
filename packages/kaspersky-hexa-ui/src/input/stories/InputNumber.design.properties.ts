import type { PropPresentationMap } from '@sb/components/Documentation'

export const inputNumberDesignPropPresentation: PropPresentationMap = {
  state: {
    description: 'Интерактивное состояние компонента',
    type: 'focus | disabled | hover | readonly | enabled'
  },
  placeholder: {
    description: 'Отображение подсказки-плейсхолдера вместо введённого значения',
    type: 'false | true'
  },
  validationStatus: {
    description: 'Визуальный статус валидации поля',
    type: 'success | default | error'
  },
  description: {
    description: 'Показывать дополнительное описание под полем',
    type: 'Boolean',
    defaultValue: 'false'
  },
  prefix: {
    description: 'Отображение префикса перед полем ввода',
    type: 'Boolean',
    defaultValue: 'false'
  },
  suffix: {
    description: 'Отображение суффикса после поля ввода',
    type: 'Boolean',
    defaultValue: 'false'
  },
  prefixText: {
    label: '✏️ prefix',
    description: 'Текст префикса',
    type: 'Text',
    defaultValue: '$'
  },
  suffixText: {
    label: '✏️ suffix',
    description: 'Текст суффикса',
    type: 'Text',
    defaultValue: '₽'
  },
  value: {
    label: '✏️ value',
    description: 'Числовое значение в поле',
    type: 'Text',
    defaultValue: '150'
  }
}
