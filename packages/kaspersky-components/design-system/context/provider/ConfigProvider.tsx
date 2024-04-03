import React, { ReactNode, FC } from 'react'
import { ThemeProvider } from '../../theme'
import { ThemeKey } from '../../types'
import { LocalizationProvider } from './LocalizationProvider'
import { LangType } from '@helpers/localization/types'
import i18nGlobal from '@helpers/localization/i18n'
import i18next from 'i18next'

interface ConfigProviderProps {
  children: ReactNode,
  theme?: ThemeKey,
  i18n?: typeof i18next,
  locale?: LangType
}

export const ConfigProvider: FC<ConfigProviderProps> = ({
  children,
  theme = ThemeKey.Light,
  locale = 'en-us',
  i18n = i18nGlobal
}) => {
  return (
    <LocalizationProvider i18n={i18n} locale={locale}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </LocalizationProvider>
  )
}
