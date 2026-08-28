import { act, render } from '@testing-library/react'
import React, { useRef, useState } from 'react'

import { useWatchOverflow } from '@helpers/overflowWatcher'

// jsdom has no ResizeObserver and no layout. The observer is stubbed so a test can
// deliver a notification itself, and the measurement is driven off an attribute
// rather than real geometry.
let observed: Element[] = []
let notify: (targets: Element[]) => void = () => {}

class StubResizeObserver {
  constructor (callback: (entries: Array<{ target: Element }>) => void) {
    notify = targets => callback(targets.map(target => ({ target })))
  }

  observe (element: Element) { observed.push(element) }
  unobserve (element: Element) { observed = observed.filter(candidate => candidate !== element) }
  disconnect () { observed = [] }
}

const overflows = (element: Element) => element.getAttribute('data-overflow') === 'yes'

const Probe = ({ swap = false, overflow = 'no', height }: { swap?: boolean, overflow?: string, height?: number }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [answer, setAnswer] = useState<boolean | null>(null)
  useWatchOverflow(ref, setAnswer, overflows, height)

  // Changing the element type in this slot makes React mount a fresh node, which is
  // what a component does when it starts wrapping its content in a tooltip.
  const content = <div ref={ref} data-overflow={overflow} data-testid="target">content</div>
  return (
    <>
      <span data-testid="answer">{String(answer)}</span>
      {swap ? <section>{content}</section> : content}
    </>
  )
}

const answerOf = (container: HTMLElement) =>
  container.querySelector('[data-testid="answer"]')?.textContent

const targetOf = (container: HTMLElement) =>
  container.querySelector('[data-testid="target"]') as HTMLElement

describe('useWatchOverflow', () => {
  beforeEach(() => {
    observed = []
    ;(global as unknown as { ResizeObserver: unknown }).ResizeObserver = StubResizeObserver
  })

  it('measures once on mount and reports the answer', () => {
    const { container } = render(<Probe overflow="yes" />)

    expect(answerOf(container)).toBe('true')
    expect(observed).toHaveLength(1)
  })

  it('follows the node when the component replaces it', () => {
    const { container, rerender } = render(<Probe overflow="yes" />)
    const first = targetOf(container)

    rerender(<Probe overflow="yes" swap />)
    const second = targetOf(container)

    expect(second).not.toBe(first)
    expect(observed).toEqual([second])
  })

  it('stops watching on unmount', () => {
    const { unmount } = render(<Probe />)
    expect(observed).toHaveLength(1)

    unmount()
    expect(observed).toHaveLength(0)
  })

  it('re-measures when the remeasure key changes', () => {
    const { container, rerender } = render(<Probe overflow="no" height={10} />)
    expect(answerOf(container)).toBe('false')

    // The element is untouched, so no resize notification would ever arrive; the key
    // is what tells the hook the answer may have moved.
    targetOf(container).setAttribute('data-overflow', 'yes')
    rerender(<Probe overflow="no" height={20} />)

    expect(answerOf(container)).toBe('true')
  })

  it('delivers later notifications from the observer', () => {
    const { container } = render(<Probe overflow="no" />)
    expect(answerOf(container)).toBe('false')

    targetOf(container).setAttribute('data-overflow', 'yes')
    act(() => notify([targetOf(container)]))

    expect(answerOf(container)).toBe('true')
  })
})
