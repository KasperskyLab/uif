import { Theme } from '@design-system/types'
import { TagProps } from '../tag/types'
import { ToViewProps } from '@helpers/typesHelpers'

export const SeverityModes = ['critical', 'high', 'medium', 'low', 'info', 'positive'] as const
export type SeverityMode = typeof SeverityModes[number]

type StateProps = {
  background?: string,
  color?: string
}

export type SeverityColorConfig = {
  normal: StateProps
}

export type SeverityCssConfig = SeverityColorConfig

export type SeverityThemeProps = {
  /** Custom theme */
  theme?: Theme,
  /** Color mode */
  mode: SeverityMode
}

export type SeverityProps = Omit<TagProps, 'mode' | 'closable' | 'readOnly' | 'invalid' | 'theme'> & SeverityThemeProps

export type SeverityViewProps = ToViewProps<SeverityProps, SeverityCssConfig, Omit<SeverityThemeProps, 'mode'>>
