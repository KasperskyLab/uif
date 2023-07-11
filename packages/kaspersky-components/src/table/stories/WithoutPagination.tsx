import React from 'react'
import { Table } from '..'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: #F6F6F6;
  padding: 50px;
`

const columns = [{
  title: 'table.column.name',
  dataIndex: 'name'
}, {
  title: 'table.column2.name',
  dataIndex: 'description'
}]

const rows = ([] as Record<string, unknown>[])
  .concat(
    ...Array.from({ length: 100 })
      .map((_, index) => ({
        key: index,
        name: 'Value',
        description: 'Description'
      }))
  )

export const WithoutPagination = () => {
  return (
    <Wrapper>
      <Table
        pagination={false}
        rowSelection={{}}
        dataSource={rows}
        columns={columns} />
    </Wrapper>
  )
}
