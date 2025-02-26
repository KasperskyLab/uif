import { Theme } from '@design-system/types'
import { ToViewProps } from '@helpers/typesHelpers'

import { TagProps } from '../tag/types'

export const SeverityModes = ['critical', 'high', 'medium', 'low', 'info', 'positive'] as const
export type SeverityMode = typeof SeverityModes[number]

export type SeverityColorConfig = {
  background?: string,
  color?: string
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
