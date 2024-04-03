import { ToggleColorConfig } from '@src/toggle/types'
import { ComponentThemeContext } from '../config'
import { focus } from '@design-system/tokens/focus'

export const toggle = ({ colors }: ComponentThemeContext): ToggleColorConfig => {
  return {
    normal: {
      color: colors.textIconsElements.primary,
      bgOn: colors.mainInteractPrimary,
      bgOff: colors.elements['separator-bold-solid'],
      dotColorOn: colors.bg.base,
      dotColorOff: colors.bg.base
    },
    hover: {
      bgOn: colors.mainInteractSecondary,
      bgOff: colors.elements['line-solid'],
      dotColorOn: colors.bg.base,
      dotColorOff: colors.bg.base
    },
    active: {
      bgOn: colors.mainInteractTertiary,
      bgOff: colors.textIconsElements['base-icon-solid'],
      dotColorOn: colors.bg.base,
      dotColorOff: colors.bg.base
    },
    disabled: {
      color: colors.textIconsElements['disabled-solid'],
      bgOn: colors.elements['separator-solid'],
      bgOff: colors.elements['separator-solid'],
      dotColorOn: colors.elements['separator-bold-solid'],
      dotColorOff: colors.elements['separator-bold-solid']
    },
    readonly: {
      color: colors.textIconsElements['secondary2-solid'],
      bgOn: colors.elements['separator-solid'],
      bgOff: colors.elements['separator-solid'],
      dotColorOn: colors.elements['separator-bold-solid'],
      dotColorOff: colors.elements['separator-bold-solid']
    },
    ...focus({ colors })
  }
}
