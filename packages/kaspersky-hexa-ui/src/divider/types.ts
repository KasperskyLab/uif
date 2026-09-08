import { Theme } from '@design-system/types'
import { TestingProps } from '@helpers/typesHelpers'

export type DividerMode = 'bold' | 'light' | 'onLightStatic' | 'inverted'

export type DividerDirection = 'horizontal' | 'vertical'

export type DividerProps = {
  /** Custom theme */
  theme?: Theme,
  /** Custom class name */
  className?: string,
  /** Direction */
  direction?: DividerDirection,
  /** Color mode */
  mode?: DividerMode
} & TestingProps
