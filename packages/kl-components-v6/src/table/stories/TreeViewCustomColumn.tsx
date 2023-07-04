import React from 'react'
import styled from 'styled-components'
import { Table } from '..'

const Wrapper = styled.div`
  background-color: #F6F6F6;
  padding: 50px;
`

const columns = [{
  key: 'col1',
  title: 'col1',
  dataIndex: 'param1',
  width: 300,
  show: true,
  hideColumnAvailable: true,
  isSortable: true
},
{
  key: 'col2',
  title: 'col2',
  dataIndex: 'param2',
  width: 200,
  show: false,
  hideColumnAvailable: true
},
{
  key: 'col3',
  title: 'col3',
  dataIndex: 'param3',
  width: 200,
  show: true,
  hideColumnAvailable: false
}]

type row = { param1: string, param2: string, param3: string, children?: row[] }

const data: row[] = [{
  param1: 'Value11',
  param2: 'Value21',
  param3: 'Value31'
}, {
  param1: 'Value12',
  param2: 'Value22',
  param3: 'Value32'
}, {
  param1: 'Value13',
  param2: 'Value23',
  param3: 'Value33',
  children: [{
    param1: 'Value13(1)',
    param2: 'Value23(1)',
    param3: 'Value33(1)',
    children: [{
      param1: 'Value13(11)',
      param2: 'Value23(21)',
      param3: 'Value33(31)'
    }]
  }, {
    param1: 'Value13(2)',
    param2: 'Value23(2)',
    param3: 'Value33(2)'
  }]
}, {
  param1: 'Value14',
  param2: 'Value24',
  param3: 'Value34'
}]

const patchKeys = (data: row[], prefix: number[] = []): row[] => {
  return data.map((item, index) => ({
    ...item,
    ...item.children && { children: patchKeys(item.children, [...prefix, index]) },
    key: [...prefix, index].join(',')
  }))
}
console.log({ columns })
export const TreeViewCustomColumn = () => {
  return (
    <Wrapper>
      <Table
        toolbar={{
          showColumns: true
        }}
        expandable={{
          expandColumnName: 'param2'
        }}
        pagination={{ pageSize: 20 }}
        rowSelection={{}}
        dataSource={patchKeys(data)}
        columns={columns}
      >
      </Table>
    </Wrapper>
  )
}
