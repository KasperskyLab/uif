import { BORDER_RADIUS, SPACES } from '@design-system/theme'
import { getFromProps } from '@helpers/getFromProps'
import { css } from 'styled-components'

import { ScrollbarCssConfig } from '../types'

const fromProps = getFromProps<ScrollbarCssConfig>()

const trackCss = css`
  border-radius: ${BORDER_RADIUS[2]}px;
  background-color: ${fromProps('enabled.trackColor')};
  &:hover {
    background-color: ${fromProps('hover.trackColor')};
  }
  &:active {
    background-color: ${fromProps('active.trackColor')};
  }
`

const thumbCss = css`
  border-radius: ${BORDER_RADIUS[2]}px;
  background-color: ${fromProps('enabled.thumbColor')};
  &:hover {
    background-color: ${fromProps('hover.thumbColor')};
  }
  &:active {
    background-color: ${fromProps('active.thumbColor')};
  }
`

export const trackVerticalCss = css`
  height: 100%;
  width: ${SPACES[4]}px !important;
  right: 0;
  top: 0;
  ${trackCss}
`

export const trackHorizontalCss = css`
  width: 100%;
  height: ${SPACES[4]}px !important;
  bottom: 0;
  left: 0;
  ${trackCss}
`

export const thumbVerticalCss = css`
  ${thumbCss}
`

export const thumbHorizontalCss = css`
  ${thumbCss}
`

export const viewCss = css`
  padding-right: ${SPACES[4]}px;
  padding-bottom: ${SPACES[4]}px;
`
