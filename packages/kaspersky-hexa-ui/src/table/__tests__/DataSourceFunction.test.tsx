import { act, configure, screen, waitFor } from '@testing-library/react'
import React from 'react'

import { FilterConfig, Table, TableRef } from '..'
import { generatedData, MockRow, tableColumns, TableMockProps } from '../__mocks__/filtersMockData'
import { FilterOperation, FilterType } from '../modules/Filters'
import { renderServer, spyDataSource } from '../test-utils/renderServer'
import { TableTestingClass, TestTable } from '../test-utils/TableTestingClass'
import { TableDataSourceFunction } from '../types'

configure({ testIdAttribute: 'data-testid' })

// Многошаговые серверные сценарии (несколько циклов debounce + холодный первый рендер)
// не всегда укладываются в дефолтный таймаут jest.
jest.setTimeout(15000)

const TABLE_TEST_ID = 'test-table'
const PAGE_SIZE = 20
const testRows = generatedData.slice(0, 25)

const minimalColumns: TableMockProps['columns'] = [
  { key: 'fullname', dataIndex: 'fullname', title: 'Name' }
]

const renderServerWithRef = (
  props: Partial<TableMockProps> = {},
  dataSourceFunction: TableMockProps['dataSourceFunction'] = spyDataSource()
) => {
  const ref: React.MutableRefObject<TableRef | null> = { current: null }
  const table = TableTestingClass.renderElement(
    <Table
      testId={TABLE_TEST_ID}
      columns={minimalColumns}
      dataSourceFunction={dataSourceFunction}
      pagination={{ pageSize: PAGE_SIZE }}
      {...props}
      ref={ref}
    />,
    { testId: TABLE_TEST_ID }
  )
  return { table, ref, dataSourceFunction }
}

describe('Table dataSourceFunction (server-side data)', () => {
  describe('Initial fetch & args', () => {
    it('should call dataSourceFunction on mount with default paging args', async () => {
      const { dataSourceFunction } = renderServer()

      await waitFor(() => expect(dataSourceFunction).toHaveBeenCalled())

      const args = dataSourceFunction.mock.calls[0][0]
      expect(args.page).toBe(0)
      expect(args.pageSize).toBe(PAGE_SIZE)
      expect(args.params.filters).toEqual([])
      expect(args.params.groupBy).toBe('')
      expect(args.params.searchString).toBe('')
      expect(args.sorting.isAsc).toBe(false)
    })

    it('should render the first page of rows returned by the server', async () => {
      const { table } = renderServer()

      await table.rows.waitForData()

      expect(table.rows.getCount()).toBe(PAGE_SIZE)
      expect(table.rows.getCellText(0, 0)).toBe(testRows[0].fullname)
    })

    it('should expose server totalCount as pagination total', async () => {
      const { table } = renderServer()

      await table.rows.waitForData()
      await waitFor(() => expect(table.pagination.getTotal()).toBe(testRows.length))

      table.pagination.expectTotal(testRows.length, PAGE_SIZE)
    })
  })

  describe('Pagination', () => {
    it('should re-fetch with the next (0-based) page on page change', async () => {
      const { table, dataSourceFunction } = renderServer()
      await table.rows.waitForData()

      table.pagination.next()

      await waitFor(() => expect(dataSourceFunction.mock.lastCall[0].page).toBe(1))
      await waitFor(() => expect(table.rows.getCount()).toBe(testRows.length - PAGE_SIZE))
      expect(table.pagination.isActivePage(2)).toBe(true)
    })

    it('should re-fetch with the new pageSize when it changes', async () => {
      const dataSourceFunction = spyDataSource()
      const { table } = renderServer({}, dataSourceFunction)
      await table.rows.waitForData()

      table.rerender(
        <TestTable
          columns={tableColumns}
          testId={TABLE_TEST_ID}
          dataSource={undefined}
          dataSourceFunction={dataSourceFunction}
          pagination={{ pageSize: 10 }}
        />
      )

      await waitFor(() => expect(dataSourceFunction.mock.lastCall[0].pageSize).toBe(10))
    })

    it('should not call dataSourceFunction when pagination is disabled', async () => {
      const { table, dataSourceFunction } = renderServer({ pagination: false })

      // Ждём заведомо дольше debounce (300 мс) — вызова быть не должно (ранний возврат хука).
      await act(async () => { await new Promise(resolve => setTimeout(resolve, 400)) })

      expect(dataSourceFunction).not.toHaveBeenCalled()
      expect(table.rows.getCount()).toBe(0)
    })

    it('should render exactly the rows returned by the server without client slicing', async () => {
      // Сервер вернул больше строк, чем pageSize — таблица не должна их обрезать.
      const dataSourceFunction: jest.Mock = jest.fn(async () => ({ rows: testRows, totalCount: testRows.length }))
      const { table } = renderServer({}, dataSourceFunction)

      await table.rows.waitForData(testRows.length)

      expect(table.rows.getCount()).toBe(testRows.length)
    })

    it('should not refetch when pagination is controlled via onChange (current not updated)', async () => {
      const onChange = jest.fn()
      const { table, dataSourceFunction } = renderServer({ pagination: { pageSize: PAGE_SIZE, onChange } })
      await table.rows.waitForData()

      const callsBefore = dataSourceFunction.mock.calls.length
      table.pagination.next()

      await waitFor(() => expect(onChange).toHaveBeenCalled())
      await act(async () => { await new Promise(resolve => setTimeout(resolve, 400)) })

      expect(dataSourceFunction.mock.calls.length).toBe(callsBefore)
    })

    it('should reset to the first page when the result shrinks (restoreCurrentWhenDataChange)', async () => {
      const { table, dataSourceFunction } = renderServer({
        toolbar: { showSearch: true },
        pagination: { pageSize: PAGE_SIZE, restoreCurrentWhenDataChange: true }
      })
      await table.rows.waitForData()

      table.pagination.next()
      await waitFor(() => expect(dataSourceFunction.mock.lastCall[0].page).toBe(1))

      table.search.type('Anna Efimova')

      await waitFor(() => expect(table.pagination.getActivePage()).toBe(1))
    })

    it('should recompute the number of pages when totalCount changes between fetches', async () => {
      let rows = testRows
      const dataSourceFunction: TableDataSourceFunction<MockRow> = jest.fn(
        async ({ page, pageSize }) => ({ rows: rows.slice(page * pageSize, (page + 1) * pageSize), totalCount: rows.length })
      )
      const { table, ref } = renderServerWithRef({}, dataSourceFunction)
      await table.rows.waitForData()

      expect(table.pagination.hasPage(2)).toBe(true)
      await waitFor(() => expect(table.pagination.getTotal()).toBe(testRows.length))

      rows = testRows.slice(0, 5)
      act(() => { ref.current?.triggerDataSourceFunction?.() })

      await waitFor(() => expect(table.pagination.getTotal()).toBe(5))
      expect(table.pagination.hasPage(2)).toBe(false)
    })
  })

  // Серверная сортировка (аргументы + порядок) вынесена в Sorting.test.tsx — там она
  // проверяется в общем describe.each для клиентского и серверного режимов.

  describe('Manual refetch', () => {
    it('should re-fetch with the same params via ref.triggerDataSourceFunction()', async () => {
      const { table, ref, dataSourceFunction } = renderServerWithRef()
      await table.rows.waitForData()

      const callsBefore = (dataSourceFunction as jest.Mock).mock.calls.length

      act(() => { ref.current?.triggerDataSourceFunction?.() })

      await waitFor(() =>
        expect((dataSourceFunction as jest.Mock).mock.calls.length).toBeGreaterThan(callsBefore))
      const args = (dataSourceFunction as jest.Mock).mock.lastCall[0]
      expect(args.page).toBe(0)
      expect(args.pageSize).toBe(PAGE_SIZE)
    })

    it('should re-fetch on toolbar refresh button wired to triggerDataSourceFunction', async () => {
      const dataSourceFunction = spyDataSource()
      const ref: React.MutableRefObject<TableRef | null> = { current: null }
      const table = TableTestingClass.renderElement(
        <Table
          testId={TABLE_TEST_ID}
          columns={minimalColumns}
          dataSourceFunction={dataSourceFunction}
          pagination={{ pageSize: PAGE_SIZE }}
          toolbar={{ onRefresh: () => ref.current?.triggerDataSourceFunction?.() }}
          ref={ref}
        />,
        { testId: TABLE_TEST_ID }
      )
      await table.rows.waitForData()

      const callsBefore = dataSourceFunction.mock.calls.length
      const refreshButton = table.toolbar.getRefreshButton()
      expect(refreshButton).toBeInTheDocument()
      act(() => { refreshButton!.click() })

      await waitFor(() => expect(dataSourceFunction.mock.calls.length).toBeGreaterThan(callsBefore))
    })
  })

  describe('patchDataSource & onDataSourceChange', () => {
    it('should apply patchDataSource to server rows before rendering', async () => {
      const patchDataSource: TableMockProps['patchDataSource'] = rows =>
        rows.map(row => ({ ...row, fullname: `★ ${row.fullname}` }))
      const { table } = renderServer({ patchDataSource })

      await table.rows.waitForData()

      expect(table.rows.getCellText(0, 0)).toContain('★')
    })

    it('should call onDataSourceChange with the fetched (patched) page rows', async () => {
      const onDataSourceChange = jest.fn()
      renderServer({ onDataSourceChange })

      await waitFor(() => expect(onDataSourceChange).toHaveBeenCalled())
      const rows = onDataSourceChange.mock.lastCall[0]
      expect(rows).toHaveLength(PAGE_SIZE)
    })

    it('should call onDataSourceChange again on every successful refetch', async () => {
      const onDataSourceChange = jest.fn()
      const { table } = renderServer({ onDataSourceChange })
      await waitFor(() => expect(onDataSourceChange).toHaveBeenCalled())

      const callsBefore = onDataSourceChange.mock.calls.length
      table.pagination.next()

      await waitFor(() => expect(onDataSourceChange.mock.calls.length).toBeGreaterThan(callsBefore))
      expect(onDataSourceChange.mock.lastCall[0]).toHaveLength(testRows.length - PAGE_SIZE)
    })

    it('should not call onDataSourceChange when the fetch fails', async () => {
      const consoleError = jest.spyOn(console, 'error').mockImplementation(() => {})
      const onDataSourceChange = jest.fn()
      const dataSourceFunction = jest.fn().mockRejectedValue(new Error('boom'))
      renderServer({ onDataSourceChange, dataSourceFunction })

      await waitFor(() => expect(consoleError).toHaveBeenCalled())
      expect(onDataSourceChange).not.toHaveBeenCalled()

      consoleError.mockRestore()
    })

    it('should refetch when a non-memoized patchDataSource identity changes', async () => {
      const dataSourceFunction = spyDataSource()
      const { table } = renderServer({ patchDataSource: rows => rows }, dataSourceFunction)
      await table.rows.waitForData()

      const callsBefore = dataSourceFunction.mock.calls.length
      table.rerender(
        <TestTable
          columns={tableColumns}
          testId={TABLE_TEST_ID}
          dataSource={undefined}
          dataSourceFunction={dataSourceFunction}
          pagination={{ pageSize: PAGE_SIZE }}
          patchDataSource={rows => rows}
        />
      )

      await waitFor(() => expect(dataSourceFunction.mock.calls.length).toBeGreaterThan(callsBefore))
    })

    it('should call onDataSourceChange for client data too when both dataSource and dataSourceFunction are set', async () => {
      const clientRow = { ...generatedData[0], key: 'client-only', fullname: 'CLIENT_ONLY' }
      const onDataSourceChange = jest.fn()
      renderServer({ dataSource: [clientRow], onDataSourceChange })

      await waitFor(() => {
        const payloads = onDataSourceChange.mock.calls.map(call => call[0])
        expect(payloads.some(rows => rows.some((r: MockRow) => r.fullname === 'CLIENT_ONLY'))).toBe(true)
        expect(payloads.some(rows => rows.length === PAGE_SIZE)).toBe(true)
      })
    })

    it('should apply a patchDataSource that rewrites row keys', async () => {
      const patchDataSource: TableMockProps['patchDataSource'] = rows =>
        rows.map(row => ({ ...row, key: `patched-${row.key}` }))
      const { table } = renderServer({ patchDataSource })

      await table.rows.waitForData()

      expect(table.rows.getByKey(`patched-${testRows[0].key}`)).not.toBeNull()
      expect(table.rows.getByKey(testRows[0].key)).toBeNull()
    })

    it('should render the patched row count even when it differs from totalCount', async () => {
      const patchDataSource: TableMockProps['patchDataSource'] = rows => rows.slice(0, 3)
      const { table } = renderServer({ patchDataSource })

      await table.rows.waitForData(3)

      // Патч сократил страницу до 3 строк, но total берётся из серверного totalCount.
      expect(table.rows.getCount()).toBe(3)
      await waitFor(() => expect(table.pagination.getTotal()).toBe(testRows.length))
    })
  })

  describe('Loading state', () => {
    it('should show the loader with no rows until the promise resolves, then render rows', async () => {
      let resolveFetch: (value: { rows: MockRow[], totalCount: number }) => void = () => {}
      const dataSourceFunction: TableDataSourceFunction<MockRow> = jest.fn(
        () => new Promise(resolve => { resolveFetch = resolve })
      )
      const { table } = renderServer({ dataSourceFunction, loaderProps: {} })

      await waitFor(() => expect(dataSourceFunction).toHaveBeenCalled())
      expect(table.rows.getCount()).toBe(0)
      expect(table.query('.ant-spin-spinning')).toBeInTheDocument()

      await act(async () => {
        resolveFetch({ rows: testRows.slice(0, PAGE_SIZE), totalCount: testRows.length })
      })

      await table.rows.waitForData()
      expect(table.query('.ant-spin-spinning')).not.toBeInTheDocument()
    })

    it('should show the loader again on a refetch and keep previous rows until it resolves', async () => {
      const resolvers: Array<(value: { rows: MockRow[], totalCount: number }) => void> = []
      const dataSourceFunction: TableDataSourceFunction<MockRow> = jest.fn(
        () => new Promise(resolve => { resolvers.push(resolve) })
      )
      const { table } = renderServer({ dataSourceFunction, loaderProps: {} })

      await waitFor(() => expect(resolvers).toHaveLength(1))
      await act(async () => { resolvers[0]({ rows: testRows.slice(0, PAGE_SIZE), totalCount: testRows.length }) })
      await table.rows.waitForData()
      expect(table.query('.ant-spin-spinning')).not.toBeInTheDocument()

      table.pagination.next()

      await waitFor(() => expect(resolvers).toHaveLength(2))
      expect(table.query('.ant-spin-spinning')).toBeInTheDocument()
      expect(table.rows.getCount()).toBeGreaterThan(0)

      await act(async () => { resolvers[1]({ rows: testRows.slice(PAGE_SIZE), totalCount: testRows.length }) })
      await waitFor(() => expect(table.query('.ant-spin-spinning')).not.toBeInTheDocument())
    })

    it('should apply custom loaderProps (size) to the loader', async () => {
      const dataSourceFunction: TableDataSourceFunction<MockRow> = jest.fn(() => new Promise(() => {}))
      const { table } = renderServer({ dataSourceFunction, loaderProps: { size: 'large' } })

      await waitFor(() => expect(table.query('.ant-spin-lg')).toBeInTheDocument())
    })

    it('should not show emptyText while the first request is pending', async () => {
      let resolveFetch: (value: { rows: MockRow[], totalCount: number }) => void = () => {}
      const dataSourceFunction: TableDataSourceFunction<MockRow> = jest.fn(
        () => new Promise(resolve => { resolveFetch = resolve })
      )
      renderServer({ dataSourceFunction, emptyText: 'Nothing here' })

      await waitFor(() => expect(dataSourceFunction).toHaveBeenCalled())
      expect(screen.queryByText('Nothing here')).not.toBeInTheDocument()

      await act(async () => { resolveFetch({ rows: [], totalCount: 0 }) })
      await waitFor(() => expect(screen.getByText('Nothing here')).toBeInTheDocument())
    })
  })

  describe('Error handling', () => {
    it('should log an error and keep the table empty when dataSourceFunction rejects', async () => {
      const consoleError = jest.spyOn(console, 'error').mockImplementation(() => {})
      const dataSourceFunction = jest.fn().mockRejectedValue(new Error('boom'))
      const { table } = renderServer({ dataSourceFunction })

      await waitFor(() =>
        expect(consoleError).toHaveBeenCalledWith(
          expect.stringContaining('Unable to fetch data'),
          expect.anything()
        ))
      expect(table.rows.getCount()).toBe(0)

      consoleError.mockRestore()
    })

    it('should recover on a subsequent successful fetch after an error', async () => {
      const consoleError = jest.spyOn(console, 'error').mockImplementation(() => {})
      const dataSourceFunction = spyDataSource()
      dataSourceFunction.mockRejectedValueOnce(new Error('boom'))

      const { table, ref } = renderServerWithRef({}, dataSourceFunction)

      await waitFor(() => expect(consoleError).toHaveBeenCalled())
      expect(table.rows.getCount()).toBe(0)

      act(() => { ref.current?.triggerDataSourceFunction?.() })

      await table.rows.waitForData()
      expect(table.rows.getCount()).toBeGreaterThan(0)

      consoleError.mockRestore()
    })

    it('should keep the previously loaded rows when a later refetch fails', async () => {
      const consoleError = jest.spyOn(console, 'error').mockImplementation(() => {})
      const dataSourceFunction = spyDataSource()
      const { table } = renderServer({}, dataSourceFunction)
      await table.rows.waitForData()

      const firstCellBefore = table.rows.getCellText(0, 0)
      dataSourceFunction.mockRejectedValueOnce(new Error('boom'))

      table.pagination.next()

      await waitFor(() => expect(consoleError).toHaveBeenCalled())
      expect(table.rows.getCount()).toBeGreaterThan(0)
      expect(table.rows.getCellText(0, 0)).toBe(firstCellBefore)

      consoleError.mockRestore()
    })

    it('should recover after several consecutive failures once a param changes', async () => {
      const consoleError = jest.spyOn(console, 'error').mockImplementation(() => {})
      const dataSourceFunction = spyDataSource()
      dataSourceFunction.mockRejectedValueOnce(new Error('boom1'))
      dataSourceFunction.mockRejectedValueOnce(new Error('boom2'))

      const { table } = renderServer({ toolbar: { showSearch: true } }, dataSourceFunction)

      await waitFor(() => expect(consoleError).toHaveBeenCalled()) // маунт (boom1) упал
      expect(table.rows.getCount()).toBe(0)

      // Восстановление триггерится не ref-ом, а сменой параметра (поиск). Ждём второй отказ,
      // затем ещё одна смена параметра — уже успешный запрос ('a' есть в большинстве fullname).
      table.search.type('zz')
      await waitFor(() => expect(dataSourceFunction.mock.calls.length).toBeGreaterThanOrEqual(2))

      table.search.type('a')
      await table.rows.waitForData()
      expect(table.rows.getCount()).toBeGreaterThan(0)

      consoleError.mockRestore()
    })

    it('should catch a synchronous throw from dataSourceFunction', async () => {
      const consoleError = jest.spyOn(console, 'error').mockImplementation(() => {})
      const dataSourceFunction = jest.fn(() => { throw new Error('sync boom') })
      const { table } = renderServer({ dataSourceFunction: dataSourceFunction })

      await waitFor(() => expect(consoleError).toHaveBeenCalled())
      expect(table.rows.getCount()).toBe(0)

      consoleError.mockRestore()
    })
  })

  describe('Empty result', () => {
    it('should render the empty state when the server returns no rows', async () => {
      const dataSourceFunction: TableDataSourceFunction<MockRow> = jest.fn(
        async () => ({ rows: [], totalCount: 0 })
      )
      const { table } = renderServer({ dataSourceFunction, emptyText: 'Nothing here' })

      await waitFor(() => expect(dataSourceFunction).toHaveBeenCalled())
      await waitFor(() => expect(screen.getByText('Nothing here')).toBeInTheDocument())

      expect(table.rows.getCount()).toBe(0)
    })
  })

  describe('Combined params', () => {
    it('should combine sorting and pagination in a single request', async () => {
      const { table, dataSourceFunction } = renderServer()
      await table.rows.waitForData()

      await table.sorting.sortBy('fullname', 'asc')
      await waitFor(() => expect(dataSourceFunction.mock.lastCall[0].sorting.isAsc).toBe(true))

      table.pagination.next()

      await waitFor(() => {
        const args = dataSourceFunction.mock.lastCall[0]
        expect(args.page).toBe(1)
        expect(args.sorting.isAsc).toBe(true)
      })
    })

    it('should combine search and sorting params', async () => {
      const { table, dataSourceFunction } = renderServer({ toolbar: { showSearch: true } })
      await table.rows.waitForData()

      table.search.type('a')
      await waitFor(() => expect(dataSourceFunction.mock.lastCall[0].params.searchString).toBe('a'))

      await table.sorting.sortBy('fullname', 'asc')

      await waitFor(() => {
        const args = dataSourceFunction.mock.lastCall[0]
        expect(args.params.searchString).toBe('a')
        expect(args.sorting.isAsc).toBe(true)
      })
    })

    it('should carry accumulated params through a search, sort and clear flow', async () => {
      const { table, dataSourceFunction } = renderServer({ toolbar: { showSearch: true } })
      await table.rows.waitForData()

      table.search.type('a')
      await waitFor(() => expect(dataSourceFunction.mock.lastCall[0].params.searchString).toBe('a'))

      await table.sorting.sortBy('fullname', 'asc')
      await waitFor(() => {
        const args = dataSourceFunction.mock.lastCall[0]
        expect(args.params.searchString).toBe('a')
        expect(args.sorting.isAsc).toBe(true)
      })

      table.search.clear()
      await waitFor(() => {
        const args = dataSourceFunction.mock.lastCall[0]
        expect(args.params.searchString).toBe('')
        expect(args.sorting.isAsc).toBe(true)
      })
    })

    it('should send filters, groupBy, sorting and page together in one request', async () => {
      const filter: FilterConfig = {
        name: 'fullname',
        condition: FilterOperation.cont,
        type: FilterType.Text,
        value: 'a'
      }
      const { table, dataSourceFunction } = renderServer({
        defaultFilters: [filter],
        defaultGroupBy: 'group',
        useFiltersSidebar: true,
        toolbar: { showGrouping: true, showFilterSidebar: true }
      })
      await table.rows.waitForData()

      await table.sorting.sortBy('fullname', 'asc')
      table.pagination.next()

      await waitFor(() => {
        const args = dataSourceFunction.mock.lastCall[0]
        expect(args.params.filters.length).toBeGreaterThan(0)
        expect(args.params.groupBy).toBe('group')
        expect(args.sorting.isAsc).toBe(true)
        expect(args.page).toBe(1)
      })
    })
  })

  describe('Debounce & races (fake timers)', () => {
    it('should not fetch on mount until the debounce window elapses (no leading edge)', async () => {
      jest.useFakeTimers()
      try {
        const dataSourceFunction = spyDataSource()
        TableTestingClass.render({
          testId: TABLE_TEST_ID,
          columns: minimalColumns,
          dataSource: undefined,
          dataSourceFunction,
          pagination: { pageSize: PAGE_SIZE }
        })

        expect(dataSourceFunction).not.toHaveBeenCalled()
        await act(async () => { jest.advanceTimersByTime(299) })
        expect(dataSourceFunction).not.toHaveBeenCalled()

        await act(async () => { jest.advanceTimersByTime(1) })
        expect(dataSourceFunction).toHaveBeenCalledTimes(1)
      } finally {
        jest.useRealTimers()
      }
    })

    it('should coalesce rapid re-fetch triggers into a single request', async () => {
      jest.useFakeTimers()
      try {
        const dataSourceFunction = spyDataSource()
        const ref: React.MutableRefObject<TableRef | null> = { current: null }
        TableTestingClass.renderElement(
          <Table
            testId={TABLE_TEST_ID}
            columns={minimalColumns}
            dataSourceFunction={dataSourceFunction}
            pagination={{ pageSize: PAGE_SIZE }}
            ref={ref}
          />,
          { testId: TABLE_TEST_ID }
        )

        // Маунт запланировал debounced-вызов, но 300 мс ещё не прошло.
        act(() => {
          ref.current?.triggerDataSourceFunction?.()
          ref.current?.triggerDataSourceFunction?.()
          ref.current?.triggerDataSourceFunction?.()
        })
        expect(dataSourceFunction).not.toHaveBeenCalled()

        await act(async () => { jest.advanceTimersByTime(300) })

        expect(dataSourceFunction).toHaveBeenCalledTimes(1)
      } finally {
        jest.useRealTimers()
      }
    })

    it('should cancel the pending debounced fetch on unmount', async () => {
      jest.useFakeTimers()
      try {
        const dataSourceFunction = spyDataSource()
        const table = TableTestingClass.renderElement(
          <Table
            testId={TABLE_TEST_ID}
            columns={minimalColumns}
            dataSourceFunction={dataSourceFunction}
            pagination={{ pageSize: PAGE_SIZE }}
          />,
          { testId: TABLE_TEST_ID }
        )

        // Размонтируем до истечения debounce — запланированный вызов должен отмениться.
        table.unmount()
        await act(async () => { jest.advanceTimersByTime(300) })

        expect(dataSourceFunction).not.toHaveBeenCalled()
      } finally {
        jest.useRealTimers()
      }
    })

    it('should re-fetch when a new dataSourceFunction identity is passed', async () => {
      const first = spyDataSource()
      const { table } = renderServer({}, first)
      await table.rows.waitForData()

      const second = spyDataSource()
      table.rerender(
        <TestTable
          columns={tableColumns}
          testId={TABLE_TEST_ID}
          dataSource={undefined}
          dataSourceFunction={second}
          pagination={{ pageSize: PAGE_SIZE }}
        />
      )

      await waitFor(() => expect(second).toHaveBeenCalled())
    })

    it('should apply the last-resolved response even if it is stale (no in-flight cancellation)', async () => {
      // Документирует текущее ограничение: гонка ответов не защищена, побеждает
      // последний разрезолвившийся Promise, а не последний инициированный запрос.
      jest.useFakeTimers()
      try {
        const rowsByCall: MockRow[][] = [
          [{ ...testRows[0], key: 'call-1', fullname: 'CALL_1' }],
          [{ ...testRows[1], key: 'call-2', fullname: 'CALL_2' }]
        ]
        const resolvers: Array<() => void> = []
        let callIdx = 0
        const dataSourceFunction: TableDataSourceFunction<MockRow> = jest.fn(() => {
          const idx = callIdx++
          return new Promise(resolve => {
            resolvers[idx] = () => resolve({ rows: rowsByCall[idx], totalCount: 1 })
          })
        })

        const ref: React.MutableRefObject<TableRef | null> = { current: null }
        const table = TableTestingClass.renderElement(
          <Table
            testId={TABLE_TEST_ID}
            columns={minimalColumns}
            dataSourceFunction={dataSourceFunction}
            pagination={{ pageSize: PAGE_SIZE }}
            ref={ref}
          />,
          { testId: TABLE_TEST_ID }
        )

        await act(async () => { jest.advanceTimersByTime(300) }) // стартует запрос #0
        expect(dataSourceFunction).toHaveBeenCalledTimes(1)

        act(() => { ref.current?.triggerDataSourceFunction?.() })
        await act(async () => { jest.advanceTimersByTime(300) }) // стартует запрос #1
        expect(dataSourceFunction).toHaveBeenCalledTimes(2)

        // Свежий (#1) резолвится первым, устаревший (#0) — последним.
        await act(async () => { resolvers[1]() })
        await act(async () => { resolvers[0]() })

        // Итог — устаревшие данные запроса #0 перезаписали свежие.
        expect(table.rows.getCellText(0, 0)).toContain('CALL_1')
      } finally {
        jest.useRealTimers()
      }
    })

    it('should fetch once with the latest params when several change within the debounce window', async () => {
      jest.useFakeTimers()
      try {
        const dataSourceFunction = spyDataSource()
        const table = TableTestingClass.render({
          testId: TABLE_TEST_ID,
          columns: minimalColumns,
          dataSource: undefined,
          dataSourceFunction,
          pagination: { pageSize: PAGE_SIZE }
        })

        const rerenderWithPageSize = (pageSize: number) => table.rerender(
          <TestTable
            testId={TABLE_TEST_ID}
            columns={minimalColumns}
            dataSource={undefined}
            dataSourceFunction={dataSourceFunction}
            pagination={{ pageSize }}
          />
        )
        rerenderWithPageSize(10)
        rerenderWithPageSize(5)

        await act(async () => { jest.advanceTimersByTime(300) })

        expect(dataSourceFunction).toHaveBeenCalledTimes(1)
        expect(dataSourceFunction.mock.lastCall[0].pageSize).toBe(5)
      } finally {
        jest.useRealTimers()
      }
    })

    it('should apply stale page-1 data over fresh page-2 on an out-of-order page race', async () => {
      jest.useFakeTimers()
      try {
        const resolvers: Array<() => void> = []
        const rowsByPage: Record<number, MockRow[]> = {
          0: [{ ...testRows[0], key: 'p0', fullname: 'PAGE_0' }],
          1: [{ ...testRows[1], key: 'p1', fullname: 'PAGE_1' }]
        }
        const dataSourceFunction: TableDataSourceFunction<MockRow> = jest.fn(
          ({ page }) => new Promise(resolve => { resolvers[page] = () => resolve({ rows: rowsByPage[page], totalCount: 2 }) })
        )
        const table = TableTestingClass.render({
          testId: TABLE_TEST_ID,
          columns: minimalColumns,
          dataSource: undefined,
          dataSourceFunction,
          pagination: { pageSize: 1, current: 1 }
        })

        await act(async () => { jest.advanceTimersByTime(300) }) // запрос page 0
        table.rerender(
          <TestTable
            testId={TABLE_TEST_ID}
            columns={minimalColumns}
            dataSource={undefined}
            dataSourceFunction={dataSourceFunction}
            pagination={{ pageSize: 1, current: 2 }}
          />
        )
        await act(async () => { jest.advanceTimersByTime(300) }) // запрос page 1

        // Свежий page-1 резолвится первым, устаревший page-0 — последним.
        await act(async () => { resolvers[1]() })
        await act(async () => { resolvers[0]() })

        expect(table.rows.getCellText(0, 0)).toContain('PAGE_0')
      } finally {
        jest.useRealTimers()
      }
    })
  })

})
