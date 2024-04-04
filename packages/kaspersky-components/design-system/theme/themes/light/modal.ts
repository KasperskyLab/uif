import {
  ModalColorConfig,
  ModalMode,
  ModalSizeConfig,
  ModalSize
} from '@src/modal/types'
import { ComponentThemeContext } from '../config'
import { Size } from '@design-system/types'

export const modal = ({ colors }: ComponentThemeContext): Record<ModalMode, ModalColorConfig> => {
  const common = {
    background: colors.bg.base,
    borderColor: colors.elements.seporator,
    color: colors.textIconsElements.primary,
    boxShadow: '0px 0px 1px 0px rgba(9, 30, 66, 0.31), 0px 8px 12px 0px rgba(9, 30, 66, 0.15)',
    maskBackground: colors.textIconsElements.secondary2
  }

  return {
    default: {
      ...common,
      modeBorderColor: colors.bg.base
    },
    error: {
      ...common,
      modeBorderColor: colors.criticalitystatuses.high
    },
    warning: {
      ...common,
      modeBorderColor: colors.criticalitystatuses.medium
    },
    success: {
      ...common,
      modeBorderColor: colors.criticalitystatuses.positive
    }
  }
}

export const modalSize: Record<ModalSize, ModalSizeConfig> = {
  [Size.Small]: {
    width: '560px',
    top: '120px'
  },
  [Size.Large]: {
    width: '1200px',
    top: '40px'
  }
}
