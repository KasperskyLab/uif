import { PropPresentationMap } from '@sb/components/Documentation'

export const defaultArgs = {
  title: 'Page Content',
  sectionCount: 10,
  withNestedItems: true,
  withElementAfter: true,
  withLongLabels: true
}

export const anchorNavigationPropPresentation: PropPresentationMap = {
  title: {
    control: 'text',
    description: 'Заголовок над списком пунктов навигации'
  },
  sectionCount: {
    control: { type: 'number', min: 1, max: 20, step: 1 },
    description: 'Количество разделов в демо Playground'
  },
  withNestedItems: {
    control: 'boolean',
    description: 'Показать вложенные пункты навигации'
  },
  withElementAfter: {
    control: 'boolean',
    description: 'Добавить Badge в elementAfter у части пунктов'
  },
  withLongLabels: {
    control: 'boolean',
    description: 'Добавить пункты с длинными подписями'
  }
}
