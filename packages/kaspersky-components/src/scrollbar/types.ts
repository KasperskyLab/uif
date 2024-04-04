import { Theme } from '@design-system/types'
import { ToViewProps } from '@helpers/typesHelpers'

type StateProps = {
  trackColor?: string,
  thumbColor?: string
}

export type ScrollbarColorConfig = {
  normal: StateProps,
  hover: StateProps,
  active: StateProps
}

export type ScrollbarThemeProps = {
  /** Custom theme */
  theme?: Theme
}

export type ScrollbarCssConfig = ScrollbarColorConfig

export type ScrollbarToViewProps<T> = ToViewProps<T, ScrollbarCssConfig, ScrollbarThemeProps>
