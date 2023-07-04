import { TooltipProps } from 'antd/es/tooltip'

export interface ICssConfig { cssConfig: TooltipCssConfig }

export interface TooltipCssConfig {
  background: string,
  color: string
}

export type ITooltipProps = TooltipProps & {
  theme?: string
}
