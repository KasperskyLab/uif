import { PickerColorConfig } from '@src/datepicker/types'

import { ComponentThemeContext } from '../config'

export const picker = ({ colors }: ComponentThemeContext): PickerColorConfig => {
  return {
    separator: colors.calendar_dropdown.border,
    boxShadow: '0px 0px 1px 0px rgba(9, 30, 66, 0.64), 0px 3px 5px 0px rgba(9, 30, 66, 0.20)',
    unselected: {
      enabled: {
        background: colors.calendar_dropdown_button.bg.base.enabled,
        color: colors.calendar_dropdown_button.text.base.enabled,
        border: colors.calendar_dropdown_button.border.base.enabled
      },
      hover: {
        background: colors.calendar_dropdown_button.bg.base.hover
      },
      active: {
        background: colors.calendar_dropdown_button.bg.base.active
      },
      disabled: {
        background: colors.calendar_dropdown_button.bg.inactive.enabled,
        color: colors.calendar_dropdown_button.text.inactive.enabled,
        border: colors.calendar_dropdown_button.border.inactive.enabled
      }
    },
    selected: {
      enabled: {
        background: colors.calendar_dropdown_button.bg.selected.enabled,
        color: colors.calendar_dropdown_button.text.selected.enabled
      },
      hover: {
        background: colors.calendar_dropdown_button.bg.selected.hover
      },
      active: {
        background: colors.calendar_dropdown_button.bg.selected.active
      }
    },
    between: {
      enabled: {
        background: colors.calendar_dropdown_button.bg.between.enabled,
        color: colors.calendar_dropdown_button.text.between.enabled,
        border: colors.calendar_dropdown_button.border.between.enabled
      },
      hover: {
        background: colors.calendar_dropdown_button.bg.between.hover
      },
      active: {
        background: colors.calendar_dropdown_button.bg.between.active
      }
    }
  }
}
