import { TableColumn } from '@src/table'
import { MODES, renderByMode, TableMode } from '@src/table/test-utils/renderByMode'
import { act, configure, render, waitFor } from '@testing-library/react'
import React from 'react'

import { generatedData, tableColumns, TableMockProps } from '../__mocks__/filtersMockData'
import { Search } from '../modules/ToolbarIntegration/Search'

const mockSearchRender = jest.fn()
jest.mock('@src/search', () => {
  const reactActual = jest.requireActual('react')
  return {
    __esModule: true,
    Search: (props: Record<string, any>) => {
      mockSearchRender(props)
      return reactActual.createElement('input', {
        'data-testid': props.testId,
        'kl-id': props.klId,
        value: props.value ?? '',
        onChange: (e: any) => props.onChange?.(e.target.value),
        onKeyDown: (e: any) => { if (e.key === 'Enter') props.onPressEnter?.() }
      })
    }
  }
})

configure({ testIdAttribute: 'data-testid' })

// Серверные сценарии (мок dataSourceFunction + debounce) не укладываются в дефолтный таймаут jest.
jest.setTimeout(15000)

const data = generatedData.slice(0, 25)
const MATCH = data[1]
const NON_MATCH = data[0]

const minimalColumns: TableColumn[] = [{ key: 'fullname', dataIndex: 'fullname', title: 'Name' }]

const renderSearch = (mode: TableMode, props: Partial<TableMockProps> = {}) =>
  renderByMode(mode, data, { columns: tableColumns, toolbar: { showSearch: true }, ...props })

describe('Table Search module', () => {
  it('clears the pending highlight timeout on unmount', () => {
    jest.useFakeTimers()

    const tbody = document.createElement('tbody')
    const querySelector = jest.fn(() => tbody)
    const tableContainer = { querySelector } as unknown as HTMLDivElement

    try {
      const { unmount } = render(
        <Search
          setFilteredRows={jest.fn()}
          setExpandedRowKeys={jest.fn()}
          dataSource={[]}
          enableSearchHighlighting
          tableContainer={tableContainer}
        />
      )

      const props = mockSearchRender.mock.calls[mockSearchRender.mock.calls.length - 1][0]

      act(() => { props.onPressEnter() })
      expect(jest.getTimerCount()).toBeGreaterThanOrEqual(1)

      unmount()

      querySelector.mockClear()
      jest.runOnlyPendingTimers()
      expect(querySelector).not.toHaveBeenCalled()
    } finally {
      jest.useRealTimers()
    }
  })
})

describe.each(MODES)('Table search (client vs server) - $description', ({ mode }) => {
  it('should narrow rows to the search query (server receives searchString)', async () => {
    const { table, dataSourceFunction } = renderSearch(mode)
    await table.rows.waitForData()

    table.search.type('Efimova')
    // Клиентский поиск применяется по Enter, серверный — уже на вводе.
    if (mode === 'client') table.search.submit()

    await waitFor(() => {
      expect(table.rows.getByKey(MATCH.key)).not.toBeNull()
      expect(table.rows.getByKey(NON_MATCH.key)).toBeNull()
    })

    if (mode === 'server') {
      const dsf = dataSourceFunction as jest.Mock
      await waitFor(() => expect(dsf.mock.lastCall?.[0]?.params.searchString).toBe('Efimova'))
    }
  })

  it('should restore rows when the search is cleared', async () => {
    const { table, dataSourceFunction } = renderSearch(mode)
    await table.rows.waitForData()

    table.search.type('Efimova')
    if (mode === 'client') table.search.submit()
    await waitFor(() => expect(table.rows.getByKey(NON_MATCH.key)).toBeNull())

    table.search.clear()
    if (mode === 'client') table.search.submit()
    await waitFor(() => expect(table.rows.getByKey(NON_MATCH.key)).not.toBeNull())

    if (mode === 'server') {
      const dsf = dataSourceFunction as jest.Mock
      await waitFor(() => expect(dsf.mock.lastCall?.[0]?.params.searchString).toBe(''))
    }
  })
})

describe('Table search - server only', () => {
  it('should coalesce rapid keystrokes into a single request', async () => {
    jest.useFakeTimers()
    try {
      const { table, dataSourceFunction } = renderByMode('server', data, {
        columns: minimalColumns,
        toolbar: { showSearch: true }
      })
      const dsf = dataSourceFunction as jest.Mock

      act(() => {
        table.search.type('a')
        table.search.type('ab')
        table.search.type('abc')
      })
      expect(dsf).not.toHaveBeenCalled()

      await act(async () => { jest.advanceTimersByTime(300) })

      expect(dsf).toHaveBeenCalledTimes(1)
      expect(dsf.mock.lastCall?.[0]?.params.searchString).toBe('abc')
    } finally {
      jest.useRealTimers()
    }
  })

  it('should refetch from context but not call onSearch while typing', async () => {
    const onSearch = jest.fn()
    const { table, dataSourceFunction } = renderByMode('server', data, {
      columns: tableColumns,
      toolbar: { showSearch: true },
      onSearch
    })
    await table.rows.waitForData()

    table.search.type('x')

    const dsf = dataSourceFunction as jest.Mock
    await waitFor(() => expect(dsf.mock.lastCall?.[0]?.params.searchString).toBe('x'))
    expect(onSearch).not.toHaveBeenCalled()
  })
})

describe('Table search - client only', () => {
  const lastSearchProps = () => mockSearchRender.mock.calls[mockSearchRender.mock.calls.length - 1][0]

  it('should coalesce keystrokes and filter only once the search is submitted', async () => {
    const { table } = renderSearch('client')
    await table.rows.waitForData()

    table.search.type('Efi')
    table.search.type('Efimova')
    expect(table.rows.getByKey(NON_MATCH.key)).not.toBeNull()

    table.search.submit()
    await waitFor(() => {
      expect(table.rows.getByKey(MATCH.key)).not.toBeNull()
      expect(table.rows.getByKey(NON_MATCH.key)).toBeNull()
    })
  })

  it('should call onSearch with an empty string when the search is cleared', async () => {
    const onSearch = jest.fn()
    renderByMode('client', data, { columns: minimalColumns, toolbar: { showSearch: true }, onSearch })

    act(() => { lastSearchProps().onChange('Efimova') })
    act(() => { lastSearchProps().onClearClick() })

    expect(onSearch).toHaveBeenLastCalledWith('')
  })

  it('should treat regex special characters in the query literally', () => {
    const specialData = [
      { ...data[0], key: 'special', fullname: 'John (Admin' },
      { ...data[1], key: 'plain', fullname: 'Jane Doe' }
    ]
    const { table } = renderByMode('client', specialData, {
      columns: minimalColumns,
      toolbar: { showSearch: true }
    })

    table.search.type('(Admin')
    table.search.submit()

    expect(table.rows.getByKey('special')).not.toBeNull()
    expect(table.rows.getByKey('plain')).toBeNull()
  })

  describe('clientSearchFields', () => {
    const dataSource = [
      { ...data[0], key: 'sales', fullname: 'John Smith', group: 'Sales' },
      { ...data[1], key: 'hr', fullname: 'Jane Admin', group: 'HR' }
    ]

    it('should restrict client search to only the listed clientSearchFields', () => {
      const table = renderSearch('client', { clientSearchFields: ['fullname'], dataSource }).table

      table.search.type('Sales')
      table.search.submit()
      expect(table.rows.getByKey('sales')).toBeNull()
      expect(table.rows.getByKey('hr')).toBeNull()

      table.search.clear()
      table.search.type('John')
      table.search.submit()
      expect(table.rows.getByKey('sales')).not.toBeNull()
      expect(table.rows.getByKey('hr')).toBeNull()
    })

    it('should keep searching all string fields when clientSearchFields is empty', () => {
      const table = renderSearch('client', { clientSearchFields: [], dataSource }).table

      table.search.type('Sales')
      table.search.submit()
      expect(table.rows.getByKey('sales')).not.toBeNull()
      expect(table.rows.getByKey('hr')).toBeNull()
    })
  })
})
