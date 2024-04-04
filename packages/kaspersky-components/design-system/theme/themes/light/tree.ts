import { ComponentThemeContext } from '../config'
import { TreeColorConfig } from '@src/tree/types'

export const tree = ({ colors }: ComponentThemeContext): TreeColorConfig => ({
  normal: {
    textColor: colors.textIconsElements.primary,
    lineColor: colors.elements.seporatorbold,
    arrowColor: colors.textIconsElements.secondary
  },
  focus: {
    borderColor: colors.mainInteractFocus
  },
  dropIndicator: {
    background: colors.mainInteractFocus
  },
  treeNode: {
    unselected: {
      normal: {
        textColor: colors.textIconsElements.primary
      },
      hover: {
        background: colors.elements['separator-solid']
      },
      active: {
        background: colors.elements['separator-bold-solid']
      },
      focus: {
        borderColor: colors.mainInteractFocus
      },
      disabled: {
        textColor: colors.textIconsElements['disabled-solid']
      }
    },
    selected: {
      normal: {
        textColor: colors.mainInteractPrimary,
        background: colors.mainInteractPrimaryInverted
      },
      hover: {
        textColor: colors.mainInteractSecondary,
        background: colors.mainInteractSecondaryInverted
      },
      active: {
        textColor: colors.mainInteractTertiary,
        background: colors.mainInteractTertiaryInverted
      },
      focus: {
        textColor: colors.mainInteractPrimary,
        background: colors.mainInteractPrimaryInverted,
        borderColor: colors.mainInteractFocus
      },
      disabled: {
        textColor: colors.textIconsElements['disabled-solid'],
        background: colors.elements['separator-solid']
      }
    }
  }
})
