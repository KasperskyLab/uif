import { TooltipPropsWithTitle } from 'antd/es/tooltip'
import { Theme } from '@design-system/types'
import { ToViewProps } from '@helpers/typesHelpers'

export type TooltipCssConfig = {
  background: string,
  color: string
}

export type TooltipThemeProps = {
  /** Custom theme */
  theme?: Theme
}

export type TooltipProps = Omit<TooltipPropsWithTitle, 'placement' | 'title'> & TooltipThemeProps & {
  /** Placement */
  placement?: 'top' | 'left' | 'right' | 'bottom',
  /** Tooltip content */
  text: TooltipPropsWithTitle['title']
}

export type TooltipViewProps = ToViewProps<TooltipProps, TooltipCssConfig, TooltipThemeProps> & { rootHashClass?: string }

/** @deprecated Use TooltipProps instead */
export type ITooltipProps = TooltipProps
/** @deprecated Use TooltipViewProps instead */
export type ITooltipViewProps = TooltipViewProps
