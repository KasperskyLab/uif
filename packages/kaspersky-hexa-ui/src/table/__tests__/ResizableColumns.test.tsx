import React from 'react'

import { generatedData, tableColumns } from '../__mocks__/filtersMockData'
import { getPersistentStorageValue, updatePersistentStorage } from '../helpers/persistentStorage/persistentStorage'
import { TableTestingClass, TestTable } from '../test-utils/TableTestingClass'

const STORAGE_KEY = 'resizable-columns-storage-test'

describe('ResizableColumns', () => {
  beforeEach(() => {
    localStorage.clear()

    window.ResizeObserver = jest.fn((callback) => ({
      observe: jest.fn(() => {
        callback([
          {
            contentRect: {
              width: 1000,
              height: 500
            }
          }
        ])
      }),
      unobserve: jest.fn(),
      disconnect: jest.fn()
    })) as any
  })

  afterEach(() => {
    localStorage.clear()
  })

  it('should keep saved column width after table data is restored', async () => {
    updatePersistentStorage({
      storageKey: STORAGE_KEY,
      featureKey: 'columns',
      updatedValue: {
        fullname: {
          width: 300,
          isUserDefinedWidth: true
        }
      }
    })

    const table = TableTestingClass.render({
      columns: tableColumns,
      dataSource: generatedData,
      storageKey: STORAGE_KEY,
      resizingMode: 'last'
    })

    expect(getPersistentStorageValue({ storageKey: STORAGE_KEY, featureKey: 'columns' })?.fullname?.width).toBe(300)
    expect(table.columns.getWidthFromColgroup()).toBe(300)

    table.columns.resize(0, 80)

    expect(getPersistentStorageValue({ storageKey: STORAGE_KEY, featureKey: 'columns' })?.fullname?.width).toBe(380)
    expect(table.columns.getWidthFromColgroup()).toBe(380)

    table.rerender(
      <TestTable
        columns={tableColumns}
        storageKey={STORAGE_KEY}
        resizingMode="last"
        dataSource={[]}
      />
    )

    table.rerender(
      <TestTable
        columns={tableColumns}
        dataSource={generatedData}
        storageKey={STORAGE_KEY}
        resizingMode="last"
      />
    )

    expect(getPersistentStorageValue({ storageKey: STORAGE_KEY, featureKey: 'columns' })?.fullname?.width).toBe(380)
    expect(table.columns.getWidthFromColgroup()).toBe(380)
  })
})