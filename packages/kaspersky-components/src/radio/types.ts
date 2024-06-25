import { PropsWithChildren, ReactNode } from 'react'
import { RadioProps as AntdRadioProps, RadioGroupOptionType } from 'antd/es/radio'
import { TextSizes } from '@design-system/tokens'
import { Theme } from '@design-system/types'
import { Focus } from '@design-system/tokens/focus'
import { TestingProps, ToViewProps } from '@helpers/typesHelpers'

export type RadioOption = {
  label: Exclude<ReactNode, null | undefined>,
  value: string,
  disabled?: boolean,
  readonly?: boolean,
  required?: boolean,
  tooltip?: ReactNode
}

/** @deprecated */
export type RadioMode = RadioGroupOptionType

export type StateProps = {
  color?: string,
  bgColor?: string,
  borderColor?: string,
  dotColor?: string,
  /** @deprecated  */
  dotBgColor?: string,
  /** @deprecated  */
  background?: string,
  /** @deprecated  */
  border?: string
}

export type RadioColorConfig = Focus & {
  normal?: StateProps,
  hover?: StateProps,
  active?: StateProps,
  disabled?: StateProps,
  readonly?: StateProps,
  invalid?: StateProps
}

export type RadioCssConfig = RadioColorConfig & TextSizes

export type RadioThemeProps = {
  /** Custom theme */
  theme?: Theme,
  /** @deprecated Only 'default' mode is present in design system */
  mode?: RadioGroupOptionType
}

// при удалении всего deprecated следует избавиться от PropsWithChildren, у нас использование радио
// не предполагает добавление вообще каких либо чилдренов
export type RadioProps = PropsWithChildren<{
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
  options: RadioOption[],
  /** @deprecated Only 'default' mode is present in design system */
  optionType?: RadioGroupOptionType
} & AntdRadioProps> & RadioThemeProps & TestingProps

export type RadioViewProps = ToViewProps<RadioProps, RadioCssConfig, Omit<RadioThemeProps, 'theme'>>

/** @deprecated Use RadioProps instead */
export type IRadioProps = RadioProps
/** @deprecated Use RadioViewProps instead */
export type IRadioViewProps = RadioViewProps
