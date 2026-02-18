import { ComponentContext } from '@design-system/css-configs/types'
import { focus } from '@design-system/tokens/focus'
import { ToggleColorConfig } from '@src/toggle/types'

export const toggle = ({ effects }: ComponentContext): ToggleColorConfig => {
  return {
    enabled: {
      color: 'var(--toggle--text--enabled)',
      knob: 'var(--toggle--bg--handle--enabled)',
      bgOn: 'var(--toggle--bg--track--enabled_selected)',
      bgOff: 'var(--toggle--bg--track--enabled)'
    },
    hover: {
      color: 'var(--toggle--text--hover)',
      knob: 'var(--toggle--bg--handle--hover)',
      bgOn: 'var(--toggle--bg--track--hover_selected)',
      bgOff: 'var(--toggle--bg--track--hover)'
    },
    active: {
      color: 'var(--toggle--text--active)',
      knob: 'var(--toggle--bg--handle--active)',
      bgOn: 'var(--toggle--bg--track--active_selected)',
      bgOff: 'var(--toggle--bg--track--active)'
    },
    disabled: {
      color: 'var(--toggle--text--disabled)',
      knob: 'var(--toggle--bg--handle--disabled)',
      bgOn: 'var(--toggle--bg--track--disabled_selected)',
      bgOff: 'var(--toggle--bg--track--disabled)'
    },
    readonly: {
      color: 'var(--toggle--text--readonly)',
      knob: 'var(--toggle--bg--handle--readonly)',
      bgOn: 'var(--toggle--bg--track--readonly_selected)',
      bgOff: 'var(--toggle--bg--track--readonly)'
    },
    ...focus({ effects })
  }
}
