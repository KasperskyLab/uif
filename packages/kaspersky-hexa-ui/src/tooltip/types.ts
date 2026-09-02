import { Theme } from '@design-system/types'

import { TooltipPropsWithTitle } from './AntdTooltip'

export type TooltipPlacement =
 'top' |
  'left' |
  'right' |
  'bottom' |
  'topLeft' |
  'topRight' |
  'bottomLeft' |
  'bottomRight' |
  'leftTop' |
  'leftBottom' |
  'rightTop' |
  'rightBottom'

export type TooltipProps = Omit<TooltipPropsWithTitle, 'placement' | 'title'> & {
  /** Placement */
  placement?: TooltipPlacement,
  /** Should fall back to default align config */
  defaultAlign?: boolean,
  /** Tooltip content */
  text: TooltipPropsWithTitle['title'],
  /** Custom theme */
  theme?: Theme
}
