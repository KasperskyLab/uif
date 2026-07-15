import {
  extendPropPresentation,
  PropPresentationMap
} from '@sb/components/Documentation'

import { sharedPropConfig } from '@helpers/resolveDesignControls'

import { ChipSize } from '../types'

const chipSizes: ChipSize[] = ['medium', 'large']

export const chipIconOptions = [
  'none',
  'placeholder',
  'plus',
  'settings'
] as const

const fromSharedProp = (
  propName: keyof typeof sharedPropConfig,
  overrides = {}
) => extendPropPresentation(sharedPropConfig[propName], overrides)

export const defaultArgs = {
  size: 'medium' as const,
  disabled: false,
  label: 'Label',
  icon: 'none' as const
}

export const chipPropPresentation: PropPresentationMap = {
  size: fromSharedProp('size', {
    options: [...chipSizes]
  }),
  disabled: fromSharedProp('disabled'),
  label: {
    control: 'text',
    description: 'Текстовая метка chip'
  },
  icon: {
    control: 'select',
    description: 'Иконка перед меткой. Если не передана, иконка отображаться не будет.',
    options: [...chipIconOptions]
  },
  counter: {
    control: 'number',
    description: 'Числовой счётчик справа от метки. Отображается через Badge с mode neutral.'
  },
  truncationWidth: {
    control: 'number',
    description: 'Максимальная ширина метки в пикселях. При превышении текст обрезается с многоточием.'
  }
}
