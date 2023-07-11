import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import resources from './localizationConfig'

export const createI18n = (lng?: string) => {
  i18n.use(initReactI18next).use(LanguageDetector).init({
    debug: process.env.NODE_ENV === 'development',
    resources,
    lng,
    fallbackLng: 'en',
    react: {
      useSuspense: false
    },
    interpolation: {
      escapeValue: true
    }
  })

  return i18n
}
