import { LangType, LangVariants } from '@helpers/localization/types'
import i18next from 'i18next'
import React, { ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'

interface Props {
  children: ReactNode,
  i18n: typeof i18next,
  locale?: LangType
}

export const LocalizationProvider: React.FC<Props> = ({
  children,
  i18n,
  locale = LangVariants.EnUs
}) => {
  React.useEffect(() => {
    (locale !== i18n.language) && i18n.changeLanguage(locale)
  }, [i18n, locale])
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
}
