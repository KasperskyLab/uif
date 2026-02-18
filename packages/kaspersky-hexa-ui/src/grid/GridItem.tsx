import styled from 'styled-components'

import { gridItemCss } from './gridCss'
import { GridItemProps } from './types'


export const GridItem = styled.div.withConfig<GridItemProps>({
  shouldForwardProp: prop => ['className', 'data-testid', 'kl-id', 'children'].includes(prop)
})`${gridItemCss}`
