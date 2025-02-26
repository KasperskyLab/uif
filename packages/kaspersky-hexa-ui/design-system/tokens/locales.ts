import localeAr from 'antd/lib/date-picker/locale/ar_EG'
import localeDe from 'antd/lib/date-picker/locale/de_DE'
import localeEn from 'antd/lib/date-picker/locale/en_US'
import localeEs from 'antd/lib/date-picker/locale/es_ES'
import localeFr from 'antd/lib/date-picker/locale/fr_FR'
import localeIt from 'antd/lib/date-picker/locale/it_IT'
import localeJa from 'antd/lib/date-picker/locale/ja_JP'
import localeKK from 'antd/lib/date-picker/locale/kk_KZ'
import localeKo from 'antd/lib/date-picker/locale/ko_KR'
import localePl from 'antd/lib/date-picker/locale/pl_PL'
import localePt from 'antd/lib/date-picker/locale/pt_PT'
import localeRu from 'antd/lib/date-picker/locale/ru_RU'
import localeTr from 'antd/lib/date-picker/locale/tr_TR'
import localeZh from 'antd/lib/date-picker/locale/zh_CN'

export const DIGITAL_SYMBOL_IN_PLACEHOLDERS = '_'

export const DEFAULT_DATE_FORMAT = 'MM.DD.YYYY'
export const DEFAULT_TIME_FORMAT = 'HH:mm:ss'
export const DEFAULT_TIME_PLACEHOLDER = '__:__:__'

export const DATE_FORMAT_PLACEHOLDERS = {
  DOT_2_2_4: '__.__.____',
  DOT_4_2_2: '____.__.__',
  SLASH_2_2_4: '__/__/____',
  SLASH_4_2_2: '____/__/__'
}

/**
 * @notion Do not use small cases (y/d/m) in date formats, because antd datepicker can't work with them
 */
export const DATE_FORMATS = {
  DOT_DDMMYYYY: 'DD.MM.YYYY',
  SLASH_DDMMYYYY: 'DD/MM/YYYY',
  SLASH_MMDDYYYY: 'MM/DD/YYYY',
  SLASH_YYYYMMDD: 'YYYY/MM/DD'
}

type Locale = {
  locale: typeof localeEn,
  format: string,
  placeholder: string
}

export const locales: Record<string, Locale> = {
  ru: {
    locale: localeRu,
    format: DATE_FORMATS.DOT_DDMMYYYY,
    placeholder: DATE_FORMAT_PLACEHOLDERS.DOT_2_2_4
  },
  en: {
    locale: localeEn,
    format: DATE_FORMATS.SLASH_MMDDYYYY,
    placeholder: DATE_FORMAT_PLACEHOLDERS.SLASH_2_2_4
  },
  de: {
    locale: localeDe,
    format: DATE_FORMATS.DOT_DDMMYYYY,
    placeholder: DATE_FORMAT_PLACEHOLDERS.DOT_2_2_4
  },
  ja: {
    locale: localeJa,
    format: DATE_FORMATS.SLASH_YYYYMMDD,
    placeholder: DATE_FORMAT_PLACEHOLDERS.SLASH_4_2_2
  },
  fr: {
    locale: localeFr,
    format: DATE_FORMATS.SLASH_DDMMYYYY,
    placeholder: DATE_FORMAT_PLACEHOLDERS.SLASH_2_2_4
  },
  it: {
    locale: localeIt,
    format: DATE_FORMATS.SLASH_DDMMYYYY,
    placeholder: DATE_FORMAT_PLACEHOLDERS.SLASH_2_2_4
  },
  es: {
    locale: localeEs,
    format: DATE_FORMATS.SLASH_DDMMYYYY,
    placeholder: DATE_FORMAT_PLACEHOLDERS.SLASH_2_2_4
  },
  pt: {
    locale: localePt,
    format: DATE_FORMATS.SLASH_DDMMYYYY,
    placeholder: DATE_FORMAT_PLACEHOLDERS.SLASH_2_2_4
  },
  tr: {
    locale: localeTr,
    format: DATE_FORMATS.DOT_DDMMYYYY,
    placeholder: DATE_FORMAT_PLACEHOLDERS.DOT_2_2_4
  },
  pl: {
    locale: localePl,
    format: DATE_FORMATS.DOT_DDMMYYYY,
    placeholder: DATE_FORMAT_PLACEHOLDERS.DOT_2_2_4
  },
  /**
   * @notice Unfortunately, antd works incorrectly with YYYY/M/D format, so YYYY/MM/DD is used instead
   */
  ko: {
    locale: localeKo,
    format: DATE_FORMATS.SLASH_YYYYMMDD,
    placeholder: DATE_FORMAT_PLACEHOLDERS.SLASH_4_2_2
  },
  ar: {
    locale: localeAr,
    format: DATE_FORMATS.SLASH_DDMMYYYY,
    placeholder: DATE_FORMAT_PLACEHOLDERS.SLASH_2_2_4
  },
  kk: {
    locale: localeKK,
    format: DATE_FORMATS.SLASH_DDMMYYYY,
    placeholder: DATE_FORMAT_PLACEHOLDERS.SLASH_2_2_4
  },
  /**
   * @notice Splitting the "zh" to "zh-hand" and "zh-hant" is not supported by current ant picker,
   * because in both cases we got locale "zh-CN". So I choose yyyy/M/d as single format for zh as well.
   * @notice Unfortunately, antd works incorrectly with YYYY/M/D format, so YYYY/MM/DD is used instead
   */
  zh: {
    locale: localeZh,
    format: DATE_FORMATS.SLASH_YYYYMMDD,
    placeholder: DATE_FORMAT_PLACEHOLDERS.SLASH_4_2_2
  }
}
