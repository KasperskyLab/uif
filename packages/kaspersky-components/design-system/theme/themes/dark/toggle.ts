import { toggle as defaultToggleCreator } from '../light/toggle'
import { ComponentThemeContext } from '../config'
import { ToggleColorConfig } from '../../../../src/toggle/types'

export const toggle = ({ colors }: ComponentThemeContext): ToggleColorConfig => {
  const defaultToggle = defaultToggleCreator({ colors })

  return {
    ...defaultToggle,
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
      bgOn: colors.elements.seporatorbold,
      bgOff: colors.elements.seporatorbold,
      dotColorOn: colors.bg.alternative,
      dotColorOff: colors.bg.alternative
    }
  }
}
