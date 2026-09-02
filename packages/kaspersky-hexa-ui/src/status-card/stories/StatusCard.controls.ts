import type { PropPresentationMap } from '@sb/components/Documentation'

import { iconVariants, statusCardModes, statusCardSizes } from '../types'

export const defaultArgs = {
  mode: 'success' as const,
  size: 'medium' as const,
  iconVariant: 'default' as const,
  title: 'Заголовок',
  image: true,
  description: true,
  actions: false,
  children: false
}

export const statusCardPropPresentation: PropPresentationMap = {
  mode: {
    control: 'select',
    description: 'Семантический цветовой режим карточки',
    options: [...statusCardModes]
  },
  size: {
    control: 'select',
    description: 'Размер изображения и иконки статуса',
    options: [...statusCardSizes]
  },
  iconVariant: {
    control: 'select',
    description: 'Вариант иллюстрации статуса',
    options: [...iconVariants]
  },
  title: {
    control: 'text',
    description: 'Заголовок карточки'
  },
  image: {
    control: 'boolean',
    description: 'Отображение иллюстрации статуса'
  },
  description: {
    control: 'boolean',
    description: 'Отображение текстового описания'
  },
  actions: {
    control: 'boolean',
    description: 'Отображение действия в карточке'
  },
  children: {
    control: 'boolean',
    description: 'Отображение дополнительного содержимого'
  }
}
