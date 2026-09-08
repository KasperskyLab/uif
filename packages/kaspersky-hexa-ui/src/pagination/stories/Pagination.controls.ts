import { PropPresentationMap } from '@sb/components/Documentation'

export const defaultArgs = {
  current: 1,
  pageSize: 25,
  total: 500,
  disabled: false,
  hideOnSinglePage: false,
  showSizeChanger: false,
  showLessItems: true,
  jumper: false,
  selected: 25,
  showSelected: true,
  cursor: false,
  simple: false,
  testId: 'pagination-test-id',
  klId: 'pagination-kl-id'
}

export const paginationPropPresentation: PropPresentationMap = {
  current: {
    control: { type: 'number', min: 1 },
    description: 'Номер текущей страницы'
  },
  pageSize: {
    control: { type: 'number', min: 1 },
    description: 'Количество элементов на странице'
  },
  total: {
    control: { type: 'number', min: 0 },
    description: 'Общее количество элементов'
  },
  disabled: {
    control: 'boolean',
    description: 'Отключает взаимодействие с пагинацией'
  },
  hideOnSinglePage: {
    control: 'boolean',
    description: 'Скрывает пагинацию, если доступна одна страница'
  },
  showSizeChanger: {
    control: 'boolean',
    description: 'Показывает выбор количества элементов на странице'
  },
  showLessItems: {
    control: 'boolean',
    description: 'Сокращает количество отображаемых номеров страниц'
  },
  jumper: {
    control: 'boolean',
    description: 'Показывает поле для перехода к странице по номеру'
  },
  selected: {
    control: { type: 'number', min: 0 },
    description: 'Количество выбранных элементов'
  },
  showSelected: {
    control: 'boolean',
    description: 'Показывает количество выбранных элементов в сводке'
  },
  cursor: {
    control: 'boolean',
    description: 'Ограничивает переход к последней странице в курсорной пагинации'
  },
  simple: {
    control: 'boolean',
    description: 'Скрывает сводку по количеству и выбранным элементам'
  }
}
