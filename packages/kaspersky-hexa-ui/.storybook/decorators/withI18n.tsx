import React from 'react'
import i18n from '@helpers/localization/i18n'
import { LocalizationProvider } from '@design-system/context'

export const withI18n = (Story: any, context: any) => (
  <LocalizationProvider i18n={i18n} locale={context.globals.locale}>
    <Story/>
  </LocalizationProvider>
)
