import { getFromProps } from '@helpers/getFromProps'
import styled, { css } from 'styled-components'

import { ProgressBarCssConfig } from './types'

const fromProps = getFromProps<ProgressBarCssConfig>()

export const StyledProgressBarTrack = styled.div``

export const progressBarCss = css<{
  cssConfig: ProgressBarCssConfig,
  $trackWidth: number,
  $background: boolean,
  $width?: number
}>`
  height: ${fromProps('height')};
  border-radius: ${fromProps('height')};
  width: ${({ $width }) => $width ? `${$width}px` : '100%'};
  background: ${(props) => props.$background ? `${fromProps('background')(props)}` : 'transparent'};

  ${StyledProgressBarTrack} {
    background: ${fromProps('color')};
    height: ${fromProps('height')};
    border-radius: ${fromProps('height')};
    width: ${({ $trackWidth }) => $trackWidth}%;
    transition: width 1s;
    transition-timing-function: ease-in-out;
 }
`
