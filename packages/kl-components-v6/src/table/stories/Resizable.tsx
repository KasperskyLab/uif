import React from 'react'
import { Table } from '..'
import styled from 'styled-components'
import { ExpandableText } from '../../expandable-text'

const Wrapper = styled.div`
  background-color: #F6F6F6;
  padding: 50px;
`

const columns = [{
  title: 'Type',
  dataIndex: 'type',
  width: 102
},
{
  title: 'Note',
  dataIndex: 'note',
  resizing: { disabled: true },
  width: '30%',
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
  render: () => <a>Delete</a>,
  width: 102
}]

type row = {
  key: number,
  amount: number,
  type: 'income' | 'transfer',
  date: string,
  note: 'transfer'
}

const data: row[] = [{
  key: 0,
  date: '2018-02-11',
  amount: 120,
  type: 'income',
  note: 'transfer'
}, {
  key: 1,
  date: '2018-03-11',
  amount: 243,
  type: 'income',
  note: 'transfer'
}, {
  key: 2,
  date: '2018-04-11',
  amount: 2,
  type: 'income',
  note: 'transfer'
}, {
  key: 4,
  date: '2018-02-11',
  amount: 120,
  type: 'income',
  note: 'transfer'
}, {
  key: 5,
  date: '2018-03-11',
  amount: 243,
  type: 'income',
  note: 'transfer'
}, {
  key: 6,
  date: '2018-04-11',
  amount: 2,
  type: 'income',
  note: 'transfer'
}, {
  key: 7,
  date: '2018-02-11',
  amount: 120,
  type: 'income',
  note: 'transfer'
}, {
  key: 8,
  date: '2018-03-11',
  amount: 243,
  type: 'income',
  note: 'transfer'
}, {
  key: 9,
  date: '2018-04-11',
  amount: 2,
  type: 'income',
  note: 'transfer'
}]

export const Resizable = () => {
  const rows: row[] = []
  const generatedRows = Array.from({ length: 40 }).map(() => data)
  const generatedData = rows.concat(...generatedRows)
    .map((item: row, index: number) => ({
      ...item,
      key: index,
      note: `${index} note ${item.note}`
    }))

  return (
    <Wrapper>
      <Table
        bordered
        resizingMode='last'
        rowSelection={{}}
        pagination={{ pageSize: 20 }}
        dataSource={generatedData}
        columns={columns} />
    </Wrapper>
  )
}

export const ResizableWithScrolling = () => {
  const rows: row[] = []
  const generatedRows = Array.from({ length: 40 }).map(() => data)
  const generatedData = rows.concat(...generatedRows)
    .map((item: row, index: number) => ({
      ...item,
      key: index,
      note: `${index} note ${item.note}`
    }))

  return (
    <Wrapper>
      <Table
        bordered
        stickyHeader={1}
        resizingMode='scroll'
        rowSelection={{}}
        pagination={{ pageSize: 20 }}
        dataSource={generatedData}
        columns={columns.map(c => {
          return { ...c, width: 250, resizing: null }
        })} />
    </Wrapper>
  )
}
