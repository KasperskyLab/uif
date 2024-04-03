import { ComponentThemeContext } from '../config'
import { StatusMode, StatusColorConfig } from '@src/status/types'
import { status as defaultStatus } from '../light/status'

export const status = ({ colors }: ComponentThemeContext): Record<StatusMode, StatusColorConfig> =>
  defaultStatus({ colors })
