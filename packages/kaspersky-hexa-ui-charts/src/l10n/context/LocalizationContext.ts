import { createContext } from 'react'
import { ChartLocale } from 'src/types/locales'

export const LocalizationContext = createContext<ChartLocale>('en')
