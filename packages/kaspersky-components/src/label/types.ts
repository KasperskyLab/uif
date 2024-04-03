import { HTMLAttributes, ReactNode } from 'react'
import { Theme } from '@design-system/types'
import { LabelPosition, LabelType } from '@design-system/tokens'
import { TestingProps, ToViewProps } from '@helpers/typesHelpers'

export type LabelColorConfig = {
  requiredColor: string
}

export type LabelCssConfig = LabelColorConfig

export type LabelThemeProps = {
  /** Custom theme */
  theme?: Theme
}

export type LabelProps = HTMLAttributes<HTMLLabelElement> & {
  /** Position of label 'none' | 'top' | 'aside' | 'right' */
  position?: LabelPosition,
  /** Text of label, required not works with ReactNode */
  text?: ReactNode | string,
  /** Text under label */
  errorText?: string,
  /** Prop that disable label */
  disabled?: boolean,
  /** React children */
  children?: ReactNode,
  /** Custom class name */
  className?: string,
  /** Size of label in page 'default' | 'full' | 'stretch' */
  type?: LabelType,
  /** 'i' icon with tooltip after text in label */
  tooltip?: ReactNode,
  /** Indication that label is required works only with text type 'string' */
  required?: boolean,
  /** Sets the object to which the given label object is assigned */
  htmlFor?: HTMLLabelElement['htmlFor']
} & LabelThemeProps & TestingProps

export type LabelViewProps = ToViewProps<LabelProps, LabelCssConfig, LabelThemeProps>

/** @deprecated Use LabelProps instead */
export type ILabelProps = LabelProps
