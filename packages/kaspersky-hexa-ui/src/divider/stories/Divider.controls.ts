import {
  extendPropPresentation,
  PropPresentationMap
} from '@sb/components/Documentation'

import { sharedPropConfig } from '@helpers/resolveDesignControls'

import type { DividerDirection, DividerMode } from '../types'

const dividerModes: DividerMode[] = ['bold', 'light', 'onLightStatic', 'inverted']
const dividerDirections: DividerDirection[] = ['horizontal', 'vertical']

const fromSharedProp = (
  propName: keyof typeof sharedPropConfig,
  overrides = {}
) => extendPropPresentation(sharedPropConfig[propName], overrides)

export const defaultArgs = {
  mode: 'bold' as const,
  direction: 'horizontal' as const
}

export const dividerPropPresentation: PropPresentationMap = {
  mode: fromSharedProp('mode', {
    options: [...dividerModes],
    description: 'Цветовой режим линии'
  }),
  direction: {
    description: 'Ориентация разделителя',
    control: 'select',
    options: [...dividerDirections]
  }
}
