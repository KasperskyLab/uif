import { AlertMode, AlertColorConfig } from '@src/alert/types'

import { ComponentThemeContext } from '../config'
import { alert as defaultAlert } from '../light/alert'

export const alert = ({ colors, effects }: ComponentThemeContext): Record<AlertMode, AlertColorConfig> =>
  defaultAlert({ colors, effects })
