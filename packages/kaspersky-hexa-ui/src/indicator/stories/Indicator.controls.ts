import {
  extendPropPresentation,
  PropPresentationMap
} from '@sb/components/Documentation'

import { sharedPropConfig } from '@helpers/resolveDesignControls'

import { IndicatorModes } from '../types'

const fromSharedProp = (
  propName: keyof typeof sharedPropConfig,
  overrides = {}
) => extendPropPresentation(sharedPropConfig[propName], overrides)

export const defaultArgs = {
  mode: 'accent' as const,
  border: false
}

export const indicatorPropPresentation: PropPresentationMap = {
  mode: fromSharedProp('mode', {
    options: [...IndicatorModes]
  }),
  border: {
    description: 'Показывать границу вокруг индикатора.',
    control: 'boolean'
  },
  borderBackground: {
    description: 'Цвет границы индикатора при border={true}. По умолчанию используется цвет из палитры режима.',
    control: 'color'
  }
}
