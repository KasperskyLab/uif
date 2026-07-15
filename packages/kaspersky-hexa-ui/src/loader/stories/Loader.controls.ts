import {
  extendPropPresentation,
  PropPresentationMap
} from '@sb/components/Documentation'

import { sharedPropConfig } from '@helpers/resolveDesignControls'

import { Size } from '@design-system/types'

import type { LoaderMode } from '../types'

const loaderModes: LoaderMode[] = ['default', 'inverted']
const loaderSizes = [
  Size.ExtraSmall,
  Size.Small,
  Size.Medium,
  Size.Large,
  Size.ExtraLarge
] as const

const fromSharedProp = (
  propName: keyof typeof sharedPropConfig,
  overrides = {}
) => extendPropPresentation(sharedPropConfig[propName], overrides)

export const defaultArgs = {
  mode: 'default' as const,
  size: Size.Small,
  spinning: true,
  centered: false,
  delay: 0,
  tip: ''
}

export const loaderPropPresentation: PropPresentationMap = {
  mode: fromSharedProp('mode', {
    options: [...loaderModes],
    description: 'Цветовой режим индикатора загрузки'
  }),
  size: fromSharedProp('size', {
    options: [...loaderSizes],
    description: 'Размер индикатора и подписи'
  }),
  spinning: {
    control: 'boolean',
    description: 'Показывать индикатор загрузки'
  },
  centered: {
    control: 'boolean',
    description: 'Центрировать индикатор внутри родительского контейнера'
  },
  delay: {
    control: 'number',
    description: 'Задержка перед показом индикатора, мс'
  },
  tip: {
    control: 'text',
    description: 'Текстовая подпись рядом с индикатором'
  }
}
