import { AnyStyledComponent } from 'styled-components'

export interface ILayoutDescriptor {
  direction?: string,
  cols?: string[],
  rows?: string[],
  areas?: string[][]
}

export interface ILayoutBaseProps {
  alignItems?: string,
  justifyItems?: string,
  gap?: number,
  rowGap?: number,
  columnGap?: number
}

export type ILayoutProps = ILayoutDescriptor & ILayoutBaseProps & Pick<IGridProps, 'className' | 'direction'>

export interface IGridProps {
  /** Class name */
  className?: string,
  /** Grid direction */
  direction?: string,
  /** Layout description or Custom Layout Component */
  layout?: AnyStyledComponent | ILayoutDescriptor,
  /** Layout Properties */
  layoutProperty?: ILayoutBaseProps,
  /** Test id */
  klId?: string
}
