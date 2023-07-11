import { radio as defaultRadioCreator } from '../light/radio'
import { ComponentThemeContext } from '../config'
import { RadioColorConfig as Scope, RadioMode as Type } from '../../../../src/radio/types'

export const radio = ({ colors }: ComponentThemeContext): Record<Type, Scope> => {
  const defaultRadio = defaultRadioCreator({ colors })

  return {
    ...defaultRadio,
    default: {
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
        bgColor: colors.mainInteractPressed,
        borderColor: colors.mainInteractPressed,
        dotColor: colors.mainInteractPrimary,
        dotBgColor: colors.mainInteractPressed
      },
      focus: {
        bgColor: colors.bg.alternative,
        borderColor: 'red',
        dotColor: colors.textIconsElements.primary,
        dotBgColor: colors.mainInteractFocus,
        outline: `0 0 0 2px ${colors.mainInteractFocus}`
      },
      disabled: {
        color: colors.textIconsElements.disabled,
        bgColor: colors.elements.seporatorbold,
        borderColor: colors.elements.seporatorbold,
        dotColor: colors.textIconsElements.disabled,
        dotBgColor: colors.elements.seporatorbold
      }
    },
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
        bgColor: colors.mainInteractPressed,
        borderColor: colors.mainInteractPressed,
        dotColor: colors.mainInteractPrimary,
        dotBgColor: colors.mainInteractPressed
      },
      focus: {
        bgColor: colors.bg.alternative,
        borderColor: 'red',
        dotColor: colors.textIconsElements.primary,
        dotBgColor: colors.mainInteractFocus,
        outline: `0 0 0 2px ${colors.mainInteractFocus}`
      },
      disabled: {
        color: colors.textIconsElements.disabled,
        bgColor: colors.elements.seporatorbold,
        borderColor: colors.elements.seporatorbold,
        dotColor: colors.textIconsElements.disabled,
        dotBgColor: colors.elements.seporatorbold
      }
    }
  }
}
