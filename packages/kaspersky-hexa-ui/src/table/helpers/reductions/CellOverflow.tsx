import { EXPANDER_CLASS } from '@helpers/overflow/components/clipping'
import { clippingStyles as clipping } from '@helpers/overflow/components/clipping'
import { textExpander } from '@helpers/overflow/components/textExpander'
import { useOverflowToggle } from '@helpers/overflow/useOverflowToggle'
import cn from 'classnames'
import React, { CSSProperties, ReactNode, TdHTMLAttributes, useCallback } from 'react'

import tableCell from '../../TableCell.module.scss'

export const OVERFLOW_CELL_CLASS = 'hexa-ui-expandable-cell'
export const ELLIPSIS_CELL_CLASS = 'hexa-ui-ellipsis-cell'

type CellProps = TdHTMLAttributes<HTMLTableCellElement> & { children?: ReactNode }

type CellComponent = React.ComponentType<CellProps> | 'td'

const getTBody = (element: HTMLTableCellElement) => element.closest('tbody') ?? undefined

/** Hidden so it cannot be seen, measured or read out; it exists only to point at its own cell. */
const MARKER_STYLE: CSSProperties = { display: 'none' }

const FORWARD_REF = Symbol.for('react.forward_ref')
const MEMO = Symbol.for('react.memo')

const isComponentTakesRef = (component: CellComponent) => {
  if (typeof component === 'string') return true
  if (typeof component === 'function') {
    return Boolean((component as { prototype?: { isReactComponent?: unknown } }).prototype?.isReactComponent)
  }

  const kind = (component as { $$typeof?: symbol } | null)?.$$typeof
  if (kind === FORWARD_REF) return true
  if (kind === MEMO) return isComponentTakesRef((component as unknown as { type: CellComponent }).type)

  return false
}

const hasClass = (props: CellProps, name: string) => String(props.className ?? '').includes(name)

export const createOverflowCell = (Base: CellComponent = 'td') => {
  /** Decided once per cell component, not per cell: `Base` is fixed for the life of this one. */
  const isTakesRef = isComponentTakesRef(Base)

  const ExpandableCell = ({ children, ...props }: CellProps) => {
    const { clipped, expanded, onToggle, observedRef } = useOverflowToggle<HTMLTableCellElement>({
      getContentRoot: getTBody
    })

    /**
     * The way in when the cell component cannot take a ref: a hidden child finds its own cell.
     *
     * `closest` rather than `parentElement` because the component is free to put its children
     * inside something of its own — what has to be measured is the cell, wherever it sits above.
     */
    const fromMarker = useCallback((node: HTMLElement | null) => {
      observedRef(node?.closest('td, th') as HTMLTableCellElement ?? null)
    }, [observedRef])

    return (
      <Base
        {...props}
        className={cn(props.className, clipping.expandableContainer, clipping.expandableFade, tableCell.expandableCell)}
        data-expanded={expanded ? '' : undefined}
        data-hide={clipped && !expanded ? undefined : ''}
        ref={isTakesRef ? observedRef : undefined}
      >
        {!isTakesRef && <span aria-hidden ref={fromMarker} style={MARKER_STYLE} />}
        {children}
        {clipped && textExpander({ expanded, onToggle, className: EXPANDER_CLASS })}
      </Base>
    )
  }

  return function TableCell (props: CellProps) {
    if (hasClass(props, OVERFLOW_CELL_CLASS)) return <ExpandableCell {...props} />

    return hasClass(props, ELLIPSIS_CELL_CLASS)
      ? <Base {...props} className={cn(props.className, clipping.expandableContainer)} />
      : <Base {...props} />
  }
}
