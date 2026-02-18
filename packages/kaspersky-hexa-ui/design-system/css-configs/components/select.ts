import { ComponentContext } from '@design-system/css-configs/types'
import { focus } from '@design-system/tokens/focus'
import { SelectColorConfig } from '@src/select/types'

export const select = ({ effects }: ComponentContext): SelectColorConfig => ({
  enabled: {
    background: 'var(--input_select--bg--enabled)',
    color: 'var(--input_select--text--enabled--value)',
    border: 'var(--input_select--border--enabled)',
    placeholder: {
      color: 'var(--input_select--text--enabled--placeholder)'
    },
    dropdown: {
      background: 'var(--dropdown--bg)',
      boxShadow: `${effects.elevation.medium[1]} var(--elevation--medium--2), ${effects.elevation.medium[2]} var(--elevation--medium--1)`
    },
    option: {
      color: 'var(--dropdown_item--text--enabled)',
      description: 'var(--dropdown_item--text--description)'
    },
    loadingError: {
      color: 'var(--input_select--border--error)'
    }
  },
  hover: {
    border: 'var(--input_select--border--hover)',
    option: {
      background: 'var(--dropdown_item--bg--hover)',
      color: 'var(--dropdown_item--text--hover)'
    }
  },
  disabled: {
    color: 'var(--input_select--text--disabled--value)',
    background: 'var(--input_select--bg--disabled)',
    border: 'var(--input_select--border--disabled)',
    placeholder: {
      color: 'var(--input_select--text--disabled--placeholder)'
    },
    option: {
      color: 'var(--dropdown_item--text--disabled)'
    }
  },
  readonly: {
    color: 'var(--input_select--text--readonly--value)',
    border: 'var(--input_select--border--readonly)'
  },
  selected: {
    option: {
      background: 'var(--dropdown_item--bg--enabled_selected)',
      color: 'var(--dropdown_item--text--enabled_selected)'
    }
  },
  success: {
    border: 'var(--input_select--border--success)'
  },
  error: {
    border: 'var(--input_select--border--error)'
  },
  ...focus({ effects })
})
