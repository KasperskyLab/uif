import { ToolbarItemKey } from '@src/toolbar/types'
import React from 'react'
import styled from 'styled-components'
import { Table } from '..'
import { ExpandableText } from '../../expandable-text'

const Wrapper = styled.div`
  background-color: #F6F6F6;
  padding: 50px;
`
const columns = [{
  title: 'table.column.name',
  dataIndex: 'hidden',
  width: 102,
  show: false
}, {
  title: 'Type',
  dataIndex: 'type',
  width: 102
}, {
  title: 'Note',
  dataIndex: 'note',
  width: 102,
  render: () => {
    return <ExpandableText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur.
    </ExpandableText>
  }
}, {
  title: 'Action',
  key: 'action',
  dataIndex: 'action',
  render: () => <a>Delete</a>,
  width: 102
}]

type row = {
  key: number,
  amount: number,
  type: 'income' | 'transfer',
  date: string,
  note: 'transfer',
  hidden: 'hidden'
}

const data: row[] = [{
  key: 0,
  date: '2018-02-11',
  amount: 120,
  type: 'income',
  note: 'transfer',
  hidden: 'hidden'
}, {
  key: 1,
  date: '2018-03-11',
  amount: 243,
  type: 'income',
  note: 'transfer',
  hidden: 'hidden'
}, {
  key: 2,
  date: '2018-04-11',
  amount: 2,
  type: 'income',
  note: 'transfer',
  hidden: 'hidden'
}, {
  key: 4,
  date: '2018-02-11',
  amount: 120,
  type: 'income',
  note: 'transfer',
  hidden: 'hidden'
}, {
  key: 5,
  date: '2018-03-11',
  amount: 243,
  type: 'income',
  note: 'transfer',
  hidden: 'hidden'
}, {
  key: 6,
  date: '2018-04-11',
  amount: 2,
  type: 'income',
  note: 'transfer',
  hidden: 'hidden'
}, {
  key: 7,
  date: '2018-02-11',
  amount: 120,
  type: 'income',
  note: 'transfer',
  hidden: 'hidden'
}, {
  key: 8,
  date: '2018-03-11',
  amount: 243,
  type: 'income',
  note: 'transfer',
  hidden: 'hidden'
}, {
  key: 9,
  date: '2018-04-11',
  amount: 2,
  type: 'income',
  note: 'transfer',
  hidden: 'hidden'
}]

export const ColumnsSelection = () => {
  const rows: row[] = []
  const generatedRows = Array.from({ length: 40 }).map(() => data)
  const generatedData = rows.concat(...generatedRows)
    .map((item: any, index: number) => ({
      ...item,
      key: index,
      note: `${index} note ${item.note}`
    }))

  return (
    <Wrapper>
      <Table
        toolbar={{
          showGrouping: true,
          showColumns: true,
          sticky: 0,
          left: [{
            type: ToolbarItemKey.CHILDREN,
            key: 'toolbar',
            children: <>
            <h1>Toolbar</h1>
          </>
          }]
        }}
        stickyHeader={48}
        rowSelection={{}}
        maxColumnsForAutoResizing={2}
        pagination={{ pageSize: 20, simple: true }}
        dataSource={generatedData}
        columns={columns} />
    </Wrapper>
  )
}
