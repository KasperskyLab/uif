import type { PropPresentationMap } from '@sb/components/Documentation'

export const sectionMessageDesignPropPresentation: PropPresentationMap = {
  mode: {
    description: 'Семантический вариант уведомления',
    type: 'success | info | critical | warning'
  },
  expanded: {
    description: 'Состояние сворачивания содержимого',
    type: 'true | false'
  },
  title: {
    description: 'Отображение заголовка сообщения',
    type: 'false | true'
  }
}
