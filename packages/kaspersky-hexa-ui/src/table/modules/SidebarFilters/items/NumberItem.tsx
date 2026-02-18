import { Textbox } from '@src/input'
import React from 'react'

import { NumberItemProps } from './types'

export const NumberItem: React.FC<NumberItemProps> = ({ filter, onChange, validationStatus }) => {
  const handleChange = (value: number | null) => {
    onChange({ ...filter, value })
  }

  return (
    <Textbox.Number
      value={filter.value as number | undefined}
      onChange={handleChange as (value?: number | string) => void}
      validationStatus={validationStatus}
    />
  )
}
