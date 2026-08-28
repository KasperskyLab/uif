import { act, render } from '@testing-library/react'
import React from 'react'

import { useWatchOverflow } from '@helpers/overflowWatcher'

import { TextReducer } from '../components/TextReducer'

// jsdom has no layout, so every geometry read is 0 and nothing would ever measure as
// clipped. The shared watcher is stubbed instead, which is the component's only
// input, and the measurement it is handed is exercised directly.
jest.mock('@helpers/overflowWatcher', () => ({
  useWatchOverflow: jest.fn()
}))

type Measure = (element: Element) => boolean
type OnMeasured = (overflow: boolean) => void

const mockedWatch = useWatchOverflow as jest.Mock

// The stub keeps what the component handed over, so a test can deliver a later
// notification the way a real resize would. Re-subscription on a node swap is
// the shared hook's job and is covered in overflowWatcher.test.tsx.
let calls: Array<{ onMeasured: OnMeasured, measure: Measure }> = []
let overflowNow = false

const box = (offsetWidth: number, scrollWidth: number, offsetHeight: number, scrollHeight: number) =>
  ({ offsetWidth, scrollWidth, offsetHeight, scrollHeight }) as unknown as Element

describe('TextReducer', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    calls = []
    overflowNow = false
    mockedWatch.mockImplementation((_ref: unknown, onMeasured: OnMeasured, measure: Measure) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      React.useLayoutEffect(() => {
        calls.push({ onMeasured, measure })
        onMeasured(overflowNow)
      }, [])
    })
  })

  it('renders its children', () => {
    const { container } = render(<TextReducer><span className="child">text</span></TextReducer>)

    expect(container.querySelector('.child')).toBeInTheDocument()
  })

  it('subscribes to the shared watcher from a layout effect', () => {
    render(<TextReducer>text</TextReducer>)

    expect(mockedWatch).toHaveBeenCalledTimes(1)
    expect(calls).toHaveLength(1)
    expect(typeof calls[0].measure).toBe('function')
  })

  it('measures width or height, so a lineClamp overflowing vertically still counts', () => {
    render(<TextReducer lineClamp={2}>text</TextReducer>)
    const { measure } = calls[0]

    expect(measure(box(100, 100, 40, 40))).toBe(false)
    // clipped horizontally only
    expect(measure(box(100, 220, 40, 40))).toBe(true)
    // clipped vertically only — the case the watcher's own default cannot see
    expect(measure(box(100, 100, 40, 90))).toBe(true)
  })

  it('drops the tooltip again once the content fits', () => {
    overflowNow = true
    render(<TextReducer>a very long value</TextReducer>)

    const live = calls[calls.length - 1]
    act(() => live.onMeasured(false))

    // Back to the bare wrapper: the tooltip is gone and the content stays.
    expect(document.querySelector('.ant-tooltip')).not.toBeInTheDocument()
  })

  it('does not re-render when the answer has not changed', () => {
    render(<TextReducer>text</TextReducer>)
    const before = mockedWatch.mock.calls.length

    act(() => calls[0].onMeasured(false))

    // No state change, so no re-render and no resubscription.
    expect(mockedWatch.mock.calls.length).toBe(before)
  })

})
