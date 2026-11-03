import { generateId } from '@helpers/generateId'
import { CodeViewer } from '@src/code-viewer/CodeViewer'
import { DateInputValue, RangeDateInputValue } from '@src/datepicker'
import { Notification } from '@src/notification'
import {
  QuickFilter as QuickFilterComponent,
  QuickFilterProps
} from '@src/quick-filter'
import { tableColumns, tableDataSource } from '@src/quick-filter/stories/mocks'
import { Table, TablePresetsProp } from '@src/table'
import { isFilterConfig } from '@src/table/modules/Filters/helpers'
import {
  FilterConfig,
  FilterOperation,
  FilterType,
  UnitedFilter
} from '@src/table/modules/Filters/types'
import { isAfter, isBefore, isSameDay } from 'date-fns'
import isEqual from 'lodash/isEqual'
import React, { useCallback, useMemo, useState } from 'react'

import { StatusOkOutline, StatusWarningOutline } from '@kaspersky/hexa-ui-icons/16'

import { presetsWithExternalFiltersExample } from './presetsCodeExample'

type Row = typeof tableDataSource[number]

type QuickFiltersState = {
  status: string[],
  dataType: string,
  category: string[],
  tags: string[],
  availability: string[],
  date?: DateInputValue,
  dateRange?: RangeDateInputValue
}

const filterMappings = {
  status: {
    Enabled: true,
    Disabled: false
  } as Record<string, boolean>,
  dataType: {
    JSON: 'JSON',
    XML: 'XML',
    HTML: 'HTML',
    CSV: 'CSV',
    Binary: 'Binary'
  } as Record<string, string>,
  category: {
    System: 'System',
    Storage: 'Storage',
    Cache: 'Cache',
    Balancing: 'Balancing',
    Security: 'Security'
  } as Record<string, string>,
  tags: {
    Security: 'Security',
    Log: 'Log',
    Backup: 'Backup',
    Performance: 'Performance',
    Traffic: 'Traffic'
  } as Record<string, string>,
  availability: {
    Available: true,
    Restricted: false
  } as Record<string, boolean>
}

const initialQuickFilters: QuickFiltersState = {
  status: ['All'],
  dataType: 'All',
  category: ['All'],
  tags: ['Security', 'Log', 'Backup', 'Performance', 'Traffic'],
  availability: ['Available', 'Restricted']
}

// Храним строковые значения выбранных опций.
// Они отображаются в чипсах и сохраняются в пресетах.
const toTableFilters = (
  filters: QuickFiltersState
): FilterConfig[] => {
  const result: FilterConfig[] = [
    {
      name: 'quick.status',
      type: FilterType.Enum,
      condition: FilterOperation.cont_or,
      value: [...filters.status]
    },
    {
      name: 'quick.dataType',
      type: FilterType.Text,
      condition: FilterOperation.eq,
      value: filters.dataType
    },
    {
      name: 'quick.category',
      type: FilterType.Enum,
      condition: FilterOperation.cont_or,
      value: [...filters.category]
    },
    {
      name: 'quick.tags',
      type: FilterType.Enum,
      condition: FilterOperation.cont_or,
      value: [...filters.tags]
    },
    {
      name: 'quick.availability',
      type: FilterType.Enum,
      condition: FilterOperation.cont_or,
      value: [...filters.availability]
    }
  ]

  if (filters.date != null) {
    result.push({
      name: 'quick.date',
      type: FilterType.DateTime,
      condition: FilterOperation.eq,
      value: new Date(filters.date).getTime()
    })
  }

  const [from, to] = filters.dateRange ?? [null, null]

  if (from != null) {
    result.push({
      name: 'quick.dateRangeFrom',
      type: FilterType.DateTime,
      condition: FilterOperation.gt,
      value: new Date(from).getTime()
    })
  }

  if (to != null) {
    result.push({
      name: 'quick.dateRangeTo',
      type: FilterType.DateTime,
      condition: FilterOperation.lt,
      value: new Date(to).getTime()
    })
  }

  return result
}

const fromTableFilters = (
  tableFilters: UnitedFilter<Row>[]
): QuickFiltersState => {
  const filters = tableFilters.filter(isFilterConfig)

  const getValue = (name: string) => (
    filters.find(filter => filter.name === name)?.value
  )

  const getSelectedValues = (
    name: string,
    fallback: string[]
  ): string[] => {
    const value = getValue(name)

    return Array.isArray(value)
      ? value.map(String)
      : [...fallback]
  }

  const dateValue = getValue('quick.date')
  const fromValue = getValue('quick.dateRangeFrom')
  const toValue = getValue('quick.dateRangeTo')

  return {
    status: getSelectedValues('quick.status', initialQuickFilters.status),
    dataType: String(
      getValue('quick.dataType') ?? initialQuickFilters.dataType
    ),
    category: getSelectedValues(
      'quick.category',
      initialQuickFilters.category
    ),
    tags: getSelectedValues('quick.tags', initialQuickFilters.tags),
    availability: getSelectedValues(
      'quick.availability',
      initialQuickFilters.availability
    ),
    date: typeof dateValue === 'number'
      ? new Date(dateValue)
      : undefined,
    dateRange: [
      typeof fromValue === 'number' ? new Date(fromValue) : null,
      typeof toValue === 'number' ? new Date(toValue) : null
    ]
  }
}

const initialTableFilters = toTableFilters(initialQuickFilters)

const presets: TablePresetsProp<Row> = {
  presets: [
    {
      id: 'all',
      name: 'All records',
      default: true,
      system: true,
      settings: {
        filters: initialTableFilters
      }
    },
    {
      id: 'enabled-json',
      name: 'Enabled JSON',
      settings: {
        filters: toTableFilters({
          ...initialQuickFilters,
          status: ['Enabled'],
          dataType: 'JSON'
        })
      }
    }
  ],
  onCreatePreset: async preset => ({
    ...preset,
    id: generateId()
  }),
  onUpdatePreset: async preset => preset,
  onDeletePreset: async () => {},
  onPresetSelected: async () => {},
  onViewSelected: async () => {}
}

export const WithTableExample = (
  props: Omit<QuickFilterProps, 'filters'>
) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])
  const [tableFilters, setTableFilters] = useState<UnitedFilter<Row>[]>(
    initialTableFilters
  )

  const filters = useMemo(
    () => fromTableFilters(tableFilters),
    [tableFilters]
  )

  // В том числе получает фильтры, восстановленные из пресета.
  const handleTableFiltersChange = useCallback(
    (nextFilters: UnitedFilter<Row>[]) => {
      setTableFilters(previous => (
        isEqual(previous, nextFilters)
          ? previous
          : nextFilters
      ))
    },
    []
  )

  const handleFilterChange = <K extends keyof QuickFiltersState>(
    filterKey: K,
    value: QuickFiltersState[K]
  ) => {
    setTableFilters(previous => {
      const currentQuickFilters = fromTableFilters(previous)
      const nextQuickFilters = {
        ...currentQuickFilters,
        [filterKey]: value
      }

      // Сохраняем другие фильтры таблицы, если они есть.
      const otherFilters = previous.filter(filter => (
        !isFilterConfig(filter) || !filter.name.startsWith('quick.')
      ))

      return [
        ...otherFilters,
        ...toTableFilters(nextQuickFilters)
      ]
    })
  }

  const filteredData = useMemo(() => (
    tableDataSource.filter(row => {
      const statusMatch = filters.status.includes('All') ||
        filters.status.some(
          value => row.status === filterMappings.status[value]
        )

      const dataTypeMatch = filters.dataType === 'All' ||
        row.dataType === filterMappings.dataType[filters.dataType]

      const categoryMatch = filters.category.includes('All') ||
        filters.category.some(
          value => row.category === filterMappings.category[value]
        )

      const tagsMatch = filters.tags.some(
        value => row.tags.some(
          tag => tag === filterMappings.tags[value]
        )
      )

      const availabilityMatch = filters.availability.some(
        value => row.availability === filterMappings.availability[value]
      )

      const rowDate = new Date(row.date)
      const filterDate = filters.date != null
        ? new Date(filters.date)
        : null

      const dateMatch = !filterDate || isSameDay(rowDate, filterDate)

      const [startDate, endDate] = filters.dateRange ?? [null, null]

      const dateRangeMatch =
        (startDate == null || isAfter(rowDate, new Date(startDate))) &&
        (endDate == null || isBefore(rowDate, new Date(endDate)))

      return statusMatch &&
        dataTypeMatch &&
        categoryMatch &&
        tagsMatch &&
        availabilityMatch &&
        dateMatch &&
        dateRangeMatch
    })
  ), [filters])

  const mockedFiltersForTable: QuickFilterProps['filters'] = [
    {
      label: 'Status',
      component: 'segmented-button',
      value: filters.status,
      onChange: value => handleFilterChange('status', value),
      size: 'large',
      items: [
        { text: 'All', value: 'All' },
        { text: 'Enabled', value: 'Enabled' },
        { text: 'Disabled', value: 'Disabled' }
      ],
      testId: 'status-test-id',
      klId: 'status-kl-id'
    },
    {
      label: 'Data type',
      component: 'select',
      width: '360px',
      value: filters.dataType,
      onChange: value => handleFilterChange('dataType', value as string),
      options: [
        { label: 'All', value: 'All' },
        { label: 'JSON', value: 'JSON' },
        { label: 'XML', value: 'XML' },
        { label: 'HTML', value: 'HTML' },
        { label: 'CSV', value: 'CSV' },
        { label: 'Binary', value: 'Binary' }
      ],
      testId: 'data-type-test-id',
      klId: 'data-type-kl-id'
    },
    {
      label: 'Category',
      component: 'toggle-button-group',
      value: filters.category,
      onChange: value => handleFilterChange('category', value),
      items: [
        { text: 'All', value: 'All' },
        { text: 'System', value: 'System' },
        { text: 'Storage', value: 'Storage' },
        { text: 'Cache', value: 'Cache' },
        { text: 'Balancing', value: 'Balancing' },
        { text: 'Security', value: 'Security' }
      ],
      testId: 'category-test-id',
      klId: 'category-kl-id'
    },
    {
      label: 'Tags',
      component: 'select',
      mode: 'tags',
      value: filters.tags,
      onChange: value => handleFilterChange('tags', value as string[]),
      options: [
        { label: 'Security', value: 'Security' },
        { label: 'Log', value: 'Log' },
        { label: 'Backup', value: 'Backup' },
        { label: 'Performance', value: 'Performance' },
        { label: 'Traffic', value: 'Traffic' }
      ],
      testId: 'tags-test-id',
      klId: 'tags-kl-id'
    },
    {
      label: 'Availability',
      component: 'toggle-button-group',
      value: filters.availability,
      onChange: value => handleFilterChange('availability', value),
      items: [
        {
          text: 'Available',
          value: 'Available',
          mode: 'grass',
          iconBefore: [<StatusOkOutline key="ok-icon" />]
        },
        {
          text: 'Restricted',
          value: 'Restricted',
          mode: 'yellow',
          iconBefore: [<StatusWarningOutline key="warning-icon" />]
        }
      ],
      testId: 'availability-test-id',
      klId: 'availability-kl-id'
    },
    {
      label: 'Date',
      component: 'date-picker',
      value: filters.date,
      onChange: value => handleFilterChange('date', value),
      testId: 'date-test-id',
      klId: 'date-kl-id'
    },
    {
      label: 'Date Range',
      component: 'range-picker',
      value: filters.dateRange,
      onChange: value => handleFilterChange('dateRange', value),
      testId: 'date-range-test-id',
      klId: 'date-range-kl-id'
    }
  ]

  return (
    <>
      <Notification />

      <QuickFilterComponent
        {...props}
        filters={mockedFiltersForTable}
      />

      <Table<Row>
        columns={tableColumns}
        dataSource={filteredData}
        externalFilters={tableFilters}
        onFiltersChange={handleTableFiltersChange}
        isServerFiltering
        useFiltersSidebar
        presets={presets}
        resizingMode="scroll"
        toolbar={{ showSearch: true }}
        rowSelection={{
          selectedRowKeys,
          onChange: setSelectedRowKeys
        }}
      />
      <CodeViewer<{ javascript: [] }>
        readonly
        language="javascript"
        initialValue={presetsWithExternalFiltersExample}
        width={1300}
        height={700}
        lineWrapping
      />
    </>
  )
}