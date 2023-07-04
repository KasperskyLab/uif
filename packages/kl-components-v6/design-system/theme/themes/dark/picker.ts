import { picker as defaultPickerCreator, pickerInput as defaultPickerInputCreator } from '../light/picker'
import { ComponentThemeContext } from '../config'

export const picker = ({ colors }: ComponentThemeContext): any => {
  const defaultPicker = defaultPickerCreator({ colors })

  return {
    ...defaultPicker,
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

export const pickerInput = ({ colors }: ComponentThemeContext): any => {
  const defaultPickerInput = defaultPickerInputCreator({ colors })

  return {
    ...defaultPickerInput,
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
