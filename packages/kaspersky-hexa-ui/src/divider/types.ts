import { Theme } from '@design-system/types'
import { TestingProps, ToViewProps } from '@helpers/typesHelpers'

export type DividerToViewProps<T> = ToViewProps<T, DividerCssConfig, DividerStyleProps>

export type DividerMode = 'normal' | 'light' | 'bold' | 'onLight' | 'inverted'

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
  /** Custom class name */
  className?: string,
  /** Direction */
  direction?: DividerDirection
} & TestingProps

export type DividerViewProps = DividerToViewProps<DividerProps>
