import { TextReducer } from '@helpers/index'
import { CodeViewer } from '@src/code-viewer'
import { Link } from '@src/link'
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

const columns = [
  {
    title: 'Without render-function',
    key: 'withoutRenderFunction',
    dataIndex: 'description',
    width: 200
  },
  {
    title: 'Render-function with custom tooltip',
    key: 'customTooltip',
    dataIndex: 'description',
    width: 300,
    ellipsisTooltip: (value: string) => value,
    render: (value: string) => {
      return <Link href={value}>{value}</Link>
    }
  },
  {
    title: 'Render-function with custom reduction',
    key: 'customReduction',
    dataIndex: 'description',
    width: 300,
    ellipsis: false,
    render: (value: string) => {
      return <TextReducer tooltip={value}><Link href={value}>{value}</Link></TextReducer>
    }
  },
  {
    title: 'Without reduction',
    key: 'withoutReduction',
    dataIndex: 'description',
    width: 700,
    ellipsis: false,
    render: (value: string) => {
      return <Link href={value}>{value}</Link>
    }
  }
]

const generalInfo = `
По умолчанию таблица обрезает контент в ячейке при нехватке места
1. Если обрезание не нужно - его можно выключить, передав настройку **ellipsis: false**
2. Если для отрисовки контента используется render-функция, то по умолчанию в тултипе будет отображаться результат вызова этой функции, что не всегда подходит
(например, при отрисовке ссылки она будет синей и на темном фоне тултипа плохо различима). В этом случае можно воспользоваться функцией **ellipsisTooltip**, которая имеет аналогичный контракт с функцией render, но возвращает строго string. Например, как сделано во второй колонке в примере ниже
`

const ellipsisTooltipExample = `
const columns = [
  ...
  {
    title: 'Render-function with custom tooltip',
    key: 'description',
    dataIndex: 'description',
    width: 200,
    ellipsisTooltip: (value: string) => value,
    render: (value: string) => {
      return <Link href={value}>{value}</Link>
    }
  }
  ...
]
`

const renderWithTextReducerInfo = `
Если встроенное обрезание по каким-то причинам не подходит, можно воспользоваться вспомогательным компонентом TextReducer\n
Компонент TextReducer автоматически:
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
    ellipsis: false,
    render: (item: TableException['object']) => {
      return <TextReducer tooltip={item.name}>{item.name}</TextReducer>
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

export const Reduction: Story = {
  render: (args) => {
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[] | undefined>(args.rowSelection?.selectedRowKeys)
    const handleSelectionChange = (newSelectedRowKeys: React.Key[]) => setSelectedRowKeys(newSelectedRowKeys)

    return (
      <Wrapper>
        <Markdown value={generalInfo} />
        <CodeViewer
          initialValue={ellipsisTooltipExample}
          // @ts-expect-error костыль для стори
          language="typescript"
          readonly
          width={600}
          height={300}
        />
        <Table
          {...args}
          rowSelection={{
            selectedRowKeys,
            onChange: handleSelectionChange
          }}
          afterColumn
          resizingMode="scroll"
          dataSource={mockDataSource}
          columns={columns}
        />
        <Markdown value={renderWithTextReducerInfo} />
        <CodeViewer
          initialValue={codeExample}
          // @ts-expect-error костыль для стори
          language="typescript"
          readonly
          width={1000}
          height={500}
        />
      </Wrapper>
    )
  },
  args: {
    columns
  },
  argTypes: {
    columns: genArgType('columns[n].ellipsis = true - collapses long labels and shows tooltip with full text on hover')
  },
  parameters: { controls: { exclude: ['dataSource'] } }
}
