import { PopupConfigProvider } from '@helpers/components/PopupConfigProvider'
import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { CodeViewer } from '@src/code-viewer'
import { Markdown } from '@src/markdown'
import { Meta } from '@storybook/react'
import React, { useState } from 'react'

import { Table } from '..'
import MetaData from '../__meta__/meta.json'
import mockData from '../__mocks__/table-mock-data.json'
import { ITableProps, TableColumn } from '../types'

import {
  basicDataSource,
  basicTwoColumns,
  columns,
  Story,
  Wrapper
} from './_commonConstants'

const meta: Meta<ITableProps> = {
  title: 'Hexa UI Components/Table/[DEV]',
  component: Table,
  args: {
    columns: basicTwoColumns,
    dataSource: basicDataSource,
    borderedStyle: false
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

const customDropdownContainerDataSource = mockData.map((el, i) => ({
  ...el,
  age: Math.ceil(Math.random() * 100),
  date: i === 2 ? new Date().toDateString() : new Date(Number(i.toString() + '0000000000')).toDateString()
}))

const customDropdownContainerInfo = `
Для переопределения контейнера для выпадающих меню необходимо обернуть таблицу в PopupConfigProvider и передать функцию getPopupContainer. \n
Функция \`getPopupContainer\` должна возвращать DOM-элемент, внутри которого будет позиционироваться выпадающее меню. \n
Пример кода:
`

const customDropdownContainerCode = `
import { PopupConfigProvider } from '@kaspersky/hexa-ui'

<PopupConfigProvider
  getPopupContainer={() => document.querySelector('.hexa-ui-tabletoolbar-container')}
>
  <Table {...props} />
</PopupConfigProvider>
`

export { Performance } from './Performance'

export const CustomDropdownContainer: Story = {
  render: args => {
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])
    const handleSelectionChange = (newSelectedRowKeys: React.Key[]) => setSelectedRowKeys(newSelectedRowKeys)

    return (
      <PopupConfigProvider getPopupContainer={() => {
        const container = document.querySelector('.hexa-ui-tabletoolbar-container')
        return container ? container as HTMLElement : document.body
      }}>
        <Wrapper>
          <Table
            scroll={{ y: '300px' }}
            {...args}
            rowSelection={{
              selectedRowKeys,
              onChange: handleSelectionChange
            }}
            dataSource={customDropdownContainerDataSource}
            columns={columns as TableColumn[]}
          />
          <Markdown value={customDropdownContainerInfo} />
          <CodeViewer
            initialValue={customDropdownContainerCode}
            // @ts-expect-error костыль для сторибука
            language="typescript"
            readonly
            width={1000}
            height={150}
          />
        </Wrapper>
      </PopupConfigProvider>
    )
  },
  args: {
    pagination: {
      restoreCurrentWhenDataChange: true,
      showSizeChanger: true
    },
    toolbar: {
      showColumns: true,
      showGrouping: true,
      showFilterSidebar: true
    },
    borderedStyle: false
  }
}
