import { Theme } from '@design-system/types'
import { TestingProps, ToViewProps } from '@helpers/typesHelpers'

export const IndicatorModes = [
  'accent',
  'not-active',
  'new',
  'update',
  'inProgress',
  'resolved',
  'inIncident',
  'high',
  'critical',
  'medium',
  'info',
  'positive',
  'low'
] as const

export type IndicatorMode = typeof IndicatorModes[number]

export type IndicatorCssConfig = {
  background: string,
  border: string
}

export type IndicatorThemeProps = {
  /** Color mode */
  mode?: IndicatorMode,
  /** Custom theme */
  theme?: Theme
}

export type IndicatorProps = {
  /** Show border */
  border?: boolean
} & IndicatorThemeProps & TestingProps

export type IndicatorViewProps = ToViewProps<IndicatorProps, IndicatorCssConfig, IndicatorThemeProps>
