import { SBArgType, SBArgTypeControl } from '@sb/helpers'
import { Locale } from '@src/locale'
import { FilterOperation, FilterType, Table, TableColumn } from '@src/table'
import { ITableProps } from '@src/table/types'
import { StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import styled from 'styled-components'

// Components
export const Wrapper = styled.div`
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
  rowSelection: genArgType(
    'rowSelection.selectedRowKeys - an array of selected rows<br/>\
      rowSelection.onChange - controlled handler<br/>\
      rowSelection.type (\'checkbox\' | \'radio\')',
    'object',
    '{}'
  ),
  useAccordion: genArgType('Is needed to use accordion in dataSource', 'boolean', 'false'),
  onDragStart: genArgType('Handler for start of dragging'),
  onDragEnd: genArgType('Handler for end of dragging'),
  useDragDrop: genArgType('Is drag-n-drop enabled', 'boolean', 'false'),
  emptyText: genArgType('Custom ReactElement that will be shown instead of default empty text'),
  groupBy: genArgType('dataIndex of column to group'),
  groupTitleRender: genArgType('Render function for title of group'),
  rowClassName: genArgType('Classname for each row. It can be used to style content (hover, for example)'),
  backgroundPattern: {
    ...genArgType('Background pattern that will be visible on rows with _blendedBackground', 'radio', 'diagonal'),
    options: [undefined, 'diagonal']
  },
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
    dataIndex: 'description'
  }
]

export const generateDataSource = (length: number) => (
  Array.from({ length }, (_, index): BasicRowType & { key: number, details?: { city: string, email: string} } => ({
    name: `Value ${index + 1}`,
    description: `Description ${index + 1}`,
    key: index + 1,
    details: {
      city: `city-${index + 1}`,
      email: `email-${length - index}`
    }
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

const mockCreateColumn = (name: string, width?: number, show = true, hideColumnAvailable = true) => ({
  key: name,
  title: <Locale localizationKey={`table.columnsSettings.columnTitles.${name}`} />,
  dataIndex: name,
  width: `${width}%`,
  show,
  hideColumnAvailable,
  groupingAvailable: true
})

const countries = [
  { label: 'Russian Federation', value: 'Russian Federation' },
  { label: 'China', value: 'China' },
  { label: 'Pakistan', value: 'Pakistan' },
  { label: 'United States', value: 'United States' },
  { label: 'France', value: 'France' },
  { label: 'Germany', value: 'Germany' },
  { label: 'Italy', value: 'Italy' },
  { label: 'Spain', value: 'Spain' },
  { label: 'Brazil', value: 'Brazil' },
  { label: 'Australia', value: 'Australia' }
]

// TODO: remove after migrate to getAvailableOptions
export const legacyCountries = [
  'Russian Federation',
  'China',
  'Pakistan',
  'United States',
  'France',
  'Germany',
  'Italy',
  'Spain',
  'Brazil',
  'Australia'
]

export const columns: TableColumn[] = [
  mockCreateColumn('name', 19, true, false),
  {
    ...mockCreateColumn('country', 13),
    filterType: {
      type: FilterType.Enum,
      operations: [
        {
          operation: FilterOperation.eq
        },
        {
          operation: FilterOperation.neq
        },
        {
          // FIXME UIF: чтобы заработал кастомный фильтр для клиентской фильтрации тут должен быть predicate
          operation: FilterOperation.custom,
          label: 'My custom filter!' // Could be only single, use for server side
          // predicate: (row: any): boolean => {
          //   return row.country === 'ru'
          // }
        }
      ],
      getAvailableOptions: () => Promise.resolve(countries)
    },
    filters: [
      {
        name: 'Longer then 5',
        filter: (element: any): boolean => {
          const text = element.country
          if (text) return text.length > 5
          return false
        }
      },
      {
        name: 'Shorter than 5',
        filter: (element: any): boolean => {
          const text = element.country
          if (text) return text.length < 5
          return false
        }
      }
    ]
  },
  {
    ...mockCreateColumn('age', 10),
    filterType: {
      type: FilterType.Number
    },
    isSortable: true,
    allowMultipleFilters: true,
    filters: [
      {
        name: 'Greater than 18',
        filter: (element: any): boolean => {
          const age = Number(element.age)
          if (age) return age > 18
          return false
        }
      },
      {
        name: 'Less than 60',
        filter: (element: any): boolean => {
          const age = Number(element.age)
          if (age) return age < 60
          return false
        }
      }
    ]
  },
  {
    ...mockCreateColumn('city', 17),
    isSortable: true
  },
  {
    ...mockCreateColumn('date', 18),
    isSortable: true,
    sorter: function (a: any, b: any, isAsc: boolean) {
      const aDate = new Date(a.date).getTime()
      const bDate = new Date(b.date).getTime()
      return isAsc ? aDate - bDate : bDate - aDate
    },
    filterType: {
      type: FilterType.DateRange
    }
  }
]

// TODO: remove after migrate to getAvailableOptions
export const columnsWithLegacyEnumCountries = columns.map((col) => {
  if (col.dataIndex === 'country') {
    return {
      ...col,
      filterType: {
        type: FilterType.Enum,
        getAvailableValues: () => {
          return new Promise(resolve => {
            resolve(legacyCountries)
          })
        }
      }
    }
  }
  return col
})
