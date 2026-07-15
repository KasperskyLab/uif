import { TestingProps } from '@helpers/typesHelpers'
import { ReactNode } from 'react'

export type HelpMessageMode = 'error' | 'warning' | 'success' | 'common'
export type HelpMessageSize = 'small' | 'medium'

export type HelpMessageProps = {
  /** Displayed text (instead of count) */
  text?: string | ReactNode,
  /** Custom class name */
  className?: string,
  /** Color mode */
  mode?: HelpMessageMode,
  /** Size mode */
  size?: HelpMessageSize
} & TestingProps
