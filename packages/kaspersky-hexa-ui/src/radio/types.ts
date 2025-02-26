import { Focus } from '@design-system/tokens/focus'
import { Theme } from '@design-system/types'
import { WithAdditionalContent } from '@helpers/components/AdditionalContent'
import { TestingProps, ToViewProps } from '@helpers/typesHelpers'
import { RadioProps as AntdRadioProps } from 'antd/es/radio'
import { ReactNode } from 'react'

import { TextSizes } from '@kaspersky/hexa-ui-core/typography/js'

export type RadioOption = WithAdditionalContent<{
  label: Exclude<ReactNode, null | undefined>,
  value: string,
  disabled?: boolean,
  readonly?: boolean,
  required?: boolean,
  tooltip?: ReactNode
}>

export type StateProps = {
  color?: string,
  background?: string,
  border?: string,
  dotColor?: string
}

export type RadioColorConfig = Focus & {
  enabled?: StateProps,
  hover?: StateProps,
  active?: StateProps,
  disabled?: StateProps,
  readonly?: StateProps,
  invalid?: StateProps
}

export type RadioCssConfig = RadioColorConfig & TextSizes

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
} & AntdRadioProps & RadioThemeProps & TestingProps

export type RadioViewProps = ToViewProps<RadioProps, RadioCssConfig>
