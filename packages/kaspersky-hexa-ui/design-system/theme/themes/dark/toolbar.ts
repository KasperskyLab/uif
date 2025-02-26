import { ToolbarColorConfig } from '@src/toolbar/types'

import { ComponentThemeContext } from '../config'
import { toolbar as defaultToolbar } from '../light/toolbar'

export const toolbar = ({ colors, effects }: ComponentThemeContext): ToolbarColorConfig => defaultToolbar({ colors, effects })
