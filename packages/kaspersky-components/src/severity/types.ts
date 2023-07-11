import { ReactNode } from 'react'
import { TagProps } from '../tag/types'

export type SeverityMode = 'critical' | 'high'| 'medium'| 'low'| 'info'| 'positive'

type StateProps = {
  background?: string,
  color?: string
}
export type SeverityColorConfig = {
  normal: StateProps
}

export type SeverityCssConfig = SeverityColorConfig

export type SeverityProps = {
  /**
    * content
    */
  children?: ReactNode,
  /**
   * mode
   */
  mode: SeverityMode
} & Omit<TagProps, 'closable' | 'backgroundColor' | 'overrides'>
