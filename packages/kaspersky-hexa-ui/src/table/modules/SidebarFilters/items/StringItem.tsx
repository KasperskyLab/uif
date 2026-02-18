import { Textbox } from '@src/input'
import React from 'react'

import { StringItemProps } from './types'

export const StringItem: React.FC<StringItemProps> = ({ filter, onChange, index, validationStatus }) => {
  const handleChange = (value: string) => {
    onChange({ ...filter, value })
  }
  const testId = `filter-item-value-${index}`

  return (
    <Textbox
      klId={testId}
      testId={testId}
      value={filter.value ?? ''}
      onChange={handleChange}
      validationStatus={validationStatus}
    />
  )
}
