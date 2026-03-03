import React, { FC } from 'react'

import { ChartLocale } from '../types/locales'

import { LocalizationContext } from './context/LocalizationContext'

export type LocalizationProviderProps = {
  locale?: ChartLocale
}

export const LocalizationProvider: FC<LocalizationProviderProps> = ({ locale = 'en', children }) => (
  <LocalizationContext.Provider value={locale}>{children}</LocalizationContext.Provider>
)
