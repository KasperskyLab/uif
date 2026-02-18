import { LocalizationProvider } from '@design-system/context'
import i18n from '@helpers/localization/i18n'
import { configure, fireEvent, render, screen, waitFor } from '@testing-library/react'
import React from 'react'

import { ITableProps, Table } from '..'
import { createMockDataSourceFunction, generatedData, tableColumns  } from '../__mocks__/filtersMockData'

configure({ testIdAttribute: 'data-testid' })

type PaginationMode = 'client' | 'server'

interface TestConfig {
  mode: PaginationMode
  description: string
  tableProps: ITableProps
  expectDeselectedKeys: boolean
  expectManualIsSelectedAll: boolean
}

const testRows = generatedData.slice(0, 25)
const testRowWithSelected = testRows.map((row, i) => i === 3 ? { ...row, _selected: true } : row)
const pageSize = 10
const TABLE_TEST_ID = 'test-table'

const testConfigs: TestConfig[] = [
  {
    mode: 'client',
    description: 'Client pagination',
    tableProps: {
      columns: tableColumns,
      dataSource: testRows,
      pagination: { pageSize },
      testId: TABLE_TEST_ID
    },
    expectDeselectedKeys: false,
    expectManualIsSelectedAll: false
  },
  {
    mode: 'server',
    description: 'Server pagination',
    tableProps: {
      columns: tableColumns,
      dataSourceFunction: createMockDataSourceFunction(testRows),
      pagination: { pageSize },
      testId: TABLE_TEST_ID
    },
    expectDeselectedKeys: true,
    expectManualIsSelectedAll: true
  }
]

const renderTable = (config: TestConfig, { rowSelection, ...otherProps }: Partial<ITableProps> = {}, disableRowSelection: boolean = false) => {
  const processSelection = jest.fn()
  const props = {
    ...config.tableProps,
    ...otherProps,
    rowSelection: disableRowSelection ? undefined : {
      processSelection,
      builtInRowSelection: true,
      ...rowSelection
    }
  }
  
  const utils = render(<LocalizationProvider i18n={i18n}><Table {...props} /></LocalizationProvider>)
  return { ...utils, processSelection }
}

const waitForTableData = async () => {
  await waitFor(() => {
    const rows = document.querySelectorAll('.ant-table-row')
    expect(rows.length).toBeGreaterThan(0)
  }, { timeout: 5000 })
}

const getCheckboxTestId = (key: string) => `table-row__select-${key}`
const HEADER_CHECKBOX_ID = `${TABLE_TEST_ID}-select-all-checkbox`

const getCheckbox = (id = HEADER_CHECKBOX_ID) => screen.getByTestId(id).querySelector('[role="checkbox"]')!

const clickHeaderCheckbox = async () => {
  fireEvent.click(getCheckbox())
  await waitFor(() => {
    expect(screen.getByTestId('select-all')).toBeInTheDocument()
  }, { timeout: 2000 })
}

const selectSelectAllOption = async () => {
  await clickHeaderCheckbox()
  const selectAllOption = await screen.getByTestId('select-all')
  fireEvent.click(selectAllOption)
}

const selectSelectCurrentPageOption = async () => {
  await clickHeaderCheckbox()
  const selectCurrentPageOption = await screen.findByTestId('select-current-page')
  fireEvent.click(selectCurrentPageOption)
}

const selectDeselectAllOption = async () => {
  await clickHeaderCheckbox()
  const deselectAllOption = await screen.findByTestId('deselect-all')
  fireEvent.click(deselectAllOption)
}

describe.each(testConfigs)('Row Selection - $description', (config) => {
  describe('Basic behavior', () => {
    it('should render row checkboxes when rowSelection is provided', () => {
      const { container } = renderTable(config)
      const checkboxes = container.querySelectorAll('.ant-checkbox-input')
      expect(checkboxes.length).toBeGreaterThan(0)
    })

    it('should render header checkbox', () => {
      renderTable(config)
      expect(getCheckbox()).toBeInTheDocument()
    })

    it('should not render checkboxes when rowSelection is undefined', () => {
      const { container } = renderTable(config, {}, true)
      const checkboxes = container.querySelectorAll('.ant-checkbox-input')
      expect(checkboxes.length).toBe(0)
    })

    it('should not render header checkbox when hasSelectAll is false', () => {
      renderTable(config, { rowSelection: { hasSelectAll: false }})
      expect(screen.queryByTestId(HEADER_CHECKBOX_ID)).not.toBeInTheDocument()
    })
  })

  describe('Single row selection', () => {
    it('should select row on checkbox click', async () => {
      const { processSelection } = renderTable(config)
      await waitForTableData()

      const rowKey = testRows[1].key
      
      fireEvent.click(screen.getByTestId(getCheckboxTestId(rowKey)))
      
      await waitFor(() => {
        const lastCall = processSelection.mock.lastCall[0]
        expect(lastCall.selectedRowKeys).toContain(rowKey)
        if (config.expectDeselectedKeys) {
          expect(lastCall.deselectedRowKeys).toBeDefined()
        }
      })
    })

    it('should deselect row on second click', async () => {
      const { processSelection } = renderTable(config, config.mode === 'client'
        ? { dataSource: testRowWithSelected }
        : { dataSourceFunction: createMockDataSourceFunction(testRowWithSelected) }
      )
      await waitForTableData()
      
      const rowKey = testRows[3].key
      fireEvent.click(screen.getByTestId(getCheckboxTestId(rowKey)))
      
      await waitFor(() => {
        const lastCall = processSelection.mock.lastCall[0]
        expect(lastCall.selectedRowKeys).not.toContain(rowKey)
        
        if (config.mode === 'server') {
          expect(lastCall.deselectedRowKeys).toContain(rowKey)
        }
      })
    })

    it('should block selection for disabled rows', async () => {
      const disabledRow1 = { ...testRows[0], _disabled: true }
      const disabledRow2 = { ...testRows[1], _selectionDisabled: true }
      const newTestRows = [disabledRow1, disabledRow2, ...testRows.slice(2)]
      const { processSelection } = renderTable(config, config.mode === 'client'
        ? { dataSource: newTestRows }
        : { dataSourceFunction: createMockDataSourceFunction(newTestRows) }
      )
      await waitForTableData()
      
      const checkbox1 = screen.getByTestId(getCheckboxTestId(disabledRow1.key))
      const checkbox2 = screen.getByTestId(getCheckboxTestId(disabledRow2.key))
      
      expect(checkbox1).toBeDisabled()
      expect(checkbox2).toBeDisabled()
      
      fireEvent.click(checkbox1)
      fireEvent.click(checkbox2)

      await waitFor(() => {
        const lastCall = processSelection.mock.lastCall[0]
        expect(lastCall.selectedRowKeys).toHaveLength(0)
      })
    })
  })

  describe('Radio selection type', () => {
    it('should allow only one row selection', async () => {
      const { processSelection } = renderTable(config, {
        rowSelection: { type: 'radio', builtInRowSelection: true }
      })
      await waitForTableData()
      
      const firstCheckbox = screen.getByTestId(getCheckboxTestId(testRows[0].key))
      const secondCheckbox = screen.getByTestId(getCheckboxTestId(testRows[1].key))
      
      fireEvent.click(firstCheckbox)
      fireEvent.click(secondCheckbox)
      
      await waitFor(() => {
        const lastCall = processSelection.mock.lastCall[0]
        expect(lastCall.selectedRowKeys).toHaveLength(1)
        expect(lastCall.selectedRowKeys[0]).toBe(testRows[1].key)
      })
    })
  })

  describe('Bulk operations', () => {
    describe('Select All', () => {
      it('should select all rows and update header checkbox state', async () => {
        const { processSelection } = renderTable(config)
        await waitForTableData()
        
        await selectSelectAllOption()
        
        await waitFor(() => {
          const lastCall = processSelection.mock.lastCall[0]
          expect(lastCall.isSelectedAll).toBe(true)
          if (config.mode === 'client') {
            expect(lastCall.selectedRowKeys).toHaveLength(testRows.length)
          } else {
            expect(lastCall.selectedRowKeys).toHaveLength(testRows.slice(0, pageSize).length)
            expect(lastCall.deselectedRowKeys).toEqual([])

          }
        })

        expect(getCheckbox()).toBeChecked()
      })
    })

    describe('Select Current Page', () => {
      it('should select current page rows and not affect next page', async () => {
        const { processSelection } = renderTable(config)
        await waitForTableData()
        
        await selectSelectCurrentPageOption()
        
        await waitFor(() => {
          const lastCall = processSelection.mock.lastCall[0]
          
          if (config.mode === 'client') {
            expect(lastCall.selectedRowKeys).toHaveLength(pageSize)
          } else {
            expect(lastCall.selectedRowKeys.length).toBeGreaterThan(0)
          }
          
          expect(lastCall.isSelectedAll).toBe(false)
        })

        const nextPageButton = screen.getByTitle('Next Page')
        fireEvent.click(nextPageButton)

        await waitFor(() => {
          testRows.slice(pageSize, pageSize * 2).forEach(row => {
            const checkbox = screen.getByTestId(getCheckboxTestId(row.key))
            expect(checkbox).not.toBeChecked()
          })
        })
      })
    })

    describe('Deselect All', () => {
      it('should reset selection', async () => {
        const { processSelection } = renderTable(config, config.mode === 'client'
          ? { dataSource: testRowWithSelected }
          : { dataSourceFunction: createMockDataSourceFunction(testRowWithSelected) }
        )
        
        await waitFor(() => {
          expect(processSelection).toHaveBeenCalled()
        })
        
        await selectDeselectAllOption()
        
        await waitFor(() => {
          const lastCall = processSelection.mock.lastCall[0]
          expect(lastCall.selectedRowKeys).toEqual([])
          expect(lastCall.isSelectedAll).toBe(false)
          
          if (config.expectDeselectedKeys) {
            expect(lastCall.deselectedRowKeys).toEqual([])
          }
        })
      })
    })
  })

  describe('DeselectedRowKeys behavior', () => {
    if (config.mode === 'server') {
      it('should manage deselectedRowKeys for server pagination', async () => {
        const { processSelection } = renderTable(config)
        await waitForTableData()
        
        await selectSelectAllOption()
        
        await waitFor(() => {
          const rowKey1 = testRows[0].key
          const rowKey2 = testRows[1].key
          
          fireEvent.click(screen.getByTestId(getCheckboxTestId(rowKey1)))
          fireEvent.click(screen.getByTestId(getCheckboxTestId(rowKey2)))
        })
        
        await waitFor(() => {
          const lastCall = processSelection.mock.lastCall[0]
          expect(lastCall.deselectedRowKeys).toContain(testRows[0].key)
          expect(lastCall.deselectedRowKeys).toContain(testRows[1].key)
          expect(lastCall.selectedRowKeys).toHaveLength(pageSize - 2)
        })
      })
    } else {
      it('should have no deselectedRowKeys for client pagination', async () => {
        const { processSelection } = renderTable(config)
        
        const rowKey = testRows[1].key
        fireEvent.click(screen.getByTestId(getCheckboxTestId(rowKey)))
        fireEvent.click(screen.getByTestId(getCheckboxTestId(rowKey)))
        
        await waitFor(() => {
          const lastCall = processSelection.mock.lastCall[0]
          expect(lastCall.deselectedRowKeys).toHaveLength(0)
        })
      })
    }
  })

  describe('Edge Cases', () => {
    it('should handle empty table', () => {
      renderTable(config, config.mode === 'client'
        ? { dataSource: [] }
        : { dataSourceFunction: createMockDataSourceFunction([]) }
      )
      expect(getCheckbox()).toBeDisabled()
    })
  })
})

describe('Client pagination specific tests', () => {
  const clientConfig = testConfigs[0]
  const smallDataset = generatedData.slice(0, 15)
  
  it('should automatically calculate isSelectedAll when selecting all rows individually on single page', async () => {
    const { processSelection } = renderTable(clientConfig, {
      dataSource: smallDataset,
      pagination: { pageSize: 20 }
    })
    
    smallDataset.forEach(row => {
      fireEvent.click(screen.getByTestId(getCheckboxTestId(row.key)))
    })
    
    await waitFor(() => {
      const lastCall = processSelection.mock.lastCall[0]
      expect(lastCall.isSelectedAll).toBe(true)
    })
  })
})
