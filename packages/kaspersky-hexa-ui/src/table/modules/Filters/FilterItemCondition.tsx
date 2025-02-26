import React from 'react'

import { TableColumn } from '../../types'

import { DateItem, EnumItem, NumberItem, StringItem } from './items/index'
import { FilterConfig, FilterOperation, FilterType } from './types'

type FilterItemConditionProps<Filter> = {
  filter: Filter,
  onChange: (filter: any) => void,
  columns: TableColumn[]
}

const FilterItemCondition: React.FC<FilterItemConditionProps<FilterConfig>> = (props) => {
  const handleChangeCondition = (condition: FilterOperation) => {
    props.onChange({ ...props.filter, condition })
  }
  switch (props.filter.type) {
    case FilterType.DateRange:
      return (
        <DateItem
          filter={props.filter}
          onConditionChange={handleChangeCondition}
          onChange={props.onChange}
        />
      )
    case FilterType.Text:
      return (
        <StringItem
          filter={props.filter}
          onConditionChange={handleChangeCondition}
          onChange={props.onChange}
        />
      )

    case FilterType.Enum: {
      const column = props.columns.find(column => props.filter.name === column?.dataIndex)
      return (
        <EnumItem
          key={props.filter.name}
          filter={props.filter}
          onConditionChange={handleChangeCondition}
          onChange={props.onChange}
          getAvailableValues={column?.filterType?.getAvailableValues}
        />
      )
    }

    case FilterType.Number:
      return (
        <NumberItem
          filter={props.filter}
          onConditionChange={handleChangeCondition}
          onChange={props.onChange}
        />
      )

    default:
      return null
  }
}

export default FilterItemCondition
