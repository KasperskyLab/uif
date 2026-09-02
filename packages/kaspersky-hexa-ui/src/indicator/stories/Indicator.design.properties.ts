import type { PropPresentationMap } from '@sb/components/Documentation'

export const indicatorDesignPropPresentation: PropPresentationMap = {
  variant: { description: 'Вариант отображения индикатора', type: 'withBorder | withoutBorder' },
  mode: {
    description: 'Цветовой режим индикатора',
    type: 'accent | not-active | new | update | inProgress | resolved | inIncident | critical | high | medium | low | info | positive'
  }
}
