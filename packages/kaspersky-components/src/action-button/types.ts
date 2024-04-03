import React from 'react'
import { Theme } from '@design-system/types'
import { TestingProps, ToViewProps } from '@helpers/typesHelpers'
import { Focus } from '@design-system/tokens/focus'

export type ActionButtonSize = 'large' | 'medium' | 'small'

type StateProps = {
  background?: string,
  text?: string
}

export type ActionButtonMode = 'ghost' | 'ghostInverted' | 'filled' | 'filledInverted'

export type ActionButtonColorConfig = Focus & {
  normal?: StateProps,
  hover?: StateProps,
  active?: StateProps,
  disabled?: StateProps
}

export type ActionButtonSizeConfig = {
  padding?: string,
  gap?: string,
  paddingLabel?: string,
  paddingIcon?: string
}

export type ActionButtonCssConfig = ActionButtonColorConfig & ActionButtonSizeConfig

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
  interactive?: boolean
} & ActionButtonThemeProps & TestingProps

export type ActionButtonProps = ActionButtonHTMLProps & ActionButtonCustomProps

export type ActionButtonViewProps = ToViewProps<ActionButtonProps, ActionButtonCssConfig, Omit<ActionButtonThemeProps, 'size'>>

/** @deprecated Use ActionButtonCssConfig instead */
export type ActionButtonConfig = ActionButtonColorConfig

/** @deprecated */
export type ActionButtonThemeConfig = { [key in ActionButtonMode]: ActionButtonColorConfig }
