import { PropPresentationMap } from '@sb/components/Documentation'

import { NotificationModeArray } from '../types'

export const defaultArgs = {
  noIcon: false,
  description: 'Body text',
  duration: 5,
  withActionButton: false
}

export const notificationPropPresentation: PropPresentationMap = {
  noIcon: {
    control: 'boolean',
    description: 'Скрыть иконку статуса в контейнере уведомлений'
  },
  description: {
    control: 'text',
    description: 'Текст уведомления'
  },
  duration: {
    control: 'number',
    description: 'Длительность показа в секундах; 0 — не закрывать автоматически'
  },
  withActionButton: {
    control: 'boolean',
    description: 'Показать кнопку действия в уведомлении'
  }
}

export { NotificationModeArray }
