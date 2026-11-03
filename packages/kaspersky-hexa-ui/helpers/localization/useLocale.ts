import { useContext, useEffect, useState } from 'react'
import { I18nContext } from 'react-i18next'

import defaultI18n from './i18n'

const LANGUAGE_CHANGE_EVENT = 'languageChanged'

export function useLocale (): string {
  const i18n = useContext(I18nContext)?.i18n ?? defaultI18n
  const [locale, setLocale] = useState(i18n.language)

  useEffect(() => {
    setLocale(i18n.language)
    i18n.on(LANGUAGE_CHANGE_EVENT, setLocale)

    return () => i18n.off(LANGUAGE_CHANGE_EVENT, setLocale)
  }, [i18n])

  return locale
}