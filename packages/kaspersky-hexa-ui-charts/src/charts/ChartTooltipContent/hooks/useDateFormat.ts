import { useMemo } from 'react'

import { dateFormat } from '../../../l10n/dateFormat'
import { useLocale } from '../../../l10n/hooks/useLocale'

export function useDateFormat (defaultFormatter?: (date: number | Date, supposedFormat: string) => string) {
  const locale = useLocale()

  return useMemo(() => {
    return defaultFormatter || ((date: number | Date, supposedFormat: string) => dateFormat(date as number | Date, supposedFormat, { locale }))
  }, [])
}
