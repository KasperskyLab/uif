import React from 'react'
import { Table } from '..'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: #F6F6F6;
  padding: 50px;
`

const ActionCell = styled.a`
  visibility: hidden;
  opacity: 0;
  transition: 0.5s;
  .row:hover & {
    visibility: visible;
    opacity: 1;
  }
`

const columns = [{
  title: 'table.column.name',
  dataIndex: 'name',
  width: 300
}, {
  title: 'table.column2.name',
  dataIndex: 'description',
  width: 200
}, {
  title: 'table.column3.name',
  dataIndex: 'actions',
  render: (text: string) => {
    return <ActionCell>{text}</ActionCell>
  }
}]

type row = { name: string, description: string, actions: string }

const data: row[] = [{
  name: 'Value',
  description: 'Value',
  actions: 'Delete'
}]

export const OnHoverContent = () => {
  const rows: row[] = []
  const generatedRows = Array.from({ length: 3 }).map(() => data)
  const dataSource = rows.concat(...generatedRows)
    .map((item, index) => ({
      name: item.name + ' ' + (index + 1),
      description: item.description + ' ' + (index + 1),
      actions: item.actions,
      key: index
    }))
  return (
    <Wrapper>
      <Table
        rowSelection={{}}
        rowClassName='row'
        dataSource={dataSource}
        columns={columns} />
    </Wrapper>
  )
}
