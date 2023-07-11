import React from 'react'
import { ButtonProps } from 'antd/es/button'
import { IButtonProps } from '../button/types'
import { StyledButtonSearch } from './searchCss'

export const ButtonSearch = (props: IButtonProps & ButtonProps) => {
  return (
    <StyledButtonSearch
      {...props}
    />
  )
}
