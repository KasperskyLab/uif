import {
  extendPropPresentation,
  PropPresentationMap
} from '@sb/components/Documentation'

import { sharedPropConfig } from '@helpers/resolveDesignControls'

const loadingOverlaySizes = ['medium', 'large'] as const

const fromSharedProp = (
  propName: keyof typeof sharedPropConfig,
  overrides = {}
) => extendPropPresentation(sharedPropConfig[propName], overrides)

export const defaultArgs = {
  size: 'medium' as const,
  description: 'help text'
}

export const loadingOverlayPropPresentation: PropPresentationMap = {
  size: fromSharedProp('size', {
    options: [...loadingOverlaySizes],
    description: 'Размер индикатора загрузки'
  }),
  description: {
    control: 'text',
    description: 'Текстовая подсказка под индикатором'
  }
}
