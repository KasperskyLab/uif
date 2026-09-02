import type { PropPresentationMap } from '@sb/components/Documentation'

export const textDiffDesignPropPresentation: PropPresentationMap = {
  mode: {
    description: 'Вариант отображения изменения текста',
    type: 'old | new'
  },
  text: {
    label: '✏️ text',
    description: 'Текст изменения',
    type: 'Text',
    defaultValue: 'text'
  }
}
