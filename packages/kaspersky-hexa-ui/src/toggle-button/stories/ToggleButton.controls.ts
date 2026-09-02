import type { PropPresentationMap } from '@sb/components/Documentation'

import { toggleButtonModes, toggleButtonSizes } from '../types'

export const toggleButtonIconOptions = [
  'none',
  'placeholder',
  'plus',
  'settings'
] as const

export const toggleButtonElementAfterOptions = [
  'none',
  'badge'
] as const

export const defaultArgs = {
  mode: 'marina' as const,
  size: 'medium' as const,
  selected: false,
  disabled: false,
  loading: false,
  text: 'Toggle button',
  iconBefore: 'placeholder' as const,
  elementAfter: 'none' as const,
  tooltip: 'Подсказка'
}

export const toggleButtonPropPresentation: PropPresentationMap = {
  mode: {
    control: 'select',
    description: 'Цветовой режим выбранной кнопки',
    options: [...toggleButtonModes]
  },
  size: {
    control: 'select',
    description: 'Размер кнопки',
    options: [...toggleButtonSizes]
  },
  selected: {
    control: 'boolean',
    description: 'Выбранное состояние кнопки'
  },
  disabled: {
    control: 'boolean',
    description: 'Неактивное состояние кнопки'
  },
  loading: {
    control: 'boolean',
    description: 'Отображение состояния загрузки'
  },
  text: {
    control: 'text',
    description: 'Текст кнопки'
  },
  iconBefore: {
    control: 'select',
    description: 'Иконка перед текстом',
    options: [...toggleButtonIconOptions]
  },
  elementAfter: {
    control: 'select',
    description: 'Элемент после текста',
    options: [...toggleButtonElementAfterOptions]
  },
  tooltip: {
    control: 'text',
    description: 'Текст всплывающей подсказки'
  }
}
