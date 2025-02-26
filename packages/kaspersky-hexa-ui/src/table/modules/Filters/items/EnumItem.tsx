import { Locale } from '@src/locale'
import { Select } from '@src/select'
import React, { FC, useEffect, useState } from 'react'

import FilterRow from '../FilterRow'
import { FilterOperation } from '../types'

import { EnumItemProps } from './types'

export const EnumItem: FC<EnumItemProps> = props => {
  const [values, setValues] = useState<any[]>([])

  useEffect(() => {
    props.getAvailableValues?.()
      .then(setValues)
  }, [])

  const handleValueChange = (value: string) => [
    props.onChange({
      ...props.filter,
      value: value
    })
  ]

  return <>
    <FilterRow title={<Locale localizationKey="table.columnsSettings.filtering.condition" />}>
      <Select
        onChange={props.onConditionChange}
        value={props.filter.condition}
        options={[
          {
            label: FilterOperation.eq,
            value: FilterOperation.eq
          },
          {
            label: FilterOperation.neq,
            value: FilterOperation.neq
          }
        ]}
      />
    </FilterRow>
    <FilterRow title={<Locale localizationKey="table.columnsSettings.filtering.value" />}>
      <Select
        onChange={handleValueChange}
        value={props.filter.value ?? undefined}
        options={values.map((value, index) => (
          {
            label: value,
            value: value,
            key: `${value}:${index}`
          }
        ))}
      />
    </FilterRow>
  </>
}
