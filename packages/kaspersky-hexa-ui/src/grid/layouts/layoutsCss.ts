import { getGapStyle } from '@helpers/getGapStyle'
import { css } from 'styled-components'

import { LayoutBaseProps } from '../types'

export const layoutBaseCss = css<LayoutBaseProps>`
  display: grid;
  gap: ${({ gap }) => getGapStyle(gap)};
  row-gap: ${({ rowGap }) => getGapStyle(rowGap)};
  column-gap: ${({ columnGap }) => getGapStyle(columnGap)};
  align-items: ${({ alignItems = '' }) => alignItems};
  justify-items: ${({ justifyItems = '' }) => justifyItems};
`

export const singleRowLayoutCss = css`
  grid-auto-columns: min-content;
  grid-auto-flow: column;
`

export const twoColumnsLayoutCss = css`
  grid-template-columns: 0.5fr 1fr;
  grid-template-areas: "left right";
`

export const defaultLayoutCss = css`
  grid-template-columns: repeat(12, 1fr);
`
