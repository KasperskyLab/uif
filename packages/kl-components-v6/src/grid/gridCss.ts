import { css } from 'styled-components'
import { ILayoutDescriptor } from './types'
import { IGridItemProps } from './GridItem'

export const gridCss = css<ILayoutDescriptor>`
  grid-auto-flow: ${({ direction }) => direction};
  grid-template-columns: ${({ cols = [] }) => cols.join(' ')};
  grid-template-rows: ${({ rows = [] }) => rows.join(' ')};
  grid-template-areas: "${({ areas = [[]] }) => areas.map(a => a.join(' ')).join('" "')}";
`

export const gridItemCss = css<IGridItemProps>`
  grid-area: ${({ areaName }) => areaName};
  grid-column: ${({ span, columnSpan }) => span || columnSpan ? `span ${span || columnSpan}` : ''};
  grid-row: ${({ rowSpan }) => rowSpan ? `span ${rowSpan}` : ''};
`
