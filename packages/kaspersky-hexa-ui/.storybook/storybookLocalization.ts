import resources from '@helpers/localization/localizationConfig'
import i18next from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import merge from 'lodash/merge'
import { initReactI18next } from 'react-i18next'

const i18n = i18next.use(initReactI18next).use(LanguageDetector)

const storybookResources = merge(resources, {
  'en-us': {
    translation: {
      table: {
        columns: {
          fullname: 'Fullname',
          group: 'Group',
          salary: 'Salary',
          dateHired: 'Date hired',
          isTrainee: 'Trainee',
          details: 'Details'
        },
        column: {
          name: 'First column'
        },
        column2: {
          name: 'Second column'
        },
        column3: {
          name: 'Third column'
        }
      }
    }
  }
})

i18n.init({
  debug: process.env.NODE_ENV === 'development',
  resources: storybookResources,
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
