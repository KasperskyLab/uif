import {
  extendPropPresentation,
  PropPresentationMap
} from '@sb/components/Documentation'

import { sharedPropConfig } from '@helpers/resolveDesignControls'

import { tagModes, TagMode, TagSize } from '../types'

const fromSharedProp = (
  propName: keyof typeof sharedPropConfig,
  overrides = {}
) => extendPropPresentation(sharedPropConfig[propName], overrides)

export const tagIconOptions = ['none', 'placeholder', 'advertisement'] as const

export const defaultArgs = {
  mode: 'neutral' as TagMode,
  size: 'medium' as TagSize,
  outlined: false,
  disabled: false,
  readOnly: false,
  invalid: false,
  interactive: false,
  closable: false,
  icon: 'none' as typeof tagIconOptions[number],
  children: 'Tag'
}

export const tagPropPresentation: PropPresentationMap = {
  mode: fromSharedProp('mode', {
    options: [...tagModes]
  }),
  size: fromSharedProp('size', {
    options: ['small', 'medium']
  }),
  outlined: {
    control: { type: 'boolean' },
    description: 'Контурный вариант тега'
  },
  disabled: fromSharedProp('disabled'),
  readOnly: {
    control: { type: 'boolean' },
    description: 'Состояние только для чтения'
  },
  invalid: {
    control: { type: 'boolean' },
    description: 'Невалидное состояние'
  },
  interactive: {
    control: { type: 'boolean' },
    description: 'Интерактивный (кликабельный) тег'
  },
  closable: {
    control: { type: 'boolean' },
    description: 'Кнопка закрытия тега'
  },
  icon: {
    control: 'select',
    description: 'Иконка перед текстом',
    options: [...tagIconOptions]
  },
  children: {
    control: 'text',
    description: 'Текстовое содержимое тега'
  }
}
