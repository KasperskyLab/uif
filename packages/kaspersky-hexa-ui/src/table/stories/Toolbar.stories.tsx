import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { Notification, openNotification } from '@src/notification'
import { SectionMessage } from '@src/section-message'
import { Meta } from '@storybook/react'
import React, { useState, useCallback } from 'react'

import { Table } from '..'
import MetaData from '../__meta__/meta.json'
import { generatedData, tableColumns } from '../__mocks__/filtersMockData'
import { ITableProps } from '../types'

import { mockGetLeftItems, Story, Wrapper } from './_commonConstants'
import { Button } from '@src/button/Button'
import { Space, TableToolbarProps } from '@src/index'

const meta: Meta<ITableProps> = {
  title: 'Hexa UI Components/Table/Toolbar',
  component: Table,
  args: {
    columns: tableColumns,
    dataSource: generatedData,
    useFiltersSidebar: true,
    rowSelection: { builtInRowSelection: true },
    toolbar: {
      showFilterSidebar: true
    },
    borderedStyle: false
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

const dropdownImportExport: TableToolbarProps['importExportButton'] = {
  dropdown: true,
  onExport: () => openNotification({ mode: 'success', description: 'Items exported' }),
  onImport: () => openNotification({ mode: 'success', description: 'Items imported' }),
  buttonExportText: 'Export items'
}

export const WithToolbar: Story = {
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
          <Table {...args} toolbar={{ ...args.toolbar, importExportButton }} />
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

export const GetLeftItems: Story = {
  args: {
    toolbar: {
      showFilterSidebar: true,
      getLeftItems: mockGetLeftItems
    },
    borderedStyle: false
  }
}
