import { EXPANDER_CLASS } from '@helpers/overflow/components/clipping'
import clipping from '@helpers/overflow/components/clipping.module.scss'
import { textExpander } from '@helpers/overflow/components/textExpander'
import { useOverflowToggle } from '@helpers/overflow/useOverflowToggle'
import cn from 'classnames'
import React, { ReactNode, TdHTMLAttributes } from 'react'

import tableCell from '../../TableCell.module.scss'

export const OVERFLOW_CELL_CLASS = 'hexa-ui-expandable-cell'
export const ELLIPSIS_CELL_CLASS = 'hexa-ui-ellipsis-cell'

type CellProps = TdHTMLAttributes<HTMLTableCellElement> & { children?: ReactNode }

type CellComponent = React.ComponentType<CellProps> | 'td'

const getTBody = (element: HTMLTableCellElement) => element.closest('tbody') ?? undefined

const hasClass = (props: CellProps, name: string) => String(props.className ?? '').includes(name)

export const createOverflowCell = (Base: CellComponent = 'td') => {
  const ExpandableCell = ({ children, ...props }: CellProps) => {
    const { clipped, expanded, onToggle, observedRef } = useOverflowToggle<HTMLTableCellElement>({
      getContentRoot: getTBody
    })

    return (
      <Base
        {...props}
        className={cn(props.className, clipping.expandableContainer, clipping.expandableFade, tableCell.expandableCell)}
        data-expanded={expanded ? '' : undefined}
        data-hide={clipped && !expanded ? undefined : ''}
        ref={observedRef}
      >
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
