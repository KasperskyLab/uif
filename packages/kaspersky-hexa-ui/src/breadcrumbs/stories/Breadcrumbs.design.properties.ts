import type { PropPresentationMap } from '@sb/components/Documentation'

export const breadcrumbsDesignPropPresentation: PropPresentationMap = {
  size: {
    description: 'Размер типографики и отступов цепочки',
    type: 'medium | small'
  },
  more: {
    description: 'Свёрнутая цепочка с кнопкой «⋯» для скрытых пунктов',
    type: 'true | false'
  },
  selected: {
    description: 'Выделение пункта в выпадающем меню свёрнутой цепочки',
    type: 'Boolean',
    defaultValue: 'false'
  }
}

export const breadcrumbsItemDesignPropPresentation: PropPresentationMap = {
  state: {
    description: 'Интерактивное состояние компонента',
    type: 'enabled | hover | focus | disabled'
  },
  size: {
    description: 'Размер типографики пункта цепочки',
    type: 'small | medium'
  },
  selected: {
    description: 'Текущая страница — последний пункт без ссылки',
    type: 'false | true'
  },
  disabled: {
    description: 'Неактивный пункт: ссылка недоступна для взаимодействия',
    type: 'false | true'
  }
}
