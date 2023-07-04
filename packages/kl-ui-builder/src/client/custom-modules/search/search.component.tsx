import React from 'react'
import _ from 'lodash'
import styled from 'styled-components'

const Label = styled.div`
  width: 170px;
`

const Block = styled.div`
  flex: 1;
  height: 30px;
  border: solid 2px #9cabb5;
  &.active {
    border: solid 2px orange;
  }
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  &:hover ${Block} {
    border: solid 2px orange;
  }
`

interface ISearchParams {
    state: {
        alias: {
            input: string
        }
    },
    setup: {
        _active?: string
    }
}

const Search = ({ state, setup: { _active } }: ISearchParams) => {
  const text = _.get(state, 'alias.input') || 'Search'
  return (
    <Wrapper>
      <i className='icon search' />
      <Label>{text}</Label>
      <Block className={_active && 'active'} />
    </Wrapper>
  )
}

export default Search
