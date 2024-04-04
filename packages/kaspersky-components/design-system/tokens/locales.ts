import localeEn from 'antd/lib/date-picker/locale/en_US'
import localeRu from 'antd/lib/date-picker/locale/ru_RU'
import localeKK from 'antd/lib/date-picker/locale/kk_KZ'
import localePl from 'antd/lib/date-picker/locale/pl_PL'
import localeFr from 'antd/lib/date-picker/locale/fr_FR'
import localeDe from 'antd/lib/date-picker/locale/de_DE'
import localeIt from 'antd/lib/date-picker/locale/it_IT'
import localeEs from 'antd/lib/date-picker/locale/es_ES'
import localePt from 'antd/lib/date-picker/locale/pt_PT'
import localeCs from 'antd/lib/date-picker/locale/cs_CZ'
import localeRo from 'antd/lib/date-picker/locale/ro_RO'

export const DIGITAL_SYMBOL_IN_PLACEHOLDERS = '_'

export const LOCALE_OBJECT_CONSTANT = {
  placeholder: {
    TwoTwoFourDot: '__.__.____',
    FourTwoTwoHyphen: '____-__-__'
  },
  format: {
    YYYY_MM_DD: 'YYYY-MM-DD',
    DD_MM_YYYY: 'DD.MM.YYYY',
    MM_DD_YYYY: 'MM.DD.YYYY'
  }
}

export const DEFAULT_DATE_FORMAT = LOCALE_OBJECT_CONSTANT.format.MM_DD_YYYY

export const DEFAULT_TIME_FORMAT = 'HH:mm:ss'
export const DEFAULT_TIME_PLACEHOLDER = '__:__:__'

type Locale = {
  locale: typeof localeEn,
  format: string,
  placeholder: string
}

export const locales: Record<string, Locale> = {
  // DD.MM.YYYY
  ru: {
    locale: localeRu,
    format: LOCALE_OBJECT_CONSTANT.format.DD_MM_YYYY,
    placeholder: LOCALE_OBJECT_CONSTANT.placeholder.TwoTwoFourDot
  },
  kk: {
    locale: localeKK,
    format: LOCALE_OBJECT_CONSTANT.format.DD_MM_YYYY,
    placeholder: LOCALE_OBJECT_CONSTANT.placeholder.TwoTwoFourDot
  },
  // YYYY-MM-DD
  en: {
    locale: localeEn,
    format: LOCALE_OBJECT_CONSTANT.format.YYYY_MM_DD,
    placeholder: LOCALE_OBJECT_CONSTANT.placeholder.FourTwoTwoHyphen
  },
  pl: {
    locale: localePl,
    format: LOCALE_OBJECT_CONSTANT.format.YYYY_MM_DD,
    placeholder: LOCALE_OBJECT_CONSTANT.placeholder.FourTwoTwoHyphen
  },
  // MM.DD.YYYY
  fr: {
    locale: localeFr,
    format: LOCALE_OBJECT_CONSTANT.format.MM_DD_YYYY,
    placeholder: LOCALE_OBJECT_CONSTANT.placeholder.TwoTwoFourDot
  },
  de: {
    locale: localeDe,
    format: LOCALE_OBJECT_CONSTANT.format.MM_DD_YYYY,
    placeholder: LOCALE_OBJECT_CONSTANT.placeholder.TwoTwoFourDot
  },
  it: {
    locale: localeIt,
    format: LOCALE_OBJECT_CONSTANT.format.MM_DD_YYYY,
    placeholder: LOCALE_OBJECT_CONSTANT.placeholder.TwoTwoFourDot
  },
  es: {
    locale: localeEs,
    format: LOCALE_OBJECT_CONSTANT.format.MM_DD_YYYY,
    placeholder: LOCALE_OBJECT_CONSTANT.placeholder.TwoTwoFourDot
  },
  pt: {
    locale: localePt,
    format: LOCALE_OBJECT_CONSTANT.format.MM_DD_YYYY,
    placeholder: LOCALE_OBJECT_CONSTANT.placeholder.TwoTwoFourDot
  },
  cs: {
    locale: localeCs,
    format: LOCALE_OBJECT_CONSTANT.format.MM_DD_YYYY,
    placeholder: LOCALE_OBJECT_CONSTANT.placeholder.TwoTwoFourDot
  },
  ro: {
    locale: localeRo,
    format: LOCALE_OBJECT_CONSTANT.format.MM_DD_YYYY,
    placeholder: LOCALE_OBJECT_CONSTANT.placeholder.TwoTwoFourDot
  }
}
