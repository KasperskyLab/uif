import i18next from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import resources from './localizationConfig'

const i18n = i18next.use(initReactI18next).use(LanguageDetector)

i18n.init({
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
