import React, { useState } from 'react'
import { Table } from '..'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: #F6F6F6;
  padding: 50px;
`

const columns = [
  {
    title: 'table.column.name',
    dataIndex: 'name',
    width: 100
  }, {
    title: 'table.column2.name',
    dataIndex: 'description',
    width: 100
  }, {
    title: 'table.column3.name',
    dataIndex: 'description',
    width: 100
  }
]

type row = { name: string, description: string, age: string }

const data: row[] = [
  {
    name: 'Value',
    description: 'Value',
    age: 'Value'
  }, {
    name: 'Value',
    description: 'Value',
    age: 'Value'
  }, {
    name: 'Value',
    description: 'Value',
    age: 'Value'
  }
]

const initialRows: row[] = []
const generatedRows = Array.from({ length: 10 }).map(() => data)
const dataSource = initialRows
  .concat(...generatedRows)
  .map((item, index) => ({
    name: item.name + ' ' + (index + 1),
    description: item.description + ' ' + (index + 1),
    key: index
  }))

export const Draggable = () => {
  const [dataSourceState, setDataSourceState] = useState(dataSource)
  const handleDragEnd = (rows: any[]) => {
    setDataSourceState(rows)
  }
  return (
    <Wrapper>
      <Table
        data-testid="draggable-table-test-id"
        useDragDrop
        pagination={{ pageSize: 20 }}
        dataSource={dataSourceState}
        columns={columns}
        onDragEnd={handleDragEnd}
        rowSelection={{}}
      />
    </Wrapper>
  )
}
