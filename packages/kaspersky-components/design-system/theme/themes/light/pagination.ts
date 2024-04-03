import { PaginationColorConfig } from '@src/pagination/types'
import { ComponentThemeContext } from '../config'
import { focus } from '@design-system/tokens/focus'

export const pagination = ({ colors }: ComponentThemeContext): PaginationColorConfig => ({
  unselected: {
    normal: {
      color: colors.textIconsElements.primary
    },
    hover: {
      background: colors.elements['separator-solid']
    },
    active: {
      background: colors.elements['separator-bold-solid']
    },
    disabled: {
      color: colors.textIconsElements['disabled-solid']
    }
  },
  selected: {
    normal: {
      color: colors.mainInteractPrimary,
      background: colors.mainInteractPrimaryInverted
    },
    hover: {
      color: colors.mainInteractSecondary,
      background: colors.mainInteractSecondaryInverted
    },
    active: {
      color: colors.mainInteractTertiary,
      background: colors.mainInteractTertiaryInverted
    },
    disabled: {
      color: colors.textIconsElements['disabled-solid'],
      background: colors.elements['separator-solid']
    }
  },
  ...focus({ colors })
})
