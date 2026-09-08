import { Textbox } from '@src/input'
import { Select } from '@src/select'
import React, { FC, useEffect, useState } from 'react'
import styled from 'styled-components'

import { EnumOption, FilterOperation } from '../../Filters'
import { isMultipleOp, resolveEnumOptions } from '../../Filters/helpers'

import { EnumItemProps } from './types'

const SelectStyled = styled(Select)`
  .ant-select-dropdown .ant-select-item-group.ant-select-item-group {
    background: transparent;
  }
`

const mapOptions = (items: EnumOption[], indexProp?: number): EnumOption[] => (
  items.map((option, index) => (
    option.options?.length
      ? {
          ...option,
          key: `${option.label ?? 'group'}:${index}`,
          options: mapOptions(option.options)
        }
      : {
          ...option,
          testId: `filter-item-value-select-option-${indexProp}-${index}`,
          key: `${option.value}:${index}`
        }
  ))
)

export const EnumItem: FC<EnumItemProps> = ({
  filter,
  onChange,
  validationStatus,
  getAvailableOptions,
  getAvailableValues,
  search,
  ...props
}) => {
  const [filteredOptions, setFilteredOptions] = useState<EnumOption[]>([])
  const [allOptions, setAllOptions] = useState<EnumOption[]>([])
  const testId = `filter-item-value-select-${props.index}`

  useEffect(() => {
    if (!getAvailableOptions && !getAvailableValues) {
      console.warn(
        'getAvailableOptions or getAvailableValues is required for EnumItem'
      )
      return
    }

    resolveEnumOptions(getAvailableOptions, getAvailableValues, filter.name)
      .then(res => {
        if (res) {
          setAllOptions(res)
          setFilteredOptions(res)
        }
      })
  }, [])

  const handleSearch = (value: string) => {
    if (search?.customSearchFunction) {
      setFilteredOptions(search.customSearchFunction(value, allOptions))
    }
  }

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
    <SelectStyled
      testId={testId}
      klId={testId}
      mode={isMultiple ? 'multiple' : undefined}
      onChange={handleValueChange}
      value={filter.value ?? undefined}
      showSearch={search?.enabled}
      filterOption={!search?.customSearchFunction}
      optionFilterProp="data-label"
      onSearch={handleSearch}
      options={mapOptions(filteredOptions, props.index)}
      validationStatus={validationStatus}
    />
  )
}
