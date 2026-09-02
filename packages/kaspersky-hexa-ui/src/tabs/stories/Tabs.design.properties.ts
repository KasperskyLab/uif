import type { PropPresentationMap } from '@sb/components/Documentation'

export const tabsDesignPropPresentation: PropPresentationMap = {
  variant: {
    description: 'Вариант набора вкладок',
    type: 'add&close | withExtraContent | basic'
  },
  padding: {
    description: 'Горизонтальные отступы вокруг набора вкладок',
    type: 'true | false'
  },
  showMore: {
    description: 'Отображение кнопки с дополнительными вкладками',
    type: 'visible',
    defaultValue: 'true'
  }
}

export const tabItemDesignPropPresentation: PropPresentationMap = {
  variant: {
    description: 'Вариант элемента вкладки',
    type: 'closable | base | addButton'
  },
  state: {
    description: 'Интерактивное состояние компонента',
    type: 'disabled | active | hover | enabled'
  },
  selected: {
    description: 'Выбор элемента вкладки',
    type: 'true | false'
  },
  indicator: {
    description: 'Отображение индикатора рядом с текстом',
    type: 'visible',
    defaultValue: 'false'
  },
  counter: {
    description: 'Отображение счётчика',
    type: 'visible',
    defaultValue: 'false'
  },
  iconBefore: {
    description: 'Отображение иконки перед текстом',
    type: 'visible',
    defaultValue: 'false'
  },
  iconBefore_: {
    description: 'Иконка перед текстом',
    type: 'Instance Swap',
    defaultValue: '25:399486',
    label: '🔄 iconBefore'
  },
  text: {
    description: 'Текст элемента вкладки',
    type: 'Text',
    defaultValue: 'Tab item',
    label: '✏️ text'
  },
  infoIcon: {
    description: 'Отображение иконки с подсказкой',
    type: 'visible',
    defaultValue: 'false'
  }
}
