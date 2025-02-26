import { Theme } from '@design-system/types'
import { TestingProps, ToViewProps } from '@helpers/typesHelpers'
import { CheckboxProps } from '@src/checkbox'
import { IconProps } from '@src/icon'
import { RadioProps } from '@src/radio'
import { ToggleProps } from '@src/toggle'
import { TextProps } from '@src/typography'
import { CSSProperties, ReactNode } from 'react'

type StateConfig = {
  color?: string,
  icon?: string,
  border?: string,
  background?: string
}

export type CardColorConfig = {
  enabled?: StateConfig,
  hover?: StateConfig,
  active?: StateConfig
}

export type CardSizeConfig = {
  padding: string
}

export type CardCssConfig = CardColorConfig & CardSizeConfig

export type CardSize = 'small' | 'medium' | 'large'

export type CardMode = 'filled' | 'base' | 'selected'

export type CardThemeProps = {
  /** Custom theme */
  theme?: Theme,
  /** Color mode */
  mode?: CardMode,
  /** Size */
  size?: CardSize
}

type TitleElement = ({ component: 'toggle' } & ToggleProps) | ({ component: 'radio' } & RadioProps)

export type ElementBefore = TitleElement
  | ({ component: 'checkbox' } & CheckboxProps)
  | ({ component: 'icon' } & IconProps)

export type ElementAfter = TitleElement | ({ component: 'text' } & TextProps)

type CardAction = {
  icon?: ReactNode,
  onClick?: () => void,
  value?: string
}

export type CardTitleProps = {
  value: string,
  elementBefore?: ElementBefore,
  elementAfter?: ElementAfter
}

export type CardProps = CardThemeProps & {
  /** Card title */
  title?: CardTitleProps,
  /** Actions */
  actions?: CardAction[],
  /** If draggable */
  draggable?: boolean,
  /** If closable */
  closable?: boolean,
  /** If interactive */
  interactive?: boolean,
  /** Handler for clicking close icon */
  onCloseButtonClick?: () => void,
  /** Content of the card */
  children?: ReactNode,
  /** Inline styles */
  style?: CSSProperties,
  /** Custom class name */
  className?: string
} & TestingProps

export type CardViewProps = ToViewProps<CardProps, CardCssConfig, Omit<CardThemeProps, 'size'>>
