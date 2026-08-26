import React from 'react'
import { useTranslation } from 'react-i18next'

import { LocaleProps } from './types'

/**
 * @deprecated Use the `useTranslation` hook from `react-i18next` instead:
 * `const { t } = useTranslation()` and then `t('your.key')`.
 *
 * Rendering a component per string adds a fiber and an extra subscription for
 * every translated label; `t()` reads the same i18n instance directly.
 */
export const Locale = ({ localizationKey }: LocaleProps) => {
  const { t } = useTranslation()
  const localizedText = t(localizationKey)
  return <>{localizedText}</>
}
