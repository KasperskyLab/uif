import { Textbox } from '@src/input'
import { Select } from '@src/select'
import React, { FC, useEffect, useState } from 'react'

import { EnumOption, FilterOperation } from '../../Filters'
import { isMultipleOp, resolveEnumOptions } from '../../Filters/helpers'

import { EnumItemProps } from './types'

export const EnumItem: FC<EnumItemProps> = ({
  filter,
  onChange,
  validationStatus,
  getAvailableOptions,
  getAvailableValues,
  ...props
}) => {
  const [options, setOptions] = useState<EnumOption[]>([])
  const testId = `filter-item-value-select-${props.index}`

  useEffect(() => {
    if (!getAvailableOptions && !getAvailableValues) {
      console.warn(
        'getAvailableOptions or getAvailableValues is required for EnumItem'
      )
      return
    }

    resolveEnumOptions(getAvailableOptions, getAvailableValues, filter.name)
      .then(res => res && setOptions(res))
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
      testId={testId}
      klId={testId}
      mode={isMultiple ? 'multiple' : undefined}
      onChange={handleValueChange}
      value={filter.value ?? undefined}
      options={options.map((option, index) => ({
        ...option,
        testId: `filter-item-value-select-option-${props.index}-${index}`,
        key: `${option.value}:${index}`
      }))}
      validationStatus={validationStatus}
    />
  )
}
