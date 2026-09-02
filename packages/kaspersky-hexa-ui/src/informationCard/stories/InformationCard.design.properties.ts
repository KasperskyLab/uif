import type { PropPresentationMap } from '@sb/components/Documentation'

export const informationCardDesignPropPresentation: PropPresentationMap = {
  interactive: {
    description: 'Наличие интерактивного поведения карточки',
    type: 'false | true'
  },
  selected: {
    description: 'Состояние выбора карточки',
    type: 'false | true'
  },
  size: {
    description: 'Размер карточки',
    type: 'medium | small'
  },
  state: {
    description: 'Интерактивное состояние компонента',
    type: 'disabled | active | hover | enabled'
  },
  type: {
    description: 'Расположение элементов внутри карточки',
    type: 'vertical | horizontal | central'
  }
}
