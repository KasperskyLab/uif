import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { StoryColumn } from '@sb/StoryComponents'
import { Button } from '@src/button'
import { Field } from '@src/field'
import { SectionMessage } from '@src/section-message'
import { SegmentedButton } from '@src/segmented-button'
import { Meta } from '@storybook/react'
import React, { useRef, useState } from 'react'

import { Table, TableRecord, TableRef } from '..'
import MetaData from '../__meta__/meta.json'
import {
  createMockDataSourceFunction,
  generatedData,
  tableColumns,
  TableMockProps,
  TableMockStory
} from '../__mocks__/filtersMockData'
import { GetLeftItems } from '../modules/ToolbarIntegration'
import { TableRowSelection, TableRowSelectionData } from '../types'

import { Wrapper } from './_commonConstants'
import RowSelectionDocs from './docs/RowSelectionDocs.md'

const defaultRowSelection: TableRowSelection = {
  builtInRowSelection: true,
  processSelection: selection => console.debug('selection', selection)
}

const meta: Meta<TableMockProps> = {
  title: 'Hexa UI Components/Table/Row selection',
  component: Table,
  args: {
    columns: tableColumns,
    dataSource: generatedData,
    rowSelection: defaultRowSelection
  },
  parameters: {
    badges: [badges.stable],
    docs: {
      page: withMeta(MetaData, RowSelectionDocs)
    },
    controls: {
      exclude: /(columns|dataSource)/
    }
  },
  decorators: [(Story, context) => <Wrapper><Story {...context} /></Wrapper>]
}
export default meta

export const RowSelection: TableMockStory = {}

export const ServerPaginationSelection: TableMockStory = {
  render: (args) => {
    const [selection, setSelection] = useState<Partial<TableRowSelectionData>>({})

    const selectedCount = selection.selectedRowKeys?.length ?? 0
    const deselectedCount = selection.deselectedRowKeys?.length ?? 0

    return (
      <StoryColumn>
        <SectionMessage mode="info">
          {selection.isSelectedAll
            ? `Выбраны все строки — стратегия exclude (исключено с сервера: ${deselectedCount}). Данные надо запрашивать как «все, кроме deselectedRowKeys».`
            : `Выбрано строк — стратегия include: ${selectedCount}. Данные запрашиваются по selectedRowKeys.`}
        </SectionMessage>
        <Table
          {...args}
          rowSelection={{
            builtInRowSelection: true,
            processSelection: (data) => setSelection(data)
          }}
        />
      </StoryColumn>
    )
  },
  args: {
    dataSource: undefined,
    dataSourceFunction: createMockDataSourceFunction(generatedData, tableColumns)
  }
}

export const GetPreselectedRows: TableMockStory = {
  args: {
    rowSelection: {
      ...defaultRowSelection,
      getPreselectedRows: async (rows) => rows.filter((_, index) => index % 5 === 4).map(row => row.key as string)
    }
  }
}

export const PreselectedRowsInData: TableMockStory = {
  args: {
    dataSource: generatedData.map((row, index) => ({ ...row, _selected: index % 3 === 2 }))
  }
}

export const WithoutSelectAll: TableMockStory = {
  args: {
    rowSelection: {
      ...defaultRowSelection,
      hasSelectAll: false
    }
  }
}

export const WithDisabledRows: TableMockStory = {
  args: {
    dataSource: generatedData.map((row, index) => (
      index % 5 === 0
        ? { ...row, _selectionDisabled: true, _disabledHint: 'Disabled row hint' }
        : row))
  }
}

export const SingleRowSelection: TableMockStory = {
  args: {
    rowSelection: {
      ...defaultRowSelection,
      type: 'radio'
    }
  }
}

export const ResetSelectionViaRef: TableMockStory = {
  render: (props) => {
    const tableRef = useRef<TableRef>(null)
    return (
      <>
        <Button onClick={() => tableRef.current?.resetSelection?.()}>Reset selection</Button>
        <Table
          {...props}
          ref={tableRef}
        />
      </>
    )
  }
}

const getSelectionToolbarItems: GetLeftItems = ({ selectedRowKeys, isSelectedAll, deselectedRowKeys }) => {
  const selectedCount = selectedRowKeys?.length ?? 0
  const hasSelection = isSelectedAll || selectedCount > 0

  return [
    {
      type: 'button',
      key: 'bulk-delete',
      label: isSelectedAll ? 'Удалить все' : `Удалить выбранные (${selectedCount})`,
      disabled: !hasSelection,
      onClick: () => console.debug('bulk delete', { isSelectedAll, selectedRowKeys, deselectedRowKeys })
    },
    {
      type: 'divider',
      key: 'divider'
    },
    {
      type: 'button',
      key: 'bulk-export',
      label: `Экспортировать выбранные (${selectedCount})`,
      disabled: !hasSelection,
      onClick: () => console.debug('bulk export', { isSelectedAll, selectedRowKeys, deselectedRowKeys })
    }
  ]
}

export const SelectionInToolbar: TableMockStory = {
  args: {
    toolbar: {
      showSearch: true,
      getLeftItems: getSelectionToolbarItems
    }
  }
}

type RowSelectionType = 'checkbox' | 'radio'

const segmentedButtonItems: { text: RowSelectionType, value: RowSelectionType }[] = [
  { text: 'radio', value: 'radio' },
  { text: 'checkbox', value: 'checkbox' }
]

export const AntdControlledRowSelection: TableMockStory = {
  render: (args) => {
    const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([])
    const [selectionMode, setSelectionMode] = useState<RowSelectionType[]>(['checkbox'])

    const onSelect = (_: TableRecord, __: boolean, selectedRows: TableRecord[]) => {
      setSelectedRowKeys(selectedRows.map(row => row.key))
    }

    const onSelectAll = (_: boolean, selectedRows: TableRecord[]) => {
      setSelectedRowKeys(selectedRows.map(row => row.key))
    }

    return (
      <StoryColumn>
        <Field label="Selection mode" control={(
          <SegmentedButton
            items={segmentedButtonItems}
            type="radio"
            value={selectionMode}
            onChange={value => setSelectionMode(value as RowSelectionType[])}
          />
        )} />
        <Table
          {...args}
          rowSelection={{
            selectedRowKeys,
            onSelect,
            onSelectAll,
            type: selectionMode[0]
          }}
        />
      </StoryColumn>

    )
  },
  name: '@deprecated Antd Controlled Row Selection'
}
