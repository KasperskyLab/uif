import { ComponentThemeContext } from '../config'
import { RadioColorConfig as Scope, RadioMode as Type } from '../../../../src/radio/types'

export const radio = ({ colors }: ComponentThemeContext): Record<Type, Scope> => {
  return {
    default: {
      normal: {
        color: colors.textIconsElements.primary,
        bgColor: colors.bg.base,
        borderColor: colors.elements.line,
        dotColor: colors.mainInteractPrimary
      },
      hover: {
        bgColor: colors.bg.alternative2,
        borderColor: colors.elements.line,
        dotColor: colors.mainInteractSecondary
      },
      active: {
        bgColor: colors.mainInteractPressed,
        borderColor: colors.mainInteractPressed,
        dotColor: colors.mainInteractSecondary
      },
      focus: {
        bgColor: colors.bg.alternative,
        borderColor: 'transparent',
        dotColor: colors.mainInteractSecondary,
        outline: `0 0 0 2px ${colors.mainInteractFocus}`
      },
      disabled: {
        color: colors.textIconsElements.disabled,
        bgColor: colors.elements.seporatorbold,
        borderColor: colors.elements.seporatorbold,
        dotColor: colors.textIconsElements.disabled
      }
    },
    button: {
      normal: {
        background: 'transparent',
        color: colors.textIconsElements.primary,
        border: `${colors.elements.seporatorbold}`
      },
      hover: {
        background: colors.bg.alternative2
      },
      active: {
        background: colors.textIconsElements['secondary-invert'],
        border: `${colors.mainInteractFocus}`
      },
      focus: {
        background: colors.elements.seporator,
        border: `${colors.elements.seporatorbold}`
      },
      disabled: {
        background: colors.bg.alternative,
        color: colors.textIconsElements.disabled,
        border: `${colors.elements.seporator}`
      }
    }
  }
}
