import React, { FC } from 'react'
import styled from 'styled-components'

import { Table } from '../../../table'

import { columns } from './columns'
import { ExpandIcon } from './components'

const StyledTable = styled(Table)`
  width: 500px
`

export const CasbTable: FC<any> = ({ model }) => {
  return <StyledTable pagination={false} expandIcon={ExpandIcon} columns={columns} dataSource={model} />
}
