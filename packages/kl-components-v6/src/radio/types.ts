import { PropsWithChildren, ReactNode } from 'react'
import { RadioProps, RadioGroupOptionType } from 'antd/es/radio'
import { Theme } from '../../design-system/types'
import { TextSizes } from '../../design-system/tokens'

export type RadioCssConfig = RadioColorConfig & TextSizes

export type IRadioProps = RadioProps & IRadioViewProps & {
  vertical?: boolean,
  disabled?: boolean,
  theme?: Theme,
  optionType?: RadioGroupOptionType,
  role?: string,
  options?: Array<{
    label: ReactNode,
    value: string,
    disabled?: boolean
  }>,
  componentId?: string
}

export type RadioMode = RadioGroupOptionType

export type IRadioViewProps = PropsWithChildren<{
  cssConfig?: RadioCssConfig
}>

export type StateProps = {
  color?: string,
  background?: string,
  border?: string,
  bgColor?: string,
  borderColor?: string,
  dotColor?: string,
  dotBgColor?: string,
  outline?: string
}

export type RadioColorConfig = {
  normal?: StateProps,
  hover?: StateProps,
  active?: StateProps,
  focus?: StateProps,
  disabled?: StateProps
}
