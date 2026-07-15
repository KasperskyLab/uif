import { TextReducer } from '@helpers/components/TextReducer'
import { ActionButton } from '@src/action-button'
import { Space } from '@src/space'
import { ITableProps, TableColumn, TableRecord } from '@src/table'
import { Text } from '@src/typography'
import React from 'react'

import { ArrowDownSolid, ArrowRightSolid } from '@kaspersky/hexa-ui-icons/8'

export const groupTitleRenderer = <T extends TableRecord = TableRecord>(
  expandedRowKeys: readonly React.Key[],
  expandableGrouping: boolean,
  columnIndex: number,
  columnsCount: number,
  predefinedRender: TableColumn<T>['render'],
  groupTitleRender: ITableProps<T>['groupTitleRender'],
  onGroupToggle?: (key: string) => void
): TableColumn<T>['render'] => (value, row, index) => {
  const columnData = {
    children: predefinedRender?.(value, row, index) ?? value,
    props: { className: '', colSpan: 1 }
  }

  if (row.isGroupTitle) {
    const titleText = row.getGroupTitleText()
    const title = groupTitleRender ? groupTitleRender(titleText) : titleText

    const icon = row.groupTitleIconRender?.(titleText, row)

    columnData.props.colSpan = columnIndex === 0 ? columnsCount : 0
    columnData.props.className = 'group-title'
    columnData.children = row.groupTitleRender
      ? row.groupTitleRender(titleText, row)
      : (
          <Space
            className="group-title-item"
            gap="dependent"
            wrap="nowrap"
            onClick={e => {
              e.stopPropagation()
              if ((e.target as HTMLElement).closest('.kl-components-expandable-icon')) {
                return
              }
              onGroupToggle?.(row.key)
            }}
          >
            {expandableGrouping && (
              <ActionButton
                interactive={false}
                size="small"
                icon={expandedRowKeys.includes(row?.key) ? <ArrowDownSolid /> : <ArrowRightSolid />}
              />
            )}
            {icon && <Space>{icon}</Space>}
            <TextReducer tooltip={title} stretch={false}>
              <Text type="BTR3">{title}</Text>
            </TextReducer>
            {row.count && <Text color="secondary">{row.count}</Text>}
          </Space>
        )
  }

  return columnData
}
