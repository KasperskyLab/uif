import { ActionButton } from '@src/action-button'
import React from 'react'

import { ArrowDown1 } from '@kaspersky/hexa-ui-icons/16'

type TextExpanderProps = {
  onClick: () => void
  className?: string
}

export const TextExpander: React.FC<TextExpanderProps> = ({ onClick, className }) => {
  return (
    <ActionButton
      className={className}
      onClick={e => {
        e.stopPropagation()
        onClick()
      }}
      onKeyDown={e => {
        if (e.key === 'Enter') {
          onClick()
        }
      }}
      size="large"
      icon={<ArrowDown1 />}
    />
  )
}
