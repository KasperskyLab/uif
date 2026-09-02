import type { PropPresentationMap } from '@sb/components/Documentation'

export const defaultArgs = {
  title: 'Kaspersky Next',
  notificationButtonProps: {},
  notificationIndicator: true,
  titleLinkURL: ''
}

export const topNavigationPropPresentation: PropPresentationMap = {
  title: {
    control: 'text',
    description: 'Название продукта в верхней панели'
  },
  notificationIndicator: {
    control: 'boolean',
    description: 'Показывает индикатор новых уведомлений'
  },
  titleLinkURL: {
    control: 'text',
    description: 'Адрес ссылки для названия продукта'
  }
}
