import { createContext, useContext } from 'react'

import { InteractiveTourContextValue } from '../types'

export const defaultInteractiveTourContext: InteractiveTourContextValue = {
  testAttributes: {}
}

export const InteractiveTourContext = createContext<InteractiveTourContextValue>(defaultInteractiveTourContext)

export const useInteractiveTourContext = (): InteractiveTourContextValue => useContext(InteractiveTourContext)
