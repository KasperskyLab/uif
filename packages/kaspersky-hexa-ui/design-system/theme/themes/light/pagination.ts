import { focus } from '@design-system/tokens/focus'
import { PaginationColorConfig } from '@src/pagination/types'

import { ComponentThemeContext } from '../config'

export const pagination = ({ colors, effects }: ComponentThemeContext): PaginationColorConfig => ({
  unselected: {
    enabled: {
      color: colors.pagination.text.enabled
    },
    hover: {
      background: colors.pagination.bg.hover
    },
    active: {
      background: colors.pagination.bg.active
    },
    disabled: {
      color: colors.pagination.text.disabled
    }
  },
  selected: {
    enabled: {
      color: colors.pagination.text.enabled_selected,
      background: colors.pagination.bg.enabled_selected
    },
    hover: {
      color: colors.pagination.text.hover_selected,
      background: colors.pagination.bg.hover_selected
    },
    active: {
      color: colors.pagination.text.active_selected,
      background: colors.pagination.bg.active_selected
    },
    disabled: {
      color: colors.pagination.text.disabled_selected,
      background: colors.pagination.bg.disabled_selected
    }
  },
  ...focus({ colors, effects })
})
