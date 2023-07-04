import React from 'react'
import { useLocalization } from '../../helpers/localization/useLocalization'
import { ILocaleProps } from './types'

export const Locale = ({ localizationKey }: ILocaleProps) => {
  const localizedText = useLocalization(localizationKey)
  return <>{ localizedText }</>
}
