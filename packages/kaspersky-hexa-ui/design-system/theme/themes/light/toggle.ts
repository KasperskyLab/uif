import { focus } from '@design-system/tokens/focus'
import { ToggleColorConfig } from '@src/toggle/types'

import { ComponentThemeContext } from '../config'

export const toggle = ({ colors, effects }: ComponentThemeContext): ToggleColorConfig => {
  return {
    enabled: {
      color: colors.toggle.text.enabled,
      knob: colors.toggle.bg.handle.enabled,
      bgOn: colors.toggle.bg.track.enabled_selected,
      bgOff: colors.toggle.bg.track.enabled
    },
    hover: {
      color: colors.toggle.text.hover,
      knob: colors.toggle.bg.handle.hover,
      bgOn: colors.toggle.bg.track.hover_selected,
      bgOff: colors.toggle.bg.track.hover
    },
    active: {
      color: colors.toggle.text.active,
      knob: colors.toggle.bg.handle.active,
      bgOn: colors.toggle.bg.track.active_selected,
      bgOff: colors.toggle.bg.track.active
    },
    disabled: {
      color: colors.toggle.text.disabled,
      knob: colors.toggle.bg.handle.disabled,
      bgOn: colors.toggle.bg.track.disabled_selected,
      bgOff: colors.toggle.bg.track.disabled
    },
    readonly: {
      color: colors.toggle.text.readonly,
      knob: colors.toggle.bg.handle.readonly,
      bgOn: colors.toggle.bg.track.readonly_selected,
      bgOff: colors.toggle.bg.track.readonly
    },
    ...focus({ colors, effects })
  }
}
