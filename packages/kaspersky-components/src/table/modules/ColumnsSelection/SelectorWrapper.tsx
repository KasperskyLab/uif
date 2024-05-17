import React from 'react'

import styled from 'styled-components'
import { SPACES } from '@design-system/theme'

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 24px 0 0;

  .select-all-item {
    align-items: center;
    margin-left: 20px;
    margin-top: 0;

    p {
      margin-left: ${SPACES[8]}px;
    }
  }

  .grouping-item {
    p {
      display: contents;
    }
  }
`

const Content = styled.div`
  flex-grow: 1;
  overflow: auto;
`

export const SelectorWrapper: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <Content>
        {children}
      </Content>
    </Wrapper>
  )
}
