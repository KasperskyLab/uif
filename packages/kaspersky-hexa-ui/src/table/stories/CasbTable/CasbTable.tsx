import React, { FC } from 'react'

import { Table } from '../../../table'

import { columns } from './columns'
import { ExpandIcon } from './components'

export const CasbTable: FC<any> = ({ model }) =>
  <Table expandIcon={ExpandIcon} columns={columns} dataSource={model}/>
