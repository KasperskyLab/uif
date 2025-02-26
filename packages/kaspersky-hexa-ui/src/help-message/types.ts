import { Theme } from '@design-system/types'
import { TestingProps, ToViewProps } from '@helpers/typesHelpers'

export type HelpMessageMode = 'error' | 'warning' | 'success' | 'common'

export type HelpMessageStateProps = {
  color?: string
}

export type HelpMessageCssConfig = HelpMessageStateProps

export type HelpMessageThemeProps = {
  /** Color mode */
  mode?: HelpMessageMode,
  /** Custom theme */
  theme?: Theme
}

export type HelpMessageProps = {
  /** Displayed text (instead of count) */
  text?: string,
  /** Custom class name */
  className?: string
} & HelpMessageThemeProps & TestingProps

export type HelpMessageViewProps = ToViewProps<HelpMessageProps, HelpMessageCssConfig, HelpMessageThemeProps>
