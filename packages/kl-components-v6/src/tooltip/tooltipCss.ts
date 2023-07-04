import { createGlobalStyle } from 'styled-components'
import { TooltipCssConfig, ICssConfig } from './types'

const fromProps =
  (prop: keyof TooltipCssConfig) =>
    ({ cssConfig }: ICssConfig) =>
      cssConfig?.[prop]

export const TooltipStyles: any = createGlobalStyle<{ cssConfig: TooltipCssConfig }>`
  .kl-tooltip {
    & .ant-tooltip-inner {
      border-radius: 4px;
      padding: 4px 8px;
      min-height: unset;
      background-color: ${fromProps('background')};
      box-shadow: none;

      * {
        color: ${fromProps('color')};
      }
    }
    & .ant-tooltip-arrow {
      display: none;
    }
  }
`
