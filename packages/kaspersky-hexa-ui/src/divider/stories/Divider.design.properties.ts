import type { PropPresentationMap } from '@sb/components/Documentation'

export const dividerDesignPropPresentation: PropPresentationMap = {
  mode: {
    description: 'Цветовой режим линии',
    type: 'onLightStatic | light | bold | inverted'
  },
  orientation: {
    description: 'Ориентация разделителя',
    type: 'horizontal | vertical'
  }
}
