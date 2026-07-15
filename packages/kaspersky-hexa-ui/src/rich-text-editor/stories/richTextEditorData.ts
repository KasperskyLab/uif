import type { Descendant } from 'slate'

import { CustomFormats } from '../customTypes'

export const initialValueEmpty: Descendant[] = [
  {
    type: CustomFormats.PARAGRAPH,
    children: [{ text: '' }]
  }
]

export const initialValue: Descendant[] = [
  {
    type: CustomFormats.HEADING_TWO,
    children: [{ text: 'RichTextEditor' }]
  },
  {
    type: CustomFormats.PARAGRAPH,
    children: [
      { text: 'Это базовый пример для Storybook. ' },
      { text: 'Жирный', bold: true },
      { text: ', ' },
      { text: 'подчеркнутый', underline: true },
      { text: ' и ' },
      { text: 'код', code: true },
      { text: ' текст можно редактировать прямо в сторис.' }
    ]
  }
]

export const longValue: Descendant[] = [
  {
    type: CustomFormats.PARAGRAPH,
    children: [
      { text: 'Этот пример нужен для проверки ограничения на длину текста.' }
    ]
  }
]
