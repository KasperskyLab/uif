import { DropdownColorConfig } from '@src/dropdown/types'

import { ComponentThemeContext } from '../config'

export const dropdown = ({ colors, effects }: ComponentThemeContext): DropdownColorConfig => ({
  boxShadow: `${effects.elevation.medium[1]} ${colors.elevation.medium[2]}, ${effects.elevation.medium[2]} ${colors.elevation.medium[1]}`,
  background: colors.dropdown.bg,
  groupTitleColor: colors.dropdown.headline,
  unselected: {
    enabled: {
      color: colors.dropdown_item.text.enabled,
      background: colors.dropdown_item.bg.enabled,
      descriptionColor: colors.dropdown_item.text.description
    },
    hover: {
      color: colors.dropdown_item.text.hover,
      background: colors.dropdown_item.bg.hover
    },
    active: {
      color: colors.dropdown_item.text.active,
      background: colors.dropdown_item.bg.active
    },
    disabled: {
      color: colors.dropdown_item.text.disabled,
      background: colors.dropdown_item.bg.disabled
    }
  },
  selected: {
    enabled: {
      color: colors.dropdown_item.text.enabled_selected,
      background: colors.dropdown_item.bg.enabled_selected,
      descriptionColor: colors.dropdown_item.text.description_selected
    },
    hover: {
      color: colors.dropdown_item.text.hover_selected,
      background: colors.dropdown_item.bg.hover
    },
    active: {
      color: colors.dropdown_item.text.active_selected,
      background: colors.dropdown_item.bg.active
    },
    disabled: {
      color: colors.dropdown_item.text.disabled_selected,
      background: colors.dropdown_item.bg.disabled_selected
    }
  }
})
