import { MenuColorConfig } from '@src/menu/types'

import { ComponentThemeContext } from '../config'

export const menu = ({ colors, effects }: ComponentThemeContext): MenuColorConfig => {
  return {
    background: colors.menu.bg.surface.enabled,
    borderColor: colors.menu.border.enabled,
    popBg: colors.dropdown.bg,
    popShadow: `${effects.elevation.medium[1]} ${colors.elevation.medium[2]}, ${effects.elevation.medium[2]} ${colors.elevation.medium[1]}`,
    roleColor: colors.menu_item.text.label.disabled,
    captionColor: colors.menu.text.heading,
    dividerColor: colors.divider.bg.bold,
    unselected: {
      enabled: {
        color: colors.menu_item.text.label.enabled
      },
      hover: {
        background: colors.menu_item.bg.hover
      },
      active: {
        background: colors.menu_item.bg.active
      }
    },
    selected: {
      enabled: {
        color: colors.menu_item.text.label.enabled_selected,
        background: colors.menu_item.bg.enabled_selected
      },
      hover: {
        color: colors.menu_item.text.label.enabled_selected,
        background: colors.menu_item.bg.hover_selected
      },
      active: {
        color: colors.menu_item.text.label.enabled_selected,
        background: colors.menu_item.bg.active_selected
      }
    }
  }
}
