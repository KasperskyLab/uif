import { Theme } from '@design-system/types'
import { TestingProps, ToViewProps } from '@helpers/typesHelpers'

export const progressBarModes = [
  'critical',
  'warning',
  'success',
  'accent',
  'neutralBold',
  'neutralSubtle',
  'orange',
  'grass',
  'violet',
  'purple',
  'coldgray'
] as const

export type ProgressBarMode = typeof progressBarModes[number]

export const progressBarSizes = ['small', 'medium', 'large'] as const

export type ProgressBarSize = typeof progressBarSizes[number]

export type ProgressBarColorConfig = {
  background: string,
  color: string
}

export type ProgressBarSizeConfig = {
  height: string
}

export type ProgressBarCssConfig = ProgressBarColorConfig & ProgressBarSizeConfig

export type ProgressBarThemeProps = {
  /** Custom theme */
  theme?: Theme,
  /** Color mode */
  mode: ProgressBarMode,
  /** Size */
  size?: ProgressBarSize
}

export type ProgressBarProps = {
  /** Size of active progress bar (from 0% to 100%) */
  track?: number,
  /** Whether background is visible */
  background?: boolean,
  /** Width in pixels */
  width?: number
} & ProgressBarThemeProps & TestingProps

export type ProgressBarViewProps = ToViewProps<ProgressBarProps, ProgressBarCssConfig, ProgressBarThemeProps>
