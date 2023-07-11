import React from 'react'
import { boolean, select } from '@storybook/addon-knobs'
import { Table } from '..'
import styled from 'styled-components'

import { Loader } from '../../loader'

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

export const CustomLoader: React.FC = () => {
  const rows: row[] = []
  const generatedRows = Array.from({ length: 20 }).map(() => data)
  const dataSource = rows.concat(...generatedRows)
    .map((item, index) => ({
      name: item.name + ' ' + (index + 1),
      description: item.description + ' ' + (index + 1),
      key: index
    }))
  return (
    <Wrapper>
      <Table
        pagination={{ pageSize: 20 }}
        rowSelection={{}}
        dataSource={dataSource}
        columns={columns}
        loading={boolean('Loading', true)}
        loaderProps={{
          indicator: <Loader />,
          size: select('loaderSize', ['small', 'default', 'large'], 'large')
        }}
      />
    </Wrapper>
  )
}
