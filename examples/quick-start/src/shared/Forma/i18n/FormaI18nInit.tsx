import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import {
  setFormaValidationTranslator,
  formaValidationResourceEn,
  formaValidationResourceRu
} from './messages'

/**
 * Call once inside ConfigProvider (or any I18nextProvider) to wire Forma
 * validation messages to the same i18n. Add this as a wrapper around app
 * content that uses Forma forms.
 */
export function FormaI18nInit({
  children
}: {
  children: React.ReactNode
}) {
  const { i18n } = useTranslation()
  const done = useRef(false)

  useEffect(() => {
    if (done.current) return
    done.current = true
    if (typeof i18n?.addResourceBundle === 'function') {
      try {
        i18n.addResourceBundle('en-us', 'translation', formaValidationResourceEn, true)
        i18n.addResourceBundle('ru-ru', 'translation', formaValidationResourceRu, true)
      } catch {
        // ignore if bundle already exists or ns not supported
      }
    }
    setFormaValidationTranslator((key, fallback, opts) =>
      typeof i18n?.t === 'function'
        ? i18n.t(key, { ...opts, defaultValue: fallback })
        : fallback.replace(/\{\{min\}\}/, String(opts?.min ?? ''))
    )
  }, [i18n])

  return <>{children}</>
}
