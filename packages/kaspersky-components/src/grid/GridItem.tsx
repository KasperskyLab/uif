import styled from 'styled-components'
import { gridItemCss } from './gridCss'

export type GridItemProps = {
  areaName?: string,
  span?: number,
  className?: string,
  columnSpan?: number,
  rowSpan?: number
}

export const GridItem = styled.div.withConfig<GridItemProps>({
  shouldForwardProp: prop => ['className', 'data-testid', 'kl-id', 'children'].includes(prop)
})`${gridItemCss}`

/** @deprecated Use GridItemProps instead */
export type IGridItemProps = GridItemProps
