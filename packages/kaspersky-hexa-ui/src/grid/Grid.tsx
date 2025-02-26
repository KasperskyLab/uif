import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import * as React from 'react'
import styled, { isStyledComponent } from 'styled-components'

import { gridCss } from './gridCss'
import { LayoutBase } from './layouts'
import { GridProps } from './types'

const StyledGrid = styled(LayoutBase)`${gridCss}`
const DEFAULT_COLS = 12
const DEFAULT_GAP = 16

export const Grid = ({ layout, children, className, layoutProperty, cols, gridType, withPadding, ...rest }: GridProps) => {
  const colsValue = cols ? [`repeat(${cols}, 1fr)`] : layout?.cols
  const { testAttributes } = useTestAttribute(rest)
  if (isStyledComponent(layout)) {
    const GridContainer = layout

    return <GridContainer
      className={className}
      alignItems={layoutProperty?.alignItems}
      justifyItems={layoutProperty?.justifyItems}
      gap={layoutProperty?.gap ?? DEFAULT_GAP}
      rowGap={layoutProperty?.rowGap}
      cols={colsValue ?? [`repeat(${DEFAULT_COLS}, 1fr)`]}
      columnGap={layoutProperty?.columnGap}
      gridType={gridType}
      withPadding={withPadding}
      {...testAttributes}
    >{ children }</GridContainer>
  }

  return <StyledGrid
    className={className}
    direction={layout?.direction}
    alignItems={layoutProperty?.alignItems}
    justifyItems={layoutProperty?.justifyItems}
    gap={layoutProperty?.gap ?? DEFAULT_GAP}
    rowGap={layoutProperty?.rowGap}
    columnGap={layoutProperty?.columnGap}
    rows={layout?.rows}
    cols={colsValue ?? [`repeat(${DEFAULT_COLS}, 1fr)`]}
    areas={layout?.areas}
    gridType={gridType}
    withPadding={withPadding}
    {...testAttributes}
  >{ children }</StyledGrid>
}
