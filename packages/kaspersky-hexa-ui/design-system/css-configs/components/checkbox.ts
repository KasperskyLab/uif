import { ComponentContext } from '@design-system/css-configs/types'
import { focus } from '@design-system/tokens/focus'
import { CheckboxColorConfig } from '@src/checkbox/types'

export const checkbox = ({ effects }: ComponentContext): CheckboxColorConfig => {
  return {
    default: {
      enabled: {
        background: {
          unselected: 'var(--checkbox--bg--base--enabled)',
          selected: 'var(--checkbox--bg--base--enabled_selected)'
        },
        color: 'var(--checkbox--text--base--enabled)',
        border: 'var(--checkbox--border--base--enabled)',
        checkColor: 'var(--checkbox--icon--base--enabled)'
      },
      hover: {
        background: {
          unselected: 'var(--checkbox--bg--base--hover)',
          selected: 'var(--checkbox--bg--base--hover_selected)'
        },
        color: 'var(--checkbox--text--base--hover)',
        border: 'var(--checkbox--border--base--hover)',
        checkColor: 'var(--checkbox--icon--base--hover)'
      },
      active: {
        background: {
          unselected: 'var(--checkbox--bg--base--active)',
          selected: 'var(--checkbox--bg--base--active_selected)'
        },
        color: 'var(--checkbox--text--base--active)',
        border: 'var(--checkbox--border--base--active)',
        checkColor: 'var(--checkbox--icon--base--active)'
      },
      disabled: {
        background: {
          unselected: 'var(--checkbox--bg--base--disabled)',
          selected: 'var(--checkbox--bg--base--disabled_selected)'
        },
        color: 'var(--checkbox--text--base--disabled)',
        border: 'var(--checkbox--border--base--disabled)',
        checkColor: 'var(--checkbox--icon--base--disabled)'
      },
      readonly: {
        background: {
          unselected: 'var(--checkbox--bg--base--readonly)',
          selected: 'var(--checkbox--bg--base--readonly_selected)'
        },
        color: 'var(--checkbox--text--base--readonly)',
        border: 'var(--checkbox--border--base--readonly)',
        checkColor: 'var(--checkbox--icon--base--readonly)'
      }
    },
    invalid: {
      enabled: {
        background: {
          unselected: 'var(--checkbox--bg--danger--enabled)',
          selected: 'var(--checkbox--bg--danger--enabled_selected)'
        },
        color: 'var(--checkbox--text--danger--enabled)',
        border: 'var(--checkbox--border--danger--enabled)',
        checkColor: 'var(--checkbox--icon--danger--enabled)'
      },
      hover: {
        background: {
          unselected: 'var(--checkbox--bg--danger--hover)',
          selected: 'var(--checkbox--bg--danger--hover_selected)'
        },
        color: 'var(--checkbox--text--danger--hover)',
        border: 'var(--checkbox--border--danger--hover)',
        checkColor: 'var(--checkbox--icon--danger--hover)'
      },
      active: {
        background: {
          unselected: 'var(--checkbox--bg--danger--active)',
          selected: 'var(--checkbox--bg--danger--active_selected)'
        },
        color: 'var(--checkbox--text--danger--active)',
        border: 'var(--checkbox--border--danger--active)',
        checkColor: 'var(--checkbox--icon--danger--active)'
      },
      disabled: {
        background: {
          unselected: 'var(--checkbox--bg--danger--disabled)',
          selected: 'var(--checkbox--bg--danger--disabled_selected)'
        },
        color: 'var(--checkbox--text--danger--disabled)',
        border: 'var(--checkbox--border--danger--disabled)',
        checkColor: 'var(--checkbox--icon--danger--disabled)'
      },
      readonly: {
        background: {
          unselected: 'var(--checkbox--bg--danger--readonly)',
          selected: 'var(--checkbox--bg--danger--readonly_selected)'
        },
        color: 'var(--checkbox--text--danger--readonly)',
        border: 'var(--checkbox--border--danger--readonly)',
        checkColor: 'var(--checkbox--icon--danger--readonly)'
      }
    },
    ...focus({ effects })
  }
}
