import { ComponentThemeContext } from '../config'
import { TabsColorConfig } from '@src/tabs/types'
import { tabs as defaultTabs } from '../light/tabs'

export const tabs = ({ colors }: ComponentThemeContext): TabsColorConfig => defaultTabs({ colors })
