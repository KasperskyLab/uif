import { SubmenuColorConfig } from '@src/submenu/types'

import { ComponentThemeContext } from '../config'
import { submenu as defaultSubmenu } from '../light/submenu'

export const submenu = ({ colors, effects }: ComponentThemeContext): SubmenuColorConfig =>
  defaultSubmenu({ colors, effects })
