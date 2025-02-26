import { SPACES } from '@design-system/theme'
import { Indicator } from '@src/indicator'
import { SearchIconProps } from '@src/search/types'
import { Space } from '@src/space'
import React, { FC } from 'react'
import styled from 'styled-components'

import { Search } from '@kaspersky/icons/16'

const StyledIndicator = styled(Indicator)<{ cursor?: string }>`
  position: absolute;
  top: ${SPACES[3]}px;
  right: ${SPACES[4]}px;
`

export const IconSearch: FC<SearchIconProps> = ({
  color = 'currentColor',
  testId,
  onClick,
  indicator = false,
  componentId
}: SearchIconProps) => {
  return (
    <Space onClick={onClick}>
      <Search
        color={color}
        style={{ cursor: onClick ? 'pointer' : 'default' }}
        data-testid={testId}
        data-component-id={componentId}
      />
      {indicator && <StyledIndicator border mode="high" cursor={onClick ? 'pointer' : 'default'} />}
    </Space>
  )
}

IconSearch.displayName = 'IconSearch'
