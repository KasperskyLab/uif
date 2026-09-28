import {
  extendPropPresentation,
  PropPresentationMap
} from '@sb/components/Documentation'

import { sharedPropConfig } from '@sb/resolveDesignControls'

import { progressBarModes, progressBarSizes, progressBarVariants } from '../types'

const fromSharedProp = (
  propName: keyof typeof sharedPropConfig,
  overrides = {}
) => extendPropPresentation(sharedPropConfig[propName], overrides)

export const defaultArgs = {
  variant: 'linear' as const,
  mode: 'critical' as const,
  size: 'medium' as const,
  track: 50,
  background: true,
  width: 200
}

export const progressBarPropPresentation: PropPresentationMap = {
  variant: {
    control: 'inline-radio',
    options: [...progressBarVariants],
    description: 'Вариант индикатора: горизонтальная полоса или круг'
  },
  mode: fromSharedProp('mode', {
    options: [...progressBarModes],
    description: 'Семантический цвет активной полосы прогресса. Не применяется к варианту circular'
  }),
  size: fromSharedProp('size', {
    options: [...progressBarSizes],
    description: 'Высота полосы прогресса. Не применяется к варианту circular'
  }),
  track: {
    control: { type: 'range', min: 0, max: 100, step: 1 },
    description: 'Заполнение полосы в процентах (от 0 до 100)'
  },
  background: {
    control: 'boolean',
    description: 'Показывать фоновую дорожку под активной полосой. Не применяется к варианту circular'
  },
  width: {
    control: 'number',
    description: 'Ширина в пикселях; без значения полоса растягивается на 100% родителя. Не применяется к варианту circular'
  }
}
