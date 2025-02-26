import { ActionButton } from '@src/action-button'
import { TableContextProviderProps, useTableContext } from '@src/table/context/TableContext'
import React from 'react'
import styled from 'styled-components'

import { Delete } from '@kaspersky/icons/16'

const StyledFilterItem = styled.div<TableContextProviderProps>`
  padding: 16px;
  background: ${(props) => props.cssConfig?.filters.item.background};
  border-radius: 8px;
  position: relative;
  color: ${(props) => props.cssConfig?.filters.item.icon};
`

const DeleteButton = styled(ActionButton)`
  position: absolute;
  top: 8px;
  right: 8px;
`

const Content = styled.div`
  display: grid;
  grid-gap: 8px;

  & > *:first-child {
    grid-column: 1 / 3;
  }
`

type FilterItemProps = {
  onRemove?: () => void
};

const FilterItem: React.FC<FilterItemProps> = ({
  children,
  onRemove
}) => {
  const { cssConfig } = useTableContext()

  return (
    <StyledFilterItem cssConfig={cssConfig}>
      <DeleteButton onClick={onRemove} icon={<Delete />} size="large" />
      <Content>{children}</Content>
    </StyledFilterItem>
  )
}

export default FilterItem
