import React, { useState } from 'react'

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

const createRows = (item: Record<string, unknown>, count: number) => {
  return ([] as Record<string, unknown>[])
    .concat(
      ...Array.from({ length: count })
        .map((_, index) => ({
          ...item,
          key: index
        }))
    )
}

export const PageLoading = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const [loading, setLoading] = useState(false)
  const [rows, setRows] = useState(createRows({
    name: 'Value (page 1)',
    description: 'Description (page 1)'
  }, 10))
  return (
    <Wrapper>
      <Table
        loading={loading}
        pagination={{
          current: currentPage,
          pageSize,
          total: 200,
          onChange: async (page, pageSize) => {
            setLoading(true)
            await new Promise(resolve => setTimeout(resolve, 1500))
            setRows(createRows({
              name: `Value (page ${page})`,
              description: `Description (page ${page})`
            }, pageSize as number))
            setCurrentPage(page)
            setLoading(false)
          },
          onShowSizeChange: async (page, pageSize) => {
            setLoading(true)
            await new Promise(resolve => setTimeout(resolve, 1500))
            setRows(createRows({
              name: `Value (page ${page})`,
              description: `Description (page ${page})`
            }, pageSize as number))
            setCurrentPage(page)
            setPageSize(pageSize)
            setLoading(false)
          }
        }}
        rowSelection={{}}
        dataSource={rows}
        columns={columns} />
    </Wrapper>
  )
}
