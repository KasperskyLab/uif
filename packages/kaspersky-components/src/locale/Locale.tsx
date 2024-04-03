import React from 'react'
import { useLocalization } from '@helpers/localization/useLocalization'
import { LocaleProps } from './types'

export const Locale = ({ localizationKey }: LocaleProps) => {
  const localizedText = useLocalization(localizationKey)
  return <>{ localizedText }</>
}
