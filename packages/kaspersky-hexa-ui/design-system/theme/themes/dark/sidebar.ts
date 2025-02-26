import { SidebarColorConfig } from '@src/sidebar/types'

import { ComponentThemeContext } from '../config'
import { sidebar as defaultSidebar, sidebarSize as defaultSidebarSize } from '../light/sidebar'

export const sidebar = ({ colors, effects }: ComponentThemeContext): SidebarColorConfig => defaultSidebar({ colors, effects })

export const sidebarSize = defaultSidebarSize
