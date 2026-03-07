import React from 'react'
import styled from 'styled-components'

import { AdditionalResources } from './AdditionalResources'
import { Description } from './Description'
import { DesignCode } from './DesignCode'
import { Intro } from './Intro'

const CenterWrapper = styled.div<{ $verticalPadding?: number, $backgroundWhite?: boolean }>`
  display: flex;
  padding: ${props => props.$verticalPadding ?? 0}px 220px;
  justify-content: center;
  background: ${props => props.$backgroundWhite ? 'var(--bg--base)' : 'var(--bg--section)'};
`

function MainPage () {

  return (
    <>
      <CenterWrapper $verticalPadding={32}>
        <Intro />
      </CenterWrapper>
      <CenterWrapper $backgroundWhite $verticalPadding={56}>
        <Description />
      </CenterWrapper>
      <CenterWrapper>
        <DesignCode />
      </CenterWrapper>
      <CenterWrapper $backgroundWhite $verticalPadding={56}>
        <AdditionalResources />
      </CenterWrapper>
    </>
  )
}

export default MainPage
