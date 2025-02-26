import { focus } from '@design-system/tokens/focus'
import { InputColorConfig } from '@src/input/types'

import { ComponentThemeContext } from '../config'

export const input = ({ colors, effects }: ComponentThemeContext): InputColorConfig => {
  return {
    enabled: {
      placeholderColor: colors.input_text.text.enabled.placeholder,
      color: colors.input_text.text.enabled.value,
      background: colors.input_text.bg.enabled,
      border: colors.input_text.border.enabled
    },
    hover: {
      border: colors.input_text.border.hover
    },
    disabled: {
      color: colors.input_text.text.disabled.value,
      background: colors.input_text.bg.disabled,
      border: colors.input_text.bg.disabled
    },
    readonly: {
      color: colors.input_text.text.readonly.value
    },
    error: {
      border: colors.input_text.border.error
    },
    success: {
      border: colors.input_text.border.success
    },
    ...focus({ colors, effects })
  }
}
