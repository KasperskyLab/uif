import { ActionButton } from '@src/action-button'
import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'

import { ArrowDownSolid, ArrowRightSolid } from '@kaspersky/icons/8'

import { ITableProps, TableRecord } from '../../table'

import { TableModule } from './index'

const StyledIconContainer = styled.span`
  display: inline-block;
  margin-left: 6px;
  cursor: pointer;
  text-align: center;
`

export const StyledTableContainer = styled.div<{ hasSelectionColumn: boolean }>`
  .ant-table .ant-table-tbody > tr > td:first-child {
    padding-left: 12px;
  }

  ${({ hasSelectionColumn }) => {
    if (hasSelectionColumn) {
      return css`
      .ant-table-row-indent {
        padding-left: 0 !important;
      }

      .ant-table-selection-column {
        position: relative;

        &.ant-table-cell-with-append:has(.table-row-has-expandable) {
          display: flex;
          
          .ant-checkbox-wrapper, .ant-radio-wrapper {
            order: 0;
            margin-left: 4px;
          }
          .ant-table-row-indent {
            order: 1;
          }
          .kl-components-expandable-icon {
            order: 2;
          }
        }
      }

      ${Array
        .from({ length: 100 })
        .map((_, index) => `
          .ant-table-row-level-${index} td:nth-child(1) > .kl-components-expandable-icon {
            position: relative;
            transform: translateX(${index * 16}px);
            z-index: 1;
          }

          .ant-table-row-level-${index} td:nth-child(2) {
            padding-left: ${8 + index * 16}px !important;
          }
        `)
      }
      `
    }
  }}
`

export const defaultExpandConfig: ITableProps['expandable'] = {
  expandIconColumnIndex: 0,
  expandIcon: ({ expandable, expanded, onExpand, record }) => (
    expandable
      ? <StyledIconContainer
          className="kl-components-expandable-icon icon"
          onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) => onExpand(record, e)}
        >
          <ActionButton
            interactive={false}
            size="small"
            icon={expanded ? <ArrowDownSolid /> : <ArrowRightSolid />}
          />
        </StyledIconContainer>
      : null
  )
}

export function checkRows (rows: TableRecord) {
  return rows.some(({ children }: { children?: TableRecord }) => Array.isArray(children))
}

export const ExpandableRows: TableModule = Component => props => {
  const { dataSource: rows = [], rowSelection, expandable = {} } = props
  const [hasChildren, setHasChildren] = useState(checkRows(rows))
  useEffect(() => {
    const { dataSource: rows = [] } = props
    setHasChildren(checkRows(rows))
  }, [props.dataSource])

  if (hasChildren) {
    return <StyledTableContainer hasSelectionColumn={Boolean(rowSelection)} >
      <Component
        expandable={{
          ...defaultExpandConfig,
          ...expandable
        }}
        { ...props } />
    </StyledTableContainer>
  }

  return <Component { ...props } />
}
