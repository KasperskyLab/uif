import { TextReducer } from '@helpers/index'
import { CodeViewer } from '@src/code-viewer'
import { Markdown } from '@src/markdown'
import React, { useState } from 'react'

import { Table } from '..'

import { basicDataSource, genArgType, Story, Wrapper } from './_commonConstants'

const MOCK_LONG_TEXT = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip'

type TableException = {
    id: number,
    object: {
        name: string
    },
    description: string
}

const mockDataSource: TableException[] = basicDataSource.slice(0, 5).map((_, index) => ({
  id: index + 1,
  object: {
    name: MOCK_LONG_TEXT
  },
  description: MOCK_LONG_TEXT
}))

const basicTwoColumns = [
  {
    title: 'table.column.name',
    key: 'object',
    dataIndex: 'object',
    width: 300,
    render: (item: TableException['object']) => {
      return <TextReducer>{item.name}</TextReducer>
    }
  },
  {
    title: MOCK_LONG_TEXT,
    key: 'description',
    dataIndex: 'description',
    width: 200
  }
]

const renderWithTextReducerInfo = `
При необходимости использования кастомной функции render (например, для отображения информации во вложенной структуре) и наличии длинного текста, рекомендуется использовать компонент TextReducer.

Компонент автоматически:
- Обрезает текст при превышении ширины колонки (через CSS свойства)
- Отображает всплывающую подсказку с полным текстом при наведении
- Не требует использования пропа ellipsis в конфигурации колонки

Пример использования:
`

const codeExample = `
import { TextReducer, Table } from '@kaspersky/hexa-ui'

type TableException = {
  id: number,
  object: {
      name: string
  },
  description: string
}

const columns = [
  {
    key: 'object',
    dataIndex: 'object',
    width: 300
    title: 'title',
    render: (item: TableException['object']) => {
      return <TextReducer>{item.name}</TextReducer>
    }
  },
  ...
]

const TableWithCustomColumnRender = () => {
  return (
    <Table columns={columns} {...rest} />
  )
}
`

export const RenderWithTextReducer: Story = {
  render: (args) => {
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[] | undefined>(args.rowSelection?.selectedRowKeys)
    const handleSelectionChange = (newSelectedRowKeys: React.Key[]) => setSelectedRowKeys(newSelectedRowKeys)
    
    return <Wrapper>
      <Table
        {...args}
        rowSelection={{
          selectedRowKeys,
          onChange: handleSelectionChange
        }}
        dataSource={mockDataSource}
        columns={basicTwoColumns}
      />
      <Markdown value={renderWithTextReducerInfo} />
      <CodeViewer
        initialValue={codeExample}
        // @ts-ignore
        language="typescript"
        readonly
        width={1000}
        height={500}
      />
    </Wrapper>
  },
  argTypes: {
    columns: genArgType('columns[n].ellipsis = true - collapses long labels and shows tooltip with full text on hover')
  },
  parameters: { controls: { exclude: ['dataSource'] } }
}
