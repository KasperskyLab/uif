import { ComponentThemeContext } from '../config'
import { ToolbarColorConfig } from '@src/toolbar/types'
import { toolbar as defaultToolbar } from '../light/toolbar'

export const toolbar = ({ colors }: ComponentThemeContext): ToolbarColorConfig => defaultToolbar({ colors })
