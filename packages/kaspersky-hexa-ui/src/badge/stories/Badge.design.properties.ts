import type { PropPresentationMap } from '@sb/components/Documentation'

export const badgeDesignPropPresentation: PropPresentationMap = {
  mode: {
    description: 'Семантический цветовой режим badge',
    type: 'positive | medium | ai | new | inProgress | inIncident | info | update | criticalTransparent | neutralTransparent | resolved | low | critical | high | neutral | accent',
    defaultValue: 'positive'
  },
  size: {
    description: 'Размер badge',
    type: 'medium | large',
    defaultValue: 'medium'
  },
  text: {
    label: '✏️ text',
    description: 'Текст или число внутри badge',
    type: 'Text',
    defaultValue: '1'
  }
}
