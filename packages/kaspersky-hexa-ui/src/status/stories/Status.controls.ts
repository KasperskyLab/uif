import type { PropPresentationMap } from '@sb/components/Documentation'

import { StatusModes } from '../types'

export const statusIconOptions = ['none', 'placeholder'] as const

export const defaultArgs = {
  mode: 'default' as const,
  label: 'Status',
  icon: 'placeholder' as const
}

export const statusPropPresentation: PropPresentationMap = {
  mode: {
    control: 'select',
    description: 'Цветовой режим статуса',
    options: [...StatusModes]
  },
  label: {
    control: 'text',
    description: 'Текстовая подпись статуса'
  },
  icon: {
    control: 'select',
    description: 'Иконка перед подписью статуса',
    options: [...statusIconOptions]
  }
}
