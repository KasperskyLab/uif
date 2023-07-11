import React, { ComponentProps, FC, MouseEventHandler, ReactNode } from 'react'

import { Search } from './Search'
import { StyledButtonSearch } from './searchCss'
import { StyledButton } from './types'
import { useThemedSearch } from './useThemedSearch'
import { ITextboxProps } from '../input/types'

type SearchWithButtonProps = ITextboxProps & {
  onClick?: MouseEventHandler<HTMLElement>,
  btnText?: string | ReactNode
}

const ButtonSearch: FC<StyledButton> = (props) => {
  return (
    <StyledButtonSearch
      {...props}
    />
  )
}
export const WithButton: FC<SearchWithButtonProps & ComponentProps<typeof Search>> = ({
  onPressEnter,
  onClick,
  btnText,
  ...otherProps
}) => {
  const { cssConfig } = useThemedSearch(otherProps)

  return (
    <Search className="custom-search btn-right"
      addonAfter={
        <ButtonSearch
          onClick={onClick}
          disabled={otherProps.disabled}
          mode='tertiary'
          cssConfig={cssConfig}>
          {btnText}
        </ButtonSearch>}
      onPressEnter={onPressEnter}
      {...otherProps}
    />
  )
}
