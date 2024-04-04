import React, { FC } from 'react'
import styled from 'styled-components'
import { Search } from './Search'
import { SearchWithButtonProps } from '@src/search/types'
import { Button } from '@src/button'

export const StyledButtonSearch = styled(Button)`
  z-index: 1;
  &&&:focus, &&&:active {
    box-shadow: none;
  }
`

/** @deprecated Not used in design system */
export const WithButton: FC<SearchWithButtonProps> = ({
  onClick,
  btnText,
  ...rest
}: SearchWithButtonProps) => {
  return (
    <Search
      className='kl6-search-button-right'
      suffix={
        <StyledButtonSearch
          onClick={onClick}
          disabled={rest.disabled}
          mode='tertiary'
        >
          {btnText}
        </StyledButtonSearch>}
      {...rest}
    />
  )
}
