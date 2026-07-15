import type { PropPresentationMap } from '@sb/components/Documentation'

export const checkboxGroupDesignPropPresentation: PropPresentationMap = {
  orientation: {
    description: 'Расположение чекбоксов в группе',
    type: 'vertical | horizontal'
  },
  invalid: {
    description: 'Состояние ошибки валидации для всей группы',
    type: 'false | true'
  }
}
