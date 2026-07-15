import {
  extendPropPresentation,
  PropPresentationMap
} from '@sb/components/Documentation'

import { sharedPropConfig } from '@helpers/resolveDesignControls'

import { buttonModes, ButtonSize } from '../types'

const buttonSizes: ButtonSize[] = ['small', 'medium', 'large', 'extraLarge']

export const buttonIconOptions = [
  'none',
  'placeholder',
  'plus',
  'arrowRightSmall',
  'settings'
] as const

const fromSharedProp = (
  propName: keyof typeof sharedPropConfig,
  overrides = {}
) => extendPropPresentation(sharedPropConfig[propName], overrides)

export const defaultArgs = {
  mode: 'primary' as const,
  size: 'medium' as ButtonSize,
  disabled: false,
  loading: false,
  isPressed: false,
  text: 'Button',
  iconBefore: 'none' as const,
  iconAfter: 'none' as const
}

export const buttonPropPresentation: PropPresentationMap = {
  mode: fromSharedProp('mode', {
    options: [...buttonModes]
  }),
  size: fromSharedProp('size', {
    options: [...buttonSizes]
  }),
  disabled: fromSharedProp('disabled', {
    description: 'Неактивное состояние кнопки'
  }),
  loading: fromSharedProp('loading', {
    description: 'Отображение состояния загрузки'
  }),
  text: {
    control: 'text',
    description: 'Текст кнопки. Если не передан, то кнопка будет без текста.'
  },
  iconBefore: {
    control: 'select',
    description: 'Иконка слева от текста. Если не передан, то иконка отображаться не будет.',
    options: [...buttonIconOptions]
  },
  iconAfter: {
    control: 'select',
    description: 'Иконка справа от текста. Если не передан, то иконка отображаться не будет.',
    options: [...buttonIconOptions]
  },
  dropdownPlacement: {
    control: 'select',
    description: 'Расположение выпадающего списка'
  }
}
