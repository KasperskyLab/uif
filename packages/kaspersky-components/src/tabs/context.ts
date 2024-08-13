import { createContext } from 'react'
import { TestingAttributes } from '@helpers/typesHelpers'
import { TabsCssConfig } from './types'

export type ITabsContext = {
  cssConfig?: TabsCssConfig,
  testAttributes?: TestingAttributes
}

export const TabsContext = createContext<ITabsContext>({})
