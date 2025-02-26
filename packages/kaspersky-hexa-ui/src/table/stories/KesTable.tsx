import { Textbox } from '@src/input'
import { Select } from '@src/select'
import { ITableProps, Table } from '@src/table'
import { Toggle } from '@src/toggle'
import React, { useMemo, useState } from 'react'

import { Story, Wrapper } from './_commonConstants'

const MOCK_LONG_TEXT = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'

export const KesTable: Story = {
  render: (args: ITableProps) => {
    const [data, setData] = useState(Array.from({ length: 20 }).map((_, index) => ({
      key: index + 1,
      name: `${index} ${MOCK_LONG_TEXT}`,
      status: index % 2 === 0,
      action: 'action-1'
    })))

    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[] | undefined>(args.rowSelection?.selectedRowKeys)

    const onSelectionChange = (newSelectedRowKeys: React.Key[]) => {
      setSelectedRowKeys(newSelectedRowKeys)
    }

    const columns = useMemo(() => ([
      {
        title: MOCK_LONG_TEXT,
        key: 'name',
        dataIndex: 'name'
      },
      {
        title: 'table.column2.name',
        key: 'status',
        dataIndex: 'status',
        render: (value: boolean, record: { [key: string]: unknown }) => {
          return <Toggle checked={value} onChange={(value) => {
            setData((prevData) => {
              return prevData.map(item => {
                if (item.key !== record.key) {
                  return item
                }

                return {
                  ...item,
                  status: value
                }
              })
            })
          }}/>
        }
      },
      {
        title: 'table.column2.name',
        key: 'status',
        dataIndex: 'status',
        render: (value: boolean, record: { [key: string]: unknown }) => {
          return <Textbox/>
        }
      },
      {
        title: 'Action',
        key: 'action',
        dataIndex: 'action',
        width: '200px',
        render: (value: string, record: { [key: string]: unknown }) => {
          return (
            <Select
              options={[
                { value: 'action-1', label: 'Action 1' },
                { value: 'action-2', label: 'Action 2' },
                { value: 'action-3', label: 'Action 3' }
              ]}
              value={value}
              onChange={(value) => {
                setData((prevData) => {
                  return prevData.map(item => {
                    if (item.key !== record.key) {
                      return item
                    }

                    return {
                      ...item,
                      action: value
                    }
                  })
                })
              }}
            />
          )
        }
      }
    ]), [])

    return <Wrapper>
      <Table
        {...args}
        rowSelection={{
          selectedRowKeys,
          onChange: onSelectionChange
        }}
        columns={columns}
        dataSource={data}
      />
    </Wrapper>
  },
  args: {}
}
