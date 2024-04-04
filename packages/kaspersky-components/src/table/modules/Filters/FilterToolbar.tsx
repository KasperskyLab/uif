import React from 'react'
import styled from 'styled-components'
import { Plus, Cross } from '@kaspersky/icons/16'
import { Button } from '@src/button'
import { useTableContext } from '@src/table/context/TableContext'

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

const FilterToolbar: React.FC = () => {
  const { cssConfig } = useTableContext()

  return (
    <StyledFilterToolbar backgroundColor={cssConfig?.filters.toolbar.backgroundColor as string}>
      <Button iconBefore={<Plus />} mode="tertiary">
        Add
      </Button>
      <Button iconBefore={<Cross />} mode="tertiary">
        Clear all
      </Button>
    </StyledFilterToolbar>
  )
}

export default FilterToolbar
