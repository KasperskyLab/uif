import { createContext } from 'react'
import { TabsCssConfig } from './types'

export type ITabsContext = {
  cssConfig?: TabsCssConfig
}

export const TabsContext = createContext<ITabsContext>({})
