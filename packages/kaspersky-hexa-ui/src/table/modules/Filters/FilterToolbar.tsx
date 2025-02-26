import { Button } from '@src/button'
import { Locale } from '@src/locale'
import React from 'react'
import styled from 'styled-components'

import { Cross, Plus } from '@kaspersky/icons/16'

import { useTableContext } from '../../context/TableContext'
import { TableColumn } from '../../types'

import { getNewFilter } from './filters'
import { FilterConfig } from './types'

const StyledFilterToolbar = styled.div<{ backgroundColor: string }>`
  display: flex;
  align-items: center;
  border-radius: 8px;
  height: 40px;
  background: ${props => props.backgroundColor};
  margin: 0 24px;
  padding: 0 4px;
  gap: 4px;
`

export type FilterToolbarProps = {
  filters: FilterConfig[],
  onChange: (filters: FilterConfig[]) => void,
  columns: TableColumn[]
}

const FilterToolbar: React.FC<FilterToolbarProps> = ({ onChange, filters, columns }) => {
  const { cssConfig } = useTableContext()

  const handleAdd = async () => {
    const newFilter: FilterConfig = await getNewFilter(columns[0])
    onChange([...filters, newFilter])
  }

  const handleClearAll = () => {
    onChange([])
  }

  return (
    <StyledFilterToolbar backgroundColor={cssConfig?.filters.toolbar.background as string}>
      <Button iconBefore={<Plus />} mode="tertiary" onClick={handleAdd}>
        <Locale localizationKey="table.columnsSettings.filtering.add" />
      </Button>
      <Button iconBefore={<Cross />} mode="tertiary" onClick={handleClearAll}>
        <Locale localizationKey="table.columnsSettings.filtering.clearAll" />
      </Button>
    </StyledFilterToolbar>
  )
}

export default FilterToolbar
