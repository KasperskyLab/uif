import { configure } from '@testing-library/react'
import React from 'react'

import { TableColumn, TableRecord } from '..'
import { TableTestingClass } from '../test-utils/TableTestingClass'

configure({ testIdAttribute: 'data-testid' })

type TableRow = TableRecord & { text: string }

const columns: TableColumn<TableRow>[] = [
  { key: 'plain', dataIndex: 'text', title: 'Plain' },
  { key: 'exp', dataIndex: 'text', title: 'Exp', expandableText: true },
  {
    key: 'custom',
    dataIndex: 'text',
    title: 'Custom',
    render: (value: any) => <a data-testid="custom-link" href="#">{value}</a>
  },
  {
    key: 'span',
    dataIndex: 'text',
    title: 'Span',
    render: (value: any) => ({ children: value, props: { colSpan: 2 } })
  }
]

const data: TableRow[] = [
  { key: 'r1', text: 'hello world' },
  { key: 'acc', text: 'accord', accordeon: { title: 'AccTitle', children: 'AccChild' } }
]

const renderTable = () => TableTestingClass.render({ columns, dataSource: data })

describe('Table Reductions module', () => {
  it('should wrap every column title in an ellipsis reducer', () => {
    const table = renderTable()

    expect(table.query('th .hexa-ui-ellipsis')).toBeInTheDocument()
    expect(table.columns.getHeaders().map(h => h.textContent)).toEqual(
      expect.arrayContaining(['Plain', 'Exp', 'Custom', 'Span'])
    )
  })

  it('should wrap a plain cell value in an ellipsis reducer', () => {
    const table = renderTable()

    const cell = table.rows.getCell(0, 0)
    expect(cell?.querySelector('.hexa-ui-ellipsis')).toBeInTheDocument()
    expect(cell?.textContent).toContain('hello world')
  })

  it('should use ExpandableText for a column with expandableText', () => {
    const table = renderTable()

    const cell = table.rows.getCell(0, 1)
    expect(cell?.querySelector('.expandable-gradient')).toBeInTheDocument()
    // The expander mounts only once the text actually overflows. jsdom has no
    // layout, so nothing is ever clipped here and the arrow stays out of the DOM.
    expect(cell?.querySelector('.hexa-ui-expander')).not.toBeInTheDocument()
    expect(cell?.textContent).toContain('hello world')
  })

  it('should preserve a custom render and still wrap it in a reducer', () => {
    const table = renderTable()

    const cell = table.rows.getCell(0, 2)
    expect(cell?.querySelector('[data-testid="custom-link"]')).toBeInTheDocument()
    expect(cell?.querySelector('.hexa-ui-ellipsis')).toBeInTheDocument()
  })

  it('should preserve render-cell-object props (colSpan) while reducing children', () => {
    const table = renderTable()

    const spanCell = table.query('td[colspan="2"]')
    expect(spanCell).toBeInTheDocument()
    expect(spanCell?.querySelector('.hexa-ui-ellipsis')).toBeInTheDocument()
  })

  it('should bypass reduction for accordion rows', () => {
    const table = renderTable()

    const accCell = table.rows.getByKey('acc')?.querySelectorAll('td')[0]
    expect(accCell?.textContent).toContain('accord')
    expect(accCell?.querySelector('.hexa-ui-ellipsis')).not.toBeInTheDocument()
  })

  it('should dispose ResizeObserver on unmount', () => {
    const resizeObserverSpy = jest.spyOn(window, 'ResizeObserver')
    const resizeObserverInstance = {
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn()
    } as const satisfies ResizeObserver
    resizeObserverSpy.mockImplementation(() => resizeObserverInstance)

    try {
      const table = TableTestingClass.render({
        columns: [{ title: 'column', key: 'column', dataIndex: 'value', ellipsis: true }],
        dataSource: [{ key: 1, value: 'Completely arbitrary text' }]
      })
      expect(resizeObserverInstance.observe).toHaveBeenCalled()
      expect(resizeObserverInstance.disconnect).toHaveBeenCalledTimes(0)

      table.unmount()
      expect(resizeObserverInstance.disconnect).toHaveBeenCalled()
    }
    finally {
      resizeObserverSpy.mockRestore()
    }
  })
})
