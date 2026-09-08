import type { PropPresentationMap } from '@sb/components/Documentation'

export const statusCardDesignPropPresentation: PropPresentationMap = {
  mode: {
    description: 'Цветовой режим карточки',
    type: 'success | warning | critical | error'
  },
  description: {
    description: 'Отображение описания',
    type: 'visible',
    defaultValue: 'false'
  },
  children: {
    description: 'Отображение дополнительного содержимого',
    type: 'visible',
    defaultValue: 'false'
  },
  actions: {
    description: 'Отображение действий',
    type: 'visible',
    defaultValue: 'false'
  },
  title: {
    label: '✏️ title',
    description: 'Текст заголовка',
    type: 'Text',
    defaultValue: 'Title'
  },
  content: {
    description: 'Отображение содержимого',
    type: 'visible',
    defaultValue: 'true'
  },
  image: {
    description: 'Отображение иллюстрации',
    type: 'visible',
    defaultValue: 'true'
  },
  children_: {
    label: '🔄 children',
    description: 'Вариант дополнительного содержимого',
    type: 'Instance Swap',
    defaultValue: '36797:138334'
  }
}
