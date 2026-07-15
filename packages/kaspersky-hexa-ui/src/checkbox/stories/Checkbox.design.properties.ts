import type { PropPresentationMap } from '@sb/components/Documentation'

export const checkboxDesignPropPresentation: PropPresentationMap = {
  state: {
    description: 'Интерактивное состояние компонента',
    type: 'enabled | hover | active | disabled | readonly',
    defaultValue: 'enabled'
  },
  selected: {
    description: 'Отмеченное состояние чекбокса',
    type: 'false | true',
    defaultValue: 'false'
  },
  indeterminate: {
    description: 'Промежуточное состояние при частичном выборе',
    type: 'false | true',
    defaultValue: 'false'
  },
  text: {
    description: 'Отображение текстовой подписи',
    type: 'true | false',
    defaultValue: 'true'
  },
  invalid: {
    description: 'Состояние ошибки валидации',
    type: 'false | true',
    defaultValue: 'false'
  },
  disabled: {
    description: 'Неактивное состояние: компонент недоступен для взаимодействия',
    type: 'false | true',
    defaultValue: 'false'
  },
  description: {
    description: 'Отображение поясняющего текста под чекбоксом',
    type: 'Boolean',
    defaultValue: 'false'
  }
}
