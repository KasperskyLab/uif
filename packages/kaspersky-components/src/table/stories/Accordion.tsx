import React from 'react'
import styled from 'styled-components'
import { Table } from '..'
import { Text } from '../../typography'

const Wrapper = styled.div`
  background-color: #F6F6F6;
  padding: 50px;
`

const columns = [{
  title: 'Name',
  dataIndex: 'name'
},
{
  title: 'Description',
  dataIndex: 'description'
}]

const data = [{
  name: 'Value1',
  description: 'Ring!'
},
{
  name: 'Value2',
  description: 'Ring!',
  accordeon: {
    title: <Text type='BTR4'>Accordion header</Text>,
    children: <b>Accordion content</b>
  }
},
{
  name: 'Value2',
  description: 'Ring!',
  accordeon: {
    title: <Text type='BTR4'>Accordion2 header</Text>,
    children: <b>Accordion2 content</b>
  }
}]

export const Accordion = () => {
  return (
    <Wrapper>
      <Table
        useAccordion
        dataSource={data.map((item, index) => ({
          ...item,
          key: index
        }))}
        columns={columns}
      />
    </Wrapper>
  )
}
