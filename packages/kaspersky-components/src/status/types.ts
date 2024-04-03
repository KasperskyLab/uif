import { Theme } from '@design-system/types'
import { TestingProps, ToViewProps } from '@helpers/typesHelpers'

export const StatusModes = [
  'default',
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

export type StatusMode = typeof StatusModes[number]

export type StatusColorConfig = {
  background?: string,
  color?: string
}

export type StatusCssConfig = StatusColorConfig

export type StatusStyleProps = {
  /** Custom theme */
  theme?: Theme,
  /** Color mode */
  mode?: StatusMode
}

export type StatusProps = StatusStyleProps & {
  /** Icon - if not set indicator is used */
  icon?: React.ReactNode,
  /** Label */
  label?: string,
  /** Custom class */
  className?: string
} & TestingProps

type StatusToViewProps<T> = ToViewProps<T, StatusCssConfig, StatusStyleProps>

export type StatusViewProps = StatusToViewProps<StatusProps> & { mode?: StatusMode }
