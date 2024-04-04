import React from 'react'
import { ArrowDoubleRight } from '@kaspersky/icons/16'
import { ActionButton } from '@src/action-button'
import { v4 as uiidv4 } from 'uuid'
import styled from 'styled-components'

export const StyledTextExpander = styled(ActionButton)`
  transform: translateY(2px);
`

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
      className="text-expander"
    />
  )
}
