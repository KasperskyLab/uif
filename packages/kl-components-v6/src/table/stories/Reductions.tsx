import React from 'react'
import { Table } from '..'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: #F6F6F6;
  padding: 50px;
`

const columns = [{
  title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip',
  dataIndex: 'name',
  width: 300,
  ellipsis: true
}, {
  title: 'Short',
  dataIndex: 'description',
  width: 200,
  ellipsis: true
}]

type row = { name: string, description: string }

const data: row[] = [{
  name: 'Value',
  description: 'Value'
}, {
  name: 'Value',
  description: 'Value'
}, {
  name: 'Value',
  description: 'Value'
}]

const rows: row[] = []
const generatedRows = Array.from({ length: 60 }).map(() => data)
const dataSource = rows
  .concat(...generatedRows)
  .map((item, index) => ({
    name: item.name + ' ' + (index + 1),
    description: item.description + ' ' + (index + 1),
    key: index
  }))

export const Reductions = () => {
  return (
    <Wrapper>
      <Table
        pagination={{ pageSize: 20 }}
        rowSelection={{}}
        dataSource={dataSource}
        columns={columns} />
    </Wrapper>
  )
}
