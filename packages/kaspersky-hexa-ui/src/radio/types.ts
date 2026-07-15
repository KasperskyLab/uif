import { Theme } from '@design-system/types'
import { WithAdditionalContent } from '@helpers/components/AdditionalContent'
import { TestingProps } from '@helpers/typesHelpers'
import { RadioProps as AntdRadioProps } from 'antd/es/radio'
import { ReactNode } from 'react'

export type RadioOption = WithAdditionalContent<{
  label: Exclude<ReactNode, null | undefined>,
  value: string,
  disabled?: boolean,
  readonly?: boolean,
  required?: boolean,
  tooltip?: ReactNode
}>

export type RadioThemeProps = {
  /** Custom theme */
  theme?: Theme
}

export type RadioProps = {
  /** If orientation is vertical */
  vertical?: boolean,
  /** Is disabled */
  disabled?: boolean,
  /** Is readonly */
  readonly?: boolean,
  /** Is invalid */
  invalid?: boolean,
  /** HTML role */
  role?: string,
  /** Array of options */
  options: RadioOption[]
  /** Popup container for tooltips */
  getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement
} & AntdRadioProps & RadioThemeProps & TestingProps
