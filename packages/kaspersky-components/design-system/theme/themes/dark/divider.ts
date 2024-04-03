import { ComponentThemeContext } from '../config'
import { divider as defaultDivider } from '../light/divider'
import { DividerColorConfig, DividerMode } from '@src/divider/types'

export const divider = ({ colors }: ComponentThemeContext): Record<DividerMode, DividerColorConfig> => (
  defaultDivider({ colors })
)
