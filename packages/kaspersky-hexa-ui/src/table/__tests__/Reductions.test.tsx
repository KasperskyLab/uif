import { render } from '@testing-library/react'
import React from 'react'

import { Table } from '../test-utils/shared'

describe('Table Reductions module', () => {
  it('should dispose ResizeObserver on unmount', () => {
    const resizeObserverSpy = jest.spyOn(window, 'ResizeObserver')
    const resizeObserverInstance = {
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn()
    } as const satisfies ResizeObserver
    resizeObserverSpy.mockImplementation(() => resizeObserverInstance)

    try {
      const { unmount } = render(<Table
        columns={[{ title: 'column', key: 'column', dataIndex: 'value', ellipsis: true }]}
        dataSource={[{key: 1, value: 'Completely arbitrary text'}]}
      />)    
      expect(resizeObserverInstance.observe).toHaveBeenCalled()
      expect(resizeObserverInstance.disconnect).toHaveBeenCalledTimes(0)

      unmount()
      expect(resizeObserverInstance.disconnect).toHaveBeenCalled()
    }
    finally {
      resizeObserverSpy.mockRestore()
    }
  })
})
