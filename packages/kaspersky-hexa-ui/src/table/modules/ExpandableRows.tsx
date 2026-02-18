import { ActionButton } from '@src/action-button'
import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'

import { ArrowDownSolid, ArrowRightSolid } from '@kaspersky/hexa-ui-icons/8'

import { ITableProps, TableRecord } from '../../table'

import { TableModule } from './index'

const StyledIconContainer = styled.span`
  display: inline-block;
  margin-right: 2px;
  cursor: pointer;
  text-align: center;
`

export const StyledTableContainer = styled.div<{ hasSelectionColumn: boolean, $previewTableWidth?: number }>`
  .table-height-full & {
    display: flex;
    flex: 1;
  }
  .ant-table .ant-table-tbody > tr > td:first-child {
    padding-left: 12px;
  }

  &:has(.row-dragging-container:not(:empty)) .table-draggable {
    user-select: none;

    .drag-handle {
      visibility: hidden;
    }
  }

  .ant-table-placeholder > .ant-table-cell > .hexa-ui-placeholder {
    ${({ $previewTableWidth }) => $previewTableWidth && $previewTableWidth > 0 && `width: ${$previewTableWidth}px;`}
    position: sticky;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    min-height: 200px;
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
          direction: rtl;
          
          .ant-checkbox-wrapper, .ant-radio-wrapper {
            direction: ltr;
          }
          .kl-components-expandable-icon {
            direction: ltr;
            margin-right: -14px;
            margin-left: 6px;
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

export function checkExpandableRows (rows: TableRecord[]) {
  return rows.some(({ children }) => Array.isArray(children))
}

export const ExpandableRows: TableModule = Component => function ExpandableRowsModule (props) {
  const { dataSource: rows = [], rowSelection, expandable = {} } = props
  const [hasChildren, setHasChildren] = useState(checkExpandableRows(rows))
  useEffect(() => {
    const { dataSource: rows = [] } = props
    setHasChildren(checkExpandableRows(rows))
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
