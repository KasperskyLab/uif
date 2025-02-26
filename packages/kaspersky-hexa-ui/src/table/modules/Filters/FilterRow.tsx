import { P } from '@src/typography'
import React from 'react'
import styled from 'styled-components'

import { TableContextProviderProps, useTableContext } from '../../context/TableContext'

export const StyledHeading = styled(P)``

const StyledFilterRow = styled.div<TableContextProviderProps>`
  display: grid;
  grid-gap: 4px;
  
  ${StyledHeading} {
    color: ${props => props.cssConfig?.filters.item.title.color}
  }
`

type FilterRowProps = {
  title: React.ReactNode
};

const FilterRow: React.FC<FilterRowProps> = ({ children, title }) => {
  const { cssConfig } = useTableContext()

  return (
    <StyledFilterRow cssConfig={cssConfig}>
      <StyledHeading type="BTR3">{title}</StyledHeading>
      {children}
    </StyledFilterRow>
  )
}

export default FilterRow
