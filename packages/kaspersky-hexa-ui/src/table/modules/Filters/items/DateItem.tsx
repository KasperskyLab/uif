import { Calendar } from '@src/datepicker'
import { DateInputValue } from '@src/datepicker/types'
import { Locale } from '@src/locale'
import { Select } from '@src/select'
import React, { FC, useCallback } from 'react'

import FilterRow from '../FilterRow'
import { FilterOperation } from '../types'

import { DateItemProps } from './types'

export const DateItem: FC<DateItemProps> = props => {
  const handleFromChange = useCallback((date: DateInputValue) => {
    let from = null
    if (date !== null) {
      from = new Date(date?.setHours(0, 0, 0, 0))
    }
    props.onChange({
      ...props.filter,
      value: { from: from, to: props.filter.value.to }
    })
  }, [props.filter, props.onChange])

  const handleToChange = useCallback((date: Date) => {
    let to = null
    if (date !== null) {
      to = new Date(date.setHours(23, 59, 59, 999))
    }
    props.onChange({
      ...props.filter,
      value: { from: props.filter.value.from, to: to }
    })
  }, [props.filter, props.onChange])

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
    <FilterRow title={<Locale localizationKey="table.columnsSettings.filtering.from" />}>
      <Calendar
        value={props.filter.value.from as any}
        onChange={handleFromChange as any}
      />
    </FilterRow>
    <FilterRow title={<Locale localizationKey="table.columnsSettings.filtering.to" />}>
      <Calendar
        value={props.filter.value.to as any}
        onChange={handleToChange as any}
      />
    </FilterRow>
  </>
}
