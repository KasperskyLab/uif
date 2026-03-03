import { useContext } from 'react'

import { ChartLocale } from '../../types/locales'
import { LocalizationContext } from '../context/LocalizationContext'

export function useLocale (): ChartLocale {
  return useContext(LocalizationContext) || 'en'
}
