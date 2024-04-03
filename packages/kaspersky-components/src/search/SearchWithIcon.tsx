import React, { FC } from 'react'
import { IconSearch } from './IconSearch'
import { Search } from './Search'
import { SearchWithIconProps } from './types'

/** @deprecated Use 'prefix' prop instead */
export const WithIconLeft: FC<SearchWithIconProps> = ({
  onClick,
  icon = <IconSearch onClick={onClick} testId='search-icon' componentId='search-icon' />,
  ...rest
}: SearchWithIconProps) => {
  return <Search {...rest} prefix={icon}/>
}

/** @deprecated Use 'suffix' prop instead */
export const WithIconRight: FC<SearchWithIconProps> = ({
  onClick,
  icon = <IconSearch onClick={onClick} testId='search-icon' componentId='search-icon' />,
  ...rest
}: SearchWithIconProps) => {
  return <Search {...rest} suffix={icon}/>
}
