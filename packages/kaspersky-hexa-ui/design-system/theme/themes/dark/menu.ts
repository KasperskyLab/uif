import { MenuColorConfig } from '@src/menu/types'

import { ComponentThemeContext } from '../config'

export const menu = ({ colors, effects }: ComponentThemeContext): MenuColorConfig => {
  return {
    background: colors.menu_v1.bg,
    borderColor: colors.menu_v1.border,
    popBg: colors.menu_v1.bg,
    popShadow: `${effects.elevation.medium[1]} ${colors.elevation.medium[2]}, ${effects.elevation.medium[2]} ${colors.elevation.medium[1]}`,
    roleColor: colors.menu_v1_item.text.unselected.description,
    captionColor: colors.menu_v1_item.text.unselected.description,
    dividerColor: colors.divider.bg.bold,
    unselected: {
      enabled: {
        color: colors.menu_v1_item.text.unselected.base
      },
      hover: {
        background: colors.menu_v1_item.bg.unselected.hover
      },
      active: {
        background: colors.menu_v1_item.bg.unselected.active
      }
    },
    selected: {
      enabled: {
        color: colors.menu_v1_item.text.selected.base,
        background: colors.menu_v1_item.bg.selected.enabled
      },
      hover: {
        color: colors.menu_v1_item.text.selected.base,
        background: colors.menu_v1_item.bg.selected.hover
      },
      active: {
        color: colors.menu_v1_item.text.selected.base,
        background: colors.menu_v1_item.bg.selected.active
      }
    }
  }
}
