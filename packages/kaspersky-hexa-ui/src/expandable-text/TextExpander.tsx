import React from 'react'
import { v4 as uiidv4 } from 'uuid'

import { ArrowDoubleRight } from '@kaspersky/icons/16'

import { StyledTextExpander } from './expandableTextCss'

type TextExpanderProps = {
  onClick: () => void
}

export const TextExpander: React.FC<TextExpanderProps> = ({ onClick }) => {
  return (
    <StyledTextExpander
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
      icon={<ArrowDoubleRight />}
    />
  )
}
