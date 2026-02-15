/**
 * Validation message keys and default (fallback) messages.
 * Use with the same i18n as hexa-ui (e.g. add Forma bundle and setFormaValidationTranslator).
 */

export const FORMA_VALIDATION_KEYS = {
  required: 'forma.validation.required',
  select: 'forma.validation.select',
  emailRequired: 'forma.validation.emailRequired',
  emailInvalid: 'forma.validation.emailInvalid',
  minLength: 'forma.validation.minLength',
  terms: 'forma.validation.terms',
  enumSelect: 'forma.validation.enumSelect'
} as const

const DEFAULTS: Record<keyof typeof FORMA_VALIDATION_KEYS, string> = {
  required: 'Required',
  select: 'Please select an option',
  emailRequired: 'Email is required',
  emailInvalid: 'Invalid email',
  minLength: 'Min {{min}} characters',
  terms: 'You must accept the terms',
  enumSelect: 'Please select an option'
}

let translator: ((key: string, fallback: string, opts?: { min?: number }) => string) | null =
  null

/**
 * Set the translator used when validators don't receive an explicit message.
 * Pass a function that returns the localized string (e.g. (key, fallback, opts) => i18n.t(key, { ...opts, defaultNS: fallback })).
 * Use the same i18n instance as hexa-ui ConfigProvider so locale stays in sync.
 */
export function setFormaValidationTranslator(
  fn: (key: string, fallback: string, opts?: { min?: number }) => string
): void {
  translator = fn
}

export function getFormaValidationMessage(
  key: keyof typeof FORMA_VALIDATION_KEYS,
  opts?: { min?: number }
): string {
  const k = FORMA_VALIDATION_KEYS[key]
  const fallback = DEFAULTS[key]
  if (translator) {
    return translator(k, fallback, opts)
  }
  if (opts?.min !== undefined && key === 'minLength') {
    return fallback.replace('{{min}}', String(opts.min))
  }
  return fallback
}

/** Default English resource. Merge: i18n.addResourceBundle('en-us', 'translation', formaValidationResourceEn, true) */
export const formaValidationResourceEn = {
  forma: {
    validation: {
      required: DEFAULTS.required,
      select: DEFAULTS.select,
      emailRequired: DEFAULTS.emailRequired,
      emailInvalid: DEFAULTS.emailInvalid,
      minLength: DEFAULTS.minLength,
      terms: DEFAULTS.terms,
      enumSelect: DEFAULTS.enumSelect
    }
  }
} as const

/** Russian resource. Merge: i18n.addResourceBundle('ru-ru', 'translation', formaValidationResourceRu, true) */
export const formaValidationResourceRu = {
  forma: {
    validation: {
      required: 'Обязательное поле',
      select: 'Выберите значение',
      emailRequired: 'Введите email',
      emailInvalid: 'Некорректный email',
      minLength: 'Минимум {{min}} символов',
      terms: 'Необходимо принять условия',
      enumSelect: 'Выберите значение'
    }
  }
} as const
