import { ActionButtonMode, ActionButtonColorConfig } from '@src/action-button/types'

import { ComponentThemeContext } from '../config'
import {
  actionButton as defaultActionButton,
  actionButtonSize as defaultActionButtonSize
} from '../light/actionButton'

export const actionButton = ({ colors, effects }: ComponentThemeContext): Record<ActionButtonMode, ActionButtonColorConfig> =>
  defaultActionButton({ colors, effects })

export const actionButtonSize = defaultActionButtonSize
