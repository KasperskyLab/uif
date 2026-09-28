import { render } from '@testing-library/react'
import React from 'react'

import { ObservableScrollableContainer, ResizableColumnsContext } from '../helpers/stickyHeader'

describe('ObservableScrollableContainer', () => {
  it('re-subscribes the ResizeObserver only on hasRowSelection change, disconnects on unmount', () => {
    const instances: { disconnect: jest.Mock }[] = []
    const spy = jest.spyOn(window, 'ResizeObserver').mockImplementation(() => {
      const inst = { observe: jest.fn(), unobserve: jest.fn(), disconnect: jest.fn() }
      instances.push(inst)
      return inst as unknown as ResizeObserver
    })

    const setOverflow = jest.fn()
    const resizeColumns = jest.fn()
    const setColumns = jest.fn()
    const column = {
      key: 'country',
      title: 'country',
      dataIndex: 'country',
      width: 190,
      minWidth: 100,
      show: true,
      groupingAvailable: true,
      hasEmptyCellDash: true
    }

    try {
      const ui = (hasRowSelection: boolean) => (
        <ResizableColumnsContext.Provider value={{
          columns: [column],
          hasRowSelection,
          setOverflow,
          setColumns
        }}>
          <ObservableScrollableContainer columns={[column] as any}>
            <table><colgroup><col /><col /></colgroup><tbody /></table>
          </ObservableScrollableContainer>
        </ResizableColumnsContext.Provider>
      )

      const { container, rerender, unmount } = render(ui(false))
      const firstCol = container.querySelector('col') as HTMLElement

      expect(instances).toHaveLength(1)
      expect(firstCol.style.minWidth).toBe('100px')

      rerender(ui(false))
      expect(instances).toHaveLength(1)
      expect(instances[0].disconnect).not.toHaveBeenCalled()

      rerender(ui(true))
      expect(instances).toHaveLength(2)
      expect(instances[0].disconnect).toHaveBeenCalled()

      unmount()
      expect(instances[1].disconnect).toHaveBeenCalled()
    } finally {
      spy.mockRestore()
    }
  })
})
