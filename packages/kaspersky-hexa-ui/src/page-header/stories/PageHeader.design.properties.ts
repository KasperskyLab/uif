import { PropPresentationMap } from '@sb/components/Documentation'

export const pageHeaderDesignPropPresentation: PropPresentationMap = {
  iconBefore: {
    description: 'Показывает иконку перед заголовком',
    type: 'Boolean',
    defaultValue: 'false'
  },
  description: {
    description: 'Показывает описание страницы',
    type: 'Boolean',
    defaultValue: 'false'
  },
  tagsAfter: {
    description: 'Показывает теги после заголовка',
    type: 'Boolean',
    defaultValue: 'false'
  },
  breadcrumbs: {
    description: 'Показывает хлебные крошки',
    type: 'Boolean',
    defaultValue: 'false'
  },
  elementAfter_: {
    label: '🔄 elementAfter',
    description: 'Заменяет элемент в правой части шапки',
    type: 'Instance Swap'
  },
  elementAfter: {
    description: 'Показывает элемент в правой части шапки',
    type: 'Boolean',
    defaultValue: 'false'
  },
  title: {
    label: '✏️ title',
    description: 'Текст заголовка страницы',
    type: 'Text',
    defaultValue: 'title'
  },
  description_: {
    label: '✏️ description',
    description: 'Текст описания страницы',
    type: 'Text',
    defaultValue: 'Page description'
  },
  iconBefore_: {
    label: '🔄 iconBefore',
    description: 'Заменяет иконку перед заголовком',
    type: 'Instance Swap'
  }
}
