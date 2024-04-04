import React, { FC } from 'react'
import { Table } from '@src/table'
import { ExpandIcon } from './components'
import { columns } from './columns'

export const CasbTable: FC<any> = ({ model }) => {
  return <Table pagination={false} expandIcon={ExpandIcon} columns={columns} dataSource={model} />
}
