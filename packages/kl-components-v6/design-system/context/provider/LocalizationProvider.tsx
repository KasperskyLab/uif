import React, { ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import { LangType } from '../../../helpers/localization/types'
import i18next from 'i18next'
interface Props {
  children: ReactNode,
  i18n: typeof i18next,
  locale?: LangType
}

export const LocalizationProvider: React.FC<Props> = ({
  children,
  i18n,
  locale = 'en'
}) => {
  React.useEffect(() => {
    i18n.changeLanguage(locale)
  }, [i18n, locale])
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
}
