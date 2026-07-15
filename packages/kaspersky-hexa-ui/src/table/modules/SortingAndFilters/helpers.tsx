import { Checkbox } from '@src/checkbox'
import { ColumnFilter, TableColumn, TableRecord } from '@src/table/types'
import React, { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { v4 as uuid } from 'uuid'

import {
  EnumFilterInternal,
  EnumOption,
  FilterOperation,
  FilterType,
  UnitedFilter
} from '../Filters'
import { getEnumFilters } from '../Filters/helpers'

export const TABLE_HEADER_TEST_ID_PREFIX = 'table-header-dropdown'

export const getStringWithCondition = (postfix: string, testProp?: string) => testProp ? `${testProp}-${postfix}` : `${postfix}`

const StyledFilterRow = styled.div`
  display: flex;
  align-items: start;
  gap: 4px;
`

const ElementBefore = styled.span`
  display: flex;
  align-items: center;
  min-height: 20px;
`

type FilterRowProps =
  Pick<TableColumn, 'allowMultipleFilters'> &
  Pick<ColumnFilter, 'elementBefore' | 'localizationKey'> &
  {
    isChecked: boolean,
    name: ReactNode,
    onClick: () => void
  }

export function FilterRow ({
  isChecked,
  onClick,
  elementBefore,
  name,
  localizationKey
}: FilterRowProps): JSX.Element {
  const { t } = useTranslation()
  return (
    <Checkbox checked={!!isChecked} onChange={onClick}>
      <StyledFilterRow>
        {elementBefore && <ElementBefore>{elementBefore}</ElementBefore>}
        {localizationKey ? t(localizationKey) : name}
      </StyledFilterRow>
    </Checkbox>
  )
}

export const hasFiltersOrSorting = <T extends TableRecord = TableRecord>(column: TableColumn<T>): boolean => !!(
  column.filters ||
  column.isSortable ||
  column.sorter ||
  column.sortingAttributes ||
  (column.showEnumFiltersInColumn && column.filterType?.type === FilterType.Enum)
)

export const getEnumFilter = <T extends TableRecord = TableRecord>(key: string, value: EnumOption['value'], filters?: UnitedFilter<T>[]) => (
  getEnumFilters(filters).find(filter => filter.name === key && filter.value === value)
)

export const createEnumFilter = (name: string, value: EnumOption['value']): EnumFilterInternal => {
  return {
    id: uuid(),
    name,
    type: FilterType.Enum,
    condition: FilterOperation.eq,
    value,
    isUserDefined: true
  }
}
