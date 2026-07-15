import type { PropPresentationMap } from '@sb/components/Documentation'

// Источник: https://pixso.net/app/design/_JQDYkYJW0yUZVsKeoSybw?item-id=142276:329019
export const licenseCardDesignPropPresentation: PropPresentationMap = {
  mode: {
    description: 'Статус лицензии: влияет на цветовое оформление карточки',
    type: 'valid | finished | expired | expiresSoon | warning'
  }
}

// Источник: https://pixso.net/app/design/_JQDYkYJW0yUZVsKeoSybw?item-id=142284:330289
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
