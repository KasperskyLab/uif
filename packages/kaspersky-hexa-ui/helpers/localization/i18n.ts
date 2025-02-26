import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import resources from './localizationConfig'

i18n.use(initReactI18next).use(LanguageDetector).init({
  debug: process.env.NODE_ENV === 'development',
  resources,
  lng: 'en-us',
  fallbackLng: 'en-us',
  lowerCaseLng: true,
  react: {
    useSuspense: false
  },
  interpolation: {
    escapeValue: true
  }
})

export default i18n
