import { ComponentThemeContext } from '../config'
import { sidebar as defaultSidebar, sidebarSize as defaultSidebarSize } from '../light/sidebar'

export const sidebar = ({ colors }: ComponentThemeContext) => defaultSidebar({ colors })

export const sidebarSize = defaultSidebarSize
