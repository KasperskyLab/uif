import type { PropPresentationMap } from '@sb/components/Documentation'

// Источник: 
export const licenseCardDesignPropPresentation: PropPresentationMap = {
  mode: {
    description: 'Статус лицензии: влияет на цветовое оформление карточки',
    type: 'valid | finished | expired | expiresSoon | warning'
  }
}

// Источник: 
export const licenseCardContentDesignPropPresentation: PropPresentationMap = {
  compact: {
    description: 'Компактный режим отображения карточки',
    type: 'true | false'
  },
  iconBefore: {
    description: 'Иконка перед заголовком карточки',
    type: 'Instance Swap'
  },
  title: {
    label: '✏️ title',
    description: 'Текст заголовка карточки',
    type: 'Text'
  },
  elementAfter: {
    description: 'Элемент после заголовка (отображается в компактном режиме)',
    type: 'Instance Swap'
  },
  actions: {
    description: 'Кнопки действий в нижней части карточки',
    type: 'Instance Swap'
  },
  content: {
    description: 'Дополнительный контент карточки',
    type: 'Instance Swap'
  },
  content_: {
    label: '🔄 content',
    description: 'Вложенный контент карточки',
    type: 'Instance Swap'
  }
}
