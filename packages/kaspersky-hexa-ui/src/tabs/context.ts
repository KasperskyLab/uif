import { TestingAttributes } from '@helpers/typesHelpers'
import { createContext } from 'react'

import { TabsCssConfig } from './types'

export type ITabsContext = {
  cssConfig?: TabsCssConfig,
  testAttributes?: TestingAttributes
}

export const TabsContext = createContext<ITabsContext>({})
