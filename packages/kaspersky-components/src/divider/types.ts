import { Theme } from '@design-system/types'
import { TestingProps, ToViewProps } from '@helpers/typesHelpers'

export type DividerToViewProps<T> = ToViewProps<T, DividerCssConfig, DividerStyleProps>

export type DividerMode = 'normal' | 'light' | 'bold'

export type DividerDirection = 'horizontal' | 'vertical'

export type DividerColorConfig = {
  color?: string
}

export type DividerCssConfig = DividerColorConfig

export type DividerStyleProps = {
  /** Custom theme */
  theme?: Theme,
  /** Color mode */
  mode?: DividerMode
}

export type DividerProps = DividerStyleProps & {
  /**
   * use `[number, number]` if you need unequal margin
   *
   * first - top / left margin
   *
   * second - bottom / right margin
   */
  margin?: number | [number, number],
  /** Custom class name */
  className?: string,
  /** Direction */
  direction?: DividerDirection,
  /** @deprecated Use 'direction' prop instead */
  kind?: DividerDirection
} & TestingProps

export type DividerViewProps = DividerToViewProps<DividerProps>

/** @deprecated Use DividerProps instead */
export type IDividerProps = Omit<DividerProps, 'direction'> & { kind?: DividerDirection }
/** @deprecated Use DividerViewProps instead */
export type IDividerViewProps = DividerToViewProps<DividerProps>
