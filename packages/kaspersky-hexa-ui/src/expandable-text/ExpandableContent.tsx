import cn from 'classnames'
import React, {
  ElementType,
  useCallback,
  useLayoutEffect,
  useRef,
  useState
} from 'react'

import styles from './ExpandableContent.module.scss'
import { useWatchOverflow } from '@helpers/overflowWatcher'
import { textExpander } from './TextExpander'
import { ExpandableContentProps } from './types'

export function ExpandableContent<E extends ElementType = 'div'> ({
  children,
  className,
  as,
  useGradient = false,
  onExpand,
  clippedClassName,
  expandedClassName,
  clippedTitle,
  ...rest
}: ExpandableContentProps<E>): JSX.Element {
  const Root = (as ?? 'div') as ElementType
  const ref = useRef<HTMLElement>(null)
  const [clipped, setClipped] = useState(false)
  const [expanded, setExpanded] = useState(false)

  const onExpandRef = useRef(onExpand)
  onExpandRef.current = onExpand
  const wasClipped = useRef<boolean>()

  const onMeasured = useCallback((next: boolean) => {
    setClipped(current => (current === next ? current : next))

    if (next || wasClipped.current === false) {
      wasClipped.current = next
      return
    }

    // Content fits again: nothing left to expand, so fold it back.
    wasClipped.current = next
    setExpanded(false)
    onExpandRef.current?.(false)
  }, [])

  useWatchOverflow(ref, onMeasured)

  const toggle = useCallback(() => {
    // Notifying from outside the updater on purpose: React is free to call a
    // state updater more than once (StrictMode does), which would fire onExpand
    // twice for a single click.
    const next = !expanded
    setExpanded(next)
    onExpandRef.current?.(next)
  }, [expanded])

  return (
    <Root
      {...rest}
      ref={ref}
      className={cn(
        styles.root,
        className,
        useGradient && [styles.gradient, 'expandable-gradient'],
        clipped && [styles.clipped, clippedClassName],
        expanded && [styles.expanded, expandedClassName]
      )}
      title={clipped && !expanded ? clippedTitle : undefined}
      data-hide={!clipped || expanded ? true : undefined}
      data-expanded={expanded ? true : undefined}
    >
      {children}
      {clipped && (
        textExpander({ expanded, onToggle: toggle, className: 'hexa-ui-expander' })
      )}
    </Root>
  )
}
