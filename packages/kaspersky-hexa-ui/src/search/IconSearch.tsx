import { Indicator } from '@src/indicator'
import { SearchIconProps } from '@src/search/types'
import { Space } from '@src/space'
import React, { FC } from 'react'
import styled from 'styled-components'

import { Search1 } from '@kaspersky/hexa-ui-icons/16'

const StyledIndicator = styled(Indicator)<{ cursor?: string }>`
  position: absolute;
  top: 6px;
  right: 8px;
`

export const IconSearch: FC<SearchIconProps> = ({
  color = 'currentColor',
  testId,
  klId,
  className,
  onClick,
  indicator = false,
  componentId
}: SearchIconProps) => {
  return (
    <Space onClick={onClick}>
      <Search1
        color={color}
        style={{ cursor: onClick ? 'pointer' : 'default' }}
        data-testid={testId}
        data-component-id={componentId}
        className={className}
        kl-id={klId}
      />
      {indicator && <StyledIndicator border mode="high" cursor={onClick ? 'pointer' : 'default'} />}
    </Space>
  )
}

IconSearch.displayName = 'IconSearch'
