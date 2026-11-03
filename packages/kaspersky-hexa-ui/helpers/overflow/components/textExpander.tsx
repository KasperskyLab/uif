import { ActionButton } from '@src/action-button'
import React from 'react'

import { ArrowDownAndUp, ArrowUpAndDown } from '@kaspersky/hexa-ui-icons/16'

type TextExpanderProps = {
  expanded: boolean,
  onToggle: () => void,
  className?: string
}

export const textExpander = ({ expanded, onToggle, className }: TextExpanderProps): JSX.Element => {
  const Icon = expanded ? ArrowDownAndUp : ArrowUpAndDown

  return (
    <ActionButton
      className={className}
      onClick={e => {
        e.stopPropagation()
        onToggle()
      }}
      onKeyDown={e => {
        if (e.key !== 'Enter') return
        e.preventDefault()
        onToggle()
      }}
      size="large"
      icon={<Icon testId={expanded ? 'expandable-text-arrow-down-and-up' : 'expandable-text-arrow-up-and-down'} />}
      aria-expanded={expanded}
    />
  )
}
