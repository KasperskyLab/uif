import { PropPresentationMap } from '@sb/components/Documentation'

import { textLevels } from '@kaspersky/hexa-ui-core/typography/js'

export const defaultArgs = {
  newText: 'Новая версия текста',
  oldText: 'Предыдущая версия текста',
  textType: 'BTR3' as const
}

export const textDiffPropPresentation: PropPresentationMap = {
  newText: {
    description: 'Добавленный текст',
    control: 'text'
  },
  oldText: {
    description: 'Удалённый текст',
    control: 'text'
  },
  textType: {
    description: 'Типографический стиль текста',
    control: 'select',
    options: Object.keys(textLevels)
  }
}
