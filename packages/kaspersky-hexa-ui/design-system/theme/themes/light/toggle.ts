import { focus } from '@design-system/tokens/focus'
import { ToggleColorConfig } from '@src/toggle/types'

import { ComponentThemeContext } from '../config'

export const toggle = ({ colors, effects }: ComponentThemeContext): ToggleColorConfig => {
  return {
    enabled: {
      color: colors.toggle.text.enabled,
      knob: colors.toggle.knob.enabled,
      bgOn: colors.toggle.bg.enabled_selected,
      bgOff: colors.toggle.bg.enabled
    },
    hover: {
      color: colors.toggle.text.hover,
      knob: colors.toggle.knob.hover,
      bgOn: colors.toggle.bg.hover_selected,
      bgOff: colors.toggle.bg.hover
    },
    active: {
      color: colors.toggle.text.active,
      knob: colors.toggle.knob.active,
      bgOn: colors.toggle.bg.active_selected,
      bgOff: colors.toggle.bg.active
    },
    disabled: {
      color: colors.toggle.text.disabled,
      knob: colors.toggle.knob.disabled,
      bgOn: colors.toggle.bg.disabled_selected,
      bgOff: colors.toggle.bg.disabled
    },
    readonly: {
      color: colors.toggle.text.readonly,
      knob: colors.toggle.knob.readonly,
      bgOn: colors.toggle.bg.readonly_selected,
      bgOff: colors.toggle.bg.readonly
    },
    ...focus({ colors, effects })
  }
}
