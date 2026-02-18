import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { StoryColumn } from '@sb/StoryComponents'
import { Field } from '@src/field'
import { SegmentedButton } from '@src/segmented-button'
import { Meta, StoryObj } from '@storybook/react-webpack5'
import React, { useState } from 'react'

import { Table, TableRecord } from '..'
import MetaData from '../__meta__/meta.json'
import { generatedData, tableColumns } from '../__mocks__/filtersMockData'
import { ITableProps } from '../types'

import { basicArgTypes } from './_commonConstants'

const meta: Meta<ITableProps> = {
  title: 'Hexa UI Components/Table/Row selection',
  component: Table,
  args: {
    columns: tableColumns,
    dataSource: generatedData
  },
  argTypes: {
    rowSelection: basicArgTypes.rowSelection
  },
  parameters: {
    badges: [badges.stable],
    docs: {
      page: withMeta(MetaData)
    },
    controls: {
      exclude: /(columns|dataSource)/
    }
  }
}
export default meta

type Story = StoryObj<ITableProps>

type RowSelectionType = 'checkbox' | 'radio'

const segmentedButtonItems: { text: RowSelectionType, value: RowSelectionType }[] = [
  { text: 'radio', value: 'radio' },
  { text: 'checkbox', value: 'checkbox' }
]

function ControlledRowSelection (props: ITableProps) {
  const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([])
  const [selectionMode, setSelectionMode] = useState<RowSelectionType[]>(['checkbox'])

  const onSelect = (_: TableRecord, __: boolean, selectedRows: TableRecord[]) => {
    setSelectedRowKeys(selectedRows.map(row => row.key))
  }

  const onSelectAll = (_: boolean, selectedRows: TableRecord[]) => {
    setSelectedRowKeys(selectedRows.map(row => row.key))
  }

  return (
    <StoryColumn>
      <Field label="Selection mode" control={
        <SegmentedButton
          items={segmentedButtonItems}
          type="radio"
          value={selectionMode}
          onChange={value => setSelectionMode(value as RowSelectionType[])}
        />
      }/> 
      <Table
        {...props}
        rowSelection={{
          selectedRowKeys,
          onSelect,
          onSelectAll,
          type: selectionMode[0]
        }}
      />
    </StoryColumn>

  )
}

export const RowSelection: Story = {
  render: ControlledRowSelection.bind({})
}

export const WithDisabledRows: Story = {
  render: ControlledRowSelection.bind({}),
  args: {
    dataSource: generatedData.map((row, index) => (
      index % 5 === 0
        ? { ...row, _disabled: true, _disabledHint: 'Disabled row hint' }
        : row)
    )
  }
}