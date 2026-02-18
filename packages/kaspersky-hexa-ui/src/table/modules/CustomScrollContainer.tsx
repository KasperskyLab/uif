import styled from 'styled-components'

import { ITableProps } from '..'

type CustomScrollContainerProps = Pick<ITableProps, 'stickyScrollbarOffset'>

export const CustomScrollContainer = styled.div<CustomScrollContainerProps>`
  --scrollbar--bar--radius: 6px;

  & {
    ::-webkit-scrollbar {
      -webkit-appearance: none;
      border-radius: var(--scrollbar--bar--radius);
      height: 8px;
    }
  
    ::-webkit-scrollbar-thumb {
      background: var(--scrollbar--bar--enabled);
      border-radius: var(--scrollbar--bar--radius);
    }

    ::-webkit-scrollbar-thumb:hover {
      background: var(--scrollbar--bar--hover);
    }

    scrollbar-color: var(--scrollbar--bar--enabled);
    position: sticky;
    overflow: hidden;
    overflow-x: auto;
    bottom: ${props => props.stickyScrollbarOffset || '0'}px;
    z-index: 3;
    border-bottom: 5px solid transparent;
    outline: transparent solid 1px;

    .table-horizontal-filler {
      height: 1px;
      width: 1px;
      overflow: hidden;
    }
  }
`
