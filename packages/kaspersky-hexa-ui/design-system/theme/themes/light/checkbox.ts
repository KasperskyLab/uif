import { focus } from '@design-system/tokens/focus'
import { CheckboxColorConfig } from '@src/checkbox/types'

import { ComponentThemeContext } from '../config'

export const checkbox = ({ colors, effects }: ComponentThemeContext): CheckboxColorConfig => {
  return {
    default: {
      enabled: {
        background: {
          unselected: colors.checkbox.bg.base.enabled,
          selected: colors.checkbox.bg.base.enabled_selected
        },
        color: colors.checkbox.text.base.enabled,
        border: colors.checkbox.border.base.enabled,
        checkColor: colors.checkbox.icon.base.enabled
      },
      hover: {
        background: {
          unselected: colors.checkbox.bg.base.hover,
          selected: colors.checkbox.bg.base.hover_selected
        },
        color: colors.checkbox.text.base.hover,
        border: colors.checkbox.border.base.hover,
        checkColor: colors.checkbox.icon.base.hover
      },
      active: {
        background: {
          unselected: colors.checkbox.bg.base.active,
          selected: colors.checkbox.bg.base.active_selected
        },
        color: colors.checkbox.text.base.active,
        border: colors.checkbox.border.base.active,
        checkColor: colors.checkbox.icon.base.active
      },
      disabled: {
        background: {
          unselected: colors.checkbox.bg.base.disabled,
          selected: colors.checkbox.bg.base.disabled_selected
        },
        color: colors.checkbox.text.base.disabled,
        border: colors.checkbox.border.base.disabled,
        checkColor: colors.checkbox.icon.base.disabled
      },
      readonly: {
        background: {
          unselected: colors.checkbox.bg.base.readonly,
          selected: colors.checkbox.bg.base.readonly_selected
        },
        color: colors.checkbox.text.base.readonly,
        border: colors.checkbox.border.base.readonly,
        checkColor: colors.checkbox.icon.base.readonly
      }
    },
    invalid: {
      enabled: {
        background: {
          unselected: colors.checkbox.bg.danger.enabled,
          selected: colors.checkbox.bg.danger.enabled_selected
        },
        color: colors.checkbox.text.danger.enabled,
        border: colors.checkbox.border.danger.enabled,
        checkColor: colors.checkbox.icon.danger.enabled
      },
      hover: {
        background: {
          unselected: colors.checkbox.bg.danger.hover,
          selected: colors.checkbox.bg.danger.hover_selected
        },
        color: colors.checkbox.text.danger.hover,
        border: colors.checkbox.border.danger.hover,
        checkColor: colors.checkbox.icon.danger.hover
      },
      active: {
        background: {
          unselected: colors.checkbox.bg.danger.active,
          selected: colors.checkbox.bg.danger.active_selected
        },
        color: colors.checkbox.text.danger.active,
        border: colors.checkbox.border.danger.active,
        checkColor: colors.checkbox.icon.danger.active
      },
      disabled: {
        background: {
          unselected: colors.checkbox.bg.danger.disabled,
          selected: colors.checkbox.bg.danger.disabled_selected
        },
        color: colors.checkbox.text.danger.disabled,
        border: colors.checkbox.border.danger.disabled,
        checkColor: colors.checkbox.icon.danger.disabled
      },
      readonly: {
        background: {
          unselected: colors.checkbox.bg.danger.readonly,
          selected: colors.checkbox.bg.danger.readonly_selected
        },
        color: colors.checkbox.text.danger.readonly,
        border: colors.checkbox.border.danger.readonly,
        checkColor: colors.checkbox.icon.danger.readonly
      }
    },
    ...focus({ colors, effects })
  }
}
