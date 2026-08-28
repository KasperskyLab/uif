import { ActionButton } from '@src/action-button'
import React from 'react'

import { ArrowDown1 } from '@kaspersky/hexa-ui-icons/16'

type TextExpanderProps = {
  expanded: boolean
  onToggle: () => void
  className?: string
}

/**
 * The expand/collapse toggle.
 *
 * A plain function rather than a component on purpose: called as `textExpander(...)`
 * the element it returns is reconciled in place by whoever renders it, so a table
 * with hundreds of clipped cells does not pay a React fiber per toggle on top of the
 * one ActionButton already costs.
 */
export const textExpander = ({ expanded, onToggle, className }: TextExpanderProps): JSX.Element => (
  <ActionButton
    className={className}
    size="large"
    icon={<ArrowDown1 />}
    aria-label={expanded ? 'Collapse' : 'Expand'}
    aria-expanded={expanded}
    onClick={event => {
      // The cell usually sits inside a clickable row, so the toggle must not double
      // as a row click.
      event.stopPropagation()
      onToggle()
    }}
    onKeyDown={event => {
      if (event.key !== 'Enter') return
      // ActionButton renders a native button, which the browser also activates on
      // Enter by synthesising a click. Without this the toggle fires twice and lands
      // back where it started — verified in a browser, Enter was a no-op.
      event.preventDefault()
      onToggle()
    }}
  />
)
