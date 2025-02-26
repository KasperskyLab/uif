import { focus } from '@design-system/tokens/focus'
import { SubmenuColorConfig } from '@src/submenu/types'

import { ComponentThemeContext } from '../config'

export const submenu = ({ colors, effects }: ComponentThemeContext): SubmenuColorConfig => ({
  border: colors.submenu.border,
  title: {
    color: colors.submenu.text
  },
  row: {
    unselected: {
      enabled: {
        color: colors.submenu_item.text.enabled,
        icon: colors.submenu_item.icon.enabled,
        background: colors.submenu_item.bg.enabled
      },
      hover: {
        color: colors.submenu_item.text.hover,
        icon: colors.submenu_item.icon.hover,
        background: colors.submenu_item.bg.hover
      },
      active: {
        color: colors.submenu_item.text.active,
        icon: colors.submenu_item.icon.active,
        background: colors.submenu_item.bg.active
      },
      disabled: {
        color: colors.submenu_item.text.disabled,
        icon: colors.submenu_item.icon.disabled,
        background: colors.submenu_item.bg.disabled
      }
    },
    selected: {
      enabled: {
        color: colors.submenu_item.text.enabled_selected,
        icon: colors.submenu_item.icon.enabled_selected,
        background: colors.submenu_item.bg.enabled_selected
      },
      hover: {
        color: colors.submenu_item.text.hover_selected,
        icon: colors.submenu_item.icon.hover_selected,
        background: colors.submenu_item.bg.hover_selected
      },
      active: {
        color: colors.submenu_item.text.active_selected,
        icon: colors.submenu_item.icon.active_selected,
        background: colors.submenu_item.bg.active_selected
      },
      disabled: {
        color: colors.submenu_item.text.disabled_selected,
        icon: colors.submenu_item.icon.disabled_selected,
        background: colors.submenu_item.bg.disabled_selected
      }
    },
    ...focus({ colors, effects })
  }
})
