import { Theme } from '@design-system/types'
import { ToViewProps } from '@helpers/typesHelpers'
import type { RenderFunction } from 'antd/es/_util/getRenderPropValue'

import { AbstractTooltipProps } from '../tooltip/AntdTooltip'

export type PopoverThemeProps = {
  /** Custom theme */
  theme?: Theme
}

export type PopoverProps = Omit<AbstractTooltipProps, 'placement'> & {
  content?: React.ReactNode | RenderFunction,
  /** Popover position relative to the target */
  placement?: 'top' | 'left' | 'right' | 'bottom' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom',
  /** Should set max width and max height */
  shouldLimitSize?: boolean,
  /** Width */
  width?: number,
  /** Height */
  height?: number
} & PopoverThemeProps

export type PopoverCssConfig = {
  background: string,
  color: string,
  boxShadow: string,
  boxShadowLine: string,
  arrowBoxShadow: string,
  width?: number,
  height?: number
}

export type PopoverViewProps = ToViewProps<PopoverProps, PopoverCssConfig, PopoverThemeProps>
