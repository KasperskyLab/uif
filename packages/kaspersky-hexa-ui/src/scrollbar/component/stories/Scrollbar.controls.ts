import { PropPresentationMap } from '@sb/components/Documentation'

export const defaultArgs = {
  autoHide: false,
  children: 'Scrollbar content'
}

export const scrollbarPropPresentation: PropPresentationMap = {
  children: {
    control: 'text',
    description: 'Содержимое прокручиваемой области'
  },
  autoHide: {
    control: 'boolean',
    description: 'Скрывать полосы прокрутки вне наведения и скролла'
  },
  autoHideTimeout: {
    control: 'number',
    description: 'Задержка перед скрытием в режиме autoHide, мс'
  },
  autoHideDuration: {
    control: 'number',
    description: 'Длительность анимации скрытия в режиме autoHide, мс'
  },
  autoHeight: {
    control: 'boolean',
    description: 'Подстраивать высоту контейнера по содержимому в пределах min/max'
  },
  autoHeightMin: {
    control: 'text',
    description: 'Минимальная высота контейнера при autoHeight'
  },
  autoHeightMax: {
    control: 'text',
    description: 'Максимальная высота контейнера при autoHeight'
  },
  thumbMinSize: {
    control: 'number',
    description: 'Минимальный размер ползунка в пикселях'
  },
  universal: {
    control: 'boolean',
    description: 'SSR-совместимый режим рендера'
  },
  theme: {
    control: 'radio',
    description: 'Тема оформления полосы прокрутки',
    options: ['light', 'dark']
  }
}
