import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import React, { FC } from 'react'
import styled, { isStyledComponent } from 'styled-components'

import { gridCss } from './gridCss'
import { GridItem } from './GridItem'
import { LayoutBase } from './layouts'
import { GridProps, GridVariants } from './types'

const StyledGrid = styled(LayoutBase)`${gridCss}`
const DEFAULT_COLS = 12
const DEFAULT_GAP = 16

export const Grid: FC<GridProps> & GridVariants = (props: GridProps) => {
  const { 
    children, 
    cols,
    layout,
    layoutProperty,
    testAttributes,
    ...rest
  } = useTestAttribute(props)

  const gridProps = {
    ...rest,
    ...testAttributes,
    alignItems: layoutProperty?.alignItems,
    cols: layout?.cols ?? [`repeat(${cols ?? DEFAULT_COLS}, 1fr)`],
    columnGap: layoutProperty?.columnGap,
    gap: layoutProperty?.gap ?? DEFAULT_GAP,
    justifyItems: layoutProperty?.justifyItems,
    rowGap: layoutProperty?.rowGap
  }

  if (isStyledComponent(layout)) {
    const GridContainer = layout

    return <GridContainer {...gridProps}>{children}</GridContainer>
  }

  return <StyledGrid
    {...gridProps}
    areas={layout?.areas}
    direction={layout?.direction}
    rows={layout?.rows}
  >{children}</StyledGrid>
}

Grid.defaultProps = {
  cols: 12
}

Grid.Item = GridItem
