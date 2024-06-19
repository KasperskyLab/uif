import { ComponentThemeContext } from '../config'
import { MenuColorConfig } from '@src/menu/types'

export const menu = ({ colors }: ComponentThemeContext): MenuColorConfig => {
  return {
    background: colors.fixedNeutralColors.fixedneutralcolor_menu,
    popBg: colors.bg.base,
    roleColor: colors.textIconsElements['secondary2-solid'],
    captionColor: colors.textIconsElements['secondary2-solid'],
    unselected: {
      normal: {
        color: colors.textIconsElements.primary
      },
      hover: {
        background: colors.elements['separator-solid']
      },
      active: {
        background: colors.elements['separator-bold-solid']
      }
    },
    selected: {
      normal: {
        color: colors.mainInteract.primary,
        background: colors.mainInteract['primary-invert']
      },
      hover: {
        color: colors.mainInteract.secondary,
        background: colors.mainInteract['secondary-invert']
      },
      active: {
        color: colors.mainInteract.tertiary,
        background: colors.mainInteract['tertiary-invert']
      }
    }
  }
}
