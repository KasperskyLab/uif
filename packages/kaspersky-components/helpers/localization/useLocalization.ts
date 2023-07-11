import { useContext, useEffect, useState } from 'react'
import { I18nContext } from 'react-i18next'
import { createI18n } from './i18n'

const defaultLanguage = 'en'
const i18n = createI18n()

export const useLocalization = (key: string, lng = defaultLanguage) => {
  const { i18n: contextI18n } = useContext(I18nContext) ?? i18n

  const [text, setText] = useState('')

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
      console.warn('LocalizatonProvider was not found. Using the default English translation.')
    }
    if (contextI18n) {
      return contextI18n.exists(key) ? contextI18n.t(key) : contextI18n.t(key, { lng })
    }
    return i18n.t(key, { lng })
  }

  return text
}
