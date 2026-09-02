import { configure } from '@testing-library/react'

import { generatedData, tableColumns } from '../__mocks__/filtersMockData'
import { modifyColumns } from '../test-utils/helpers'
import { TableTestingClass } from '../test-utils/TableTestingClass'

configure({ testIdAttribute: 'data-testid' })

const data = generatedData.slice(0, 5)

const renderTable = (props = {}) => TableTestingClass.render({
  columns: tableColumns,
  dataSource: data,
  useDragDrop: true,
  ...props
})

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

    expect(table.rows.getByKey(data[0].key)?.querySelector('.drag-handle-container')).toBeInTheDocument()
    expect(table.selection.getRowCheckbox(data[0].key)).toBeInTheDocument()
  })
})
