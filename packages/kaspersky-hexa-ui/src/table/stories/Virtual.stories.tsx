import { withMeta } from '@sb/components/Meta'
import { Button } from '@src/button'
import { Link } from '@src/link'
import { SectionMessage } from '@src/section-message'
import { Space } from '@src/space'
import { Tag } from '@src/tag'
import { P, Text } from '@src/typography'
import { Meta } from '@storybook/react-webpack5'
import React, { Key, useCallback, useState } from 'react'
import styled from 'styled-components'

import { Table, TableRecord, useVT } from '../'
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
  args: {
    useDragDrop: false
  },
  parameters: {
    docs: {
      page: withMeta(MetaData)
    }
  },
  tags: ['!autodocs']
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

const data = Array.from({ length: 200 }, (_, key) => ({
  name: `Name-${key}`,
  index: `Index-${key}`,
  description: `Description-${key}`,
  key
}))

const StyledText = styled(Text)`
  display: inline-block;
  padding-top: 8px;
`

const StyledTag = styled(Tag)`
  margin: 0;
`

const message = (
  <SectionMessage closable={false} mode="info">
    <P>
      @kaspersky/hexa-ui provides <StyledTag>useVT</StyledTag> hook for virtualization. It is <StyledTag>virtualizedtableforantd4</StyledTag> with
      few fixes under the hood. For usage details please 
      reference <Link href="https://github.com/wubostc/virtualized-table-for-antd" target="_blank">virtualizedtableforantd4</Link>.
    </P>
  </SectionMessage>
)

export const Basic: Story = {
  render: (args: ITableProps) => {
    const TABLE_BODY_HEIGHT = 300
    const [selected, setSelected] = useState<Key[]>([])
    const [vt, , vtRef] = useVT(() => ({ scroll: { y: TABLE_BODY_HEIGHT } }), [])
    const [dataSource, setDataSource] = useState<TableRecord[]>(data)

    return <Wrapper>
      {message}
      <StyledText>Selected: {selected.length}</StyledText>
      <Space gap={8}>
        <Button onClick={() => vtRef.current.scrollToIndex(0)}>Scroll to Top</Button>
        <Button onClick={() => vtRef.current.scrollTo(-1)}>Scroll to Bottom</Button>
      </Space>
      <Table
        {...args}
        dataSource={dataSource}
        onDragEnd={setDataSource}
        columns={columns}
        components={vt}
        pagination={false}
        rowSelection={{
          selectedRowKeys: selected,
          onChange: setSelected
        }}
        scroll={{ y: TABLE_BODY_HEIGHT }}
      />
    </Wrapper>
  }
}

export const Fetch: Story = {
  render: (args: ITableProps) => {
    const TABLE_BODY_HEIGHT = 300
    const [selected, setSelected] = useState<Key[]>([])
    const [dataSource, setDataSource] = useState<TableRecord[]>(data.slice(0, 15))

    const [loading, setLoading] = useState(false)
    const loadMore = useCallback(async () => {
      setLoading(true)
      await new Promise(resolve => setTimeout(resolve, 500))

      setDataSource(data.slice(0, dataSource.length + 15))
      setLoading(false)
    }, [dataSource.length])

    const [vt, , vtRef] = useVT(() => ({
      onScroll: params => {
        if (params.isEnd) {
          loadMore()
        }
      },
      scroll: { y: TABLE_BODY_HEIGHT } 
    }), [loadMore])

    return <Wrapper>
      {message}
      <StyledText>Selected: {selected.length}</StyledText>
      <Space gap={8}>
        <Button onClick={() => vtRef.current.scrollToIndex(0)}>Scroll to Top</Button>
        <Button onClick={() => vtRef.current.scrollTo(-1)}>Scroll to Bottom</Button>
      </Space>
      <Table
        {...args}
        dataSource={dataSource}
        onDragEnd={setDataSource}
        columns={columns}
        components={vt}
        loading={loading}
        pagination={false}
        rowSelection={{
          selectedRowKeys: selected,
          onChange: setSelected
        }}
        scroll={{ y: TABLE_BODY_HEIGHT }}
      />
    </Wrapper>
  }
}
