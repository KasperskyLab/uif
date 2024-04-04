import React, { FC } from 'react'
import styled from 'styled-components'
import { Search } from './Search'
import { SearchWithButtonProps } from './types'
import { Settings2 } from '@kaspersky/icons/16'

const StyledSpan = styled.span`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

/** @deprecated Not used in design system */
export const WithConfiguration: FC<SearchWithButtonProps> = ({
  onClick,
  ...otherProps
}: SearchWithButtonProps) => {
  return (
    <Search
      {...otherProps}
      prefix={
        <StyledSpan onClick={onClick}>
          <Settings2 />
        </StyledSpan>
      }
    />
  )
}
