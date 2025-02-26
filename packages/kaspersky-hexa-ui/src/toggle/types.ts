import { Focus } from '@design-system/tokens/focus'
import { Theme } from '@design-system/types'
import { WithAdditionalContent } from '@helpers/components/AdditionalContent'
import { TestingProps, ToViewProps } from '@helpers/typesHelpers'
import { SwitchProps } from 'antd/es/switch'
import { ReactNode } from 'react'

import { TextSizes } from '@kaspersky/hexa-ui-core/typography/js'

export type StateProps = {
  color?: string,
  bgOn?: string,
  bgOff?: string,
  knob?: string
}

export type ToggleColorConfig = Focus & {
  enabled?: StateProps,
  hover?: StateProps,
  active?: StateProps,
  disabled?: StateProps,
  readonly?: StateProps
}

export type ToggleCssConfig = ToggleColorConfig & TextSizes

export type ToggleThemeProps = {
  /** Custom theme */
  theme?: Theme
}

export type ToggleProps = Omit<SwitchProps, 'size'> & WithAdditionalContent<{
  /** React children */
  children?: ReactNode,
  /** Custom class name */
  className?: string,
  /** Icon */
  icon?: ReactNode,
  /** Disabled state */
  disabled?: boolean,
  /** Readonly state */
  readonly?: boolean,
  /** Label position */
  labelPosition?: 'after' | 'before',
  /** Text */
  text?: string,
  /** If form label is required */
  required?: boolean,
  /** Form label tooltip */
  tooltip?: ReactNode
}> & ToggleThemeProps & TestingProps

export type ToggleViewProps = ToViewProps<ToggleProps, ToggleCssConfig>
