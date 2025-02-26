import { focus } from '@design-system/tokens/focus'
import { SelectColorConfig } from '@src/select/types'

import { ComponentThemeContext } from '../config'

export const select = ({ colors, effects }: ComponentThemeContext): SelectColorConfig => ({
  enabled: {
    background: colors.input_select.bg.enabled,
    color: colors.input_select.text.enabled.value,
    border: colors.input_select.border.enabled,
    placeholder: {
      color: colors.input_select.text.enabled.placeholder
    },
    dropdown: {
      background: colors.dropdown.bg,
      boxShadow: `${effects.elevation.medium[1]} ${colors.elevation.medium[2]}, ${effects.elevation.medium[2]} ${colors.elevation.medium[1]}`
    },
    option: {
      color: colors.dropdown_item.text.enabled
    },
    loadingError: {
      color: colors.input_select.border.error
    }
  },
  hover: {
    border: colors.input_select.border.hover,
    option: {
      background: colors.dropdown_item.bg.hover,
      color: colors.dropdown_item.text.hover
    }
  },
  disabled: {
    color: colors.input_select.text.disabled.value,
    background: colors.input_select.bg.disabled,
    placeholder: {
      color: colors.input_select.text.disabled.placeholder
    },
    option: {
      color: colors.dropdown_item.text.disabled
    }
  },
  readonly: {
    color: colors.input_select.text.readonly.value
  },
  selected: {
    option: {
      background: colors.dropdown_item.bg.enabled_selected,
      color: colors.dropdown_item.text.enabled_selected
    }
  },
  success: {
    border: colors.input_select.border.success
  },
  error: {
    border: colors.input_select.border.error
  },
  ...focus({ colors, effects })
})
