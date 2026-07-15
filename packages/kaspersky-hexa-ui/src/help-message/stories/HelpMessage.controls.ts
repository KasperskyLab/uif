import { sharedPropConfig } from '@helpers/resolveDesignControls'
import {
  extendPropPresentation,
  PropPresentationMap
} from '@sb/components/Documentation'

import type { HelpMessageMode, HelpMessageSize } from '../types'

const helpMessageModes: HelpMessageMode[] = ['error', 'warning', 'success', 'common'] as const
const helpMessageSizes: HelpMessageSize[] = ['small', 'medium'] as const

const fromSharedProp = (
  propName: keyof typeof sharedPropConfig,
  overrides = {}
) => extendPropPresentation(sharedPropConfig[propName], overrides)

export const defaultArgs: {
  mode: HelpMessageMode,
  text: string,
  size: HelpMessageSize
} = {
  mode: 'common',
  text: 'some text',
  size: 'small'
}

export const helpMessagePropPresentation: PropPresentationMap = {
  mode: fromSharedProp('mode', {
    options: [...helpMessageModes]
  }),
  text: {
    description: 'Отображаемый текст',
    control: 'text'
  },
  size: fromSharedProp('size', {
    options: [...helpMessageSizes]
  })
}
