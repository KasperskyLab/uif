import type { PropPresentationMap } from '@sb/components/Documentation'

export const modalDesignPropPresentation: PropPresentationMap = {
  mode: {
    description: 'Семантический вариант диалогового окна',
    type: 'info | warning | critical | success | ai'
  },
  size: {
    description: 'Размер диалогового окна',
    type: 'small (560) | large (1200)'
  },
  value: {
    description: 'Тип содержимого диалогового окна',
    type: 'text | slot'
  }
}
