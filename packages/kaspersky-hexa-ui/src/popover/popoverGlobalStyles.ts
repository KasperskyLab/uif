import { convertToCssString, getTextSizes } from '@design-system/tokens'

import { TextTypes } from '@kaspersky/hexa-ui-core/typography/js'

import { PopoverCssConfig } from './types'

const ARROW_SIZE = 12

type ExtraPropsType = {
  shouldLimitSize: boolean
}

export const getPopoverGlobalStyles = (
  cssConfig: PopoverCssConfig, rootHashClass: string, extraProps?: ExtraPropsType
): string => {
  const textConfig = convertToCssString(getTextSizes(TextTypes.BTR3))

  return `
  .${rootHashClass} .ant-popover-inner {
    min-width: 240px;
    min-height: 56px;
    ${extraProps?.shouldLimitSize && `
    max-width: 560px;
    max-height: 320px;`}

    overflow: auto;
    border-radius: 8px;
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
    padding: 16px;
    white-space: pre-wrap;
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
    bottom: 2px;
  }
  .${rootHashClass}.ant-popover-placement-top .ant-popover-arrow-content {
    border-bottom-right-radius: 2px;
  }

  .${rootHashClass}.ant-popover-placement-bottom .ant-popover-arrow {
    top: 2px;
  }
  .${rootHashClass}.ant-popover-placement-bottom .ant-popover-arrow-content {
    border-top-left-radius: 2px;
    box-shadow: ${cssConfig.boxShadowLine};
  }

  .${rootHashClass}.ant-popover-placement-right .ant-popover-arrow {
    left: 2px;
  }
  .${rootHashClass}.ant-popover-placement-right .ant-popover-arrow-content {
    border-bottom-left-radius: 2px;
  }

  .${rootHashClass}.ant-popover-placement-left .ant-popover-arrow {
    right: 2px;
  }
  .${rootHashClass}.ant-popover-placement-left .ant-popover-arrow-content {
    border-top-right-radius: 2px;
  }
  `
}
