import React from 'react'
import { Table } from '..'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: #F6F6F6;
  padding: 50px;
`

const columns = [{
  title: 'table.column.name',
  dataIndex: 'name',
  width: 100
}, {
  title: 'Inner Table',
  key: 'action',
  dataIndex: 'description',
  render: () => <Table
    pagination={false}
    rowSelection={{}}
    dataSource={anotherDataSource}
    columns={anotherColumns} />,
  width: 102
}]

type row = { name: string, description: string }

const data: row[] = [{
  name: 'Value',
  description: 'Value'
}]

const anotherColumns = [{
  title: 'table.column.name',
  dataIndex: 'name',
  width: 300
}, {
  title: 'table.column2.name',
  dataIndex: 'description',
  width: 200
}]

const anotherData: row[] = [{
  name: 'Inner data',
  description: 'Inner data'
}]

const anotherRows: row[] = []
const anotherDataSource = anotherRows
  .concat(...anotherData)
  .map((item, index) => ({
    name: item.name + ' ' + (index + 1),
    description: item.description,
    key: index
  }))

const rows: row[] = []
const generatedRows = Array.from({ length: 2 }).map(() => data)
const dataSource = rows
  .concat(...generatedRows)
  .map((item, index) => ({
    name: item.name + ' ' + (index + 1),
    description: item.description,
    key: index
  }))

export const CellWithTable = () => {
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
