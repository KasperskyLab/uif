import { ComponentThemeContext } from '../config'
import { ModalColorConfig, ModalMode } from '@src/modal/types'
import { modal as defaultModalCreator, modalSize as defaultModalSize } from '../light/modal'

export const modal = ({ colors }: ComponentThemeContext): Record<ModalMode, ModalColorConfig> => {
  const defaultModal = defaultModalCreator({ colors })

  const common = {
    boxShadow: '0px 0px 1px 0px rgba(9, 30, 66, 0.31), 0px 3px 5px 0px rgba(9, 30, 66, 0.20)',
    maskBackground: colors.textIconsElements['secondary2-invert']
  }

  return {
    default: {
      ...defaultModal.default,
      ...common
    },
    error: {
      ...defaultModal.error,
      ...common
    },
    warning: {
      ...defaultModal.warning,
      ...common
    },
    success: {
      ...defaultModal.success,
      ...common
    }
  }
}

export const modalSize = defaultModalSize
