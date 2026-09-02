import { RefObject, useCallback, useLayoutEffect, useRef } from 'react'
import { unstable_batchedUpdates } from 'react-dom'

/** Callback that reports clipped state after measure */
type OnMeasured = (clipped: boolean) => void
/** Callback that defines is element overflows container */
export type MeasureCallback = (element: Element) => boolean

type Subscription = { onMeasured: OnMeasured, measureCallback: MeasureCallback }

const watchedElements = new Map<Element, Subscription>()
let sharedObserver: ResizeObserver | null = null

const isClipped: MeasureCallback = element => element.scrollWidth > element.clientWidth

const measure = (targets: Iterable<Element>) => {
  const results: Array<[OnMeasured, boolean]> = []

  for (const element of targets) {
    const subscription = watchedElements.get(element)
    if (!subscription || !element.isConnected) continue
    // An expanded box no longer overflows by definition; re-measuring it would
    // report "fits" and take its own toggle away.
    if ((element as HTMLElement).dataset.expanded !== undefined) continue
    results.push([subscription.onMeasured, subscription.measureCallback(element)])
  }

  if (!results.length) return

  unstable_batchedUpdates(() => {
    results.forEach(([onMeasured, clipped]) => onMeasured(clipped))
  })
}

const getSharedObserver = (): ResizeObserver => {
  if (sharedObserver) return sharedObserver
  sharedObserver = new ResizeObserver(entries => measure(entries.map(entry => entry.target)))
  return sharedObserver
}

/**
 * `measureCallback` defaults to horizontal clipping. Pass one when the subscriber
 * overflows in another direction — line-clamped text overflows vertically — so that
 * measurement still happens in the shared read phase rather than from a layout
 * effect of the subscriber's own.
 */
export const watchOverflow = (
  element: Element,
  onMeasured: OnMeasured,
  measureCallback: MeasureCallback = isClipped
): void => {
  watchedElements.set(element, { onMeasured, measureCallback })
  onMeasured(measureCallback(element))
  getSharedObserver().observe(element)
}

export const unwatchOverflow = (element: Element): void => {
  if (!watchedElements.delete(element)) return
  sharedObserver?.unobserve(element)
}

/**
 * Keeps the node behind `ref` subscribed for as long as the component is mounted.
 *
 * The subscribing effect deliberately has no dependency array. The node behind a
 * ref can be replaced while the component stays mounted — TextReducer's wrapper
 * moves inside a Tooltip once the text overflows, and the table rebuilds cell DOM
 * on a column change — and React cannot express "ref.current changed" as a
 * dependency. The body is an identity check on every render; the subscription is
 * rebuilt only when the node actually changes, or when `remeasureKey` does.
 *
 * Pass `remeasureKey` when the answer depends on something other than the element
 * itself: the observer cannot notice that, and changing the key forces a fresh
 * measurement.
 */
export const useWatchOverflow = (
  ref: RefObject<Element>,
  onMeasured: OnMeasured,
  measureCallback?: MeasureCallback,
  remeasureKey?: unknown
): void => {
  const watched = useRef<Element | null>(null)
  const key = useRef(remeasureKey)

  // Held in refs so a fresh closure from the caller never tears the subscription
  // down and builds it again.
  const onMeasuredRef = useRef(onMeasured)
  onMeasuredRef.current = onMeasured
  const measureRef = useRef(measureCallback)
  measureRef.current = measureCallback

  const report = useCallback<OnMeasured>(value => onMeasuredRef.current(value), [])
  const measureElement = useCallback<MeasureCallback>(
    element => (measureRef.current ?? isClipped)(element),
    []
  )

  useLayoutEffect(() => {
    const element = ref.current
    const keyChanged = key.current !== remeasureKey
    if (element === watched.current && !keyChanged) return
    key.current = remeasureKey

    if (watched.current) unwatchOverflow(watched.current)
    watched.current = element
    if (element) watchOverflow(element, report, measureElement)
  })

  useLayoutEffect(() => () => {
    if (watched.current) unwatchOverflow(watched.current)
    watched.current = null
  }, [])
}
