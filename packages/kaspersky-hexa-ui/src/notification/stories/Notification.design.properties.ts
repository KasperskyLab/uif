import type { PropPresentationMap } from '@sb/components/Documentation'

export const notificationDesignPropPresentation: PropPresentationMap = {
  mode: {
    description: 'Семантический вариант уведомления',
    type: 'success | warning | critical | info | ai'
  },
  action: {
    description: 'Отображение кнопки действия',
    type: 'Boolean',
    defaultValue: 'true'
  }
}
