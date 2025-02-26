import { ComponentContext } from '@design-system/css-configs/types'
import { PickerColorConfig } from '@src/datepicker/types'

export const picker = ({ effects }: ComponentContext): PickerColorConfig => ({
  separator: 'var(--calendar_dropdown--border)',
  boxShadow: `${effects.elevation.medium[1]} var(--elevation--medium--2), ${effects.elevation.medium[2]} var(--elevation--medium--1)`,
  unselected: {
    enabled: {
      background: 'var(--calendar_dropdown_button--bg--base--enabled)',
      color: 'var(--calendar_dropdown_button--text--base--enabled)',
      border: 'var(--calendar_dropdown_button--border--base--enabled)'
    },
    hover: {
      background: 'var(--calendar_dropdown_button--bg--base--hover)'
    },
    active: {
      background: 'var(--calendar_dropdown_button--bg--base--active)'
    },
    disabled: {
      background: 'var(--calendar_dropdown_button--bg--inactive--enabled)',
      color: 'var(--calendar_dropdown_button--text--inactive--enabled)',
      border: 'var(--calendar_dropdown_button--border--inactive--enabled)'
    }
  },
  selected: {
    enabled: {
      background: 'var(--calendar_dropdown_button--bg--selected--enabled)',
      color: 'var(--calendar_dropdown_button--text--selected--enabled)'
    },
    hover: {
      background: 'var(--calendar_dropdown_button--bg--selected--hover)'
    },
    active: {
      background: 'var(--calendar_dropdown_button--bg--selected--active)'
    }
  },
  between: {
    enabled: {
      background: 'var(--calendar_dropdown_button--bg--between--enabled)',
      color: 'var(--calendar_dropdown_button--text--between--enabled)',
      border: 'var(--calendar_dropdown_button--border--between--enabled)'
    },
    hover: {
      background: 'var(--calendar_dropdown_button--bg--between--hover)'
    },
    active: {
      background: 'var(--calendar_dropdown_button--bg--between--active)'
    }
  }
})
