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

/** @deprecated */
export const IndicatorModesDeprecated = [
  'default'
] as const

/** @deprecated */
export type IndicatorModeDeprecated = typeof IndicatorModesDeprecated[number]

export type IndicatorCssConfig = {
  background: string,
  borderColor: string
}

export type IndicatorThemeProps = {
  /** Color mode */
  mode?: IndicatorMode | IndicatorModeDeprecated,
  /** Custom theme */
  theme?: Theme
}

export type IndicatorProps = {
  /** Show border */
  border?: boolean,
  label?: string
} & IndicatorThemeProps & TestingProps

export type IndicatorViewProps = ToViewProps<IndicatorProps, IndicatorCssConfig, IndicatorThemeProps>

/** @deprecated Use IndicatorProps instead */
export type IIndicatorProps = IndicatorProps
/** @deprecated Use IndicatorViewProps instead */
export type IIndicatorViewProps = IndicatorViewProps
