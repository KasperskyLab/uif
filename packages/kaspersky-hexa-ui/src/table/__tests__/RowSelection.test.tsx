import { configure, waitFor } from '@testing-library/react'
import { Key } from 'react'

import { generatedData, MockRow, tableColumns, TableMockProps } from '../__mocks__/filtersMockData'
import { MODES, renderByMode } from '../test-utils/renderByMode'
import { TableRowSelection } from '../types'

configure({ testIdAttribute: 'data-testid' })

type PaginationMode = 'client' | 'server'

interface TestConfig {
  mode: PaginationMode
  description: string
  expectDeselectedKeys: boolean
  expectManualIsSelectedAll: boolean
}

const testRows = generatedData.slice(0, 25)
const testRowWithSelected = testRows.map((row, i) => i === 3 ? { ...row, _selected: true } : row)
const pageSize = 20
const TABLE_TEST_ID = 'test-table'

const testConfigs: TestConfig[] = [
  { ...MODES[0], expectDeselectedKeys: false, expectManualIsSelectedAll: false },
  { ...MODES[1], expectDeselectedKeys: true, expectManualIsSelectedAll: true }
]

const renderTable = (
  config: TestConfig,
  { rowSelection, ...otherProps }: Partial<TableMockProps> = {},
  disableRowSelection = false,
  data: MockRow[] = testRows
) => {
  const processSelection = jest.fn()
  const { table, ref } = renderByMode(config.mode, data, {
    columns: tableColumns,
    pagination: { pageSize },
    testId: TABLE_TEST_ID,
    rowSelection: disableRowSelection ? undefined : {
      processSelection,
      builtInRowSelection: true,
      ...rowSelection
    },
    ...otherProps
  }, { withRef: true })
  return { processSelection, ref, table }
}

describe.each(testConfigs)('Row Selection - $description', (config) => {
  describe('Basic behavior', () => {
    it('should render row checkboxes when rowSelection is provided', () => {
      const { table } = renderTable(config)
      const checkboxes = table.selection.getCheckboxes()
      expect(checkboxes.length).toBeGreaterThan(0)
    })

    it('should render header checkbox', () => {
      const { table } = renderTable(config)
      expect(table.selection.getHeaderCheckbox()).toBeInTheDocument()
    })

    it('should not render checkboxes when rowSelection is undefined', () => {
      const { table } = renderTable(config, {}, true)
      const checkboxes = table.selection.getCheckboxes()
      expect(checkboxes.length).toBe(0)
    })

    it('should not render header checkbox when hasSelectAll is false', () => {
      const { table } = renderTable(config, { rowSelection: { hasSelectAll: false } })
      expect(table.selection.queryHeaderCheckbox()).not.toBeInTheDocument()
    })
  })

  describe('Single row selection', () => {
    it('should select row on checkbox click', async () => {
      const { processSelection, table } = renderTable(config)
      await table.rows.waitForData()

      const row = testRows[1]
      const rowKey = row.key

      table.selection.toggleRow(rowKey)

      await waitFor(() => {
        const lastCall = processSelection.mock.lastCall[0]
        expect(lastCall.selectedRowKeys).toContain(rowKey)
        expect(lastCall.selectedRows).toContainEqual(row)
        if (config.expectDeselectedKeys) {
          expect(lastCall.deselectedRowKeys).toBeDefined()
          expect(lastCall.deselectedRows).toBeDefined()
        }
      })
    })

    it('should deselect row on second click', async () => {
      const { processSelection, table } = renderTable(config, {}, false, testRowWithSelected)
      await table.rows.waitForData()

      const row = testRowWithSelected[3]
      const rowKey = row.key

      table.selection.toggleRow(rowKey)

      await waitFor(() => {
        const lastCall = processSelection.mock.lastCall[0]
        expect(lastCall.selectedRowKeys).not.toContain(rowKey)
        expect(lastCall.selectedRows).not.toContainEqual(row)

        if (config.mode === 'server') {
          expect(lastCall.deselectedRowKeys).toContain(rowKey)
          expect(lastCall.deselectedRows).toContainEqual(row)
        }
      })
    })
  })

  describe('Disabled rows', () => {
    it('should block selection for row._disabled', async () => {
      const disabledRow1 = { ...testRows[0], _disabled: true }
      const disabledRow2 = { ...testRows[1], _selectionDisabled: true }
      const disabledRow3Key = testRows[2].key
      const normalRowKey = testRows[3].key
      const newTestRows = [disabledRow1, disabledRow2, ...testRows.slice(2)]

      const getCheckboxProps: TableRowSelection['getCheckboxProps'] = (row) => ({ disabled: row.key === disabledRow3Key })
      const { processSelection, table } = renderTable(config, { rowSelection: { getCheckboxProps } }, false, newTestRows)
      await table.rows.waitForData()

      const checkbox1 = table.selection.getRowCheckbox(disabledRow1.key)
      const checkbox2 = table.selection.getRowCheckbox(disabledRow2.key)
      const checkbox3 = table.selection.getRowCheckbox(disabledRow3Key)
      const checkbox4 = table.selection.getRowCheckbox(normalRowKey)

      expect(checkbox1).toBeDisabled()
      expect(checkbox2).toBeDisabled()
      expect(checkbox3).toBeDisabled()
      expect(checkbox4).not.toBeDisabled()

      table.selection.toggleRow(disabledRow1.key)
      table.selection.toggleRow(disabledRow2.key)
      table.selection.toggleRow(disabledRow3Key)

      await waitFor(() => {
        const lastCall = processSelection.mock.lastCall[0]
        expect(lastCall.selectedRowKeys).toHaveLength(0)
        expect(lastCall.selectedRows).toHaveLength(0)
      })
    })
  })

  describe('Radio selection type', () => {
    it('should allow only one row selection', async () => {
      const { processSelection, table } = renderTable(config, {
        rowSelection: { type: 'radio', builtInRowSelection: true }
      })
      await table.rows.waitForData()

      const firstRow = testRows[0]
      const secondRow = testRows[1]

      table.selection.toggleRow(testRows[0].key)
      table.selection.toggleRow(testRows[1].key)

      await waitFor(() => {
        const lastCall = processSelection.mock.lastCall[0]
        expect(lastCall.selectedRowKeys).toHaveLength(1)
        expect(lastCall.selectedRowKeys[0]).toBe(testRows[1].key)
        expect(lastCall.selectedRows).toHaveLength(1)
        expect(lastCall.selectedRows[0]).toEqual(secondRow)
        expect(lastCall.selectedRows).not.toContainEqual(firstRow)
      })
    })
  })

  describe('Bulk operations', () => {
    describe('Select All', () => {
      it('should select all rows and update header checkbox state', async () => {
        const { processSelection, table } = renderTable(config)
        await table.rows.waitForData()

        await table.selection.selectAll()

        await waitFor(() => {
          const lastCall = processSelection.mock.lastCall[0]
          expect(lastCall.isSelectedAll).toBe(true)
          if (config.mode === 'client') {
            expect(lastCall.selectedRowKeys).toHaveLength(testRows.length)
            expect(lastCall.selectedRows).toHaveLength(testRows.length)
          } else {
            expect(lastCall.selectedRowKeys).toHaveLength(testRows.slice(0, pageSize).length)
            expect(lastCall.selectedRows).toHaveLength(testRows.slice(0, pageSize).length)
            expect(lastCall.deselectedRowKeys).toEqual([])
            expect(lastCall.deselectedRows).toEqual([])
          }
        })

        expect(table.selection.getHeaderCheckbox()).toBeChecked()
      })
    })

    describe('Select Current Page', () => {
      it('should select current page rows and not affect next page', async () => {
        const { processSelection, table } = renderTable(config)
        await table.rows.waitForData()

        await table.selection.selectCurrentPage()

        await waitFor(() => {
          const lastCall = processSelection.mock.lastCall[0]

          if (config.mode === 'client') {
            expect(lastCall.selectedRowKeys).toHaveLength(pageSize)
            expect(lastCall.selectedRows).toHaveLength(pageSize)
          } else {
            expect(lastCall.selectedRowKeys.length).toBeGreaterThan(0)
            expect(lastCall.selectedRows.length).toBeGreaterThan(0)
          }

          expect(lastCall.isSelectedAll).toBe(false)
        })

        table.pagination.next()

        await waitFor(() => {
          testRows.slice(pageSize, pageSize * 2).forEach(row => {
            const checkbox = table.selection.getRowCheckbox(row.key)
            expect(checkbox).not.toBeChecked()
          })
        })
      })
    })

    describe('Deselect All', () => {
      it('should reset selection by clicking on checkbox', async () => {
        const { processSelection, table } = renderTable(config, {}, false, testRowWithSelected)

        await table.rows.waitForData()

        await waitFor(() => {
          expect(processSelection).toHaveBeenCalled()
        })

        await table.selection.deselectAll()

        await waitFor(() => {
          const lastCall = processSelection.mock.lastCall[0]
          expect(lastCall.selectedRowKeys).toEqual([])
          expect(lastCall.selectedRows).toEqual([])
          expect(lastCall.isSelectedAll).toBe(false)

          if (config.expectDeselectedKeys) {
            expect(lastCall.deselectedRowKeys).toEqual([])
            expect(lastCall.deselectedRows).toEqual([])
          }
        })
      })

      it('should reset selection by ref.current.resetSelection() and reapply preselected rows by ref.current.setPreselectedRows()', async () => {
        const { processSelection, ref, table } = renderTable(config, {}, false, testRowWithSelected)

        await table.rows.waitForData()

        await waitFor(() => {
          expect(processSelection).toHaveBeenCalled()
        })

        const selectedCall = processSelection.mock.lastCall[0]
        const selectedRowKeys = selectedCall.selectedRowKeys
        const selectedRows = selectedCall.selectedRows

        ref.current?.resetSelection?.()

        await waitFor(() => {
          const lastCall = processSelection.mock.lastCall[0]

          expect(lastCall.selectedRowKeys).toEqual([])
          expect(lastCall.selectedRows).toEqual([])
          expect(lastCall.isSelectedAll).toBe(false)

          if (config.expectDeselectedKeys) {
            expect(lastCall.deselectedRowKeys).toEqual([])
            expect(lastCall.deselectedRows).toEqual([])
          }
        })

        ref.current?.setPreselectedRows?.()

        await waitFor(() => {
          const lastCall = processSelection.mock.lastCall[0]

          expect(lastCall.selectedRowKeys).toEqual(selectedRowKeys)
          expect(lastCall.selectedRows).toEqual(selectedRows)
        })
      })
    })
  })

  describe('DeselectedRowKeys behavior', () => {
    if (config.mode === 'server') {
      it('should manage deselectedRowKeys for server pagination', async () => {
        const { processSelection, table } = renderTable(config)
        await table.rows.waitForData()

        await table.selection.selectAll()

        const row1 = testRows[0]
        const row2 = testRows[1]
        const rowKey1 = row1.key
        const rowKey2 = row2.key

        await waitFor(() => {
          table.selection.toggleRow(rowKey1)
          table.selection.toggleRow(rowKey2)
        })

        await waitFor(() => {
          const lastCall = processSelection.mock.lastCall[0]
          expect(lastCall.deselectedRowKeys).toContain(rowKey1)
          expect(lastCall.deselectedRowKeys).toContain(rowKey2)
          expect(lastCall.deselectedRows).toContainEqual(row1)
          expect(lastCall.deselectedRows).toContainEqual(row2)
          expect(lastCall.selectedRowKeys).toHaveLength(pageSize - 2)
          expect(lastCall.selectedRows).toHaveLength(pageSize - 2)
        })
      })

      it('should keep deselectedRowKeys when page is changed', async () => {
        const { processSelection, table } = renderTable(config)
        await table.rows.waitForData()

        await table.selection.selectAll()

        const deselectedRow = testRows[0]
        const deselectedRowKey = deselectedRow.key

        table.selection.toggleRow(deselectedRowKey)

        table.pagination.goToPage(2)

        table.pagination.goToPage(1)

        await waitFor(() => {
          const lastCall = processSelection.mock.lastCall[0]
          expect(lastCall.deselectedRowKeys).toContain(deselectedRowKey)
          expect(lastCall.deselectedRows).toContainEqual(deselectedRow)
          expect(lastCall.selectedRowKeys).toHaveLength(pageSize - 1)
          expect(lastCall.selectedRows).toHaveLength(pageSize - 1)
        })

        await table.rows.findByKey(deselectedRowKey)
        expect(table.selection.isRowChecked(deselectedRowKey)).toBe(false)
        expect(table.selection.isRowChecked(testRows[1].key)).toBe(true)
      })
    } else {
      it('should have no deselectedRowKeys for client pagination', async () => {
        const { processSelection, table } = renderTable(config)

        const rowKey = testRows[1].key
        table.selection.toggleRow(rowKey)
        table.selection.toggleRow(rowKey)

        await waitFor(() => {
          const lastCall = processSelection.mock.lastCall[0]
          expect(lastCall.deselectedRowKeys).toHaveLength(0)
          expect(lastCall.deselectedRows).toHaveLength(0)
        })
      })
    }
  })
})

describe('Client pagination specific tests', () => {
  const clientConfig = testConfigs[0]
  const smallDataset = generatedData.slice(0, 15)

  it('should automatically calculate isSelectedAll when selecting all rows individually on single page', async () => {
    const { processSelection, table } = renderTable(clientConfig, {}, false, smallDataset)

    smallDataset.forEach(row => {
      table.selection.toggleRow(row.key)
    })

    await waitFor(() => {
      const lastCall = processSelection.mock.lastCall[0]
      expect(lastCall.isSelectedAll).toBe(true)
    })
  })

  it('should preselect rows returned by an async getPreselectedRows', async () => {
    const preselectedKey = smallDataset[2].key as string
    const { table } = renderTable(clientConfig, {
      rowSelection: { getPreselectedRows: async () => [preselectedKey] }
    }, false, smallDataset)

    await table.rows.findByKey(preselectedKey)
    await waitFor(() => expect(table.selection.isRowChecked(preselectedKey)).toBe(true))
    expect(table.selection.isRowChecked(smallDataset[0].key)).toBe(false)
  })
})

describe('Server pagination specific tests', () => {
  const serverConfig = testConfigs[1]

  it('should re-apply getPreselectedRows after a server page change', async () => {
    const getPreselectedRows = jest.fn(async () => [] as string[])
    const { table } = renderTable(serverConfig, { rowSelection: { getPreselectedRows } }, false, testRows)
    await table.rows.waitForData()

    const callsAfterMount = getPreselectedRows.mock.calls.length
    table.pagination.goToPage(2)

    await waitFor(() => expect(getPreselectedRows.mock.calls.length).toBeGreaterThan(callsAfterMount))
  })

  it('should count the server total (not the page size) in the context menu under select-all', async () => {
    const contextMenu = jest.fn(() => [{ type: 'button' as const, key: 'a', label: 'A', testId: 'ctx-a' }])
    const { table } = await renderByMode('server', testRows, {
      columns: tableColumns,
      pagination: { pageSize },
      contextMenu,
      rowSelection: { builtInRowSelection: true }
    })

    await table.selection.selectAll()

    table.contextMenu.openOnRow(testRows[0].key)
    await table.contextMenu.getMenu()
    // «Выбрано N» под select-all считается от серверного total (25), а не от размера страницы (20).
    await waitFor(() => expect(table.contextMenu.getSelectedCount()).toBe(testRows.length))
  })

  it('should preserve a single-row selection across a server page change and back', async () => {
    const { processSelection, table } = renderTable(serverConfig)
    await table.rows.waitForData()

    const row = testRows[0]
    table.selection.toggleRow(row.key)
    await waitFor(() => expect(processSelection.mock.lastCall[0].selectedRowKeys).toContain(row.key))

    table.pagination.next()
    await waitFor(() => expect(table.rows.getByKey(row.key)).toBeNull())

    table.pagination.prev()
    await table.rows.findByKey(row.key)
    expect(table.selection.isRowChecked(row.key)).toBe(true)
  })
})

describe('Tree selection integration', () => {
  const treeData = [
    {
      ...testRows[0],
      key: 'p1',
      children: [
        { ...testRows[1], key: 'c1' },
        { ...testRows[2], key: 'c2' }
      ]
    },
    { ...testRows[3], key: 'leaf' }
  ] as MockRow[]

  it('should select parent and child rows independently (no cascade)', async () => {
    const { table } = renderTable(testConfigs[0], {}, false, treeData)
    await table.rows.waitForData()

    table.rows.clickExpandIcon('p1')
    await table.rows.findByKey('c1')

    // Таблица не каскадит выбор: выбор родителя не выбирает детей автоматически.
    table.selection.toggleRow('p1')
    expect(table.selection.isRowChecked('p1')).toBe(true)
    expect(table.selection.isRowChecked('c1')).toBe(false)

    table.selection.toggleRow('c1')
    expect(table.selection.isRowChecked('c1')).toBe(true)
    expect(table.selection.isRowChecked('p1')).toBe(true)
  })
})
