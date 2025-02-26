import { SBArgType, SBArgTypeControl } from '@sb/helpers'
import { Table } from '@src/table'
import { ITableProps } from '@src/table/types'
import { StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import styled from 'styled-components'

// Components
export const Wrapper = styled.div`
  padding: 50px;
  width: 100%;
`

// Stories helpers
export const BasicTableStory = (args: ITableProps) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[] | undefined>(args.rowSelection?.selectedRowKeys)

  const onChange = (newSelectedRowKeys: React.Key[]) => {
    console.log(`selectedRowKeys changed: ${newSelectedRowKeys}`)
    setSelectedRowKeys(newSelectedRowKeys)
  }

  return (
    <Wrapper>
      <Table
        rowSelection={{
          selectedRowKeys,
          onChange
        }}
        {...args}
      />
    </Wrapper>
  )
}

// Helpers
export const patchKeys = (data: BasicTreeRowType[], prefix: number[] = []): BasicTreeRowType[] => {
  return data.map((item, index) => ({
    ...item,
    ...item.children && { children: patchKeys(item.children, [...prefix, index]) },
    key: [...prefix, index].join(',')
  }))
}

export const genArgType = (description?: string, control?: string, defaultValue?: string): SBArgType => ({
  description,
  control: control as SBArgTypeControl,
  table: defaultValue ? { defaultValue: { summary: defaultValue } } : undefined
})

export const basicArgTypes = {
  columns: genArgType('An array of column objects'),
  dataSource: genArgType('An array of data. Each object should contain all field used as a "dataIndex" in "columns"'),
  rowSelection: genArgType('rowSelection.selectedRowKeys - an array of selected rows<br/>rowSelection.onChange - controlled handler', 'object'),
  useAccordion: genArgType('Is needed to use accordion in dataSource', 'boolean', 'false'),
  onDragStart: genArgType('Handler for start of dragging'),
  onDragEnd: genArgType('Handler for end of dragging'),
  useDragDrop: genArgType('Is drag-n-drop enabled', 'boolean', 'false'),
  emptyText: genArgType('Custom ReactElement that will be shown instead of default empty text'),
  groupBy: genArgType('dataIndex of column to group'),
  groupTitleRender: genArgType('Render function for title of group'),
  rowClassName: genArgType('Classname for each row. It can be used to style content (hover, for example)'),
  onColumnResize: genArgType('Handler on column resize'),
  resizingMode: {
    ...genArgType('Resizing mode', 'select'),
    options: ['max', 'last', 'manual', 'scroll']
  },
  stickyHeader: genArgType('Intend from top in px. Set undefined if sticky is not needed', 'number', 'undefined'),
  loading: genArgType('Is table loading', 'boolean', 'false'),
  loaderProps: genArgType('loaderProps.indicator - custom loader component<br/>loaderProps.delay - delay to show loader'),
  pagination: {
    ...genArgType(
      'Go to Hexa UI Components/Pagination. Allowed props: current, pageSize, total, simple, onChange, onShowSizeChange.' +
      'External fields:<br/>pagination.infiniteScrollPageGetter: (page, pageSize) => Promise' +
      '- function that returns Promise where you can set new data on resolve() and throw error on reject()'
    )
  },
  infiniteScrollEndTableText: genArgType('End text when table is ended during infinite scrolling'),
  infiniteScrollRetryText: genArgType('Retry text when some error occurred during infinite scrolling'),
  infiniteScrollErrorText: genArgType('Error text when some error occurred during infinite scrolling'),
  toolbar: {
    ...genArgType(
      'Go to Hexa UI Components/Toolbar. External fields:<br/>' +
      'toolbar.showSearch - is search enabled<br/>' +
      'toolbar.showColumns - is columns selector shown<br/>' +
      'toolbar.showGrouping - is grouping selector shown'
    )
  },
  enableSearchHighlighting: genArgType('Should the found text be highlighted', 'boolean', 'false'),
  filterItems: genArgType('An array of filters to show'),
  initialFilters: genArgType('Filters to set by default'),
  initialSorting: genArgType('initialSorting.field - column to sort by default<br/>initialSorting.direction - direction of sorting'),
  saveFilters: genArgType('saveFilters.storageKey - key name of saved filters'),
  expandable: genArgType('expandable.expandColumnName = "col1" - expanding the tree will be at col1'),
  defaultColumnWidth: genArgType('Default width of columns', 'number', 'undefined'),
  columnVerticalAlign: {
    ...genArgType('Column vertical align', 'radio', 'top'),
    options: ['top', 'middle', 'bottom', 'inherit']
  },
  rowMode: {
    ...genArgType('Row mode', 'radio', 'standard'),
    options: ['standard', 'compact']
  },
  disabled: genArgType('If rowSelection is disabled', 'boolean', 'false')
}

// Data
export const basicTwoColumns = [
  {
    title: 'table.column.name',
    key: 'name',
    dataIndex: 'name',
    width: 300
  },
  {
    title: 'table.column2.name',
    key: 'description',
    dataIndex: 'description',
    width: 200
  }
]

export const generateDataSource = (length: number) => (
  Array.from({ length }, (_, index): BasicRowType & { key: number } => ({
    name: `Value ${index + 1}`,
    description: `Description ${index + 1}`,
    key: index + 1
  }))
)

export const basicDataSource = generateDataSource(180)

export const basicTreeDataSource: BasicTreeRowType[] = [
  {
    name: 'John Doe',
    description: 'Nice guy',
    age: 34
  },
  {
    name: 'Jane Doe',
    description: 'Cool girl',
    age: 33
  },
  {
    name: 'James Doe',
    description: 'Noble man',
    age: 65,
    children: [
      {
        name: 'Mary Sue',
        description: 'Dubious character',
        age: 41,
        children: [{
          name: 'Dirk Gently',
          description: 'Best detective',
          age: 15
        }]
      },
      {
        name: 'John Snow',
        description: 'Knows nothing',
        age: 45
      }
    ]
  },
  {
    name: 'Judy Doe',
    description: 'Great person',
    age: 38
  }
]

// Types
export type Story = StoryObj<ITableProps>

export type BasicRowType = { name: string, description: string }

export type BasicTreeRowType = Omit<BasicRowType, 'name'> & { name: React.ReactNode, age: number, children?: BasicTreeRowType[] }
