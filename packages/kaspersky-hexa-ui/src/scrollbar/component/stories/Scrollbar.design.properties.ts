import type { PropPresentationMap } from '@sb/components/Documentation'

export const scrollbarDesignPropPresentation: PropPresentationMap = {
  orientation: { description: 'Направление полосы прокрутки', type: 'horizontal | vertical' },
  state: { description: 'Интерактивное состояние полосы прокрутки', type: 'active | hover | enabled' }
}
