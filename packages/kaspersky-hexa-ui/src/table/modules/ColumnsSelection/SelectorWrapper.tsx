import React from 'react'
import styled from 'styled-components'

export const SelectorWrapper = styled.div`
  width: 100%;
  overflow: auto;
  user-select: none;

  display: flex;
  flex-direction: column;
  flex-grow: 1;

  padding: 0 24px 0 0;
  gap: 12px;

  .select-all-item {
    align-items: center;
    margin-left: 20px;
  }
`
