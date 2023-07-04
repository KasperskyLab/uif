import {
  ModalColorConfig,
  ModalMode,
  ModalCommonModeCssProps
} from '../../../../src/modal/types'
import { ComponentThemeContext } from '../config'

export const modal = ({
  colors
}: ComponentThemeContext): Record<ModalMode, ModalColorConfig> & {
  common: ModalCommonModeCssProps,
} => ({
  common: {
    closeIconColor: colors.textIconsElements.primary,
    closeIconColorHover: colors.textIconsElements.primary,
    background: colors.bg.base,
    borderColor: colors.elements.seporator,
    textColor: colors.textIconsElements.primary
  },
  default: {
    mode: {
      normal: {
        borderColor: colors.bg.base
      }
    }
  },
  error: {
    mode: {
      normal: {
        borderColor: colors.criticalitystatuses.high
      }
    }
  },
  warning: {
    mode: {
      normal: {
        borderColor: colors.criticalitystatuses.medium
      }
    }
  }
})
