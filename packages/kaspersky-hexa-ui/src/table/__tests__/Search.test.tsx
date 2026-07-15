import { act, render } from '@testing-library/react'
import React from 'react'

const mockSearchRender = jest.fn((_props: any) => null)
jest.mock('@src/search', () => ({
  __esModule: true,
  Search: (props: any) => mockSearchRender(props)
}))

import { Search } from '../modules/ToolbarIntegration/Search'

describe('Table Search module', () => {
  it('clears the pending highlight timeout on unmount', () => {
    jest.useFakeTimers()

    const tbody = document.createElement('tbody')
    const querySelector = jest.fn(() => tbody)
    const tableContainer = { querySelector } as unknown as HTMLDivElement

    try {
      const { unmount } = render(
        <Search
          setFilteredRows={jest.fn()}
          setExpandedRowKeys={jest.fn()}
          dataSource={[]}
          enableSearchHighlighting
          tableContainer={tableContainer}
        />
      )

      const props = mockSearchRender.mock.calls[mockSearchRender.mock.calls.length - 1][0]

      act(() => { props.onPressEnter() })
      expect(jest.getTimerCount()).toBeGreaterThanOrEqual(1)

      unmount()

      querySelector.mockClear()
      jest.runOnlyPendingTimers()
      expect(querySelector).not.toHaveBeenCalled()
    } finally {
      jest.useRealTimers()
    }
  })
})
