import { act, render } from '@testing-library/react'
import React, { useRef } from 'react'

const mockRoState: { cb: ResizeObserverCallback | null } = { cb: null }
jest.mock('resize-observer-polyfill', () => ({
  __esModule: true,
  default: class {
    constructor (cb: ResizeObserverCallback) { mockRoState.cb = cb }
    observe () {}
    unobserve () {}
    disconnect () {}
  }
}))

import { useResizeObserver } from './useResizeObserver'

const Probe = () => {
  const ref = useRef<HTMLDivElement>(null)
  useResizeObserver(ref, 150)
  return <div ref={ref} />
}

describe('useResizeObserver', () => {
  it('does not run the throttled update after unmount', () => {
    jest.useFakeTimers()
    const errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {})

    try {
      const { unmount } = render(<Probe />)

      act(() => { mockRoState.cb?.([], {} as ResizeObserver) })
      expect(jest.getTimerCount()).toBeGreaterThanOrEqual(1)

      unmount()
      errorSpy.mockClear()

      act(() => { jest.advanceTimersByTime(300) })

      const hasUnmountedWarning = errorSpy.mock.calls.some((args) =>
        String(args[0]).includes('unmounted'))
      expect(hasUnmountedWarning).toBe(false)
    } finally {
      errorSpy.mockRestore()
      jest.useRealTimers()
    }
  })
})
