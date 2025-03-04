import { QuickFilter as QuickFilterComponent, QuickFilterProps } from '@src/quick-filter'
import { Space } from '@src/space'
import { Table } from '@src/table'
import React, { useEffect, useState } from 'react'

import { StatusOkOutline, StatusWarningOutline } from '@kaspersky/hexa-ui-icons/16'

import { tableColumns, tableDataSource } from './mocks'

const filterMappings: Record<string, any> = {
  status: { 1: 'All', 2: true, 3: false },
  dataType: { 1: 'All', 2: 'JSON', 3: 'XML', 4: 'HTML', 5: 'CSV', 6: 'Binary' },
  category: { 1: 'All', 2: 'System', 3: 'Storage', 4: 'Cache', 5: 'Balancing', 6: 'Security' },
  tags: { 1: 'Security', 2: 'Log', 3: 'Backup', 4: 'Performance', 5: 'Traffic' },
  availability: { 1: true, 2: false }
}

type Filters = {
  status: string[],
  dataType: string,
  category: string[],
  tags: string[],
  availability: string[]
}

export const WithTableExample = (props: Omit<QuickFilterProps, 'filters'>) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])
  const [filteredData, setFilteredData] = useState(tableDataSource)
  const [filters, setFilters] = useState<Filters>({
    status: ['1'],
    dataType: '1',
    category: ['1'],
    tags: ['1', '2', '3', '4', '5'],
    availability: ['1', '2']
  })

  const handleFilterChange = (filterKey: string, value: any) => {
    setFilters((prev) => ({ ...prev, [filterKey]: value }))
  }

  useEffect(() => {
    const newFilteredData = tableDataSource.filter((row) => {
      const statusMatch = filters.status.includes('1') ||
          filters.status.some((val) => row.status === filterMappings.status[val])
      const dataTypeMatch = filters.dataType === '1' ||
          row.dataType === filterMappings.dataType[filters.dataType]
      const categoryMatch = filters.category.includes('1') ||
          filters.category.some((val) => row.category === filterMappings.category[val])
      const tagsMatch = filters.tags.some((val) => row.tags.some((item) => item === filterMappings.tags[val]))
      const availabilityMatch = filters.availability.some((val) => row.availability === filterMappings.availability[val])

      return statusMatch && dataTypeMatch && categoryMatch && tagsMatch && availabilityMatch
    })

    setFilteredData(newFilteredData)
  }, [filters])

  const mockedFiltersForTable: QuickFilterProps['filters'] = [
    {
      label: 'Status',
      component: 'segmented-button',
      value: filters.status,
      onChange: (value) => handleFilterChange('status', value),
      size: 'large',
      items: [{ text: 'All', value: '1' }, { text: 'Enabled', value: '2' }, { text: 'Disabled', value: '3' }],
      testId: 'status-test-id',
      klId: 'status-kl-id'
    },
    {
      label: 'Data type',
      component: 'select',
      width: '360px',
      value: filters.dataType,
      onChange: (value) => handleFilterChange('dataType', value),
      options: [
        { label: 'All', value: '1' },
        { label: 'JSON', value: '2' },
        { label: 'XML', value: '3' },
        { label: 'HTML', value: '4' },
        { label: 'CSV', value: '5' },
        { label: 'Binary', value: '6' }
      ],
      testId: 'data-type-test-id',
      klId: 'data-type-kl-id'
    },
    {
      label: 'Category',
      component: 'segmented-button',
      value: filters.category,
      onChange: (value) => handleFilterChange('category', value),
      size: 'large',
      items: [
        { text: 'All', value: '1' },
        { text: 'System', value: '2' },
        { text: 'Storage', value: '3' },
        { text: 'Cache', value: '4' },
        { text: 'Balancing', value: '5' },
        { text: 'Security', value: '6' }
      ],
      testId: 'category-test-id',
      klId: 'category-kl-id'
    },
    {
      label: 'Tags',
      component: 'select',
      mode: 'tags',
      value: filters.tags,
      onChange: (value) => handleFilterChange('tags', value),
      options: [
        { label: 'Security', value: '1' },
        { label: 'Log', value: '2' },
        { label: 'Backup', value: '3' },
        { label: 'Performance', value: '4' },
        { label: 'Traffic', value: '5' }
      ],
      testId: 'tags-test-id',
      klId: 'tags-kl-id'
    },
    {
      label: 'Availability',
      component: 'segmented-button',
      value: filters.availability,
      onChange: (value) => handleFilterChange('availability', value),
      size: 'large',
      type: 'checkbox',
      items: [
        { text: 'Available', value: '1', mode: 'grass', componentsBefore: [<StatusOkOutline key="ok-icon" />] },
        { text: 'Restricted', value: '2', mode: 'yellow', componentsBefore: [<StatusWarningOutline key="warning-icon" />] }
      ],
      testId: 'availability-test-id',
      klId: 'availability-kl-id'
    }
  ]

  const handleSelectedRowsChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys)
  }

  return (
    <Space gap={16} direction="vertical" align="start" width="100%">
      <QuickFilterComponent {...props} filters={mockedFiltersForTable} />
      <Table
        columns={tableColumns}
        dataSource={filteredData}
        resizingMode="scroll"
        toolbar={{ showSearch: true }}
        rowSelection={{
          selectedRowKeys,
          onChange: handleSelectedRowsChange
        }}
      />
    </Space>
  )
}
