import { Theme } from '../../design-system/types'

export type DividerMode = 'normal' | 'light' | 'bold'

export type DividerType = 'horizontal' | 'vertical'

type StateProps = {
  color?: string
}

export type DividerColorConfig = Record<DividerMode, StateProps>

export type DividerSizeConfig = {
  thickness?: string,
  margin?: number,
  radius?: string
}

export type DividerCssConfig = DividerColorConfig[DividerMode] & DividerSizeConfig

export type DividerStyleProps = {
  /** Custom theme */
  theme?: Theme,
  /** Color mode */
  mode?: DividerMode
}

export type IDividerProps = DividerStyleProps & {
  /** Direction */
  kind?: DividerType,
  /**
   * use `[number, number]` if you need unequal margin
   *
   * first - top / left margin
   *
   * second - bottom / right margin
   */
  margin?: number | [number, number],
  /** Test id */
  klId?: string
}

export type IDividerViewProps = Omit<IDividerProps, keyof DividerStyleProps> & { cssConfig: DividerCssConfig }
