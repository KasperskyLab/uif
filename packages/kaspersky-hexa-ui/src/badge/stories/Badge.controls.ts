import {
  extendPropPresentation,
  PropPresentationMap
} from '@sb/components/Documentation'

import { sharedPropConfig } from '@helpers/resolveDesignControls'

import { badgeModes, badgeSizes } from '../types'

const fromSharedProp = (
  propName: keyof typeof sharedPropConfig,
  overrides = {}
) => extendPropPresentation(sharedPropConfig[propName], overrides)

export const badgePropPresentation: PropPresentationMap = {
  mode: fromSharedProp('mode', {
    options: [...badgeModes],
    defaultValue: 'neutral'
  }),
  size: {
    group: 'appearance',
    description: 'Размер badge. Размер large поддерживается только для transparent-вариантов.',
    control: 'select',
    options: [...badgeSizes],
    defaultValue: 'large'
  },
  count: {
    group: 'appearance',
    description: 'Отображаемое число',
    control: 'number'
  },
  text: {
    group: 'appearance',
    description: 'Текст вместо числа',
    control: 'text'
  },
  overflowCount: {
    group: 'appearance',
    description: 'Максимальное число, которое отображается без префикса +',
    control: 'number'
  },
  showZero: {
    group: 'appearance',
    description: 'Показывать badge при count=0',
    control: 'boolean',
    defaultValue: 'false'
  }
}
