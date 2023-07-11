import styled from 'styled-components'
import { gridItemCss } from './gridCss'

export interface IGridItemProps {
  areaName?: string,
  span?: number,
  className?: string,
  columnSpan?: number,
  rowSpan?: number
}

export const GridItem = styled.div.withConfig<IGridItemProps>({
  shouldForwardProp: prop => ['className', 'kl-id', 'children'].includes(prop)
})`${gridItemCss}`
