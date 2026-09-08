import type { PropPresentationMap } from '@sb/components/Documentation'

export const defaultArgs = {
  autoDropdown: false,
  leftLimit: 4,
  sticky: undefined
}

export const toolbarPropPresentation: PropPresentationMap = {
  autoDropdown: {
    control: 'boolean',
    description: 'Автоматически переносит не поместившиеся элементы левой части в меню'
  },
  leftLimit: {
    control: { type: 'number', min: 1, step: 1 },
    description: 'Количество видимых элементов слева до появления меню'
  },
  sticky: {
    control: 'number',
    description: 'Вертикальное смещение закреплённой панели'
  }
}
