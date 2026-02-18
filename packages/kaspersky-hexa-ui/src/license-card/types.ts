import { Theme } from '@design-system/types'
import { TestingProps } from '@helpers/typesHelpers'
import { CSSProperties, ReactNode } from 'react'

export const licenseCardModes = [
  'valid',
  'warning', 
  'expiresSoon', 
  'expired', 
  'finished'
] as const

export type LicenseCardMode = typeof licenseCardModes[number]

export interface LicenseCardThemeProps {
  /** License Card theme */
  theme?: Theme,
  /** License Card mode */
  mode?: LicenseCardMode
}

export type LicenseCardProps = LicenseCardThemeProps & {
  /** License title */
  title?: string,
  /** License number */
  number: string,
  /** License Card min-width */
  minWidth?: number | string,
  /** License expiration date */
  expirationDate?: Date,
  /** License days remaining */
  daysRemaining?: number,
  /** License activation date */
  activationDate?: Date,
  /** License term */
  term?: number,
  /** Icon display before the title */
  iconBefore?: ReactNode,
  /** Element display after the title (only visible in compact mode) */
  elementAfter?: ReactNode;
  /** Compact layout mode */
  compact?: boolean,
  /**  Left icon className */
  leftSideClassName?: string,
  /** Right icon className */
  rightSideClassName?: string,
  /** Actions */
  actions?: ReactNode,
  /** Content of the Card */
  children?: ReactNode,
  /** Inline styles */
  style?: CSSProperties,
  /** Component className */
  className?: string
} & TestingProps
