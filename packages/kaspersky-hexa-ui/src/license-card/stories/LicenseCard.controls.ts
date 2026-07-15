import { PropPresentationMap } from '@sb/components/Documentation'

import { licenseCardModes } from '../types'

export const licenseCardIconBeforeOptions = ['none', 'multidevice', 'arrowForward'] as const
export const licenseCardElementAfterOptions = ['none', 'action-button'] as const

export const defaultArgs = {
  mode: 'valid' as const,
  compact: false,
  title: 'Kaspersky | Russian Edition',
  number: 'EB29584F-A5C7-4510-9B8B-01A6FA952B95',
  expirationDate: new Date('2025-03-01'),
  activationDate: new Date('2023-03-01'),
  term: 730,
  daysRemaining: 340,
  statusSection: true,
  validitySection: true,
  iconBefore: 'none' as const,
  elementAfter: 'none' as const,
  minWidth: 600
}

export const licenseCardPropPresentation: PropPresentationMap = {
  mode: {
    control: 'select',
    description: 'Статус лицензии',
    options: [...licenseCardModes]
  },
  compact: {
    control: 'boolean',
    description: 'Компактный режим отображения карточки'
  },
  title: {
    control: 'text',
    description: 'Заголовок карточки лицензии'
  },
  statusSection: {
    control: 'boolean',
    description: 'Показывает / скрывает секцию со статусом и номером лицензии'
  },
  validitySection: {
    control: 'boolean',
    description: 'Показывает / скрывает секцию со сроками действия лицензии'
  },
  iconBefore: {
    control: 'select',
    description: 'Иконка перед заголовком',
    options: [...licenseCardIconBeforeOptions]
  },
  elementAfter: {
    control: 'select',
    description: 'Элемент после заголовка (отображается только в компактном режиме)',
    options: [...licenseCardElementAfterOptions]
  },
  licenseKeyStatus: {
    control: 'text',
    description: 'Текстовая метка статуса лицензии (переопределяет стандартный лейбл)'
  }
}
