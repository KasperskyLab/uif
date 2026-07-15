import { PropPresentationMap } from '@sb/components/Documentation'

import { ActionButtonMode, ActionButtonSize } from '../types'

export const actionButtonSizes: ActionButtonSize[] = ['small', 'medium', 'large']
export const actionButtonModes: ActionButtonMode[] = [
  'ghost',
  'ghostInverted',
  'filled',
  'filledInverted',
  'onLight'
]
export const actionButtonIconOptions = ['heart', 'placeholder', 'settingsGear', 'crossM', 'delete', 'none'] as const
export const actionButtonElementAfterOptions = ['arrowRight', 'crossM', 'none'] as const

export const actionButtonPropPresentation: PropPresentationMap = {
  mode: {
    control: 'select',
    description: 'Стиль кнопки',
    options: actionButtonModes
  },
  size: {
    control: 'select',
    description: 'Размер кнопки',
    options: actionButtonSizes
  },
  children: {
    control: 'text',
    description: 'Текст кнопки'
  },
  interactive: {
    control: 'boolean',
    description: 'Включает hover и active состояния'
  },
  disabled: {
    control: 'boolean',
    description: 'Отключенное состояние'
  },
  noIcon: {
    control: 'boolean',
    description: 'Скрывает иконку'
  },
  icon: {
    control: 'select',
    description: 'Иконка или ReactNode перед текстом',
    options: [...actionButtonIconOptions]
  },
  elementAfter: {
    control: 'select',
    description: 'Иконка или ReactNode после текста',
    options: [...actionButtonElementAfterOptions]
  }
}
