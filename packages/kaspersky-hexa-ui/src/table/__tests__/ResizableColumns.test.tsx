import { fireEvent, render } from '@testing-library/react'
import React from 'react'

import { getPersistentStorageValue, updatePersistentStorage } from '../helpers/persistentStorage/persistentStorage'
import { Table } from '../test-utils/shared'

const STORAGE_KEY = 'resizable-columns-storage-test'

const getRenderedColumnWidth = (container: HTMLElement, columnIndex = 0) => {
  const column = container.querySelectorAll<HTMLTableColElement>('colgroup col')[columnIndex]

  return Number.parseInt(column?.style.width || column?.getAttribute('width') || '0')
}

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
        name: {
          width: 300,
          isUserDefinedWidth: true
        }
      }
    })

    const { container, rerender } = render(
      <Table
        storageKey={STORAGE_KEY}
        resizingMode="last"
      />
    )

    expect(getPersistentStorageValue({ storageKey: STORAGE_KEY, featureKey: 'columns' })?.name?.width).toBe(300)
    expect(getRenderedColumnWidth(container)).toBe(300)

    const resizeHandle = container.querySelector<HTMLElement>('.resizing-handle-container')!

    fireEvent.mouseDown(resizeHandle, { clientX: 0 })
    fireEvent.mouseMove(document, { clientX: 80 })
    fireEvent.mouseUp(document)

    expect(getPersistentStorageValue({ storageKey: STORAGE_KEY, featureKey: 'columns' })?.name?.width).toBe(380)
    expect(getRenderedColumnWidth(container)).toBe(380)

    rerender(
      <Table
        storageKey={STORAGE_KEY}
        resizingMode="last"
        dataSource={[]}
      />
    )

    rerender(
      <Table
        storageKey={STORAGE_KEY}
        resizingMode="last"
      />
    )

    expect(getPersistentStorageValue({ storageKey: STORAGE_KEY, featureKey: 'columns' })?.name?.width).toBe(380)
    expect(getRenderedColumnWidth(container)).toBe(380)
  })
})