import React, { ComponentProps } from 'react'

import { Icon } from '../icon'
import { Search } from './Search'
import { SearchWithButtonProps } from './types'
import { useThemedSearch } from './useThemedSearch'

export const WithConfiguration = ({
  onPressEnter,
  onClick,
  ...otherProps
}: SearchWithButtonProps & ComponentProps<typeof Search>) => {
  const { cssConfig } = useThemedSearch(otherProps)

  return (
    <Search
      prefix={
        <Icon
          name="Configure"
          size="small"
          onClick={onClick}
          color={cssConfig.mode.normal.iconColor}
        />
      }
      onPressEnter={onPressEnter}
      {...otherProps}
    />
  )
}
