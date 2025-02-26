import { Textbox } from '@src/input'
import { Locale } from '@src/locale'
import { Select } from '@src/select'
import React from 'react'

import FilterRow from '../FilterRow'
import { FilterOperation } from '../types'

import { StringItemProps } from './types'

export const StringItem: React.FC<StringItemProps> = (props) => {
  const handleChange = (value: string) => {
    props.onChange({ ...props.filter, value })
  }

  return (
    <>
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
            },
            {
              label: FilterOperation.cont,
              value: FilterOperation.cont
            },
            {
              label: FilterOperation.ncont,
              value: FilterOperation.ncont
            }
          ]}
        />
      </FilterRow>
      <FilterRow title={<Locale localizationKey="table.columnsSettings.filtering.value" />}>
        <Textbox value={props.filter.value ?? ''} onChange={handleChange} />
      </FilterRow>
    </>
  )
}
