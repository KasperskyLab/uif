import { ActionButton } from '@src/action-button'
import React from 'react'

import { ArrowDown1 } from '@kaspersky/hexa-ui-icons/16'

type TextExpanderProps = {
  expanded: boolean
  onToggle: () => void
  className?: string
}

export const textExpander = ({ expanded, onToggle, className }: TextExpanderProps): JSX.Element => {
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
      icon={<ArrowDown1 />}
      aria-expanded={expanded}
    />
  )
}