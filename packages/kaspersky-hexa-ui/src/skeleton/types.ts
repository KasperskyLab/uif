import { Size, Theme } from '@design-system/types'
import { TestingProps } from '@helpers/typesHelpers'

export const skeletonSizes = [Size.Small, Size.Medium, Size.Large, 'flex'] as const

export type SkeletonSize = typeof skeletonSizes[number]

export type SkeletonProps = {
  /** Css class */
  className?: string,
  /**  width fixed or auto */
  flexWidth?: boolean,
  /** size - specific height and width */
  size?: SkeletonSize,
  style?: React.CSSProperties,
  theme?: Theme,
  testAttributes?: TestingProps
}
