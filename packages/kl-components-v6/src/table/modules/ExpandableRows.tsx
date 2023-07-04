import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { TableModule } from '.'
import { SPACES } from '../../../design-system/theme/themes/variables'
import { Icon } from '../../icon'

const StyledIconContainer = styled.span`
  display: inline-block;
  width: ${SPACES[10]}px;
`

const StyledIcon = styled(Icon)`
  display: inline-block;
  text-align: center;
  cursor: pointer;
  width: ${SPACES[10]}px;
`

const StyledTableContainer = styled.div`
  .ant-table .ant-table-tbody > tr > td:first-child {
    padding-left: ${SPACES[6]}px;
  }

  ${({ hasSelectionColumn }: { hasSelectionColumn: boolean }) => {
    if (hasSelectionColumn) {
      return css`
      .ant-table-row-indent {
        padding-left: 0 !important;
      }

      .ant-table-selection-column {
        position: relative;
      }

      .kl-components-expandable-icon {
        position: absolute !important;
        right: 0;
      }

      ${
  Array.from({ length: 100 }).map((_, index) => `
          .ant-table-row-level-${index} td:nth-child(1) > * {
            position: relative;
            transform: translateX(${index * SPACES[8]}px);
            z-index: 1;
          }
          
          .ant-table-row-level-${index} td:nth-child(2) {
            padding-left: ${SPACES[4] + index * SPACES[8]}px !important;
          }
        `)
}
      `
    }
  }}
`

function checkRows (rows: readonly Record<string, unknown>[]) {
  return rows.some(({ children }: { children?: readonly Record<string, unknown>[] }) => Array.isArray(children))
}

export const ExpandableRows: TableModule = Component => props => {
  const { dataSource: rows = [], rowSelection } = props
  const [hasChildren, setHasChildren] = useState(checkRows(rows))
  useEffect(() => {
    const { dataSource: rows = [] } = props
    setHasChildren(checkRows(rows))
  }, [props.dataSource])

  if (hasChildren) {
    return <StyledTableContainer hasSelectionColumn={Boolean(rowSelection)}>
      <Component
        expandable={{
          expandIconColumnIndex: 0,
          expandIcon: ({ expandable, expanded, onExpand, record }) => (
            <StyledIconContainer
              className='kl-components-expandable-icon'
            >
              {
                expandable
                  ? <StyledIcon
                    arraystate={expanded ? 'down' : 'right'}
                    size='micro'
                    name={expanded ? 'Down' : 'Right' }
                    onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) => onExpand(record, e)} />
                  : null
              }
            </StyledIconContainer>
          )
        }}
        { ...props } />
    </StyledTableContainer>
  }

  return <Component { ...props } />
}
