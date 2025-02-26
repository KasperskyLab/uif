import { DividerColorConfig, DividerMode } from '@src/divider/types'

import { ComponentThemeContext } from '../config'
import { divider as defaultDivider } from '../light/divider'

export const divider = ({ colors, effects }: ComponentThemeContext): Record<DividerMode, DividerColorConfig> =>
  defaultDivider({ colors, effects })
