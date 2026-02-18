import { SegmentedButton } from '@src/segmented-button'
import React, { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import { BooleanItemProps } from './types'

export const BooleanItem: React.FC<BooleanItemProps> = ({ filter, onChange }) => {
  const { t } = useTranslation()
  const items = useMemo(() => [
    { value: 'true', text: t('common.yes') },
    { value: 'false', text: t('common.no') }
  ], [t])

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
