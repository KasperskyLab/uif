import { LocalizationProvider } from '@design-system/context'
import React from 'react'

import i18n from '../storybookLocalization'

export const withI18n = (Story: any, context: any) => (
  <LocalizationProvider i18n={i18n} locale={context.globals.locale}>
    <Story/>
  </LocalizationProvider>
)
