import { MakeRequired } from '@helpers/typesHelpers'
import { RefObject, useCallback, useLayoutEffect, useRef } from 'react'
import { unstable_batchedUpdates } from 'react-dom'

// 1. Shared observer
let sharedObserver: ResizeObserver | null = null

const getSharedObserver = (): ResizeObserver => {
  if (sharedObserver) return sharedObserver
  sharedObserver = new ResizeObserver(entries => measure(entries.map(entry => entry.target)))
  return sharedObserver
}

// 2. Content root map
type ContentRoot = { mutationObserver: MutationObserver, watchersCount: number }

const contentRootsMap = new Map<Node, ContentRoot>()

// 3. Observed (resize) elements
type Subscription = { onMeasured: OnMeasured } & MakeRequired<WatchOverflowOptions, 'measureCallback'>

const observedElements = new Map<Element, Subscription>()

// 4. Observe mutations
/** Getter for observed element a mutation happened inside */
const getObservedParentElement = (node: Node | null): Element | null => {
  for (let current = node; current; current = current.parentNode) {
    if (observedElements.has(current as Element)) return current as Element
  }

  return null
}

const onContentChanged = (records: MutationRecord[]) => {
  // get elements where mutation happened inside
  const changedElements = new Set<Element>()
  for (const record of records) {
    const observedElement = getObservedParentElement(record.target)
    if (observedElement) changedElements.add(observedElement)
  }

  // remeasure if element mutated
  changedElements.forEach(element => {
    sharedObserver?.unobserve(element)
    sharedObserver?.observe(element)
  })
}

const addContentRoot = (contentRoot: Node) => {
  const rootState = contentRootsMap.get(contentRoot)
  if (rootState) {
    rootState.watchersCount++
    return
  }

  const mutationObserver = new MutationObserver(onContentChanged)
  mutationObserver.observe(contentRoot, { characterData: true, childList: true, subtree: true })
  contentRootsMap.set(contentRoot, { mutationObserver, watchersCount: 1 })
}

const removeContentRoot = (contentRoot: Node) => {
  const rootState = contentRootsMap.get(contentRoot)
  if (!rootState) return

  rootState.watchersCount--
  if (rootState.watchersCount) return

  rootState.mutationObserver.disconnect()
  contentRootsMap.delete(contentRoot)
}

// 4. Measurements
/** Callback that reports clipped state after measure */
type OnMeasured = (clipped: boolean) => void
/** Callback that defines is element overflows container */
export type MeasureCallback = (element: Element) => boolean

export type WatchOverflowOptions = {
  measureCallback?: MeasureCallback
  contentRoot?: Node
}

const measure = (targets: Iterable<Element>) => {
  const results: Array<[OnMeasured, boolean]> = []

  for (const element of targets) {
    const subscription = observedElements.get(element)
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

const isClipped: MeasureCallback = element => element.scrollWidth > element.clientWidth

// 5. watch/unwatch overflow
export const watchOverflow = (
  element: Element,
  onMeasured: OnMeasured,
  { measureCallback = isClipped, contentRoot }: WatchOverflowOptions = {}
): void => {
  observedElements.set(element, { onMeasured, measureCallback, contentRoot })

  onMeasured(measureCallback(element))
  getSharedObserver().observe(element)

  if (contentRoot) addContentRoot(contentRoot)
}

export const unwatchOverflow = (element: Element): void => {
  const subscription = observedElements.get(element)
  if (!subscription) return

  observedElements.delete(element)
  sharedObserver?.unobserve(element)

  if (subscription.contentRoot) removeContentRoot(subscription.contentRoot)
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
  onMeasuredFromProps: OnMeasured,
  measureCallbackFromProps?: MeasureCallback,
  remeasureKey?: unknown
): void => {
  const observedElement = useRef<Element | null>(null)
  const key = useRef(remeasureKey)

  // Held in refs so a fresh closure from the caller never tears the subscription
  // down and builds it again.
  const onMeasuredRef = useRef(onMeasuredFromProps)
  onMeasuredRef.current = onMeasuredFromProps

  const measureCallbackRef = useRef(measureCallbackFromProps)
  measureCallbackRef.current = measureCallbackFromProps

  const onMeasured = useCallback<OnMeasured>(value => onMeasuredRef.current(value), [])
  const measureCallback = useCallback<MeasureCallback>(element => (
    (measureCallbackRef.current ?? isClipped)(element)
  ), [])

  useLayoutEffect(() => {
    const element = ref.current
    const keyChanged = key.current !== remeasureKey
    if (element === observedElement.current && !keyChanged) return
    key.current = remeasureKey

    if (observedElement.current) unwatchOverflow(observedElement.current)
    observedElement.current = element
    if (element) watchOverflow(element, onMeasured, { measureCallback })
  })

  useLayoutEffect(() => () => {
    if (observedElement.current) unwatchOverflow(observedElement.current)
    observedElement.current = null
  }, [])
}
