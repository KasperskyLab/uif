import { convertToCssString, getTextSizes } from '@design-system/tokens'

import { TextTypes } from '@kaspersky/hexa-ui-core/typography/js'

import { TooltipCssConfig } from './types'

export const getTooltipGlobalStyles = (cssConfig: TooltipCssConfig, rootHashClass: string): string => {
  const textConfig = convertToCssString(getTextSizes(TextTypes.BTR4))
  return `
  .${rootHashClass} .ant-tooltip-inner {
      border-radius: 8px;
      padding: 8px 12px;
      background-color: ${cssConfig.background};
      color: ${cssConfig.color};
      ${textConfig};
  }

  .${rootHashClass}.ant-tooltip-placement-top .ant-tooltip-arrow-content {
      border-bottom-right-radius: 2px;
  }

  .${rootHashClass}.ant-tooltip-placement-right .ant-tooltip-arrow-content {
      border-bottom-left-radius: 2px;
  }

  .${rootHashClass}.ant-tooltip-placement-bottom .ant-tooltip-arrow-content {
      border-top-left-radius: 2px;
  }

  .${rootHashClass}.ant-tooltip-placement-left .ant-tooltip-arrow-content {
      border-top-right-radius: 2px;
  }

  .${rootHashClass} .ant-tooltip-arrow-content {
      width: 7px;
      height: 7px;
      background-color: ${cssConfig.background};
  }
  `
}
