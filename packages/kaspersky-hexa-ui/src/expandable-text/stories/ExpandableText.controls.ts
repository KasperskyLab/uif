import {
  extendPropPresentation,
  PropPresentationMap
} from '@sb/components/Documentation'

import { sharedPropConfig } from '@helpers/resolveDesignControls'

import { productColors } from '@kaspersky/hexa-ui-core/colors/js'

import { EXPANDABLE_TEXT_MOCK_BODY } from './expandableTextStoryData'

const textTypes = [
  'BTR2',
  'BTR3',
  'BTR4',
  'BTR5',
  'BTM2',
  'BTM3',
  'BTM4',
  'BTM5',
  'MTR3',
  'MTR4'
] as const

const textColors = Object.keys(productColors.text).filter(color => color !== 'link')

const fromSharedProp = (
  propName: keyof typeof sharedPropConfig,
  overrides = {}
) => extendPropPresentation(sharedPropConfig[propName], overrides)

export const defaultArgs = {
  children: EXPANDABLE_TEXT_MOCK_BODY,
  type: 'BTR3' as const,
  useGradient: false
}

export const expandableTextPropPresentation: PropPresentationMap = {
  type: {
    description: 'Типографический стиль текста',
    control: 'select',
    options: [...textTypes]
  },
  color: {
    description: 'Цвет текста',
    control: 'select',
    options: [...textColors]
  },
  useGradient: {
    description: 'Режим обрезки с градиентным затуханием справа вместо многоточия',
    control: 'boolean'
  },
  children: fromSharedProp('children', {
    description: 'Содержимое блока: строка или произвольный React-узел (например, Link).'
  }),
  altText: {
    description: 'Альтернативный текст для атрибута title при обрезке. Если не задан, используется строковое содержимое children',
    control: 'text'
  }
}
