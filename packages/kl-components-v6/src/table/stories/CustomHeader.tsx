import React from 'react'
import { Table } from '..'
import { Icon } from '../../icon'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: #F6F6F6;
  padding: 50px;
`

const StyledIconWrapper = styled.div`
  position: relative;
  background-color: #000;
  border-radius: 50%;
  width: 40px;
  height: 40px;

  & > span {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`

const columns = [{
  title: 'table.column.name',
  dataIndex: 'name'
}, {
  title: <StyledIconWrapper><Icon name='NotificationBell' size='medium' color='white' /></StyledIconWrapper>,
  dataIndex: 'description'
}]

const data = [{
  name: 'Value',
  description: 'Ring!'
}, {
  name: 'Value',
  description: 'Ring!',
  className: 'res'
}, {
  name: 'Value',
  description: 'Ring!'
}]

export const CustomHeader = () => {
  return (
    <Wrapper>
      <Table
        dataSource={data.map((item, index) => ({
          ...item,
          key: index
        }))}
        columns={columns}
      />
    </Wrapper>
  )
}
