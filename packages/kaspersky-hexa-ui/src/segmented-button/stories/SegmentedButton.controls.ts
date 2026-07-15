import { extendPropPresentation, PropPresentationMap } from '@sb/components/Documentation'

import { sharedPropConfig } from '@helpers/resolveDesignControls'

import { SegmentedButtonSize, segmentedButtonSize } from '../types'

const fromSharedProp = (
  propName: keyof typeof sharedPropConfig,
  overrides = {}
) => extendPropPresentation(sharedPropConfig[propName], overrides)

export const defaultArgs = {
  size: 'medium' as SegmentedButtonSize,
  disabled: false,
  isStretch: false
}

export const segmentedButtonPropPresentation: PropPresentationMap = {
  size: fromSharedProp('size', {
    options: [...segmentedButtonSize]
  }),
  disabled: fromSharedProp('disabled', {
    description: 'Переводит все элементы в недоступное состояние'
  }),
  isStretch: {
    control: { type: 'boolean' },
    description: 'Растягивает компонент на всю ширину контейнера'
  }
}
