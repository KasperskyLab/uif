import React from 'react'
import { v4 as uiidv4 } from 'uuid'

import { ArrowDown1 } from '@kaspersky/hexa-ui-icons/16'

import { StyledTextExpander } from './expandableTextCss'

type TextExpanderProps = {
  onClick: () => void
  className?: string
}

export const TextExpander: React.FC<TextExpanderProps> = ({ onClick, className }) => {
  return (
    <StyledTextExpander
      className={className}
      key={uiidv4()}
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
