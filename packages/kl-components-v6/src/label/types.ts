import { HTMLAttributes, ReactNode } from 'react'
import { ThemeKey } from '@design-system/types'
import { LabelPosition, LabelType } from '@design-system/tokens'

export type LabelColorConfig = {
  requiredColor: string
}

export type LabelStyleCssConfig = {
  readonly theme?: ThemeKey
}

export type LabelCssConfig = LabelStyleCssConfig & LabelColorConfig;

export interface ILabelProps extends HTMLAttributes<HTMLLabelElement>{
  /**
   * Test id
   */
  klId?: string,
  /**
   * Component theme
   */
  theme?: ThemeKey,
  /**
   * Position of label 'none' | 'top' | 'aside' | 'right'
   */
  position?: LabelPosition,
  /**
   * Text of label, required not wotks with ReactNode
   */
  text?: ReactNode | string,
  /**
   * Text under label
   */
  errorText?: string,
  /**
   * Prop that disable label
   */
  disabled?: boolean,
  /**
   * children of label
   */
  children?: ReactNode,
  /**
   * className of label
   */
  className?: string,
  /**
   * Size of label in page 'default' | 'full' | 'stretch'
   */
  type?: LabelType,
  /**
   * 'i' icon with tooltip after text in label
   */
  tooltip?: ReactNode,
  /**
   * Indication that label is required works only with text type 'string'
   */
  required?: boolean
}
