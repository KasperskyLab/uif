import { focus } from '@design-system/tokens/focus'
import { RadioColorConfig } from '@src/radio/types'

import { ComponentThemeContext } from '../config'

export const radio = ({ colors, effects }: ComponentThemeContext): RadioColorConfig => {
  return {
    enabled: {
      color: colors.radio.text.base.enabled,
      background: colors.radio.bg.base.enabled,
      border: colors.radio.border.base.enabled,
      dotColor: colors.radio.icon.base.enabled_selected
    },
    hover: {
      background: colors.radio.bg.base.hover,
      border: colors.radio.border.base.hover,
      dotColor: colors.radio.icon.base.hover_selected
    },
    active: {
      background: colors.radio.bg.base.active,
      border: colors.radio.border.base.active,
      dotColor: colors.radio.icon.base.active_selected
    },
    disabled: {
      color: colors.radio.text.base.disabled,
      background: colors.radio.bg.base.disabled,
      border: colors.radio.border.base.disabled,
      dotColor: colors.radio.icon.base.disabled_selected
    },
    readonly: {
      color: colors.radio.text.base.readonly,
      background: colors.radio.bg.base.readonly,
      border: colors.radio.border.base.readonly,
      dotColor: colors.radio.icon.base.readonly_selected
    },
    invalid: {
      border: colors.radio.border.danger.enabled,
      dotColor: colors.radio.icon.danger.enabled_selected
    },
    ...focus({ colors, effects })
  }
}
