import { HelpMessage } from '@src/help-message'
import React, { ReactNode } from 'react'
import styled from 'styled-components'

export type WithAdditionalContent<T> = T & {
  description?: string,
  dependentElement?: ReactNode
}

export type AdditionalContentProps = WithAdditionalContent<{
  _margin?: number
}>

const StyledAdditionalContent = styled.div<Pick<AdditionalContentProps, '_margin'>>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 4px;
  margin-left: ${({ _margin }) => _margin}px;
`

export const AdditionalContent = ({ description, dependentElement, _margin = 18 }: AdditionalContentProps) => {
  if (!description && !dependentElement) return null

  return (
    <StyledAdditionalContent _margin={_margin}>
      {description && <HelpMessage text={description}></HelpMessage>}
      {dependentElement}
    </StyledAdditionalContent>
  )
}
