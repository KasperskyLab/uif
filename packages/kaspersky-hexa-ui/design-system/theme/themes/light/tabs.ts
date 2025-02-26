import { focus } from '@design-system/tokens/focus'
import { TabsColorConfig } from '@src/tabs/types'

import { ComponentThemeContext } from '../config'

export const tabs = ({ colors, effects }: ComponentThemeContext): TabsColorConfig => ({
  selected: {
    enabled: {
      color: colors.tab_item.text.selected.base,
      border: colors.tab_item.border.selected.base,
      background: colors.tab_item.bg.selected.enabled
    },
    hover: {
      background: colors.tab_item.bg.selected.hover
    },
    pressed: {
      background: colors.tab_item.bg.selected.active
    },
    disabled: {
      color: colors.tab_item.text.selected.disabled
    }
  },
  unselected: {
    enabled: {
      color: colors.tab_item.text.unselected.base,
      background: colors.tab_item.bg.unselected.enabled
    },
    hover: {
      background: colors.tab_item.bg.unselected.hover
    },
    pressed: {
      background: colors.tab_item.bg.unselected.active
    },
    disabled: {
      color: colors.tab_item.text.unselected.disabled
    }
  },
  divider: {
    color: colors.tabs.border
  },
  ...focus({ colors, effects })
})
