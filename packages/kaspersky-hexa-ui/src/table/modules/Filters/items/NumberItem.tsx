import { Textbox } from '@src/input'
import { Locale } from '@src/locale'
import { Select } from '@src/select'
import React, { useMemo } from 'react'

import FilterRow from '../FilterRow'
import { FilterOperation } from '../types'

import { NumberItemProps } from './types'

export const NumberItem: React.FC<NumberItemProps> = (props) => {
  const handleChange = (value: number | null) => {
    props.onChange({ ...props.filter, value })
  }

  const getOptions = useMemo(() => {
    const options = [
      {
        label: FilterOperation.eq,
        value: FilterOperation.eq
      },
      {
        label: FilterOperation.neq,
        value: FilterOperation.neq
      }
    ]
    if (props.filter.exact) {
      options.push({
        label: FilterOperation.gt,
        value: FilterOperation.gt
      },
      {
        label: FilterOperation.lt,
        value: FilterOperation.lt
      })
    }
    return options
  }, [props.filter.exact])

  return (
    <>
      <FilterRow title={<Locale localizationKey="table.columnsSettings.filtering.condition" />}>
        <Select
          onChange={props.onConditionChange}
          value={props.filter.condition}
          options={getOptions}
        />
      </FilterRow>
      <FilterRow title={<Locale localizationKey="table.columnsSettings.filtering.value" />}>
        <Textbox.Number
          value={props.filter.value as number | undefined}
          onChange={handleChange as (value?: number | string) => void}
          className="filter-number-input"
        />
      </FilterRow>
    </>
  )
}
