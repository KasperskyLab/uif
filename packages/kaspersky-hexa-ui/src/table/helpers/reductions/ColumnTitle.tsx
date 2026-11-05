import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { TestingProps } from '@helpers/typesHelpers'
import { textReducerStyles as reducer } from '@helpers/components/TextReducer'
import cn from 'classnames'
import React, { ReactNode } from 'react'

export const ELLIPSIS_TITLE_CLASS = 'hexa-ui-ellipsis-title'

type ColumnTitleProps = TestingProps & {
  children?: ReactNode
  className?: string
}

/**
 * A column title that is clipped by CSS and nothing else.
 *
 * It used to be a `TextReducer`, which measures itself on mount to decide whether to wrap in a
 * tooltip. That measurement reads `offsetWidth` from a layout effect, so it runs while React is still
 * committing, and the browser has to lay the table out again for each title. With windowed columns
 * the header is rebuilt every time the window moves, and that came to 85 ms of forced layout per
 * step — the single largest cost left in horizontal scrolling, measured with a CPU profile on the
 * 39-column performance story.
 *
 * Clipping never needed the measurement: `.wrapper` does it with `text-overflow`. Only the tooltip
 * did, and the table already has a cheaper way to do that — one delegated tooltip that measures the
 * element under the pointer, on hover, instead of every element up front (see CellTooltip).
 *
 * The classes are TextReducer's own, so the header keeps the exact layout it had: `hexa-ui-ellipsis`
 * carries table-layout rules from tableCss, and the inner wrapper does the clipping.
 */
export const ColumnTitle = ({ children, className, ...props }: ColumnTitleProps): JSX.Element => {
  const { testAttributes } = useTestAttribute(props)

  return (
    <div className={cn(className, reducer.container, reducer.stretch)} {...testAttributes}>
      {/* The marker sits on the inner element because that is the one that clips — the tooltip
          measures whatever it matches, and the outer box never overflows. */}
      <div className={cn(reducer.wrapper, ELLIPSIS_TITLE_CLASS)}>{children}</div>
    </div>
  )
}
