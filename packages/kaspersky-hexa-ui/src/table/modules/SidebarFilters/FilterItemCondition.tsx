import { Field } from '@src/field'
import { Select } from '@src/select'
import React, { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import { useTableContext } from '../../context/TableContext'
import { DateTimeFilterValue, ExtractFilterConditions, FilterConfigInternal, FilterOperation, FilterType } from '../Filters'
import { isMultipleOp, isRangeValue } from '../Filters/helpers'

import { getFilterOperations } from './helpers'

type FilterItemConditionProps = {
  handleFilterChange: (filterTo: FilterConfigInternal, id?: string) => void,
  operations: ExtractFilterConditions<FilterType>,
  index: number,
  filter: FilterConfigInternal,
}

export function FilterItemCondition ({
  handleFilterChange,
  filter,
  operations,
  index
}: FilterItemConditionProps) {
  const { t } = useTranslation()
  const { filterVersion } = useTableContext()

  const options = useMemo(() => {
    const hasOperations = operations && operations.length

    if (hasOperations) {
      return operations.map(({ label, operation }) => ({
        label: label || operation,
        value: operation
      }))
    }

    return getFilterOperations(filter.type, filterVersion || 1).map(operation => ({ 
      label: t(`table.filterOperation.${operation}`, operation), 
      value: operation
    }))
  }, [t, filter.type, filterVersion, operations])

  const handleDateTimeChangeCondition = (condition: FilterOperation) => {
    const isRangeOp = condition === FilterOperation.range || condition === FilterOperation.nrange
    let value = filter.value as DateTimeFilterValue
  
    if (isRangeOp && !isRangeValue(value)) {
      value = { from: value, to: null }
    } else if (!isRangeOp && isRangeValue(value)) {
      value = value.from
    }
  
    handleFilterChange({ ...filter, condition, value } as FilterConfigInternal, filter.id)
  }
  
  const handleEnumChangeCondition = (condition: FilterOperation) => {
    let value = filter.value
  
    if ([filter.condition, condition].includes(FilterOperation.regexp)) {
      value = null
    }
  
    if (isMultipleOp(condition) && !isMultipleOp(filter.condition)) {
      if (!value) {
        value = []
      } else {
        value = [value]
      }
    }
  
    if (!isMultipleOp(condition) && isMultipleOp(filter.condition)) {
      if (Array.isArray(value) && value.length > 0) {
        value = value[0]
      } else {
        value = null
      }
    }
  
    handleFilterChange({ ...filter, condition, value } as FilterConfigInternal, filter.id)
  }

  const handleChangeCondition = (condition: FilterOperation) => {
    handleFilterChange({ ...filter, condition } as FilterConfigInternal, filter.id)
  }

  const onConditionChange = filter.type === FilterType.DateTime 
    ? handleDateTimeChangeCondition 
    : filter.type === FilterType.Enum
      ? handleEnumChangeCondition
      : handleChangeCondition

  return (
    <Select
      onChange={onConditionChange}
      value={filter.condition}
      options={options}
      testId={`filter-item-condition-select-${index}`}
      // @ts-ignore
      listHeight={400}
    />
  )
}
