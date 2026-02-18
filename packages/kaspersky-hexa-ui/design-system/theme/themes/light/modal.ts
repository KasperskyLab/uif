import { Size } from '@design-system/types'
import {
  ModalColorConfig,
  ModalMode,
  ModalSize,
  ModalSizeConfig
} from '@src/modal/types'

import { ComponentThemeContext } from '../config'

export const modal = ({ colors, effects }: ComponentThemeContext): Record<ModalMode, ModalColorConfig> => {
  const common = {
    background: colors.modal.bg.base,
    border: colors.divider.bg.bold,
    color: colors.modal.text.base,
    boxShadow: `${effects.elevation.medium[1]} ${colors.elevation.medium[2]}, ${effects.elevation.medium[2]} ${colors.elevation.medium[1]}`,
    maskBackground: colors.overlay.bg
  }

  return {
    default: {
      ...common,
      modeBorder: colors.modal.bg.base
    },
    error: {
      ...common,
      icon: colors.modal.icon.critical,
      modeBorder: colors.modal.border.critical
    },
    warning: {
      ...common,
      icon: colors.modal.icon.warning,
      modeBorder: colors.modal.border.warning
    },
    success: {
      ...common,
      icon: colors.modal.icon.success,
      modeBorder: colors.modal.border.success
    },
    ai: {
      ...common,
      icon: colors.modal.icon.info,
      modeBorder: `linear-gradient(90deg, ${colors.modal.border.ai.green} 0%, ${colors.modal.border.ai.marina} 40.38%, ${colors.modal.border.ai.violet} 100%)`
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
