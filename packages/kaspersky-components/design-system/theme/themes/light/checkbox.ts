import { ComponentThemeContext } from '../config'
import { CheckboxColorConfig } from '@src/checkbox/types'
import { focus } from '@design-system/tokens/focus'

export const checkbox = ({ colors }: ComponentThemeContext): CheckboxColorConfig => {
  return {
    normal: {
      color: colors.textIconsElements.primary,
      bgColor: colors.bg.base,
      borderColor: colors.elements['line-solid'],
      checkColor: colors.foregroundInvertedColor,
      checkBgColor: colors.mainInteractPrimary
    },
    hover: {
      bgColor: colors.elements['separator-solid'],
      borderColor: colors.elements['line-solid'],
      checkColor: colors.foregroundInvertedColor,
      checkBgColor: colors.mainInteractSecondary
    },
    active: {
      bgColor: colors.elements['separator-bold-solid'],
      borderColor: colors.elements['line-solid'],
      checkColor: colors.foregroundInvertedColor,
      checkBgColor: colors.mainInteractTertiary
    },
    disabled: {
      color: colors.textIconsElements.disabled,
      bgColor: colors.elements.separator,
      borderColor: colors.elements.separator,
      checkColor: colors.textIconsElements.disabled,
      checkBgColor: colors.elements.separator
    },
    readonly: {
      color: colors.textIconsElements['secondary2-solid'],
      bgColor: colors.elements.separator,
      borderColor: colors.elements.separator,
      checkColor: colors.textIconsElements.disabled,
      checkBgColor: colors.elements.separator
    },
    invalid: {
      bgColor: colors.bg.base,
      borderColor: colors.dangerInteract.primary,
      checkColor: colors.foregroundInvertedColor,
      checkBgColor: colors.dangerInteract.primary
    },
    ...focus({ colors })
  }
}
