import { ConfigProvider } from '@design-system/context'
import { ThemeKey } from '@design-system/types'
import { ITableProps, Table as BaseTable } from '@src/table'
import React, { FC } from 'react'

const columns = [{
  title: 'table.column.name',
  key: 'name',
  dataIndex: 'name',
  width: 300
},
{
  title: 'table.column2.name',
  key: 'description',
  dataIndex: 'description',
  width: 200
}]

const rows = [
  {
    name: 'Value 1',
    description: 'Description 1',
    key: 1
  },
  {
    name: 'Value 2',
    description: 'Description 2',
    key: 2
  }
]

export const rowsCount = rows.length

export const Table: FC<ITableProps> = (props) => {
  return <ConfigProvider theme={ThemeKey.Light} locale="en-us">
    <BaseTable columns={columns} dataSource={rows} {...props} />
  </ConfigProvider>
}
