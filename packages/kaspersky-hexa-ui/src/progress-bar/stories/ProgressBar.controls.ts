import {
  extendPropPresentation,
  PropPresentationMap
} from '@sb/components/Documentation'

import { sharedPropConfig } from '@helpers/resolveDesignControls'

import { progressBarModes, progressBarSizes } from '../types'

const fromSharedProp = (
  propName: keyof typeof sharedPropConfig,
  overrides = {}
) => extendPropPresentation(sharedPropConfig[propName], overrides)

export const defaultArgs = {
  mode: 'critical' as const,
  size: 'medium' as const,
  track: 50,
  background: true,
  width: 200
}

export const progressBarPropPresentation: PropPresentationMap = {
  mode: fromSharedProp('mode', {
    options: [...progressBarModes],
    description: 'Семантический цвет активной полосы прогресса'
  }),
  size: fromSharedProp('size', {
    options: [...progressBarSizes],
    description: 'Высота полосы прогресса'
  }),
  track: {
    control: { type: 'range', min: 0, max: 100, step: 1 },
    description: 'Заполнение полосы в процентах (от 0 до 100)'
  },
  background: {
    control: 'boolean',
    description: 'Показывать фоновую дорожку под активной полосой'
  },
  width: {
    control: 'number',
    description: 'Ширина в пикселях; без значения полоса растягивается на 100% родителя'
  }
}
