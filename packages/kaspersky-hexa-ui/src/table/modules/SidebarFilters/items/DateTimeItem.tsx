import { Calendar, DateInputValue, RangeDateInputValue, RangePicker } from '@src/datepicker'
import React, { FC } from 'react'

import { useTableContext } from '../../../context/TableContext'
import { DateTimeFilterValue, FilterOperation } from '../../Filters'
import { convertToDate, parseDate } from '../../Filters/helpers'

import { DateTimeItemProps } from './types'

export const DateTimeItem: FC<DateTimeItemProps> = ({ filter, onChange, dateOnly, validationStatus }) => {
  const { dateFormat } = useTableContext()

  const filterValue = filter.value as Extract<DateTimeFilterValue, number | null>
  const filterRangeValue = filter.value as Exclude<DateTimeFilterValue, number>

  const handleChange = (value: DateInputValue) => {
    onChange({ ...filter, value: parseDate(value) })
  }

  const handleRangeChange = (value: RangeDateInputValue) => {
    if (!value) {
      onChange({ ...filter, value: { from: null, to: null } })
      return
    }
    
    const from = value[0]
    const to = value[1]

    if (from && !filterRangeValue?.from) {
      from.setHours(0, 0, 0, 0)
    }

    if (to && !filterRangeValue?.to) {
      to.setHours(23, 59, 59, 999)
    }

    onChange({
      ...filter,
      value: { from: parseDate(from), to: parseDate(to) }
    })
  }

  const showRange = filter.condition === FilterOperation.range || filter.condition === FilterOperation.nrange

  if (showRange) {
    return (
      <RangePicker
        format={dateFormat}
        onChange={handleRangeChange}
        showTime={!dateOnly}
        value={[convertToDate(filterRangeValue?.from), convertToDate(filterRangeValue?.to)]}
        validationStatus={validationStatus}
      />
    )
  }

  return (
    <Calendar
      format={dateFormat}
      onChange={handleChange}
      showTime={!dateOnly}
      value={convertToDate(filterValue)}
      validationStatus={validationStatus}
    />
  )
}