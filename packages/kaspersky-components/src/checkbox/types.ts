import { FocusEvent, ReactNode, ReactElement } from 'react'
import { Theme } from '@design-system/types'
import {
  CheckboxProps as AntdCheckboxProps,
  CheckboxGroupProps as AntdCheckboxGroupProps
} from 'antd/es/checkbox'
import { FormLabelMode } from '@src/form-label/types'
import { Focus } from '@design-system/tokens/focus'
import { TestingProps, ToViewProps } from '@helpers/typesHelpers'

export type CheckboxToViewProps<T> = ToViewProps<T, CheckboxCssConfig, CheckboxThemeProps>

export type StateProps = {
  color?: string,
  bgColor?: string,
  borderColor?: string,
  checkColor?: string,
  checkBgColor?: string,
  iconColor?: string
}

export type CheckboxColorConfig = Focus & {
  normal?: StateProps,
  hover?: StateProps,
  active?: StateProps,
  disabled?: StateProps,
  readonly?: StateProps,
  invalid?: StateProps
}

export type CheckboxSizeConfig = {
  radius?: string,
  height?: string
}

export type CheckboxCssConfig = CheckboxColorConfig & CheckboxSizeConfig

export type CheckboxThemeProps = {
  /** Custom theme */
  theme?: Theme
}

export type CheckboxProps = AntdCheckboxProps & CheckboxThemeProps & TestingProps & {
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
  onFocus?: FocusEvent<HTMLElement>,
  /** If form label is required */
  required?: boolean,
  /** Form label tooltip content */
  tooltip?: ReactNode,
  /** Form label mode */
  mode?: FormLabelMode
}

export type CheckboxViewProps = CheckboxToViewProps<CheckboxProps>

export type Option = {
  label: string | ReactElement,
  value: string | number,
  disabled?: boolean,
  readonly?: boolean,
  mode?: FormLabelMode,
  invalid?: boolean
}

export type CheckboxGroupProps = AntdCheckboxGroupProps & CheckboxThemeProps & TestingProps & {
  /** Group options */
  options?: Option[],
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

/** @deprecated Use CheckboxProps instead */
export type ICheckboxProps = CheckboxProps
/** @deprecated Use CheckboxViewProps instead */
export type ICheckboxViewProps = CheckboxViewProps

/** @deprecated Use CheckboxGroupProps instead */
export type ICheckboxGroupProps = CheckboxGroupProps
