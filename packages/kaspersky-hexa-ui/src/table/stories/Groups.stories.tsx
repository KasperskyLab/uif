import { SegmentedButton } from '@src/segmented-button'
import { Space } from '@src/space'
import { ITableProps, Table, TableColumn, TableRecord } from '@src/table'
import { Toggle } from '@src/toggle'
import { Meta } from '@storybook/react'
import React, { useCallback, useMemo } from 'react'
import { useState } from 'react'

import {
  CollapseAll,
  EngineeringStation,
  ExpandAll,
  IPhone,
  Router,
  Servers
} from '@kaspersky/hexa-ui-icons/16'

import { modifyColumns } from '../test-utils/helpers'

import {
  basicArgTypes,
  basicDataSource,
  basicTwoColumns,
  Story
} from './_commonConstants'

const GROUP_BY = 'name'

const sortGroupsFunction = (a: TableRecord, b: TableRecord) => {
  const getFirstName = (group: TableRecord) => group.children?.[0]?.name ?? ''

  const nameA = getFirstName(a)
  const nameB = getFirstName(b)

  return nameB.localeCompare(nameA)
}

const renderGroupTitleIcon = (title: string, _: TableRecord) => {
  if (title.includes('7') || title.includes('9')) {
    return <Servers />
  } else if (title.includes('3') || title.includes('5')) {
    return <EngineeringStation />
  } else if (title.includes('2') || title.includes('4')) {
    return <Router />
  } else {
    return <IPhone />
  }
}

const genName = (index: number) => {
  if (index % 9 === 0) {
    return `Long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long value ${(index + 1) % 10}`
  } else if (index % 10 === 0) {
    return ''
  } else {
    return `Value ${(index + 1) % 10}`
  }
}

const columns = [
  {
    ...basicTwoColumns[0],
    show: false,
    groupingAvailable: true,
    forceGroupingAvailable: true,
    expandableGrouping: true,
    showGroupsCounter: true,
    sortGroupsFunction,
    renderGroupTitleIcon
  },
  {
    ...basicTwoColumns[1]
  },
  {
    title: 'table.column3.name',
    key: 'index',
    dataIndex: 'index'
  }
]

const dataSource = basicDataSource.slice(0, 50).map((item, index) => ({
  ...item,
  index: item.key,
  name: genName(index)
}))

const treeDataSource = dataSource.map((item, index) => ({
  ...item,
  ...(index % 3 === 0
    ? {
        children: [{
          key: `child-${index + 1}`,
          name: `Child value name ${(index + 1) % 10}`,
          description: `Child value description ${(index + 1) % 10}`,
          children: [{
            key: `grand-child-${index + 1}`,
            name: `Grand child value ${(index + 1) % 10}`,
            description: `Grand child value description ${(index + 1) % 10}`
          }]
        }]
      }
    : {})
}))

const meta: Meta<ITableProps> = {
  title: 'Hexa UI Components/Table/Grouping',
  component: Table,
  args: {
    pagination: {
      pageSize: 20
    },
    dataSource,
    columns,
    groupBy: GROUP_BY,
    borderedStyle: false
  },
  argTypes: {
    groupBy: {
      ...basicArgTypes.groupBy,
      control: false
    },
    groupTitleRender: basicArgTypes.groupTitleRender
  },
  parameters: {
    controls: {
      exclude: /(columns|dataSource|rowSelection|toolbar|pagination)/
    }
  },
  decorators: [
    (Story, context) => <Space gap="grouped"><Story {...context} /></Space>
  ]
}

export default meta

type RowKeys = Readonly<React.Key[]>

const GroupingRender = ({ columns: columnsProps, ...args }: ITableProps) => {
  const [groupExpandedState, setGroupExpandedState] = useState<Map<React.Key, boolean>>(new Map())
  const [allGroups, setAllGroups] = useState<RowKeys>([])
  const [expandableGrouping, setExpandableGrouping] = useState<string>('true')

  const columns: TableColumn[] = useMemo(() => (
    (columnsProps || []).map(column => ({ ...column, expandableGrouping: expandableGrouping === 'true' }))
  ), [expandableGrouping, columnsProps])

  const expandedGroups = useMemo(() => (
    allGroups.filter(key => groupExpandedState.get(key) === true)
  ), [allGroups, groupExpandedState])

  const handleExpandAll = () => {
    setGroupExpandedState(prev => {
      const newState = new Map(prev)
      allGroups.forEach(key => newState.set(key, true))
      return newState
    })
  }

  const handleCollapseAll = () => {
    setGroupExpandedState(prev => {
      const newState = new Map(prev)
      allGroups.forEach(key => newState.set(key, false))
      return newState
    })
  }

  const handleGroupKeysUpdate = useCallback((keys: RowKeys) => {
    setAllGroups(keys)
    setGroupExpandedState(prev => {
      const newState = new Map(prev)
      keys.forEach(key => {
        if (!newState.has(key)) {
          newState.set(key, true)
        }
      })
      return newState
    })
  }, [])

  const handleExpandedGroupsChange = useCallback((keys: RowKeys) => {
    setGroupExpandedState(prev => {
      const newState = new Map(prev)
      allGroups.forEach(key => {
        newState.set(key, keys.includes(key))
      })
      return newState
    })
  }, [allGroups])

  return (
    <>
      <SegmentedButton
        items={[
          {
            text: 'Expandable grouping',
            value: 'true'
          },
          {
            text: 'Default grouping',
            value: 'false'
          }
        ]}
        onChange={(value) => setExpandableGrouping(value[0])}
        value={[expandableGrouping]}
      />
      <Table
        rowSelection={{
          builtInRowSelection: true
        }}
        expandedGroupKeys={expandedGroups}
        onExpandedGroupKeysChange={handleExpandedGroupsChange}
        onGroupKeysUpdate={handleGroupKeysUpdate}
        toolbar={{
          left: [
            {
              type: 'button',
              key: '1',
              disabled: expandedGroups.length === 0,
              iconBefore: <CollapseAll />,
              label: 'Collapse all groups',
              onClick: handleCollapseAll
            },
            {
              type: 'button',
              key: '2',
              disabled: expandedGroups.length === allGroups.length,
              iconBefore: <ExpandAll />,
              label: 'Expand all groups',
              onClick: handleExpandAll
            }
          ]
        }}
        columns={columns}
        {...args}
      />
    </>
  )
}

export const Grouping: Story = {
  render: GroupingRender.bind({})
}

export const GroupingWithTree: Story = {
  render: GroupingRender.bind({}),
  args: {
    dataSource: treeDataSource
  }
}

export const GroupingWithoutRowSelection: Story = {
  render: GroupingRender.bind({}),
  args: {
    dataSource: treeDataSource,
    rowSelection: undefined
  }
}

export const GroupingWithoutIcons: Story = {
  render: GroupingRender.bind({}),
  args: {
    dataSource: treeDataSource,
    columns: [
      {
        ...columns[0],
        renderGroupTitleIcon: undefined
      },
      columns[1],
      columns[2]
    ]
  }
}

export const GroupingNonExpandable: Story = {
  render: GroupingRender.bind({}),
  args: {
    toolbar: undefined,
    columns: [
      {
        ...columns[0],
        expandableGrouping: false
      },
      columns[1],
      columns[2]
    ]
  }
}

export const ControllableGrouping: Story = {
  render: (args) => {
    const [groupBy, setGroupBy] = useState<string | undefined>(GROUP_BY)
    return (
      <>
        <Toggle checked={Boolean(groupBy)} onChange={(value) => { setGroupBy(value ? GROUP_BY : undefined) }}>
          Grouping enabled
        </Toggle>
        <Table
          {...args}
          groupBy={groupBy}
          onGroupByChange={setGroupBy}
        />
      </>
    )
  }
}

export const ResolveGroupingValue: Story = {
  render: GroupingRender.bind({}),
  args: {
    columns: modifyColumns(columns, 'name', {
      resolveGroupingValue: (row, groupBy) => row[groupBy].someInnerField,
      sortGroupsFunction: undefined
    }),
    dataSource: dataSource.map(({ name, ...row }) => ({
      ...row,
      name: { someInnerField: name }
    }))
  }
}
