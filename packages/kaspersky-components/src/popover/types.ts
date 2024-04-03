import { PopoverProps as AntdPopoverProps } from 'antd/es/popover'
import { Theme } from '@design-system/types'
import { ToViewProps } from '@helpers/typesHelpers'

export type PopoverThemeProps = {
  /** Custom theme */
  theme?: Theme
}

export type PopoverProps = Omit<AntdPopoverProps, 'placement' | 'title'> & {
  /** Popover position relative to the target */
  placement?: 'top' | 'left' | 'right' | 'bottom',
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
