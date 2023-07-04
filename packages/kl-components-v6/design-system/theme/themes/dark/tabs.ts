import { tabs as defaultTabs, tabsSize as defaultTabsSize } from '../light/tabs'
import { ComponentThemeContext } from '../config'

export const tabs = ({ colors }: ComponentThemeContext) => defaultTabs({ colors })

export const tabsSize = defaultTabsSize
