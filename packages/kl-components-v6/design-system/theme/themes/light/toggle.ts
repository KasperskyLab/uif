import { ToggleColorConfig } from '../../../../src/toggle/types'
import { ComponentThemeContext } from '../config'

export const toggle = ({ colors }: ComponentThemeContext): ToggleColorConfig => {
  return {
    normal: {
      color: colors.textIconsElements.primary,
      bgOn: colors.mainInteractPrimary,
      bgOff: colors.textIconsElements.disabled,
      dotColorOn: colors.bg.base,
      dotColorOff: colors.bg.base
    },
    hover: {
      bgOn: colors.mainInteractSecondary,
      bgOff: colors.elements.line,
      dotColorOn: colors.bg.base,
      dotColorOff: colors.bg.base
    },
    active: {
      bgOn: colors.mainInteractTertiary,
      bgOff: colors.textIconsElements.secondary,
      dotColorOn: colors.bg.base,
      dotColorOff: colors.bg.base
    },
    focus: {
      bgOn: colors.mainInteractPrimary,
      bgOff: colors.textIconsElements.disabled,
      dotColorOn: colors.bg.base,
      dotColorOff: colors.bg.base,
      outline: `0 0 0 2px ${colors.mainInteractFocus}`
    },
    disabled: {
      color: colors.textIconsElements.disabled,
      bgOn: colors.elements.seporatorbold,
      bgOff: colors.elements.seporatorbold,
      dotColorOn: colors.bg.alternative,
      dotColorOff: colors.bg.alternative
    }
  }
}
