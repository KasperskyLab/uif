import React, { useState } from 'react'
import { text } from '@storybook/addon-knobs'
import { Table } from '..'
import styled from 'styled-components'
import { ITableProps } from '../types'

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

const PAGE_SIZE = 20
const createRows = (startIndex = 0) => {
  return ([] as Record<string, unknown>[])
    .concat(
      ...Array.from({ length: PAGE_SIZE })
        .map((_, index) => ({
          key: startIndex + index,
          name: `Value ${startIndex + index + 1}`,
          description: `Description ${startIndex + index + 1}`
        }))
    )
}
const rows = createRows()

export const InfiniteScroll = () => {
  const [errorHappened, setErrorHappened] = useState(false)
  return (
    <Wrapper>
      <Table
        pagination={{
          infiniteScrollPageGetter: async page => {
            await new Promise(resolve => setTimeout(resolve, 500))
            if (page === 2 && !errorHappened) {
              setErrorHappened(true)
              throw new Error('Infinite scroll error')
            }

            return page > 4
              ? null
              : createRows(page * PAGE_SIZE)
          }
        } as ITableProps['pagination']}
        rowSelection={{}}
        dataSource={rows}
        columns={columns}
        infiniteScrollEndTableText={text('End table text', '')}
        infiniteScrollErrorText={text('Error text', '')}
        infiniteScrollRetryText={text('Retry text', '')}
      />
    </Wrapper>
  )
}
