import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { CodeViewer } from '@src/code-viewer'
import { Markdown } from '@src/markdown'
import { Meta } from '@storybook/react-webpack5'
import React, { useMemo, useState } from 'react'

import { Table } from '..'
import MetaData from '../__meta__/meta.json'
import mockData from '../__mocks__/table-mock-data.json'
import { FilterConfig, FilterOperation, FilterType } from '../modules/Filters'
import { getTableFilters } from '../modules/SidebarFilters/filters'
import { ITableProps, TableColumn } from '../types'

import { BasicTableStory, columns, columnsWithLegacyEnumCountries, Story, Wrapper } from './_commonConstants'
import { PopupConfigProvider } from '@helpers/components/PopupConfigProvider'

const meta: Meta<ITableProps> = {
  title: 'Hexa UI Components/Table/SidebarFilters',
  component: Table,
  parameters: {
    badges: [badges.stable],
    docs: {
      page: withMeta(MetaData)
    },
    controls: {
      exclude: ['columns', 'dataSource']
    }
  },
  tags: ['!autodocs']
}
export default meta

const dataSource = mockData.map((el, i) => {
  return {
    ...el,
    age: Math.ceil(Math.random() * 100),
    date: i === 2 ? new Date().toDateString() : new Date(Number(i.toString() + '0000000000')).toDateString()
  }
})

export const Basic: Story = {
  render: (args) => <BasicTableStory {...args} />,
  args: {
    pagination: {
      pageSize: 10,
      restoreCurrentWhenDataChange: true,
      showSizeChanger: true
    },
    columns: columns as TableColumn[],
    dataSource,
    useFiltersSidebar: true,
    toolbar: {
      showColumns: true,
      showGrouping: true,
      showFilterSidebar: true
    },
    defaultSidebarFilters: [
      {
        name: 'name',
        condition: FilterOperation.ncont,
        type: FilterType.Text,
        value: 'a'
      },
      {
        name: 'age',
        condition: FilterOperation.neq,
        type: FilterType.Number,
        value: 7
      }
    ],
    onFilterChange: (val) => console.log(val, 'onFilterChange')
  }
}

export const ToolbarTabsConfig: Story = {
  render: (args) => <BasicTableStory {...args} />,
  args: {
    pagination: {
      pageSize: 10,
      restoreCurrentWhenDataChange: true,
      showSizeChanger: true
    },
    columns: columnsWithLegacyEnumCountries as TableColumn[],
    dataSource,
    useFiltersSidebar: true,
    toolbar: {
      showColumns: {
        hideTabHeader: true
      },
      showFilterSidebar: true
    },
    defaultSidebarFilters: [
      {
        name: 'name',
        condition: FilterOperation.ncont,
        type: FilterType.Text,
        value: 'a'
      },
      {
        name: 'age',
        condition: FilterOperation.neq,
        type: FilterType.Number,
        value: 7
      }
    ],
    onFilterChange: (val) => console.log(val, 'onFilterChange')
  }
}

// TODO: remove after migrate to getAvailableOptions
/**
 * Поддержка устаревшего контракта getAvailableValues.
 * Используется для обратной совместимости до полной миграции на getAvailableOptions.
 */
export const EnumFallbackGetAvailableValues: Story = {
  render: (args) => {
    return <>
      <BasicTableStory {...args} />
    </>
  },
  args: {
    pagination: {
      pageSize: 10,
      restoreCurrentWhenDataChange: true,
      showSizeChanger: true
    },
    columns: columnsWithLegacyEnumCountries as TableColumn[],
    dataSource,
    useFiltersSidebar: true,
    toolbar: {
      showColumns: true,
      showGrouping: true,
      showFilterSidebar: true
    },
    defaultSidebarFilters: [
      {
        name: 'name',
        condition: FilterOperation.ncont,
        type: FilterType.Text,
        value: 'a'
      },
      {
        name: 'age',
        condition: FilterOperation.neq,
        type: FilterType.Number,
        value: 7
      }
    ],
    onFilterChange: (val) => console.log(val, 'onFilterChange')
  }
}

const serverFilteringInfo = `
Для работы серверной фильтрации в таблице предусмотрены 3 настройки
- \`isServerFiltering: boolean\` - флаг, отключающий клиентскую фильтрацию
- \`sidebarFilters: FilterConfig[]\` - фильтры, управляемые на стороне продукта
- \`onSidebarFiltersChange: (filters: FilterConfig[]) => void\` - коллбек, срабатывающий в момент применения фильтров (кнопка **Применить**) и закрытия сайдбара. Можно подписаться на это событие для дополнительной обработки выбранных фильтров на стороне продукта (например, формирование URL-параметров) и отправки запроса на сервер

Пример кода:
`

const codeExample = `
const [filters, setFilters] = useState<FilterConfig[]>([
  {
    name: 'age',
    condition: FilterOperation.gt,
    type: FilterType.Number,
    value: 18
  },
  {
    name: 'age',
    condition: FilterOperation.lt,
    type: FilterType.Number,
    value: 60
  },
  {
    name: 'country',
    condition: FilterOperation.cont,
    type: FilterType.Enum,
    value: 'Russian Federation'
  },
])

const data = useMemo(() => getProductData(filters), [filters])
const handleFiltersChange = (curFilters: FilterConfig[]) => setFilters(curFilters)

return (
  <Table
    useFiltersSidebar
    isServerFiltering
    dataSource={data}
    columns={columns as TableColumn[]}
    sidebarFilters={filters}
    onSidebarFiltersChange={handleFiltersChange}
  />
)
`

const getData = (filters: FilterConfig[]) => {
  const handledFilters = getTableFilters(filters)

  return dataSource.filter((row) => (
    Object.values(handledFilters).every((filter) => (
      Object.values(filter).every((predicate) => predicate(row))
    ))
  ))
}

export const ServerFiltering: Story = {
  render: (args) => {
    const [filters, setFilters] = useState<FilterConfig[]>([
      {
        name: 'age',
        condition: FilterOperation.gt,
        type: FilterType.Number,
        value: 18
      },
      {
        name: 'age',
        condition: FilterOperation.lt,
        type: FilterType.Number,
        value: 60
      },
      {
        name: 'country',
        condition: FilterOperation.eq,
        type: FilterType.Enum,
        value: 'Russian Federation'
      }
    ])

    const data = useMemo(() => getData(filters), [filters])

    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])

    const handleSelectionChange = (newSelectedRowKeys: React.Key[]) => setSelectedRowKeys(newSelectedRowKeys)

    const handleFiltersChange = (curFilters: FilterConfig[]) => {
      console.log('table:filters', curFilters)
      setFilters(curFilters)
    }

    return <Wrapper>
      <Table
        {...args}
        rowSelection={{
          selectedRowKeys,
          onChange: handleSelectionChange
        }}
        useFiltersSidebar
        dataSource={data}
        columns={columns as TableColumn[]}
        sidebarFilters={filters}
        onSidebarFiltersChange={handleFiltersChange}
        isServerFiltering
      />
      <Markdown value={serverFilteringInfo} />
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
  args: {
    pagination: {
      pageSize: 10,
      restoreCurrentWhenDataChange: true,
      showSizeChanger: true
    },
    toolbar: {
      showFilterSidebar: true
    }
  }
}

const customDropdownContainerInfo = `
Для переопределения контейнера для выпадающих меню необходимо обернуть таблицу в PopupConfigProvider и передать функцию getPopupContainer. \n
Функция \`getPopupContainer\` должна возвращать DOM-элемент, внутри которого будет позиционироваться выпадающее меню. \n
Пример кода:
`

const code = `
import { PopupConfigProvider } from '@kaspersky/hexa-ui'

<PopupConfigProvider 
  getPopupContainer={() => document.querySelector('.hexa-ui-tabletoolbar-container')}
>
  <Table {...props} />
</PopupConfigProvider>
`


export const CustomDropdownContainer: Story = {
  render: (args) => {

    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])
    const handleSelectionChange = (newSelectedRowKeys: React.Key[]) => setSelectedRowKeys(newSelectedRowKeys)
    
    return (
      <PopupConfigProvider getPopupContainer={() => {
        const container = document.querySelector('.hexa-ui-tabletoolbar-container')
        return container ? (container as HTMLElement) : document.body
      }}>
        <Wrapper>
          <Table
            scroll={{ y: '300px' }}
            {...args}
            rowSelection={{
              selectedRowKeys,
              onChange: handleSelectionChange
            }}
            dataSource={dataSource}
            columns={columns as TableColumn[]}
          />
          <Markdown value={customDropdownContainerInfo} />
          <CodeViewer
            initialValue={code}
            // @ts-ignore
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
      pageSize: 10,
      restoreCurrentWhenDataChange: true,
      showSizeChanger: true
    },
    toolbar: {
      showColumns: true,
      showGrouping: true,
      showFilterSidebar: true
    }
  }
}
