import { PopupConfigProvider } from '@helpers/components/PopupConfigProvider'
import { generateId } from '@helpers/generateId'
import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { CodeViewer } from '@src/code-viewer'
import { Markdown } from '@src/markdown'
import { SectionMessage } from '@src/section-message'
import { Meta } from '@storybook/react'
import React, { useState } from 'react'

import { Filter, FilterWithIndicator } from '@kaspersky/hexa-ui-icons/16'

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
import { Performance as WOTagPerformanceStory } from './Performance'

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
export const Performance: Story = {
  ...WOTagPerformanceStory,
  tags: ['skip-visual']
}

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

const experimentalInfo = `
Это временные пропы для прототипирования, они скоро будут удалены:
- \`toolbar.TEMP_DONT_USE_customButton\` - кастомная кнопка в правой части тулбара (после шестеренки), может показывать индикатор
- \`toolbar.TEMP_DONT_USE_customComponent\` - кастомный ReactNode между тулбаром и таблицей (например, query-builder)
`

export const ExperimentalDontUseToolbarSlots: Story = {
  parameters: {
    badges: [badges.notProdReady]
  },
  render: args => {
    const [isQueryBuilderOpen, setIsQueryBuilderOpen] = useState(false)

    return (
      <>
        <Wrapper>
          <SectionMessage mode="error">
            Пропы TEMP_DONT_USE_customButton и TEMP_DONT_USE_customComponent — временные и скоро будут удалены.
            Пример показывает прототип кнопки с индикатором, которая открывает
            и скрывает слот с query-builder.
          </SectionMessage>
          <Table
            {...args}
            presets={{
              onCreatePreset: async preset => ({ ...preset, id: generateId() }),
              onDeletePreset: async () => {},
              onUpdatePreset: async preset => preset,
              onPresetSelected: async () => {},
              onViewSelected: async () => {}
            }}
            toolbar={{
              ...args.toolbar,
              onRefresh: () => {},
              TEMP_DONT_USE_customButton: {
                type: 'button',
                iconBefore: isQueryBuilderOpen ? <FilterWithIndicator /> : <Filter />,
                showIndicator: isQueryBuilderOpen,
                onClick: () => setIsQueryBuilderOpen(prev => !prev)
              },
              TEMP_DONT_USE_customComponent: isQueryBuilderOpen && (
                <div style={{ padding: '12px 16px', border: '1px dashed var(--content--neutral--level_3, #b3b3b3)', borderRadius: '4px' }}>
                  query-builder placeholder (временный слот)
                </div>
              )
            }}
          />
        </Wrapper>
        <Markdown value={experimentalInfo} />
      </>
    )
  },
  args: {
    toolbar: {
      showColumns: true,
      showGrouping: true,
      showFilterSidebar: false,
      showSearch: true
    }
  },
  tags: ['skip-visual']
}
