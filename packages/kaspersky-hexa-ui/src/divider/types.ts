import { Theme } from '@design-system/types'
import { TestingProps, ToViewProps } from '@helpers/typesHelpers'

export type DividerToViewProps<T> = ToViewProps<T, DividerCssConfig, DividerStyleProps>

export type DividerMode = 'bold' | 'light' | 'onLightStatic' | 'inverted'

export type DividerDirection = 'horizontal' | 'vertical'

export type DividerColorConfig = {
  color?: string
}

export type DividerCssConfig = DividerColorConfig

export type DividerStyleProps = {
  /** Custom theme */
  theme?: Theme
}

export type DividerProps = DividerStyleProps & {
  /** Custom class name */
  className?: string,
  /** Direction */
  direction?: DividerDirection,
  /** Color mode */
  mode?: DividerMode
} & TestingProps

export type DividerViewProps = DividerToViewProps<DividerProps>
