import { Theme } from '@design-system/types'
import { TestingProps } from '@helpers/typesHelpers'
import React from 'react'

export type ActionButtonSize = 'large' | 'medium' | 'small'

export type ActionButtonMode = 'ghost' | 'ghostInverted' | 'filled' | 'filledInverted' | 'onLight'

export type ActionButtonThemeProps = {
  /** Custom theme */
  theme?: Theme,
  /** Size */
  size?: ActionButtonSize,
  /** Color mode */
  mode?: ActionButtonMode
}

export type ActionButtonHTMLProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export type ActionButtonCustomProps = {
  /** Icon component instead of default "cross" icon */
  icon?: React.ReactNode,
  /** Without icon */
  noIcon?: boolean,
  /** If interactive */
  interactive?: boolean,
  /** Any react node after all **/
  elementAfter?: React.ReactNode
  /** Use span instead of button **/
  _wrapInSpan?: boolean
} & ActionButtonThemeProps & TestingProps

export type ActionButtonProps = ActionButtonHTMLProps & ActionButtonCustomProps
