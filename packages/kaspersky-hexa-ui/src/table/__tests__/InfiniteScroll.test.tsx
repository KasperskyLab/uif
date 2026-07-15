import { act, render } from '@testing-library/react'
import React from 'react'

import { Table } from '../test-utils/shared'

describe('Table InfiniteScroll module', () => {
  it('does not update state after unmount when the page getter resolves late', async () => {
    let triggerIntersect: () => void = () => {}
    class MockIntersectionObserver {
      constructor (private cb: IntersectionObserverCallback) {}
      observe = () => {
        triggerIntersect = () => this.cb([{ isIntersecting: true }] as any, this as any)
      }
      unobserve = jest.fn()
      disconnect = jest.fn()
    }
    const prevIO = window.IntersectionObserver
    window.IntersectionObserver = MockIntersectionObserver as any

    let resolvePage: (rows: unknown[]) => void = () => {}
    const pageGetter = jest.fn(() => new Promise<any[]>((res) => { resolvePage = res }))

    const errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {})

    try {
      const { unmount } = render(<Table pagination={{ infiniteScrollPageGetter: pageGetter }} />)

      act(() => { triggerIntersect() })
      expect(pageGetter).toHaveBeenCalled()

      unmount()

      await act(async () => {
        resolvePage([{ key: 99, name: 'late', description: 'late' }])
        await Promise.resolve()
      })

      const hasUnmountedWarning = errorSpy.mock.calls.some((args) =>
        String(args[0]).includes('unmounted'))
      expect(hasUnmountedWarning).toBe(false)
    } finally {
      errorSpy.mockRestore()
      window.IntersectionObserver = prevIO
    }
  })
})
