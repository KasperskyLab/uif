import type { PropPresentationMap } from '@sb/components/Documentation'

export const cardDesignPropPresentation: PropPresentationMap = {
  mode: {
    description: 'Цветовой вариант карточки',
    type: 'filled | base | selected'
  },
  padding: {
    description: 'Внутренние отступы карточки',
    type: 'large (24) | medium (16) | small (8)'
  },
  state: {
    description: 'Интерактивное состояние компонента',
    type: 'enabled | hover | active'
  },
  interactive: {
    description: 'Визуальные состояния hover и active для кликабельных карточек',
    type: 'false | true'
  },
  header: {
    description: 'Отображение шапки с заголовком и элементами управления',
    type: 'false | true'
  },
  size: {
    description: 'Размер типографики заголовка в шапке',
    type: 'small (H6) | medium (H5)'
  },
  children_: {
    label: '🔄 children',
    description: 'Слот для основного содержимого карточки',
    type: 'Instance Swap'
  },
  actions: {
    description: 'Отображение кнопки меню действий в шапке',
    type: 'Boolean',
    defaultValue: 'false'
  },
  elementAfter: {
    description: 'Отображение элемента после заголовка',
    type: 'Boolean',
    defaultValue: 'false'
  },
  elementBefore: {
    description: 'Отображение элемента перед заголовком',
    type: 'Boolean',
    defaultValue: 'false'
  },
  title: {
    label: '✏️ title',
    description: 'Текст заголовка в шапке карточки',
    type: 'Text',
    defaultValue: 'Card title'
  },
  closable: {
    description: 'Отображение кнопки закрытия в шапке',
    type: 'Boolean',
    defaultValue: 'false'
  },
  actionIcon: {
    description: 'Отображение кнопки действия в шапке',
    type: 'Boolean',
    defaultValue: 'false'
  },
  draggable: {
    description: 'Иконка перетаскивания слева от карточки',
    type: 'Boolean',
    defaultValue: 'false'
  },
  scrollbar: {
    description: 'Отображение полосы прокрутки при переполнении контента',
    type: 'Boolean',
    defaultValue: 'false'
  }
}
