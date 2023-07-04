import React, { MouseEvent } from 'react'
import styled from 'styled-components'
import { Tag } from '../../../tag/Tag'
import {
  SPACES
} from '../../../../design-system/theme/themes/variables'

export interface FilterItemTagProps {
  text?: string,
  onClose?: (event?: MouseEvent<HTMLElement, MouseEvent>) => void
}

const StyledFilterItems = styled.div`
  display: none;
  
  &:has(.ant-tag:not(.ant-tag-hidden)) {
    display: flex;
    flex-wrap: wrap;
    gap: ${SPACES[3]}px;
  }
  
  margin: ${SPACES[8]}px 0;
`

const StyledTag = styled(Tag)`
  margin: 0;
`

export const FilterItems = (props: { items: FilterItemTagProps[] | undefined }) => {
  return <StyledFilterItems>
    {
      props.items?.map((item: FilterItemTagProps) => {
        return <StyledTag closable onClose={item.onClose}>
          {item.text}
        </StyledTag>
      })
    }
  </StyledFilterItems>
}
