import { ComponentThemeContext } from '../config'
import { ActionButtonMode, ActionButtonColorConfig } from '@src/action-button'
import {
  actionButton as defaultActionButton,
  actionButtonSize as defaultActionButtonSize
} from '../light/actionButton'

export const actionButton = ({
  colors
}: ComponentThemeContext): Record<ActionButtonMode, ActionButtonColorConfig> =>
  defaultActionButton({ colors })

export const actionButtonSize = defaultActionButtonSize
