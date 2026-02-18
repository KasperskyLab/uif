import { loadingOverlay } from '@design-system/css-configs/components/loadingOverlay'
import { getClassNameWithTheme } from '@helpers/getClassNameWithTheme'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { Loader } from '@src/loader'
import React from 'react'
import styled from 'styled-components'

import { LoadingOverlayProps } from './types'

const cssConfig = loadingOverlay()

const Wrapper = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${cssConfig.background};
  opacity: 90%;
`

export function LoadingOverlay ({ className, description, size, theme, ...props }: LoadingOverlayProps) {
  const { testAttributes } = useTestAttribute(props)

  return (
    <Wrapper className={getClassNameWithTheme(className, theme)} {...testAttributes} {...props}>
      <Loader size={size} tip={description} theme={theme} />
    </Wrapper>
  )
}

LoadingOverlay.defaultProps = {
  size: 'medium' as const
}
