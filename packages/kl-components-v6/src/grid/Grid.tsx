import * as React from 'react'
import styled, { isStyledComponent } from 'styled-components'
import { gridCss } from './gridCss'
import { IGridProps } from './types'
import { DefaultLayout, LayoutBase } from './layouts'

const StyledGrid = styled(LayoutBase)`${gridCss}`

export const Grid = ({ layout = DefaultLayout, children, className, layoutProperty = {}, klId }: React.PropsWithChildren<IGridProps>) => {
  if (isStyledComponent(layout)) {
    const GridContainer = layout

    return <GridContainer
      className={className}
      alignItems={layoutProperty.alignItems}
      justifyItems={layoutProperty.justifyItems}
      gap={layoutProperty.gap}
      rowGap={layoutProperty.rowGap}
      columnGap={layoutProperty.columnGap}
      kl-id={klId}
    >{ children }</GridContainer>
  }

  return <StyledGrid
    className={className}
    direction={layout.direction}
    alignItems={layoutProperty.alignItems}
    justifyItems={layoutProperty.justifyItems}
    gap={layoutProperty.gap}
    rowGap={layoutProperty.rowGap}
    columnGap={layoutProperty.columnGap}
    rows={layout.rows}
    cols={layout.cols}
    areas={layout.areas}
    kl-id={klId}
  >{ children }</StyledGrid>
}
