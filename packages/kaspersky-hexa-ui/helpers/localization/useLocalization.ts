import { useContext, useEffect, useMemo, useState } from 'react'
import { I18nContext } from 'react-i18next'

import i18n from './i18n'

export const useLocalization = (key: string, lng = 'en-us') => {
  const { i18n: contextI18n } = useContext(I18nContext) ?? i18n

  const initialText = useMemo(() => getTranslation(), [])

  const [text, setText] = useState(initialText)

  useEffect(() => {
    const handler = () => setText(getTranslation())
    i18n.on('languageChanged', handler)
    return () => {
      i18n.off('languageChanged', handler)
    }
  }, [i18n, key])

  useEffect(() => {
    setText(getTranslation())
  }, [contextI18n, i18n, key, lng])

  function getTranslation () {
    if (contextI18n !== i18n) {
      console.warn('LocalizationProvider was not found. Using the default English translation.')
    }
    if (contextI18n) {
      return contextI18n.exists(key) ? contextI18n.t(key) : contextI18n.t(key, { lng })
    }
    return i18n.t(key, { lng })
  }

  return text
}
