import { ComponentThemeContext } from '../config'
import { RadioColorConfig as Scope, RadioMode as Type } from '../../../../src/radio/types'
import { focus } from '@design-system/tokens/focus'

export const radio = ({ colors }: ComponentThemeContext): Record<Type, Scope> => {
  return {
    default: {
      normal: {
        color: colors.textIconsElements.primary,
        bgColor: colors.bg.base,
        borderColor: colors.elements['line-solid'],
        dotColor: colors.mainInteractPrimary
      },
      hover: {
        bgColor: colors.elements['separator-solid'],
        borderColor: colors.elements['line-solid'],
        dotColor: colors.mainInteractSecondary
      },
      active: {
        bgColor: colors.elements['separator-bold-solid'],
        borderColor: colors.elements['line-solid'],
        dotColor: colors.mainInteractTertiary
      },
      disabled: {
        color: colors.textIconsElements.disabled,
        bgColor: colors.elements.separator,
        borderColor: 'transparent',
        dotColor: colors.textIconsElements.disabled
      },
      readonly: {
        color: colors.textIconsElements['secondary2-solid'],
        bgColor: colors.elements.separator,
        borderColor: 'transparent',
        dotColor: colors.textIconsElements.disabled
      },
      invalid: {
        borderColor: colors.dangerInteract.primary,
        dotColor: colors.dangerInteract.primary
      },
      ...focus({ colors })
    },
    /** @deprecated  */
    button: {
      normal: {
        background: 'transparent',
        color: colors.textIconsElements.primary,
        border: `${colors.elements['separator-bold']}`
      },
      hover: {
        background: colors.bg.alternative2
      },
      active: {
        background: colors.textIconsElements['secondary-invert'],
        border: `${colors.mainInteractFocus}`
      },
      disabled: {
        background: colors.bg.alternative,
        color: colors.textIconsElements.disabled,
        border: `${colors.elements.separator}`
      },
      ...focus({ colors })
    }
  }
}
