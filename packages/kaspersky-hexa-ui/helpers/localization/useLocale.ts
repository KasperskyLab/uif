import { useContext, useEffect, useState } from 'react'
import { I18nContext } from 'react-i18next'

const LANGUAGE_CHANGE_EVENT = 'languageChanged'

export function useLocale (): string {
  const i18n = useContext(I18nContext).i18n
  const [locale, setLocale] = useState(i18n.language)

  useEffect(() => {
    i18n.on(LANGUAGE_CHANGE_EVENT, setLocale)

    return () => i18n.off(LANGUAGE_CHANGE_EVENT, setLocale)
  }, [i18n])

  return locale
}