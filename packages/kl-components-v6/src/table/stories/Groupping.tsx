import React from 'react'
import styled from 'styled-components'
import { Table } from '..'

const Wrapper = styled.div`
  background-color: #F6F6F6;
  padding: 50px;
`

const columns = [{
  title: 'Name',
  dataIndex: 'name'
}, {
  title: 'Descriptopn',
  dataIndex: 'description'
}]

const data = [{
  name: 'Name 1',
  description: 'Descriptopn! 1'
},
{
  name: 'Name 1',
  description: 'Descriptopn! 2'
},
{
  name: 'Name 1',
  description: 'Descriptopn! 3'
},
{
  name: 'Name 3',
  description: 'Descriptopn! 4'
},
{
  name: 'Name 3',
  description: 'Descriptopn 5'
},
{
  name: 'Name 4',
  description: 'Descriptopn 6'
},
{
  name: 'Name 2',
  description: 'Descriptopn 7'
}]

export const Groupping = () => {
  return (
    <Wrapper>
      <Table
        rowSelection={{}}
        groupBy='name'
        dataSource={data.map((item, index) => ({
          ...item,
          key: index
        }))}
        columns={columns}
      />
    </Wrapper>
  )
}
