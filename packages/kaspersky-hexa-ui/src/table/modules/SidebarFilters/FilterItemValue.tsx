import React from 'react'

import { TableRecord } from '../../types'
import { FilterType } from '../Filters'

import {
  BooleanItem,
  DateItem,
  DateTimeItem,
  EnumItem,
  NumberItem,
  StringItem
} from './items'
import { FilterItemValueProps } from './types'

export function FilterItemValue <T extends TableRecord = TableRecord> ({
  column,
  filter,
  validationMessage,
  ...rest
}: FilterItemValueProps<T>): JSX.Element {
  const validationStatus = validationMessage ? 'error' : 'default'

  switch (filter.type) {
    case FilterType.Boolean:
      return (
        <BooleanItem
          filter={filter}
          onStateName={column?.filterType?.type === FilterType.Boolean ? column?.filterType?.onStateName : undefined}
          offStateName={column?.filterType?.type === FilterType.Boolean ? column?.filterType?.offStateName : undefined}
          {...rest}
        />
      )
    case FilterType.DateRange:
      return (
        <DateItem filter={filter} validationStatus={validationStatus} {...rest} />
      )
    case FilterType.DateTime:
      return (
        <DateTimeItem
          filter={filter}
          dateOnly={column?.filterType?.type === FilterType.DateTime && column?.filterType?.dateOnly}
          validationStatus={validationStatus}
          {...rest}
        />
      )
    case FilterType.Text:
      return (
        <StringItem filter={filter} validationStatus={validationStatus} {...rest} />
      )
    case FilterType.Enum: {
      const getterOptions = filter.attribute?.getAvailableOptions || (
        column?.filterType?.type === FilterType.Enum
          ? column?.filterType?.getAvailableOptions
          : undefined
      )
      return (
        <EnumItem
          filter={filter}
          getAvailableOptions={getterOptions}
          // TODO: remove getAvailableValues after XXX major releases
          getAvailableValues={column?.filterType?.type === FilterType.Enum ? column?.filterType?.getAvailableValues : undefined}
          validationStatus={validationStatus}
          {...rest}
        />
      )
    }
    case FilterType.Number:
      return (
        <NumberItem
          filter={filter}
          min={column?.filterType?.type === FilterType.Number ? column?.filterType?.min : undefined}
          validationStatus={validationStatus}
          {...rest}
        />
      )
    default:
      return <></>
  }
}
