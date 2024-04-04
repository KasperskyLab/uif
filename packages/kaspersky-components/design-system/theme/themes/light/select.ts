import { ComponentThemeContext } from '../config'
import { SelectColorConfig } from '@src/select/types'
import { focus } from '@design-system/tokens/focus'

export const select = ({ colors }: ComponentThemeContext): SelectColorConfig => ({
  normal: {
    background: colors.bg.base,
    color: colors.textIconsElements.primary,
    borderColor: colors.elements['line-solid'],
    addButton: {
      color: colors.mainInteractPrimary
    },
    placeholder: {
      color: colors.textIconsElements['secondary2-solid']
    },
    dropdown: {
      background: colors.bg.base,
      boxShadow: '0px 0px 1px 0px rgba(9, 30, 66, 0.64), 0px 3px 5px 0px rgba(9, 30, 66, 0.20)'
    },
    option: {
      color: colors.textIconsElements.primary
    }
  },
  hover: {
    borderColor: colors.mainInteractSecondary,
    option: {
      background: colors.elements['separator-solid'],
      color: colors.textIconsElements.primary
    }
  },
  disabled: {
    color: colors.textIconsElements['disabled-solid'],
    background: colors.elements['separator-solid'],
    placeholder: {
      color: colors.textIconsElements['disabled-solid']
    },
    option: {
      color: colors.textIconsElements['disabled-solid']
    }
  },
  selected: {
    option: {
      background: colors.mainInteractPrimaryInverted,
      color: colors.mainInteractPrimary
    }
  },
  error: {
    borderColor: colors.dangerInteract.primary
  },
  ...focus({ colors })
})
