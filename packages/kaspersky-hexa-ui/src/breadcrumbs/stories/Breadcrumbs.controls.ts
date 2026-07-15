import {
  extendPropPresentation,
  PropPresentationMap
} from '@sb/components/Documentation'

import { sharedPropConfig } from '@helpers/resolveDesignControls'

import { BreadcrumbsSize } from '../types'

const breadcrumbsSizes: BreadcrumbsSize[] = ['medium', 'small']

const fromSharedProp = (
  propName: keyof typeof sharedPropConfig,
  overrides = {}
) => extendPropPresentation(sharedPropConfig[propName], overrides)

export const defaultArgs = {
  size: 'medium' as BreadcrumbsSize,
  routeCount: 5
}

export const breadcrumbsPropPresentation: PropPresentationMap = {
  size: fromSharedProp('size', {
    options: [...breadcrumbsSizes],
    description:
      'Размер типографики и отступов.'
  }),
  routeCount: {
    control: { type: 'number', min: 1, max: 10, step: 1 },
    description:
      'Количество пунктов в демо.'
  }
}
