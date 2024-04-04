import { radio as defaultRadioCreator } from '../light/radio'
import { ComponentThemeContext } from '../config'
import { RadioColorConfig as Scope, RadioMode as Type } from '../../../../src/radio/types'

export const radio = ({ colors }: ComponentThemeContext): Record<Type, Scope> => {
  const defaultRadio = defaultRadioCreator({ colors })

  return {
    ...defaultRadio,
    /** @deprecated */
    button: {
      normal: {
        color: colors.textIconsElements.primary,
        bgColor: colors.bg.base,
        borderColor: colors.elements.line,
        dotColor: colors.textIconsElements.primary,
        dotBgColor: colors.mainInteractPrimary
      },
      hover: {
        bgColor: colors.bg.alternative2,
        borderColor: colors.elements.line,
        dotColor: colors.textIconsElements.primary,
        dotBgColor: colors.mainInteractSecondary
      },
      active: {
        bgColor: colors.bg.alternative2,
        borderColor: colors.elements.line,
        dotColor: colors.textIconsElements.primary,
        dotBgColor: colors.mainInteractTertiary
      },
      disabled: {
        color: colors.textIconsElements.disabled,
        bgColor: colors.elements['separator-bold'],
        borderColor: colors.elements['separator-bold'],
        dotColor: colors.textIconsElements.disabled,
        dotBgColor: colors.elements['separator-bold']
      }
    }
  }
}
