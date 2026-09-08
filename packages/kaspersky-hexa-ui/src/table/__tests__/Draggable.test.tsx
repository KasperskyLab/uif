import { configure } from '@testing-library/react'

import { generatedData, tableColumns } from '../__mocks__/filtersMockData'
import { TableTestingClass } from '../test-utils/TableTestingClass'

configure({ testIdAttribute: 'data-testid' })

const data = generatedData.slice(0, 5)

const renderTable = (props = {}) => TableTestingClass.render({
  columns: tableColumns,
  dataSource: data,
  useDragDrop: true,
  ...props
})

const getDragHandle = (table: TableTestingClass, key: string | number) =>
  table.rows.getByKey(key)?.querySelector('.drag-handle-container')

describe('Table Draggable module', () => {
  it('should reset the global body userSelect on unmount when useDragDrop=true', () => {
    document.body.style.userSelect = 'none'

    try {
      const table = renderTable()

      expect(document.body.style.userSelect).toBe('none')

      table.unmount()

      expect(document.body.style.userSelect).toBe('auto')
    } finally {
      document.body.style.userSelect = ''
    }
  })

  it('should render drag-handle in every row when useDragDrop=true', () => {
    const table = renderTable()

    expect(table.rows.getCount()).toBe(data.length)
    expect(table.queryAll('.drag-handle-container')).toHaveLength(data.length)
  })

  it('should not render drag-handle when useDragDrop=false', () => {
    const table = renderTable({ useDragDrop: false })

    expect(table.queryAll('.drag-handle-container')).toHaveLength(0)
    expect(table.query('.table-draggable')).not.toBeInTheDocument()
  })

  it('should render both the drag handle and the selection checkbox in each row', () => {
    const table = renderTable({ rowSelection: { builtInRowSelection: true } })

    expect(table.query('.table-draggable.table-row-selection')).toBeInTheDocument()
    expect(table.queryAll('.drag-handle-container')).toHaveLength(data.length)

    expect(getDragHandle(table, data[0].key)).toBeInTheDocument()
    expect(table.selection.getRowCheckbox(data[0].key)).toBeInTheDocument()
  })
})

describe('Table Draggable module - non-draggable rows', () => {
  it('should not render a drag handle for a row with _outOfDndContext', () => {
    const outOfDndData = data.map((row, i) => i === 1 ? { ...row, _outOfDndContext: true } : row)
    const table = renderTable({ dataSource: outOfDndData })

    expect(getDragHandle(table, outOfDndData[1].key)).not.toBeInTheDocument()
    expect(getDragHandle(table, outOfDndData[0].key)).toBeInTheDocument()
  })

  it('should not render a drag handle for a row with _disabled', () => {
    const disabledData = data.map((row, i) => i === 1 ? { ...row, _disabled: true } : row)
    const table = renderTable({ dataSource: disabledData })

    expect(getDragHandle(table, disabledData[1].key)).not.toBeInTheDocument()
    expect(getDragHandle(table, disabledData[0].key)).toBeInTheDocument()
  })

  it('should not throw when rendering an empty table with useDragDrop', () => {
    const table = renderTable({ dataSource: [] })

    expect(table.rows.getCount()).toBe(0)
  })
})
