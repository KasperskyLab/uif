import { Theme } from '@design-system/types'
import { WithAdditionalContent } from '@helpers/components/AdditionalContent'
import { TestingProps } from '@helpers/typesHelpers'
import { SwitchProps } from 'antd/es/switch'
import { ReactNode } from 'react'

export type ToggleThemeProps = {
  /** Custom theme */
  theme?: Theme
}

export type ToggleProps = Omit<SwitchProps, 'size'> & WithAdditionalContent<{
  /** React children */
  children?: ReactNode,
  /** Custom class name */
  className?: string,
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
