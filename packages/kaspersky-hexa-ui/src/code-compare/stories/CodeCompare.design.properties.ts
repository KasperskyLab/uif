import type { PropPresentationMap } from '@sb/components/Documentation'

export const codeCompareDesignPropPresentation: PropPresentationMap = {
  сompareMode: {
    description: 'Режим отображения diff: две колонки (split) или одна (unified)',
    type: 'split | unified'
  },
  lineSelected: {
    description: 'Подсветка выбранной строки в области сравнения',
    type: 'false | true'
  }
}
