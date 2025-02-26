import { TabsColorConfig } from '@src/tabs/types'

import { ComponentThemeContext } from '../config'
import { tabs as defaultTabs } from '../light/tabs'

export const tabs = ({ colors, effects }: ComponentThemeContext): TabsColorConfig => defaultTabs({ colors, effects })
