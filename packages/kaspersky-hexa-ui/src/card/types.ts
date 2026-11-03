import { Theme } from '@design-system/types'
import { TestingProps } from '@helpers/typesHelpers'
import { CheckboxProps } from '@src/checkbox'
import { IconResolverProps } from '@src/icon'
import { RadioProps } from '@src/radio'
import { ToggleProps } from '@src/toggle'
import { TextProps } from '@src/typography'
import { CSSProperties, ReactNode } from 'react'

export type CardSize = 'small' | 'medium' | 'large'

export type CardMode = 'filled' | 'base' | 'selected'

export type CardTitleSize = 'small' | 'medium'

type TitleElement = ({ component: 'toggle' } & ToggleProps) | ({ component: 'radio' } & RadioProps)

export type ElementBefore = TitleElement |
  ReactNode |
  ({ component: 'checkbox' } & CheckboxProps) |
  ({ component: 'icon' } & IconResolverProps)

export type ElementAfter = TitleElement | ({ component: 'text' } & TextProps)

type CardAction = {
  icon?: ReactNode,
  onClick?: () => void,
  value?: string
}

export type CardTitleProps = {
  value: string,
  size?: CardTitleSize,
  elementBefore?: ElementBefore,
  elementAfter?: ElementAfter
}

export type CardProps = {
  /** Custom theme */
  theme?: Theme,
  /** Color mode */
  mode?: CardMode,
  /** Size */
  size?: CardSize,
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
  /** Max height. Scrollable when maxHeight provided, size !== 'small', and content overflows */
  maxHeight?: string,
  /** Custom class name */
  className?: string
} & TestingProps
