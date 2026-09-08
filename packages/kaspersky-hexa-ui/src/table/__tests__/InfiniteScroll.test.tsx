import { TableRecord } from '@src/table'
import {
  act,
  configure,
  fireEvent,
  screen,
  waitFor
} from '@testing-library/react'
import React from 'react'

import { TableColumn } from '..'
import { generatedData, tableColumns } from '../__mocks__/filtersMockData'
import { TableTestingClass, TestTable } from '../test-utils/TableTestingClass'

configure({ testIdAttribute: 'data-testid' })

jest.setTimeout(15000)

type TableRow = TableRecord & { fullname?: string }

const columns: TableColumn<TableRow>[] = [{ key: 'fullname', dataIndex: 'fullname', title: 'Name' }]
const initialRows: TableRow[] = [{ key: 'init', fullname: 'Init' }]

const mockIntersectionObserver = () => {
  let triggerIntersect: () => void = () => {}
  class MockIO {
    constructor (private cb: IntersectionObserverCallback) {}
    observe = () => {
      triggerIntersect = () => this.cb([{ isIntersecting: true }] as any, this as any)
    }
    unobserve = jest.fn()
    disconnect = jest.fn()
  }
  const prev = window.IntersectionObserver
  window.IntersectionObserver = MockIO as any
  return {
    intersect: () => act(() => triggerIntersect()),
    restore: () => { window.IntersectionObserver = prev }
  }
}

describe('Table InfiniteScroll module', () => {
  it('should not update state after unmount when the page getter resolves late', async () => {
    let triggerIntersect: () => void = () => {}
    class MockIntersectionObserver {
      constructor (private cb: IntersectionObserverCallback) {}
      observe = () => {
        triggerIntersect = () => this.cb([{ isIntersecting: true }] as any, this as any)
      }
      unobserve = jest.fn()
      disconnect = jest.fn()
    }
    const prevIO = window.IntersectionObserver
    window.IntersectionObserver = MockIntersectionObserver as any

    let resolvePage: (rows: unknown[]) => void = () => {}
    const pageGetter = jest.fn(() => new Promise<any[]>((res) => { resolvePage = res }))

    const errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {})

    try {
      const table = TableTestingClass.render({
        dataSource: generatedData,
        columns: tableColumns,
        pagination: { infiniteScrollPageGetter: pageGetter }
      })

      act(() => { triggerIntersect() })
      expect(pageGetter).toHaveBeenCalled()

      table.unmount()

      await act(async () => {
        resolvePage([{ key: 99, name: 'late', description: 'late' }])
        await Promise.resolve()
      })

      const hasUnmountedWarning = errorSpy.mock.calls.some((args) =>
        String(args[0]).includes('unmounted'))
      expect(hasUnmountedWarning).toBe(false)
    } finally {
      errorSpy.mockRestore()
      window.IntersectionObserver = prevIO
    }
  })

  it('should load and append the next page when the sentinel intersects', async () => {
    const io = mockIntersectionObserver()
    const pageGetter = jest.fn(async (page: number) => (page < 2 ? [{ key: `p${page}`, fullname: `Row ${page}` }] : []))

    try {
      const table = TableTestingClass.render({
        columns,
        dataSource: initialRows,
        pagination: { infiniteScrollPageGetter: pageGetter }
      })
      expect(table.rows.getCount()).toBe(1)

      io.intersect()

      await waitFor(() => expect(table.rows.getByKey('p1')).not.toBeNull())
      expect(pageGetter).toHaveBeenCalledWith(1)
      expect(table.rows.getCount()).toBe(2)
    } finally {
      io.restore()
    }
  })

  it('should show the end-of-table message when the page getter returns no rows', async () => {
    const io = mockIntersectionObserver()
    const pageGetter = jest.fn(async () => [])

    try {
      TableTestingClass.render({
        columns,
        dataSource: initialRows,
        pagination: { infiniteScrollPageGetter: pageGetter },
        infiniteScrollEndTableText: 'No more rows'
      })

      io.intersect()

      expect(await screen.findByText('No more rows')).toBeInTheDocument()
    } finally {
      io.restore()
    }
  })

  it('should show an error with retry, and recover when retry succeeds', async () => {
    const io = mockIntersectionObserver()
    let calls = 0
    const pageGetter = jest.fn(async () => {
      calls += 1
      if (calls === 1) throw new Error('boom')
      if (calls === 2) return [{ key: 'recovered', fullname: 'Recovered' }]
      return [] // затем конец таблицы, чтобы цикл догрузки не крутился бесконечно
    })
    const errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {})

    try {
      const table = TableTestingClass.render({
        columns,
        dataSource: initialRows,
        pagination: { infiniteScrollPageGetter: pageGetter },
        infiniteScrollErrorText: 'Load failed',
        infiniteScrollRetryText: 'Retry'
      })

      io.intersect()

      expect(await screen.findByText('Load failed')).toBeInTheDocument()

      fireEvent.click(screen.getByText('Retry'))

      await waitFor(() => expect(table.rows.getByKey('recovered')).not.toBeNull())
      expect(screen.queryByText('Load failed')).not.toBeInTheDocument()
      expect(pageGetter.mock.calls.length).toBeGreaterThanOrEqual(2)
    } finally {
      errorSpy.mockRestore()
      io.restore()
    }
  })

  it('should render a plain table without a sentinel when no page getter is provided', () => {
    const table = TableTestingClass.render({ columns, dataSource: initialRows })

    expect(table.rows.getCount()).toBe(1)
    expect(screen.queryByText('No more rows')).not.toBeInTheDocument()
  })

  it('should reset loaded infinite-scroll rows when the dataSource changes', async () => {
    const io = mockIntersectionObserver()
    let calls = 0
    const pageGetter = jest.fn(async () => {
      calls += 1
      return calls === 1 ? [{ key: 'loaded', fullname: 'Loaded' }] : []
    })

    try {
      const table = TableTestingClass.render({
        columns,
        dataSource: initialRows,
        pagination: { infiniteScrollPageGetter: pageGetter }
      })

      io.intersect()
      await table.rows.findByKey('loaded')

      table.rerender(
        <TestTable columns={columns} dataSource={[{ key: 'fresh', fullname: 'Fresh' }]} pagination={{ infiniteScrollPageGetter: pageGetter }} />
      )

      await table.rows.findByKey('fresh')
      expect(table.rows.getByKey('loaded')).toBeNull()
    } finally {
      io.restore()
    }
  })
})
