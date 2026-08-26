import { RefObject, useLayoutEffect, useState } from 'react'
// eslint-disable-next-line camelcase
import { unstable_batchedUpdates } from 'react-dom'
import ResizeObserver from 'resize-observer-polyfill'

export const resizeThrottle = (callback: () => void, delay: number) => {
  let timer: ReturnType<typeof setTimeout> | null = null
  let rafId: number | null = null

  const run = () => {
    if (timer) clearTimeout(timer)

    timer = setTimeout(() => {
      timer = null
      if (rafId !== null) return

      rafId = requestAnimationFrame(() => {
        rafId = null
        callback()
      })
    }, delay)
  }

  const cancel = () => {
    if (timer) clearTimeout(timer)
    if (rafId !== null) cancelAnimationFrame(rafId)
    timer = null
    rafId = null
  }

  return { run, cancel }
}

type ResizeSubscriber = {
  onResize: (rect: DOMRect) => void,
  delay: number
}

// A single shared ResizeObserver for the whole app. The native ResizeObserver delivers ALL
// changed elements in one callback, so:
//   1) we read the geometry of every dirty element in ONE pass (read phase, no writes between);
//   2) we collapse the setState of every subscriber into ONE commit (unstable_batchedUpdates).
// Previously each hook instance created its own ResizeObserver + its own throttle queue, so with
// 50×N cells that meant 50×N independent flushes, each forcing its own reflow (layout thrashing).
// Now the table mount/resize costs one reflow instead of N. Behavior (reaction to column resize,
// returned getBoundingClientRect, throttle) is preserved.
const subscribers = new Map<Element, ResizeSubscriber>()
const dirtyElements = new Set<Element>()

let sharedObserver: InstanceType<typeof ResizeObserver> | null = null
let flushTimer: ReturnType<typeof setTimeout> | null = null
let flushRaf: number | null = null

const flush = () => {
  flushTimer = null
  if (flushRaf !== null) return

  flushRaf = requestAnimationFrame(() => {
    flushRaf = null
    if (dirtyElements.size === 0) return

    // Read phase: one geometry pass over every changed element, with no writes in between.
    const updates: Array<[ResizeSubscriber, DOMRect]> = []
    dirtyElements.forEach(element => {
      const subscriber = subscribers.get(element)
      if (subscriber && element.isConnected) {
        updates.push([subscriber, element.getBoundingClientRect()])
      }
    })
    dirtyElements.clear()

    // Write phase: all setState calls in a single commit → downstream layout effects
    // (isEllipsisActive etc.) run in one reflow instead of N. try/catch isolates subscribers
    // from each other: an exception in one onResize must not break the others (shared callback).
    unstable_batchedUpdates(() => {
      updates.forEach(([subscriber, rect]) => {
        try {
          subscriber.onResize(rect)
        } catch (e) {
          // eslint-disable-next-line no-console
          console.error('[hexa-ui][useResizeObserver] subscriber onResize failed', e)
        }
      })
    })
  })
}

const scheduleFlush = (delay: number) => {
  if (flushTimer !== null || flushRaf !== null) return
  flushTimer = setTimeout(flush, delay)
}

const getSharedObserver = (): InstanceType<typeof ResizeObserver> => {
  if (sharedObserver) return sharedObserver

  sharedObserver = new ResizeObserver(entries => {
    let minDelay = Infinity
    entries.forEach(entry => {
      dirtyElements.add(entry.target)
      const subscriber = subscribers.get(entry.target)
      if (subscriber) minDelay = Math.min(minDelay, subscriber.delay)
    })
    scheduleFlush(Number.isFinite(minDelay) ? minDelay : 0)
  })

  return sharedObserver
}

export const useResizeObserver = (ref: RefObject<Element>, delay = 150): DOMRect | undefined => {
  const [dimensions, setDimensions] = useState<DOMRect>()

  useLayoutEffect(() => {
    const element = ref.current
    if (!element) return

    // Initial measurement — synchronous, before the first paint (as before: to avoid flicker).
    setDimensions(element.getBoundingClientRect())

    subscribers.set(element, { onResize: setDimensions, delay })
    getSharedObserver().observe(element)

    return () => {
      subscribers.delete(element)
      dirtyElements.delete(element)
      sharedObserver?.unobserve(element)
    }
  }, [ref, delay])

  return dimensions
}
