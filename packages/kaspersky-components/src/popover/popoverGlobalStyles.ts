import { BORDER_RADIUS, SPACES } from '@design-system/theme'
import { convertToCssString, getTextSizes, TextTypes } from '@design-system/tokens'
import { PopoverCssConfig } from './types'

const ARROW_SIZE = 12

export const getPopoverGlobalStyles = (cssConfig: PopoverCssConfig, rootHashClass: string): string => {
  const textConfig = convertToCssString(getTextSizes(TextTypes.BTR3))

  return `
  .${rootHashClass} .ant-popover-inner {
    min-width: 240px;
    min-height: 52px;
    max-width: 560px;
    max-height: 320px;
    overflow: auto;
    border-radius: ${BORDER_RADIUS[4]}px;
    background-color: ${cssConfig.background};
    color: ${cssConfig.color};
    box-shadow: ${cssConfig.boxShadowLine}, ${cssConfig.boxShadow};
    ${cssConfig.width ? `width: ${cssConfig.width}px;` : ''}
    ${cssConfig.height ? `height: ${cssConfig.height}px;` : ''}
    ${textConfig};
  }

  .${rootHashClass} .ant-popover-title {
    color: ${cssConfig.color};
  }

  .${rootHashClass} .ant-popover-inner-content {
    padding: ${SPACES[8]}px;
  }

  .${rootHashClass} .ant-popover-arrow {
    width: ${ARROW_SIZE}px;
    height: ${ARROW_SIZE}px;
  }

  .${rootHashClass} .ant-popover-arrow-content {
    background-color: ${cssConfig.background};
    box-shadow: ${cssConfig.boxShadowLine}, ${cssConfig.arrowBoxShadow};
    width: ${ARROW_SIZE}px;
    height: ${ARROW_SIZE}px;
  }

  .${rootHashClass}.ant-popover-placement-top .ant-popover-arrow {
    bottom: ${SPACES[1]}px;
  }
  .${rootHashClass}.ant-popover-placement-top .ant-popover-arrow-content {
    border-bottom-right-radius: ${BORDER_RADIUS[1]}px;
  }

  .${rootHashClass}.ant-popover-placement-bottom .ant-popover-arrow {
    top: ${SPACES[1]}px;
  }
  .${rootHashClass}.ant-popover-placement-bottom .ant-popover-arrow-content {
    border-top-left-radius: ${BORDER_RADIUS[1]}px;
    box-shadow: ${cssConfig.boxShadowLine};
  }

  .${rootHashClass}.ant-popover-placement-right .ant-popover-arrow {
    left: ${SPACES[1]}px;
  }
  .${rootHashClass}.ant-popover-placement-right .ant-popover-arrow-content {
    border-bottom-left-radius: ${BORDER_RADIUS[1]}px;
  }

  .${rootHashClass}.ant-popover-placement-left .ant-popover-arrow {
    right: ${SPACES[1]}px;
  }
  .${rootHashClass}.ant-popover-placement-left .ant-popover-arrow-content {
    border-top-right-radius: ${BORDER_RADIUS[1]}px;
  }
  `
}
