import { Focus } from '@design-system/tokens/focus'
import { Theme } from '@design-system/types'
import { WithAdditionalContent } from '@helpers/components/AdditionalContent'
import { TestingProps, ToViewProps } from '@helpers/typesHelpers'
import { FormLabelMode } from '@src/form-label/types'
import {
  CheckboxGroupProps as AntdCheckboxGroupProps,
  CheckboxProps as AntdCheckboxProps
} from 'antd/es/checkbox'
import { FocusEventHandler, ReactNode } from 'react'

type StateInnerProps = {
  selected?: string,
  unselected?: string
}

export type StateProps = {
  color?: string,
  background?: StateInnerProps,
  border?: string,
  checkColor?: string
}

type CheckboxStateConfig = Record<'enabled' | 'hover' | 'active' | 'disabled' | 'readonly', StateProps>

export type CheckboxColorConfig = Record<'default' | 'invalid', CheckboxStateConfig> & Focus

export type CheckboxSizeConfig = {
  radius?: string,
  height?: string
}

export type CheckboxCssConfig = CheckboxColorConfig & CheckboxSizeConfig

export type CheckboxThemeProps = {
  /** Custom theme */
  theme?: Theme
}

export type CheckboxProps = AntdCheckboxProps & CheckboxThemeProps & TestingProps & WithAdditionalContent<{
  /** React children */
  children?: ReactNode,
  /** Custom class name */
  className?: string,
  /** Is readonly */
  readonly?: boolean,
  /** Is invalid */
  invalid?: boolean,
  /** HTML role */
  role?: string,
  /** Called when the checkbox is focused */
  onFocus?: FocusEventHandler,
  /** If form label is required */
  required?: boolean,
  /** Form label tooltip content */
  tooltip?: ReactNode,
  /** Form label mode */
  mode?: FormLabelMode
}>

export type CheckboxViewProps = ToViewProps<CheckboxProps, CheckboxCssConfig, CheckboxThemeProps>

export type CheckboxOption = Omit<CheckboxProps, 'children'> & {
  label: CheckboxProps['children']
}

export type CheckboxGroupProps = AntdCheckboxGroupProps & CheckboxThemeProps & TestingProps & {
  /** Group options */
  options?: CheckboxOption[],
  /** Is invalid */
  invalid?: boolean,
  /** Is readonly */
  readonly?: boolean,
  /** Form label mode */
  mode?: FormLabelMode,
  /** Group direction */
  direction?: 'horizontal' | 'vertical',
  /** HTML role */
  role?: string,
  /** Called when the state changes */
  onChange?: (checkedValue: any) => void
}
