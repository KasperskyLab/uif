import type { PropPresentationMap } from '@sb/components/Documentation'

export const radioDesignPropPresentation: PropPresentationMap = {
  state: {
    description: 'Интерактивное состояние компонента',
    type: 'enabled | active | hover | disabled | readonly'
  },
  disabled: {
    description: 'Неактивное состояние: компонент недоступен для взаимодействия',
    type: 'false | true'
  },
  selected: {
    description: 'Отмеченное состояние радиокнопки',
    type: 'true | false'
  },
  label: {
    description: 'Отображение текстовой подписи рядом с радиокнопкой',
    type: 'false | true'
  },
  invalid: {
    description: 'Состояние ошибки валидации',
    type: 'false | true'
  },
  description: {
    description: 'Отображение поясняющего текста под опцией',
    type: 'Boolean',
    defaultValue: 'false'
  }
}
