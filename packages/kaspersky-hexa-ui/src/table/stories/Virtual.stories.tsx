import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { SectionMessage } from '@src/section-message'
import { Text } from '@src/typography'
import { Meta } from '@storybook/react'
import React, { Key, useState } from 'react'
import styled from 'styled-components'

import { Table } from '../'
import MetaData from '../__meta__/meta.json'
import { ITableProps } from '../types'

import {
  BasicRowType,
  basicTwoColumns,
  Story,
  Wrapper
} from './_commonConstants'

const meta: Meta<ITableProps> = {
  title: 'Hexa UI Components/Table/Virtual',
  component: Table,
  parameters: {
    badges: [badges.notProdReady],
    docs: {
      page: withMeta(MetaData)
    }
  }
}
export default meta

type row = BasicRowType & { index?: number}

const columns = [
  {
    ...basicTwoColumns[0],
    isSortable: true,
    width: 200
  },
  {
    ...basicTwoColumns[1],
    isSortable: true,
    allowMultipleFilters: true,
    filters: [
      {
        name: 'Even',
        filter: (element: row): boolean => {
          const numbers = element.description.match(/\d+/gi)
          if (numbers) return Number(numbers[0]) % 2 === 0
          return false
        }
      },
      {
        name: 'Initial False',
        filter: (): boolean => false
      },
      {
        name: 'Greater than 20',
        filter: (element: row): boolean => {
          const numbers = element.description.match(/\d+/gi)
          if (numbers) return Number(numbers[0]) > 20
          return false
        }
      }
    ],
    width: 200
  },
  {
    title: 'table.column3.name',
    key: 'index',
    dataIndex: 'index',
    filters: [
      {
        name: 'Even',
        filter: (element: row): boolean => {
          return Number(element.index) % 2 === 0
        }
      },
      {
        name: 'Odd',
        filter: (element: row): boolean => {
          return Number(element.index) % 2 !== 0
        }
      }
    ],
    width: 200
  }
] as ITableProps['columns']

const data = Array.from({ length: 2000 }, (_, key) => ({
  name: `Name-${key}`,
  index: `Index-${key}`,
  description: `Description-${key}`,
  key
}))

const StyledText = styled(Text)`
  display: inline-block;
  padding-top: 8px;
`

export const Virtual: Story = {
  render: (args: ITableProps) => {
    const [selected, setSelected] = useState<Key[]>([])

    return <Wrapper>
      <SectionMessage
        mode="warning"
        title="This is experimental feature, not ready to use in production"
        closable={false}
      />
      <StyledText>Selected: {selected.length}</StyledText>
      <Table
        {...args}
        rowSelection={{
          selectedRowKeys: selected,
          onChange: setSelected
        }}
        columns={columns}
        dataSource={data}
        __EXPERIMENTAL__VIRTUAL={true}
        scroll={{ y: 600 }}
      />
    </Wrapper>
  }
}
