import { Textbox } from '@src/input'
import { Select } from '@src/select'
import React, { FC, useEffect, useState } from 'react'

import { EnumOption, FilterOperation, LegacyEnumOption } from '../../Filters'
import { isMultipleOp } from '../../Filters/helpers'
import { getEnumOption } from '../filters'

import { EnumItemProps } from './types'

export const EnumItem: FC<EnumItemProps> = ({
  filter,
  onChange,
  validationStatus,
  getAvailableOptions,
  getAvailableValues
}) => {
  const [options, setOptions] = useState<(EnumOption | LegacyEnumOption)[]>([])

  useEffect(() => {
    if (getAvailableOptions) {
      getAvailableOptions().then(setOptions)

      return
    }

    if (getAvailableValues) {
      getAvailableValues().then(setOptions)

      return
    }

    console.warn(
      'getAvailableOptions or getAvailableValues is required for EnumItem'
    )
  }, [])

  const handleValueChange = (value: EnumOption['value'] | EnumOption['value'][]) => {
    onChange({
      ...filter,
      value: value
    })
  }

  if (filter.condition === FilterOperation.regexp) {
    return (
      <Textbox
        value={filter.value ?? ''}
        onChange={handleValueChange}
      />
    )
  }

  const isMultiple = isMultipleOp(filter.condition)

  return (
    <Select
      mode={isMultiple ? 'multiple' : undefined}
      onChange={handleValueChange}
      value={filter.value ?? undefined}
      options={options.map((option, index) => {
        const { value, label } = getEnumOption(option) || {}
        return {
          value,
          label,
          key: `${value}:${index}`
        }
      })}
      validationStatus={validationStatus}
    />
  )
}
