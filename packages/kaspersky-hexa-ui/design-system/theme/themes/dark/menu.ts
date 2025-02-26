import { MenuColorConfig } from '@src/menu/types'

import { ComponentThemeContext } from '../config'

export const menu = ({ colors, effects }: ComponentThemeContext): MenuColorConfig => {
  return {
    background: colors.menu.bg,
    borderColor: colors.menu.border,
    popBg: colors.menu.bg,
    popShadow: `${effects.elevation.medium[1]} ${colors.elevation.medium[2]}, ${effects.elevation.medium[2]} ${colors.elevation.medium[1]}`,
    roleColor: colors.menu_item.text.unselected.description,
    captionColor: colors.menu_item.text.unselected.description,
    dividerColor: colors.divider.bg.bold,
    unselected: {
      enabled: {
        color: colors.menu_item.text.unselected.base
      },
      hover: {
        background: colors.menu_item.bg.unselected.hover
      },
      active: {
        background: colors.menu_item.bg.unselected.active
      }
    },
    selected: {
      enabled: {
        color: colors.menu_item.text.selected.base,
        background: colors.menu_item.bg.selected.enabled
      },
      hover: {
        color: colors.menu_item.text.selected.base,
        background: colors.menu_item.bg.selected.hover
      },
      active: {
        color: colors.menu_item.text.selected.base,
        background: colors.menu_item.bg.selected.active
      }
    }
  }
}
