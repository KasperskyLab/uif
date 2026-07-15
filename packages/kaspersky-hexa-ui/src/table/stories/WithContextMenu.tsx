import { Notification, openNotification } from '@src/notification'
import { Table, TableRecord } from '@src/table'
import { ToolbarItems } from '@src/toolbar'
import React from 'react'

import {
  Backup,
  Copy,
  Delete,
  PlusM,
  Support,
  Tag,
  Thread
} from '@kaspersky/hexa-ui-icons/16'

import { GetLeftItemsProps } from '../modules/ToolbarIntegration/types'

import { basicArgTypes, basicDataSource, basicTwoColumns, Story } from './_commonConstants'

const dataSource = basicDataSource.map((x, i) => ({
  ...x,
  hasExtraContextMenuAction: i % 3 === 0 ? 'Yes' : ''
}))

const columns = [
  ...basicTwoColumns,
  {
    title: 'Has extra context menu action',
    key: 'hasExtraContextMenuAction',
    dataIndex: 'hasExtraContextMenuAction'
  }
]

function getToolbarItems (
  {
    deselectedRowKeys,
    isSelectedAll,
    selectedRowKeys
  }: GetLeftItemsProps,
  rows?: TableRecord[]
): ToolbarItems[] {
  function onClick (action: string) {
    if (isSelectedAll) {
      let text = `${action} on rows: all`

      if (deselectedRowKeys?.length) {
        text += ` except ${deselectedRowKeys.join(', ')}`
      }

      openNotification.success(text)
    } else if (!selectedRowKeys?.length) {
      openNotification.warning('None of the rows are selected')
    } else {
      openNotification.success(`${action} on rows: ${selectedRowKeys.join(', ')}`)
    }
  }

  const isContextMenu = !!rows
  const areRowsSelected = isSelectedAll || !!selectedRowKeys?.length
  const deleteButton = {
    type: 'button',
    key: 'delete',
    label: 'Delete',
    disabled: !areRowsSelected,
    iconBefore: <Delete />,
    onClick: () => onClick('Delete'),
    testId: 'delete'
  }

  return [
    {
      type: 'button',
      key: 'create',
      label: 'Create',
      disabled: true,
      iconBefore: <PlusM />,
      onClick: () => onClick('Create'),
      testId: 'create'
    },
    {
      type: 'divider',
      key: 'divider-1'
    },
    {
      type: 'button',
      key: 'duplicate',
      iconBefore: <Copy />,
      label: 'Duplicate',
      onClick: () => onClick('Duplicate'),
      testId: 'duplicate'
    },
    !isContextMenu && deleteButton,
    {
      type: 'dropdown',
      key: 'tags',
      iconBefore: <Tag />,
      label: 'Tags',
      testId: 'tags',
      overlay: [
        {
          children: 'Action 1',
          onClick: () => onClick('Action 1')
        },
        {
          children: 'Action 2',
          onClick: () => onClick('Action 2')
        }
      ]
    },
    {
      type: 'button',
      key: 'dependencies',
      iconBefore: <Thread />,
      label: 'Show dependencies',
      onClick: () => onClick('Show dependencies'),
      testId: 'dependencies'
    },
    {
      type: 'button',
      key: 'history',
      iconBefore: <Backup />,
      label: 'View versions history',
      onClick: () => onClick('View versions history'),
      testId: 'history'
    },
    isContextMenu && !isSelectedAll && rows.every(x => x.hasExtraContextMenuAction === 'Yes') && {
      type: 'button',
      key: 'extra-action',
      iconBefore: <Support />,
      label: 'Extra action',
      onClick: () => onClick('Extra action'),
      testId: 'extra-action'
    },
    isContextMenu && {
      type: 'divider',
      key: 'divider-2'
    },
    isContextMenu && deleteButton
  ].filter(Boolean) as ToolbarItems[]
}

export const WithContextMenu: Story = {
  render: args => {
    const [selectedRows, setSelectedRows] = React.useState<{
      keys: React.Key[],
      rows: TableRecord[]
    }>({ keys: [], rows: [] })

    return (
      <Table
        {...args}
        contextMenu={(rows, params) => getToolbarItems(params, rows)}
        rowSelection={{
          selectedRowKeys: selectedRows.keys,
          onChange: (keys, rows) => setSelectedRows({ keys, rows })
        }}
        toolbar={{
          autoDropdown: true,
          getLeftItems: getToolbarItems,
          showSearch: true
        }}
      />
    )
  },
  args: {
    columns,
    dataSource
  },
  argTypes: {
    contextMenu: basicArgTypes.contextMenu,
    toolbar: basicArgTypes.toolbar
  },
  decorators: [
    (Story, context) => (
      <div style={{ width: '100%' }}>
        <Notification />
        <Story {...context} />
      </div>
    )
  ]
}
