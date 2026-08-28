import {
  RefObject,
  useCallback,
  useLayoutEffect,
  useRef,
  useState
} from 'react'
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

/**
 * A ResizeObserver notification hands back a fresh DOMRect even when the box did
 * not move or change size, and anything that perturbs layout (opening a drawer, a
 * scrollbar appearing) notifies every observed element at once. Storing that new
 * object unconditionally turned one such notification into a state update per
 * observed element — measured at ~3,700 updates per commit on a large table.
 * Keeping the previous rect when the geometry is identical makes those
 * notifications free while still reacting to real resizes.
 */
const getRect = (element: Element): DOMRect => element.getBoundingClientRect()

const sameRect = (a: DOMRect | undefined, b: DOMRect): boolean => (
  !!a &&
  a.width === b.width &&
  a.height === b.height &&
  a.top === b.top &&
  a.left === b.left
)

/**
 * One shared ResizeObserver for the whole app, with a strict read-then-write split.
 *
 * Subscribers do not receive a fixed payload; they hand in the measurement they
 * actually need. Every dirty element is measured back to back in the read phase,
 * so a batch costs at most one style/layout pass no matter how many elements it
 * covers, and the results are delivered in a single React commit afterwards.
 *
 * This matters because measuring from a layout effect is the expensive way round:
 * that runs straight after React has mutated the DOM, so each read has to bring
 * layout up to date again. Measured on a 100x40 table, that path forced 17 style
 * passes costing 386ms when a sidebar opened, against 7ms of the engine's own
 * scheduled work.
 */
type Subscriber<T = unknown> = {
  measure: (element: Element) => T,
  equals: (a: T | undefined, b: T) => boolean,
  deliver: (value: T) => void,
  last: T | undefined,
  hasValue: boolean,
  delay: number
}

// An element can carry more than one subscription (a size reader and an overflow
// reader on the same node), so subscriptions are held per element, not one each.
const subscribers = new Map<Element, Set<Subscriber<any>>>()
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

    // Read phase: every measurement runs here, with nothing writing in between.
    const pending: Array<[Subscriber<any>, unknown]> = []
    dirtyElements.forEach(element => {
      const set = subscribers.get(element)
      if (!set || !element.isConnected) return
      set.forEach(subscriber => {
        try {
          const value = subscriber.measure(element)
          if (subscriber.hasValue && subscriber.equals(subscriber.last, value)) return
          subscriber.last = value
          subscriber.hasValue = true
          pending.push([subscriber, value])
        } catch (e) {
          // eslint-disable-next-line no-console
          console.error('[hexa-ui][useResizeObserver] measurement failed', e)
        }
      })
    })
    dirtyElements.clear()
    if (pending.length === 0) return

    // Write phase: one commit for the whole batch. Only subscribers whose value
    // actually changed are here, so an unrelated relayout costs no renders at all.
    unstable_batchedUpdates(() => {
      pending.forEach(([subscriber, value]) => {
        try {
          subscriber.deliver(value)
        } catch (e) {
          // eslint-disable-next-line no-console
          console.error('[hexa-ui][useResizeObserver] subscriber failed', e)
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
      subscribers.get(entry.target)?.forEach(subscriber => {
        minDelay = Math.min(minDelay, subscriber.delay)
      })
    })
    scheduleFlush(Number.isFinite(minDelay) ? minDelay : 0)
  })

  return sharedObserver
}

const subscribe = (element: Element, subscriber: Subscriber<any>) => {
  let set = subscribers.get(element)
  if (!set) {
    set = new Set()
    subscribers.set(element, set)
  }
  set.add(subscriber)
  getSharedObserver().observe(element)
}

const unsubscribe = (element: Element, subscriber: Subscriber<any>) => {
  const set = subscribers.get(element)
  if (!set) return
  set.delete(subscriber)
  if (set.size > 0) return
  subscribers.delete(element)
  dirtyElements.delete(element)
  sharedObserver?.unobserve(element)
}

/**
 * Subscribes `ref.current` to the shared observer with a caller-supplied
 * measurement, delivering each new value to `onValue`. Module-private: the only
 * consumer left is useResizeObserver below. Components that need a different
 * measurement have their own watcher in expandable-text/overflowWatcher.
 */
function useMeasuredSubscription<T> (
  ref: RefObject<Element>,
  measure: (element: Element) => T,
  equals: (a: T | undefined, b: T) => boolean,
  onValue: (value: T) => void,
  delay = 150
): void {
  const observed = useRef<Element | null>(null)
  const subscriber = useRef<Subscriber<T> | null>(null)

  // Held in refs so a new closure from the caller never tears the subscription
  // down and builds it again.
  const measureRef = useRef(measure)
  measureRef.current = measure
  const equalsRef = useRef(equals)
  equalsRef.current = equals
  const onValueRef = useRef(onValue)
  onValueRef.current = onValue

  if (!subscriber.current) {
    subscriber.current = {
      measure: element => measureRef.current(element),
      equals: (a, b) => equalsRef.current(a, b),
      deliver: value => onValueRef.current(value),
      last: undefined,
      hasValue: false,
      delay
    }
  }
  subscriber.current.delay = delay

  // Deliberately no dependency array. The node behind `ref` can be replaced while
  // this component stays mounted (the table rebuilds cell DOM on a column change),
  // and React cannot express "ref.current changed" as a dependency. The body is an
  // identity check on every render; real work happens only when the node changes.
  useLayoutEffect(() => {
    const element = ref.current
    if (element === observed.current) return

    if (observed.current) unsubscribe(observed.current, subscriber.current!)
    observed.current = element
    if (!element) return

    // First reading is taken here so the value is right before the first paint.
    // Everything after this arrives through the observer's read phase.
    const initial = measureRef.current(element)
    subscriber.current!.last = initial
    subscriber.current!.hasValue = true
    onValueRef.current(initial)
    subscribe(element, subscriber.current!)
  })

  useLayoutEffect(() => () => {
    if (observed.current) unsubscribe(observed.current, subscriber.current!)
    observed.current = null
  }, [])
}

export const useResizeObserver = (ref: RefObject<Element>, delay = 150): DOMRect | undefined => {
  const [dimensions, setDimensions] = useState<DOMRect>()
  useMeasuredSubscription(ref, getRect, sameRect, setDimensions, delay)
  return dimensions
}
