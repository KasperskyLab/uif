import React from 'react'
import _ from 'lodash'
import styled from 'styled-components'

const Label = styled.div`
  width: 170px;
`

const AnchorBarItem = styled.div`
  height: 30px;
  width: 40px;
  border: solid 2px #9cabb5;
  &.active {
    border: solid 2px orange;
  }
`

const Wrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  &:hover ${AnchorBarItem} {
    border: solid 2px orange;
  }
`

interface IAnchorParams {
    state: {
        alias: {
            input: string
        }
    },
    setup: {
        _active?: string
    }
}

const Toolbar = ({ state, setup: { _active } }: IAnchorParams) => {
  const text = _.get(state, 'alias.input') || 'Anchor Links'
  return (
    <Wrapper>
      <Label>{text}</Label>
    </Wrapper>
  )
}

export default Toolbar
