import { focus } from '@design-system/tokens/focus'
import { ToolbarColorConfig } from '@src/toolbar/types'

import { ComponentThemeContext } from '../config'

export const toolbar = ({ colors, effects }: ComponentThemeContext): ToolbarColorConfig => ({
  background: colors.toolbar.bg,
  divider: {
    background: colors.divider.bg.minimal
  },
  button: {
    hover: {
      background: colors.toolbar_button.bg.hover
    },
    active: {
      background: colors.toolbar_button.bg.active
    }
  },
  search: {
    enabled: {
      background: colors.toolbar_search.bg.enabled,
      color: colors.toolbar_search.text.value_enabled
    },
    hover: {
      background: colors.toolbar_search.bg.hover,
      border: colors.toolbar_search.border.hover
    },
    ...focus({ colors, effects })
  }
})
