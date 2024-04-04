import { AnyStyledComponent } from 'styled-components'
import { TestingProps } from '@helpers/typesHelpers'

type GridTypeVariants = 'fix' | 'stretch' | 'sidebar'

export type LayoutDescriptor = {
  direction?: string,
  cols?: string[],
  rows?: string[],
  areas?: string[][]
}

export type GridCssProps = LayoutDescriptor & {
  /** Grid width Type, stretch and sidebar are equal. 'fix', 'stretch', 'sidebar' */
  gridType?: GridTypeVariants,
  /** Enable grid padding from sides */
  withPadding?: boolean
}

export type LayoutBaseProps = {
  alignItems?: string,
  justifyItems?: string,
  gap?: number,
  rowGap?: number,
  columnGap?: number
}

export type LayoutProps = LayoutDescriptor & LayoutBaseProps & Pick<GridProps, 'className' | 'direction'>

export type GridProps = TestingProps & {
  /** Custom class name */
  className?: string,
  /** Grid direction */
  direction?: string,
  /** Layout description or Custom Layout Component */
  layout?: AnyStyledComponent | LayoutDescriptor,
  /** Layout Properties */
  layoutProperty?: LayoutBaseProps,
  /** Number of columns */
  cols?: number,
  /** Grid width Type, stretch and sidebar are equal. 'fix', 'stretch', 'sidebar' */
  gridType?: GridTypeVariants,
  /** Enable grid padding from sides */
  withPadding?: boolean
}

export type FormGridProps = TestingProps & {
  /** Set grid preset */
  gridPreset: '4fr 6fr 2fr' | '4fr 8fr' | '3fr 6fr 3fr'
}

/** @deprecated Use LayoutDescriptor instead */
export type ILayoutDescriptor = LayoutDescriptor

/** @deprecated Use GridCssProps instead */
export type IGridCssProps = GridCssProps

/** @deprecated Use LayoutBaseProps instead */
export type ILayoutBaseProps = LayoutBaseProps
/** @deprecated Use LayoutProps instead */
export type ILayoutProps = LayoutProps

/** @deprecated Use GridProps instead */
export type IGridProps = GridProps
/** @deprecated Use FormGridProps instead */
export type IFormGridProps = FormGridProps
