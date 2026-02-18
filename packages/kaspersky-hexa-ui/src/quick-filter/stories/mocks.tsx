import { QuickFilterProps } from '@src/quick-filter'
import { Status } from '@src/status'
import { TagReductionGroup } from '@src/tag/TagReductionGroup'
import { Toggle } from '@src/toggle'
import React from 'react'

import { StatusOkOutline, StatusWarningOutline } from '@kaspersky/hexa-ui-icons/16'

export const mockedFilters: QuickFilterProps['filters'] = [
  {
    label: 'Filter',
    component: 'segmented-button',
    value: ['1'],
    onChange: (e) => e,
    size: 'large',
    items: [{ text: 'Quick', value: '1' }, { text: 'Full', value: '2' }],
    testId: 'filter-test-id',
    klId: 'filter-kl-id'
  },
  {
    label: 'Importance',
    component: 'toggle-button-group',
    value: ['3', '4'],
    onChange: (e) => e,
    items: [
      { text: 'None', value: '1' },
      { text: 'Very low', value: '2' },
      { text: 'Low', value: '3' },
      { text: 'Average', value: '4' },
      { text: 'High', value: '5' },
      { text: 'Very high', value: '6' }
    ],
    testId: 'importance-test-id',
    klId: 'importance-kl-id'
  },
  {
    label: 'Installation status',
    component: 'select',
    value: '2',
    options: [{ label: 'Any', value: '1' }, { label: 'Planned', value: '2' }, { label: 'Installed', value: '3' }],
    width: '180px',
    testId: 'installation-status-test-id',
    klId: 'installation-status-kl-id'
  },
  {
    label: 'Status (disabled)',
    component: 'select',
    disabled: true,
    value: '1',
    options: [{ label: 'Any', value: '1' }, { label: 'Planned', value: '2' }, { label: 'Done', value: '3' }],
    testId: 'status-disabled-test-id',
    klId: 'status-disabled-kl-id'
  },
  {
    label: 'Date',
    component: 'date-picker',
    testId: 'date-test-id',
    klId: 'date-kl-id'
  },
  {
    label: 'Date Range',
    component: 'range-picker',
    testId: 'date-range-test-id',
    klId: 'date-range-kl-id'
  },
  {
    component: 'toggle',
    children: 'Show full filter',
    testId: 'show-full-filter-test-id',
    klId: 'show-full-filter-kl-id'
  }
]

export const tableColumns = [
  {
    title: 'Status',
    key: 'status',
    dataIndex: 'status',
    render: (value: boolean, _: { [key: string]: unknown }) => (
      <Toggle checked={value} key={value ? 'enabled' : 'disabled'}>{value ? 'Enabled' : 'Disabled'}</Toggle>
    )
  },
  {
    title: 'Network service',
    key: 'network-service',
    dataIndex: 'networkService'
  },
  {
    title: 'Data type',
    key: 'data-type',
    dataIndex: 'dataType'
  },
  {
    title: 'Category',
    key: 'category',
    dataIndex: 'category'
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (value: string[], _: { [key: string]: unknown }) => (
      <TagReductionGroup items={[...value.map((tag) => ({ label: tag }))]} />
    )
  },
  {
    title: 'Availability',
    key: 'availability',
    dataIndex: 'availability',
    render: (value: boolean, _: { [key: string]: unknown }) => (
      value
        ? <Status key="available" icon={<StatusOkOutline key="ok-icon" />} mode="positive" label="Available" />
        : <Status key="restricted" icon={<StatusWarningOutline key="warning-icon" />} mode="medium" label="Restricted" />
    )
  },
  {
    title: 'Date',
    key: 'date',
    dataIndex: 'date'
  }
]

type RowType = {
  status: boolean,
  networkService: string,
  dataType: string,
  category: string,
  tags: string[],
  availability: boolean,
  date: string,
  key: number
}

const networkServices = ['API Gateway', 'Database', 'CDN', 'Load Balancer', 'Firewall'] as const
const dataTypes = ['JSON', 'XML', 'HTML', 'CSV', 'Binary'] as const
const categories = ['System', 'Storage', 'Cache', 'Balancing', 'Security'] as const
const tags = ['Security', 'Log', 'Backup', 'Performance', 'Traffic'] as const

const getRandomElements = <T, >(options: { arr: Readonly<Array<T>>, multipleElements?: boolean }) => {
  const { arr, multipleElements = false } = options
  const sampleSize = multipleElements ? Math.ceil(Math.random() * 2) : 1
  const shuffled = [...arr].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, sampleSize)
}

const generateTableRows = (length = 10) => {
  const startDate = new Date(2025, 0, 1).getTime()
  const endDate = new Date().getTime()

  return Array.from({ length }, (_, index): RowType => {
    const randomTimestamp = startDate + Math.random() * (endDate - startDate)
    const date = new Date(randomTimestamp).toISOString().split('T')[0]

    return {
      status: getRandomElements({ arr: [true, false] })[0],
      networkService: getRandomElements({ arr: networkServices })[0],
      dataType: getRandomElements({ arr: dataTypes })[0],
      category: getRandomElements({ arr: categories })[0],
      tags: getRandomElements({ arr: tags, multipleElements: true }),
      availability: getRandomElements({ arr: [true, false] })[0],
      date,
      key: index + 1
    }
  })
}

export const tableDataSource = generateTableRows()
