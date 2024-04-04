import React from 'react'
import styled from 'styled-components'
import { Delete } from '@kaspersky/icons/16'
import { Button } from '@src/button'
import { TableContextProviderProps, useTableContext } from '@src/table/context/TableContext'

const StyledFilterItem = styled.div<TableContextProviderProps>`
  padding: 16px;
  background: ${(props) => props.cssConfig?.filters.item.backgroundColor};
  border-radius: 8px;
  position: relative;
`

const CloseButton = styled(Button)`
  &&& {
    min-width: 0;
    border-radius: 100%;
    width: 28px;
    height: 28px;
    padding: 0;
    position: absolute;
    top: 4px;
    right: 4px;

    .kl-components-button-text {
      display: block;
      line-height: 1;
    }
  }
`

const Content = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
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
      <CloseButton mode="tertiary" onClick={onRemove}>
        <Delete />
      </CloseButton>
      <Content>{children}</Content>
    </StyledFilterItem>
  )
}

export default FilterItem
