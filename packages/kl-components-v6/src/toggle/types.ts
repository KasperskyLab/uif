import { PropsWithChildren, ReactNode } from 'react'
import { SwitchProps } from 'antd/es/switch'
import { TextSizes } from '../../design-system/tokens'
import { Theme } from '../../design-system/types'

export type StateProps = {
  color?: string,
  bgOn?: string,
  bgOff?: string,
  dotColorOn?: string,
  dotColorOff?: string,
  outline?: string
}

export type ToggleColorConfig = {
  normal?: StateProps,
  hover?: StateProps,
  active?: StateProps,
  focus?: StateProps,
  disabled?: StateProps
}

export type ToggleSize = 'small' | 'default'

export type ToggleCssConfig = ToggleColorConfig & TextSizes

export type IToggleProps = SwitchProps & IToggleViewProps & {
  children?: ReactNode,
  className?: string,
  icon?: JSX.Element,
  disabled?: boolean,
  theme?: Theme,
  labelPosition?: 'after' | 'before',
  text?: string,
  size?: 'small' | 'default',
  klId?: string
}

export type IToggleViewProps = PropsWithChildren<{
  cssConfig?: Record<any, unknown>
}>
