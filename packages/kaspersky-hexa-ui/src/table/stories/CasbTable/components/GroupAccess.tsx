import { Button } from '@src/button'
import React, { FC } from 'react'
import styled from 'styled-components'

import { TGroupAccess } from '../types'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`

export const GroupAccess: FC<TGroupAccess> = ({ blockedCount, totalCount }) => {
  return (
    <Wrapper>
      <div>
        Blocked: {blockedCount} of {totalCount}
      </div>
      <div>
        <Button text="Block entire category" mode="secondary" />
      </div>
    </Wrapper>
  )
}
