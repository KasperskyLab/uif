import React, { FC } from 'react'
import styled from 'styled-components'
import { TGroupAccess } from '../types'
import { Button } from '@src/button'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
