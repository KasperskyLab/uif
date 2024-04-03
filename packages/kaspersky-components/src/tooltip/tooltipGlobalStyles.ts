import { BORDER_RADIUS, SPACES } from '@design-system/theme'
import { convertToCssString, getTextSizes, TextTypes } from '@design-system/tokens'
import { TooltipCssConfig } from './types'

export const getTooltipGlobalStyles = (cssConfig: TooltipCssConfig, rootHashClass: string): string => {
  const textConfig = convertToCssString(getTextSizes(TextTypes.BTR4))
  return `
  .${rootHashClass} .ant-tooltip-inner {
      border-radius: ${BORDER_RADIUS[4]}px;
      padding: ${SPACES[4]}px ${SPACES[6]}px;
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
