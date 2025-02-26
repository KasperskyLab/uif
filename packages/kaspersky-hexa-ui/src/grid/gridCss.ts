import { SPACES } from '@design-system/theme'
import { css } from 'styled-components'

import { GridItemProps } from './GridItem'
import { GridCssProps } from './types'

const GRID_WIDTH_FIX = '872px'
const GRID_WIDTH_STRETCH_MAX = '1592px'
const GRID_WIDTH_STRETCH_MIN = '400px'
const GRID_WIDTH_SIDEBAR = '100%'
const GRID_PADDING = `0 ${SPACES[12]}px`

export const gridCss = css<GridCssProps>`
  ${({ direction }) => direction ? `grid-auto-flow: ${direction};` : ''}
  ${({ cols }) => cols ? `grid-template-columns: ${cols.join(' ')};` : ''}
  ${({ rows }) => rows ? `grid-template-rows: ${rows.join(' ')};` : ''}
  ${({ areas }) => areas ? `grid-template-areas: "${areas.map(a => a.join(' ')).join('" "')}";` : ''}
  ${({ withPadding }) => withPadding
    ? `padding: ${GRID_PADDING};
      box-sizing: content-box;`
    : ''
  }
  ${({ gridType }) => {
    switch (gridType) {
      case 'fix':
        return `width: ${GRID_WIDTH_FIX};`
      case 'sidebar':
        return `width: ${GRID_WIDTH_SIDEBAR};`
      default:
        return `max-width: ${GRID_WIDTH_STRETCH_MAX};
          min-width: ${GRID_WIDTH_STRETCH_MIN};
          width: 100%;
        `
    }
  }}
`

export const gridItemCss = css<GridItemProps>`
  ${({ areaName }) => areaName ? `grid-area: ${areaName};` : ''}
  ${({ rowSpan }) => rowSpan ? `grid-row: span ${rowSpan};` : ''}
  ${({ span, columnSpan }) => span || columnSpan ? `grid-column: span ${span || columnSpan};` : ''}
`
