import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import React, { FC } from 'react'
import styled from 'styled-components'

import { progressBarCss, StyledProgressBarTrack } from './progressBarCss'
import { ProgressBarProps, ProgressBarViewProps } from './types'
import { useThemedProgressBar } from './useThemedProgressBar'

const StyledProgressBar = styled.div.withConfig({
  shouldForwardProp: prop => !['cssConfig'].includes(prop)
})`${progressBarCss}`

export const ProgressBar: FC<ProgressBarProps> = (rawProps) => {
  const themedProps = useThemedProgressBar(rawProps)
  const props = useTestAttribute(themedProps)
  return <ProgressBarView {...props} />
}

const ProgressBarView: FC<ProgressBarViewProps> = ({
  track = 0,
  background = true,
  width,
  testAttributes,
  ...rest
}) => {
  return (
    <StyledProgressBar
      $background={background}
      $width={width}
      $trackWidth={(track >= 0 && track <= 100) ? track : 0}
      {...testAttributes}
      {...rest}
    >
      <StyledProgressBarTrack />
    </StyledProgressBar>
  )
}
