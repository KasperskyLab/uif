import React from 'react'
import styled from 'styled-components'
import { Table } from '..'
import { Button } from '../../button'
import { Link } from '../../link'
import { Toolbar } from '../../toolbar'
import { ToolbarItemKey, ToolbarItems } from '../../toolbar/types'
import { Text } from '../../typography'

const Wrapper = styled.div`
  background-color: #F6F6F6;
  padding: 50px;
`

const columns = [{
  title: 'table.column.name',
  dataIndex: 'name',
  width: 300
}, {
  title: 'table.column2.name',
  dataIndex: 'description',
  width: 200
}]

type Row = { name: string, description: string }

const data: Row[] = [{
  name: 'Value',
  description: 'Value'
}, {
  name: 'Value',
  description: 'Value'
}, {
  name: 'Value',
  description: 'Value'
}]

export const StickyHeader = () => {
  const rows: Row[] = []
  const generatedRows = Array.from({ length: 50 }).map(() => data)
  const dataSource = rows.concat(...generatedRows)
    .map((item, index) => ({
      name: item.name + ' ' + (index + 1),
      description: item.description + ' ' + (index + 1),
      key: index
    }))
  return (
    <Wrapper>
      <Table
        pagination={{ pageSize: 200 }}
        stickyHeader={0}
        dataSource={dataSource}
        columns={columns} />
    </Wrapper>
  )
}

const items = [
  {
    children: (
      <Link target="_blank" href="#">
        1st menu item
      </Link>
    )
  },
  {
    children: <Button>2nd menu item</Button>
  },
  {
    children: <Text type="BTR3">3rd menu item</Text>,
    disabled: true
  }
]

const itemsLeft: ToolbarItems[] = [
  {
    type: ToolbarItemKey.BUTTON,
    key: '1',
    label: 'Tool 1',
    onClick: () => console.log('Tool 1')
  },
  {
    type: ToolbarItemKey.BUTTON,
    key: '2',
    label: 'Tool 2',
    onClick: () => console.log('Tool 2')
  },
  {
    type: ToolbarItemKey.BUTTON,
    key: '3',
    label: 'Tool 3',
    onClick: () => console.log('Tool 3')
  },
  {
    type: ToolbarItemKey.DROPDOWN,
    key: '4',
    label: 'Tool 4',
    overlay: items,
    disabled: true
  },
  {
    type: ToolbarItemKey.BUTTON,
    key: '5',
    label: 'Tool 5',
    onClick: () => console.log('Tool 5')
  },
  {
    type: ToolbarItemKey.BUTTON,
    key: '6',
    label: 'Tool 6',
    onClick: () => console.log('Tool 6')
  },
  {
    type: ToolbarItemKey.CHILDREN,
    key: '7',
    children: 'text'
  },
  {
    type: ToolbarItemKey.CHILDREN,
    key: '8',
    children: <Link href="#">Link</Link>
  }
]

export const StickyHeaderWithToolbar = () => {
  const rows: Row[] = []
  const generatedRows = Array.from({ length: 50 }).map(() => data)
  const dataSource = rows.concat(...generatedRows)
    .map((item, index) => ({
      name: item.name + ' ' + (index + 1),
      description: item.description + ' ' + (index + 1),
      key: index
    }))
  return (
    <Wrapper>
      <Toolbar
        componentId='table-toolbar'
        sticky={0}
        left={itemsLeft.slice(0, 4)}
      />
      <Table
        pagination={{ pageSize: 200 }}
        stickyHeader={48}
        dataSource={dataSource}
        columns={columns} />
    </Wrapper>
  )
}
