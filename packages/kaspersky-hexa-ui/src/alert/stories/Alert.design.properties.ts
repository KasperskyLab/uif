import type { PropPresentationMap } from '@sb/components/Documentation'

export const alertDesignPropPresentation: PropPresentationMap = {
  mode: {
    description: 'Семантический вариант уведомления',
    type: 'error | success | warning | info'
  },
  children_: {
    label: '🔄 children',
    description: 'Слот для содержимого сообщения',
    type: 'Instance Swap'
  },
  action: {
    description: 'Отображение блока со ссылками-действиями',
    type: 'Boolean',
    defaultValue: 'true'
  },
  closable: {
    description: 'Отображение кнопки закрытия справа в блоке',
    type: 'Boolean',
    defaultValue: 'true'
  }
}
