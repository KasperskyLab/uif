import { useLocalization } from '@helpers/localization/useLocalization'
import { Calendar, DateInputValue } from '@src/datepicker'
import { Field } from '@src/field'
import { Grid } from '@src/grid'
import React, { FC, useCallback } from 'react'

import { useTableContext } from '../../../context/TableContext'
import { convertToDate, parseDate } from '../../Filters/helpers'

import { DateItemProps } from './types'

export const DateItem: FC<DateItemProps> = ({ filter, onChange, validationStatus }) => {
  const { dateFormat } = useTableContext()

  const handleFromChange = useCallback((date: DateInputValue) => {
    const from = date !== null
      ? new Date(date.setHours(0, 0, 0, 0))
      : date
    onChange({
      ...filter,
      value: { from: parseDate(from), to: filter.value.to }
    })
  }, [filter, onChange])

  const handleToChange = useCallback((date: DateInputValue) => {
    const to = date !== null
      ? (new Date(date.setHours(23, 59, 59, 999))).toISOString()
      : date
    onChange({
      ...filter,
      value: { from: filter.value.from, to: parseDate(to) }
    })
  }, [filter, onChange])

  return (
    <Grid cols={2} layoutProperty={{ gap: 8 }}>
      <Field
        label={useLocalization('table.columnsSettings.filtering.from')}
        control={
          <Calendar
            format={dateFormat}
            value={convertToDate(filter.value.from)}
            onChange={handleFromChange}
            validationStatus={validationStatus}
          />
        }
      />
      <Field
        label={useLocalization('table.columnsSettings.filtering.to')}
        control={
          <Calendar
            format={dateFormat}
            value={convertToDate(filter.value.to)}
            onChange={handleToChange}
            validationStatus={validationStatus}
          />
        }
      />
    </Grid>
  )
}
