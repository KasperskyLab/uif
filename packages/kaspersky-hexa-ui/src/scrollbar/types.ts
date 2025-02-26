import { Theme } from '@design-system/types'
import { ToViewProps } from '@helpers/typesHelpers'
import { Scrollbars } from 'react-custom-scrollbars-2'

type StateProps = {
  trackColor?: string,
  thumbColor?: string
}

export type ScrollbarColorConfig = {
  enabled: StateProps,
  hover: StateProps,
  active: StateProps
}

export type ScrollbarThemeProps = {
  /** Custom theme */
  theme?: Theme
}

export type ScrollbarCssConfig = ScrollbarColorConfig

export type ScrollbarToViewProps<T> = ToViewProps<T, ScrollbarCssConfig, ScrollbarThemeProps>

export type ScrollbarsClass = Scrollbars
