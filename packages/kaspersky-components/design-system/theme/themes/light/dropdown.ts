import { DropdownColorConfig } from '@src/dropdown/types'
import { ComponentThemeContext } from '../config'

export const dropdown = ({ colors }: ComponentThemeContext): DropdownColorConfig => ({
  boxShadow: '0px 3px 5px 0px #091e4233',
  boxShadowLine: '0px 0px 1px 0px #091e42a3',
  normal: {
    bgColor: colors.bg.base,
    color: colors.textIconsElements.primary,
    actionColor: colors.mainInteractPrimary
  },
  hover: {
    bgColor: colors.elements['separator-solid'],
    actionColor: colors.mainInteractSecondary
  },
  selected: {
    bgColor: colors.mainInteractPrimaryInverted,
    color: colors.mainInteractPrimary,
    actionColor: colors.mainInteractTertiary
  },
  disabled: {
    color: colors.textIconsElements['disabled-solid']
  },
  group: {
    color: colors.textIconsElements.secondary2
  }
})
