import { SegmentedButton } from '@src/segmented-button'
import React, { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import { BooleanItemProps } from './types'

export const BooleanItem: React.FC<BooleanItemProps> = ({
  filter,
  onStateName,
  offStateName,
  onChange
}) => {
  const { t } = useTranslation()
  const items = useMemo(() => [
    { value: 'true', text: onStateName ?? t('table.columnsSettings.filtering.booleanFilter.on') },
    { value: 'false', text: offStateName ?? t('table.columnsSettings.filtering.booleanFilter.off') }
  ], [t, onStateName, offStateName])

  const handleChange = (value: string[]) => {
    onChange({ ...filter, value: value[0] === 'true' })
  }

  return (
    <SegmentedButton
      items={items}
      onChange={handleChange}
      size="large"
      value={[filter.value === true ? 'true' : 'false']}
    />
  )
}
