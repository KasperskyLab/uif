import { PropPresentationMap } from '@sb/components/Documentation'

export const defaultArgs = {
  collapsedHeight: 64,
  textToExpand: 'Развернуть',
  textToCollapse: 'Свернуть'
}

export const expandPropPresentation: PropPresentationMap = {
  collapsedHeight: {
    control: 'number',
    description: 'Максимальная высота контейнера в свёрнутом состоянии (px)'
  },
  textToExpand: {
    control: 'text',
    description: 'Подпись кнопки в свёрнутом состоянии'
  },
  textToCollapse: {
    control: 'text',
    description: 'Подпись кнопки в развёрнутом состоянии'
  }
}
