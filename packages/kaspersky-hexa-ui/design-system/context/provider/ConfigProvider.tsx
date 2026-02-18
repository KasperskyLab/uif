import i18nGlobal from '@helpers/localization/i18n'
import { LangType, LangVariants } from '@helpers/localization/types'
import i18next from 'i18next'
import React, { FC, ReactNode } from 'react'

import { ThemeProvider } from '../../theme'
import { ThemeKey } from '../../types'

import { LocalizationProvider } from './LocalizationProvider'

interface ConfigProviderProps {
  children: ReactNode,
  theme?: ThemeKey,
  i18n?: typeof i18next,
  locale?: LangType
}

export const ConfigProvider: FC<ConfigProviderProps> = ({
  children,
  theme = ThemeKey.Light,
  locale = LangVariants.EnUs,
  i18n = i18nGlobal
}) => {
  return (
    <LocalizationProvider i18n={i18n} locale={locale}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </LocalizationProvider>
  )
}
