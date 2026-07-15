import { Indicator } from '@src/indicator'
import { SearchIconProps } from '@src/search/types'
import { Space } from '@src/space'
import React, { FC } from 'react'
import styled from 'styled-components'

import { Search1, SearchActive } from '@kaspersky/hexa-ui-icons/16'

const StyledIndicator = styled(Indicator)`
  position: absolute;
  top: 6px;
  right: 6px;
`

export const IconSearch: FC<SearchIconProps> = ({
  color = 'currentColor',
  testId,
  klId,
  className,
  onClick,
  indicator = false,
  modeIndicator = 'high',
  borderBackground,
  componentId
}: SearchIconProps) => {
  return (
    <Space onClick={onClick} style={onClick ? { cursor: 'pointer' } : undefined}>
      {indicator
        ? (
            <>
              <SearchActive
                color={color}
                data-testid={testId}
                data-component-id={componentId}
                className={className}
                kl-id={klId}
              />
              <StyledIndicator mode={modeIndicator} borderBackground={borderBackground} />
            </>
          )
        : (
            <Search1
              color={color}
              data-testid={testId}
              data-component-id={componentId}
              className={className}
              kl-id={klId}
            />
          )}
    </Space>
  )
}

IconSearch.displayName = 'IconSearch'
