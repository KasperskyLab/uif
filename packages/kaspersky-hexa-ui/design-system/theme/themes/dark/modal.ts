import { ModalColorConfig, ModalMode } from '@src/modal/types'

import { ComponentThemeContext } from '../config'
import { modal as defaultModal, modalSize as defaultModalSize } from '../light/modal'

export const modal = ({ colors, effects }: ComponentThemeContext): Record<ModalMode, ModalColorConfig> =>
  defaultModal({ colors, effects })

export const modalSize = defaultModalSize
