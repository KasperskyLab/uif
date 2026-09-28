import { Theme } from '@design-system/types'
import { TestingProps } from '@helpers/typesHelpers'
import { CSSProperties } from 'react'

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

export const progressBarVariants = ['linear', 'circular'] as const

export type ProgressBarVariant = typeof progressBarVariants[number]

export type ProgressBarProps = {
  /** Custom theme */
  theme?: Theme,
  /** Color mode */
  mode?: ProgressBarMode,
  /** Size */
  size?: ProgressBarSize,
  /** Shape of the progress bar */
  variant?: ProgressBarVariant,
  /** Size of active progress bar (from 0% to 100%) */
  track?: number,
  /** Whether background is visible */
  background?: boolean,
  /** Width in pixels */
  width?: number,
  /** Custom class name */
  className?: string,
  /** Custom inline styles */
  style?: CSSProperties
} & TestingProps
