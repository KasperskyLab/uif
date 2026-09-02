import { PopupConfigProvider } from '@helpers/components/PopupConfigProvider'
import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { Button } from '@src/button'
import { Notification, openNotification } from '@src/notification'
import { SectionMessage } from '@src/section-message'
import { Space } from '@src/space'
import { Toggle } from '@src/toggle'
import { Meta } from '@storybook/react'
import React, { useCallback, useState } from 'react'

import { Table } from '..'
import MetaData from '../__meta__/meta.json'
import mockData from '../__mocks__/table-mock-data.json'
import { generatedData, tableColumns, TableMockProps, TableMockStory } from '../__mocks__/filtersMockData'
import { FilterOperation, FilterType } from '../modules/Filters'
import { TableColumn, TableToolbarProps } from '../types'

import {
  BasicTableStory,
  columnsWithLegacyEnumCountries,
  mockGetLeftItems,
  Story,
  Wrapper
} from './_commonConstants'

const meta: Meta<TableMockProps> = {
  title: 'Hexa UI Components/Table/Toolbar',
  component: Table,
  args: {
    columns: tableColumns,
    dataSource: generatedData,
    useFiltersSidebar: true,
    rowSelection: { builtInRowSelection: true },
    toolbar: {
      showFilterSidebar: true
    }
  },
  parameters: {
    badges: [badges.stable],
    docs: {
      page: withMeta(MetaData)
    },
    controls: {
      exclude: /(columns|dataSource|pagination|useFiltersSidebar)/
    }
  },
  decorators: [
    (Story, context) => <Wrapper><Story {...context} /></Wrapper>
  ],
  tags: ['!autodocs']
}

export default meta

const toolbarTabsDataSource = mockData.map((el, i) => ({
  ...el,
  age: Math.ceil(Math.random() * 100),
  date: i === 2 ? new Date().toDateString() : new Date(Number(i.toString() + '0000000000')).toDateString()
}))

const dropdownImportExport: TableToolbarProps['importExportButton'] = {
  dropdown: true,
  onExport: () => openNotification({ mode: 'success', description: 'Items exported' }),
  onImport: () => openNotification({ mode: 'success', description: 'Items imported' }),
  buttonExportText: 'Export items'
}

export const WithToolbar: TableMockStory = {
  render: (args) => {
    const [importExportButton, setImportExportButton] = useState<Required<TableToolbarProps>['importExportButton']>(dropdownImportExport)

    const onExportButton = useCallback(() => {
      setImportExportButton(prev => ({ ...prev, loading: true, tooltip: 'Export in progress...' }))

      setTimeout(() => {
        setImportExportButton(prev => ({ ...prev, loading: false, tooltip: undefined }))
        openNotification({ mode: 'success', description: 'Items exported' })
      }, 2000)
    }, [])

    const onClickChangeImportExportProp = () => {
      setImportExportButton(prev => {
        const newDropdownState = !prev.dropdown

        if (newDropdownState) {
          return dropdownImportExport
        }

        return {
          dropdown: false,
          onClick:onExportButton
        }
      })

    }

    return (
      <>
        <Notification />
        <Space gap="grouped">
          <SectionMessage mode="info">
            Набор кнопок в правой части тулбара зафиксирован на стороне дизайна, prop &apos;right&apos; - deprecated
          </SectionMessage>
          <Button onClick={onClickChangeImportExportProp} mode="primary">
            Set importExportButton prop to {importExportButton?.dropdown ? '"button" mode with loading and tooltip' : '"dropdown" mode'}
          </Button>
          <PopupConfigProvider usePortal>
            <Table {...args} toolbar={{ ...args.toolbar, importExportButton }} />
          </PopupConfigProvider>
        </Space>
      </>
    )
  },
  args: {
    useFiltersSidebar: true,
    toolbar: {
      showSearch: true,
      collapsibleSearch: true,
      showColumns: true,
      showGrouping: true,
      showFilterSidebar: true,
      onRefresh: () => openNotification({ mode: 'success', description: 'Table refreshed' }),
      importExportButton: dropdownImportExport,
      left: [
        {
          type: 'children',
          key: 'toggle-with-tooltip',
          children: (
            <Toggle tooltip="Toggle tooltip">
              Toggle
            </Toggle>
          )
        },
        {
          type: 'button',
          key: '1',
          label: 'Tool 1',
          disabled: true,
          onClick: () => openNotification({ mode: 'success', description: 'Tool 1' }),
          testId: 'item-1'
        },
        {
          type: 'divider',
          key: 'divider'
        },
        {
          type: 'button',
          key: '2',
          label: 'Tool 2',
          onClick: () => openNotification({ mode: 'success', description: 'Tool 2' }),
          testId: 'item-2'
        },
        {
          type: 'divider',
          key: 'divider'
        },
        {
          type: 'button',
          key: '3',
          label: 'Tool 3',
          onClick: () => openNotification({ mode: 'success', description: 'Tool 3' }),
          testId: 'item-3'
        },
        {
          type: 'button',
          key: '4',
          label: 'Some action 1',
          onClick: () => openNotification({ mode: 'success', description: 'Tool 4' }),
          testId: 'item-4'
        },
        {
          type: 'dropdown',
          key: '5',
          label: 'Dropdown items 1',
          testId: 'item-5',
          overlay: [
            {
              children: 'Action 7',
              onClick: () => openNotification({ mode: 'success', description: 'Action 7' })
            },
            {
              children: 'Action 8',
              onClick: () => openNotification({ mode: 'success', description: 'Action 8' })
            }
          ]
        },
        {
          type: 'button',
          key: '6',
          label: 'Some action 2',
          onClick: () => openNotification({ mode: 'success', description: 'Tool 6' }),
          testId: 'item-6'
        },
        {
          type: 'dropdown',
          key: '7',
          label: 'Dropdown items 2',
          testId: 'item-7',
          overlay: Array.from({ length: 20 }, (value, index) => ({
            children: `Dropdown action ${index + 1}`,
            onClick: () => openNotification({ mode: 'success', description: `Dropdown action ${index + 1}` })
          }))
        }
      ],
      autoDropdown: true
    }
  }
}

export const GetLeftItems: TableMockStory = {
  args: {
    toolbar: {
      showFilterSidebar: true,
      getLeftItems: mockGetLeftItems
    }
  }
}

export const ToolbarTabsConfig: Story = {
  render: args => <BasicTableStory {...args} />,
  args: {
    pagination: {
      restoreCurrentWhenDataChange: true,
      showSizeChanger: true
    },
    columns: columnsWithLegacyEnumCountries as TableColumn[],
    dataSource: toolbarTabsDataSource,
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
    onFilterChange: val => console.log(val, 'onFilterChange'),
    borderedStyle: false
  }
}
