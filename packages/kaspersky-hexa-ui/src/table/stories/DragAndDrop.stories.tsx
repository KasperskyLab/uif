import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { Meta } from '@storybook/react'
import React, { useState } from 'react'

import { Table } from '..'
import MetaData from '../__meta__/meta.json'
import { ITableProps } from '../types'

import {
  basicArgTypes,
  basicDataSource,
  basicTwoColumns,
  Story,
  Wrapper
} from './_commonConstants'

const meta: Meta<ITableProps> = {
  title: "Hexa UI Components/Table/Drag'n'Drop",
  component: Table,
  args: {
    columns: basicTwoColumns,
    dataSource: basicDataSource
  },
  parameters: {
    badges: [badges.stable],
    docs: {
      page: withMeta(MetaData)
    },
    controls: {
      exclude: ['dataSource', 'columns']
    }
  },
  tags: ['!autodocs']
}
export default meta

export const Draggable: Story = {
  render: (args: ITableProps) => {
    const [dataSourceState, setDataSourceState] = useState(basicDataSource.slice(0, 20))
    return (
      <Wrapper>
        <Table
          {...args}
          dataSource={dataSourceState}
          onDragStart={(...arg) => { console.log(arg) }}
          onDragEnd={(rows: any) => { setDataSourceState(rows) }}
        />
      </Wrapper>
    )
  },
  args: {
    useDragDrop: true
  },
  argTypes: {
    onDragStart: basicArgTypes.onDragStart,
    onDragEnd: basicArgTypes.onDragEnd,
    useDragDrop: basicArgTypes.useDragDrop
  }
}

export const DraggableWithRowSelection: Story = {
  render: (args: ITableProps) => {
    const [dataSourceState, setDataSourceState] = useState(basicDataSource.slice(0, 20))
    const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([])

    const onSelect = (_: any, __: boolean, selectedRows: any[]) => {
      setSelectedRowKeys(selectedRows.map(row => row.key))
    }

    const onSelectAll = (_: boolean, selectedRows: any[]) => {
      setSelectedRowKeys(selectedRows.map(row => row.key))
    }

    return (
      <Wrapper>
        <Table
          {...args}
          dataSource={dataSourceState}
          rowSelection={{
            selectedRowKeys,
            onSelect,
            onSelectAll,
            type: 'checkbox'
          }}
          onDragStart={(...arg) => { console.log('onDragStart', arg) }}
          onDragEnd={(rows: any) => { setDataSourceState(rows) }}
        />
      </Wrapper>
    )
  },
  args: {
    useDragDrop: true
  },
  argTypes: {
    onDragStart: basicArgTypes.onDragStart,
    onDragEnd: basicArgTypes.onDragEnd,
    useDragDrop: basicArgTypes.useDragDrop
  }
}
