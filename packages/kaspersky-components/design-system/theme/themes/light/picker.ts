import { PickerColorConfig } from '@src/datepicker/types'
import { ComponentThemeContext } from '../config'

export const picker = ({ colors }: ComponentThemeContext): PickerColorConfig => {
  return {
    separatorColor: colors.elements['separator-solid'],
    iconColor: colors.textIconsElements.primary,
    boxShadow: '0px 0px 1px 0px rgba(9, 30, 66, 0.64), 0px 3px 5px 0px rgba(9, 30, 66, 0.20)',
    unSelected: {
      normal: {
        background: colors.bg.base,
        color: colors.textIconsElements.primary,
        borderColor: colors.mainInteractPrimary
      },
      hover: {
        background: colors.elements['separator-solid']
      },
      active: {
        background: colors.elements['separator-bold-solid']
      },
      disabled: {
        background: colors.elements['separator-solid'],
        color: colors.textIconsElements['disabled-solid'],
        borderColor: colors.textIconsElements['disabled-solid']
      }
    },
    selected: {
      normal: {
        background: colors.mainInteractPrimary,
        color: colors.textIconsElements['primary-invert']
      },
      hover: {
        background: colors.mainInteractSecondary
      },
      active: {
        background: colors.mainInteractTertiary
      }
    },
    inRange: {
      normal: {
        background: colors.mainInteractPrimaryInverted,
        color: colors.textIconsElements.primary,
        borderColor: colors.mainInteractPrimary
      },
      hover: {
        background: colors.mainInteractSecondaryInverted
      },
      active: {
        background: colors.mainInteractTertiaryInverted
      }
    }
  }
}
