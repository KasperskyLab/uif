import { Button } from '@src/button'
import React, { FC } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: center
`
export const LoadMore: FC = () => {
  return (
    <Wrapper>
      <Button text="Load more" />
    </Wrapper>
  )
}
