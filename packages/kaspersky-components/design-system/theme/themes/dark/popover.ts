import { PopoverCssConfig } from '@src/popover/types'
import { ComponentThemeContext } from '../config'
import { popover as defaultPopoverCreator } from '../light/popover'

export const popover = ({ colors }: ComponentThemeContext): PopoverCssConfig => {
  const defaultPopover = defaultPopoverCreator({ colors })

  return {
    ...defaultPopover,
    boxShadow: '0px 0px 0px 0px',
    boxShadowLine: '0px 0px 1px 0px #e0e3e6a3',
    arrowBoxShadow: '0px 0px 0px 0px'
  }
}
