import { ComponentContext } from '@design-system/css-configs/types'
import { focus } from '@design-system/tokens/focus'
import { RadioColorConfig } from '@src/radio/types'

export const radio = ({ effects }: ComponentContext): RadioColorConfig => {
  return {
    enabled: {
      color: 'var(--radio--text--base--enabled)',
      background: 'var(--radio--bg--base--enabled)',
      border: 'var(--radio--border--base--enabled)',
      dotColor: 'var(--radio--icon--base--enabled_selected)'
    },
    hover: {
      background: 'var(--radio--bg--base--hover)',
      border: 'var(--radio--border--base--hover)',
      dotColor: 'var(--radio--icon--base--hover_selected)'
    },
    active: {
      background: 'var(--radio--bg--base--active)',
      border: 'var(--radio--border--base--active)',
      dotColor: 'var(--radio--icon--base--active_selected)'
    },
    disabled: {
      color: 'var(--radio--text--base--disabled)',
      background: 'var(--radio--bg--base--disabled)',
      border: 'var(--radio--border--base--disabled)',
      dotColor: 'var(--radio--icon--base--disabled_selected)'
    },
    readonly: {
      color: 'var(--radio--text--base--readonly)',
      background: 'var(--radio--bg--base--readonly)',
      border: 'var(--radio--border--base--readonly)',
      dotColor: 'var(--radio--icon--base--readonly_selected)'
    },
    invalid: {
      border: 'var(--radio--border--danger--enabled)',
      dotColor: 'var(--radio--icon--danger--enabled_selected)'
    },
    ...focus({ effects })
  }
}
