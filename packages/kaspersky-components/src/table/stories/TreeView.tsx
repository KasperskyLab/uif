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
  width: 300
}, {
  title: 'table.column2.name',
  dataIndex: 'description',
  width: 200
}]

type row = { name: string, description: string, children?: row[] }

const data: row[] = [{
  name: 'John Doe',
  description: 'Nice guy'
}, {
  name: 'Jane Doe',
  description: 'Cool girl'
}, {
  name: 'James Doe',
  description: 'Noble man',
  children: [{
    name: 'Mary Sue',
    description: 'Dubious character',
    children: [{
      name: 'Dirk Gently',
      description: 'Best detective'
    }]
  }, {
    name: 'John Snow',
    description: 'Knows nothing'
  }]
}, {
  name: 'Judy Doe',
  description: 'Great person'
}]

const patchKeys = (data: row[], prefix: number[] = []): row[] => {
  return data.map((item, index) => ({
    ...item,
    ...item.children && { children: patchKeys(item.children, [...prefix, index]) },
    key: [...prefix, index].join(',')
  }))
}

export const TreeView = () => {
  return (
    <Wrapper>
      <Table
        pagination={{ pageSize: 20 }}
        rowSelection={{}}
        dataSource={patchKeys(data)}
        columns={columns} />
    </Wrapper>
  )
}
