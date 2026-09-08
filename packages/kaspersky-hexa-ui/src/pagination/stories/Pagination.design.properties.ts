import type { PropPresentationMap } from '@sb/components/Documentation'

export const paginationDesignPropPresentation: PropPresentationMap = {
  sticky: {
    description: 'Фиксированное расположение пагинации',
    type: 'true | false'
  },
  pages: {
    description: 'Отображение номеров страниц',
    type: 'Boolean',
    defaultValue: 'true'
  },
  'total/selected': {
    description: 'Отображение общего количества и выбранных элементов',
    type: 'Boolean',
    defaultValue: 'true'
  },
  quantitySelection: {
    description: 'Отображение выбора количества элементов на странице',
    type: 'Boolean',
    defaultValue: 'true'
  },
  total: {
    label: '✏️ total',
    description: 'Значение общего количества элементов',
    type: 'Text',
    defaultValue: '238'
  },
  selected: {
    label: '✏️ selected',
    description: 'Значение количества выбранных элементов',
    type: 'Text',
    defaultValue: '0'
  },
  jumper: {
    description: 'Отображение поля для перехода к странице',
    type: 'Boolean',
    defaultValue: 'false'
  }
}
