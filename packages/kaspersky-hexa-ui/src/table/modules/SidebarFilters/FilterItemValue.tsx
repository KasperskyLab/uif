import React, { useMemo } from 'react'

import { TableColumn } from '../../types'
import { FilterConfigInternal, FilterType } from '../Filters'

import { BooleanItem, DateItem, DateTimeItem, EnumItem, NumberItem, StringItem } from './items'
import { FilterValidation } from './items/types'

type FilterItemValueProps = {
  index?: number,
  filter: FilterConfigInternal,
  onChange: (filter: FilterConfigInternal) => void,
  columns: TableColumn[]
} & FilterValidation

export function FilterItemValue ({
  columns: columnsProps,
  filter,
  validationMessage,
  ...rest
}: FilterItemValueProps): JSX.Element {
  const column = useMemo(() => (
    columnsProps.find((column) => filter.name === column?.dataIndex)
  ), [columnsProps, filter.name])

  const validationStatus = validationMessage ? 'error' : 'default'

  switch (filter.type) {
    case FilterType.Boolean:
      return (
        <BooleanItem filter={filter} {...rest} />
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
        <NumberItem filter={filter} validationStatus={validationStatus} {...rest} />
      )
    default:
      return <></>
  }
}
