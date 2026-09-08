import type { PropPresentationMap } from '@sb/components/Documentation'

export const topNavigationDesignPropPresentation: PropPresentationMap = {
  title: {
    label: '✏️ title',
    description: 'Текст названия продукта',
    type: 'Text',
    defaultValue: 'Product name'
  },
  contentRight: {
    description: 'Показывает дополнительный контент справа',
    type: 'Boolean',
    defaultValue: 'false'
  },
  logo_: {
    label: '🔄 logo',
    description: 'Заменяет логотип продукта',
    type: 'Instance Swap'
  },
  elementCentered: {
    description: 'Показывает элемент в центре панели',
    type: 'Boolean',
    defaultValue: 'true'
  },
  notificationButton: {
    description: 'Показывает кнопку уведомлений',
    type: 'Boolean',
    defaultValue: 'false'
  }
}
