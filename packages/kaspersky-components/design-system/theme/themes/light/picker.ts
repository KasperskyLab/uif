import { PickerColorConfig, PickerInputColorConfig } from '../../../../src/datepicker/types'
import { ComponentThemeContext } from '../config'

export const picker = ({ colors }: ComponentThemeContext): PickerColorConfig => {
  return {
    normal: {
      background: colors.bg.base,
      color: colors.textIconsElements.primary,
      iconColor: colors.textIconsElements.baseicon,
      separatorColor: colors.elements.seporator
    },
    hover: {
      background: colors.bg.alternative2
    },
    active: {
      color: colors.textIconsElements['primary-invert'],
      background: colors.elements['accent-link']
    },
    inRange: {
      color: colors.textIconsElements.primary,
      background: colors.bg.alternative2
    },
    disabled: {
      color: colors.textIconsElements.disabled
    }
  }
}

export const pickerInput = ({ colors }: ComponentThemeContext): PickerInputColorConfig => {
  return {
    normal: {
      background: colors.bg.base,
      color: colors.textIconsElements.secondary2,
      outline: colors.elements.seporatorbold
    },
    hover: {
      outline: colors.mainInteractFocus
    },
    focus: {
      outline: colors.mainInteractFocus
    },
    active: {},
    disabled: {
      background: colors.elements.seporator,
      color: colors.textIconsElements.secondary2
    }
  }
}
