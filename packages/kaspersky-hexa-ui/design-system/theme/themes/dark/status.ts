import { StatusColorConfig, StatusMode } from '@src/status/types'

import { ComponentThemeContext } from '../config'
import { status as defaultStatus } from '../light/status'

export const status = ({ colors, effects }: ComponentThemeContext): Record<StatusMode, StatusColorConfig> =>
  defaultStatus({ colors, effects })
