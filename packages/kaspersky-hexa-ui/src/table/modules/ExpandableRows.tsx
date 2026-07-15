import { ActionButton } from '@src/action-button'
import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'

import { ArrowDownSolid, ArrowRightSolid } from '@kaspersky/hexa-ui-icons/8'

import { ITableProps, TableRecord } from '../../table'
import { checkExpandableRows } from '../helpers/common'

import { TableComponent } from './index'

const StyledIconContainer = styled.span`
  display: inline-block;
  margin-right: 4px;
  cursor: pointer;
  text-align: center;
`

type RowClassName = 'group-row' | 'group-row-w-space'

const getPaddingConfig = (hasRowSelection: boolean) =>
  hasRowSelection
    ? {
        row: {
          icon: 0,
          text: 8
        },
        'group-row': {
          icon: 24,
          text: 32
        },
        'group-row-w-space': {
          icon: 32,
          text: 40
        }
      }
    : {
        row: {
          icon: 12
        },
        'group-row-w-space': {
          icon: 20
        }
      }

const getIndentCss = ({
  index,
  hasSelectionColumn,
  rowClassName
}: {
  index: number,
  hasSelectionColumn: boolean,
  rowClassName?: RowClassName
}) => {
  const selector = `.ant-table-row-level-${index}${rowClassName ? `.${rowClassName}` : ''}`
  const SPACER = 16

  const levelIndent = index * SPACER

  const paddingConfig = getPaddingConfig(hasSelectionColumn)
  const className = rowClassName ?? 'row'

  return hasSelectionColumn
    ? `
        ${selector} {
          td:nth-child(1) > .kl-components-expandable-icon {
            transform: translateX(${paddingConfig[className]!.icon + levelIndent}px) !important;
          }
          td:nth-child(2) {
            padding-left: ${paddingConfig[className]!.text! + levelIndent}px !important;
          }
        }
      `
    : `
       ${selector} .ant-table-cell-with-append {
        padding-left: ${paddingConfig[className]!.icon + levelIndent}px !important;
      }
    `
}

export const StyledTableContainer = styled.div<{
  hasSelectionColumn: boolean,
  $previewTableWidth?: number,
  borderedStyle?: boolean
}>`
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

  ${({ hasSelectionColumn }) => (
    hasSelectionColumn
      ? css`
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
      .from({ length: 15 })
      .map((_, index) => `
          .ant-table-row-level-${index} {
            td:nth-child(1) > .kl-components-expandable-icon {
              position: relative;
              z-index: 1;
            }
          }

          ${getIndentCss({ index, hasSelectionColumn })}
          ${getIndentCss({ index, hasSelectionColumn, rowClassName: 'group-row' })}
          ${getIndentCss({ index, hasSelectionColumn, rowClassName: 'group-row-w-space' })}
        `)}
      `
      : css`
      ${Array
      .from({ length: 15 })
      .map((_, index) => `
          .ant-table-row-indent {
            display: none;
          }

          ${getIndentCss({ index, hasSelectionColumn })}
          ${getIndentCss({ index, hasSelectionColumn, rowClassName: 'group-row-w-space' })}
        `)}
      `
  )}
`

export const defaultExpandConfig: ITableProps['expandable'] = {
  expandIconColumnIndex: 0,
  expandIcon: ({ expandable, expanded, onExpand, record }) => (
    expandable
      ? (
          <StyledIconContainer
            className="kl-components-expandable-icon icon"
            onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) => onExpand(record, e)}
          >
            <ActionButton
              interactive={false}
              testId="hexa-ui-table-row-expand-icon"
              data-expanded={expanded}
              size="small"
              icon={expanded ? <ArrowDownSolid /> : <ArrowRightSolid />}
            />
          </StyledIconContainer>
        )
      : null
  )
}

export const getDefaultExpandConfig = <T extends TableRecord> (): ITableProps<T>['expandable'] => (
  { ...defaultExpandConfig } as ITableProps<T>['expandable']
)

export const ExpandableRows = <T extends TableRecord = TableRecord> (
  Component: TableComponent<T>
): TableComponent<T> => function ExpandableRowsModule (props) {
  const { dataSource: rows = [], rowSelection, expandable = {}, borderedStyle } = props
  const [hasChildren, setHasChildren] = useState(checkExpandableRows(rows))
  useEffect(() => {
    const { dataSource: rows = [] } = props
    setHasChildren(checkExpandableRows(rows))
  }, [props.dataSource])

  if (hasChildren) {
    return (
      <StyledTableContainer hasSelectionColumn={Boolean(rowSelection)} borderedStyle={borderedStyle} >
        <Component
          expandable={{
            ...getDefaultExpandConfig<T>(),
            ...expandable
          }}
          {...props} />
      </StyledTableContainer>
    )
  }

  return <Component {...props} />
}
