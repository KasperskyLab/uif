import { Theme } from '@design-system/types'
import { ToViewProps } from '@helpers/typesHelpers'

import { TooltipPropsWithTitle } from './AntdTooltip'

export type TooltipCssConfig = {
  background: string,
  boxShadow: string,
  boxShadowLine: string,
  color: string
}

export type TooltipThemeProps = {
  /** Custom theme */
  theme?: Theme
}

export type TooltipProps = Omit<TooltipPropsWithTitle, 'placement' | 'title'> & TooltipThemeProps & {
  /** Placement */
  placement?: 'top' | 'left' | 'right' | 'bottom' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom',
  /** Should fall back to default align config */
  defaultAlign?: boolean,
  /** Tooltip content */
  text: TooltipPropsWithTitle['title']
}

export type TooltipViewProps = ToViewProps<TooltipProps, TooltipCssConfig, TooltipThemeProps>
