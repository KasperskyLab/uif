import {
  MutableRefObject,
  Ref,
  useCallback,
  useRef,
  useState
} from 'react'

import { MeasureCallback, unwatchOverflow, watchOverflow } from './overflowWatcher'

type OverflowToggleProps<T extends Element> = {
  /** Should we observe cliping or not.   */
  enabled?: boolean,
  /** Kept filled with the same node the watcher is handed. */
  originalRef?: Ref<T>,
  /** Getter the of root to observe mutations of content */
  getContentRoot?: (element: T) => Node | undefined,
  /** Callback to measure should we clip element or not */
  measureCallback?: MeasureCallback,
  onExpand?: (expanded: boolean) => void
}

type OverflowToggleReturn<T extends Element> = {
  /** Ref callback for the element that clips. */
  observedRef: (element: T | null) => void,
  clipped: boolean,
  expanded: boolean,
  onToggle: () => void
}

type LiveProps<T extends Element> = OverflowToggleProps<T> & {
  node: T | null
  wasClipped?: boolean
}

const setRef = <T>(ref: Ref<T> | undefined, node: T | null) => {
  if (typeof ref === 'function') {
    ref(node)
  } else if (ref) {
    (ref as MutableRefObject<T | null>).current = node
  }
}

export const useOverflowToggle = <T extends Element>(
  options: OverflowToggleProps<T> = {}
): OverflowToggleReturn<T> => {
  const [clipped, setClipped] = useState(false)
  const [expanded, setExpanded] = useState(false)

  // onMeasured and refToElement must be immutable, so we pass current options via ref
  // otherwise, the parameters will get captured by the closure.
  const liveProps = useRef<LiveProps<T>>({ node: null, ...options })
  Object.assign(liveProps.current, options)

  // change states after measurements
  const onMeasured = useCallback((isClipped: boolean) => {
    setClipped(prevClipped => prevClipped === isClipped ? prevClipped : isClipped)

    const stoppedClipping = !isClipped && liveProps.current.wasClipped !== false
    liveProps.current.wasClipped = isClipped
    if (!stoppedClipping) return

    setExpanded(false)
    liveProps.current.onExpand?.(false)
  }, [])

  // adds observing to element ref
  const observedRef = useCallback((element: T | null) => {
    const { node, enabled = true, getContentRoot, measureCallback } = liveProps.current
    if (node && node !== element) unwatchOverflow(node)

    liveProps.current.node = element
    setRef(options.originalRef, element)

    if (element && enabled) {
      watchOverflow(element, onMeasured, { measureCallback, contentRoot: getContentRoot?.(element) })
    }
  }, [onMeasured, options.originalRef])

  const onToggle = useCallback(() => {
    const next = !expanded

    setExpanded(next)
    liveProps.current.onExpand?.(next)
  }, [expanded])

  return { observedRef, clipped, expanded, onToggle }
}
