import React from 'react'
import { number, select } from '@storybook/addon-knobs'
import { Table } from '..'
import styled from 'styled-components'

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

export const Basic = () => {
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

export const BasicControllable = () => {
  return (
    <Wrapper>
      <Table
        pagination={{
          current: number('Current page', 2, { min: 1, max: 10, step: 1 }),
          pageSize: select('Page size', [10, 20, 50, 100], 10)
        }}
        rowSelection={{}}
        dataSource={dataSource}
        columns={columns} />
    </Wrapper>
  )
}
