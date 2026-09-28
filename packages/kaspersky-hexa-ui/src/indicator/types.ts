import { Theme } from '@design-system/types'
import { TestingProps } from '@helpers/typesHelpers'

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

export type IndicatorThemeProps = {
  /** Color mode */
  mode?: IndicatorMode,
  /** Custom theme */
  theme?: Theme
}

export type IndicatorProps = {
  /** Show border */
  border?: boolean
  /** Change border color if border={true} */
  /** @deprecated No effect */
  borderBackground?: string
  className?: string
} & IndicatorThemeProps & TestingProps
