import { convertToCssString, getTextSizes } from '@design-system/tokens'

import { TextTypes } from '@kaspersky/hexa-ui-core/typography/js'

import { PopoverCssConfig } from './types'

const ARROW_SIZE = 12
const ROTATE_WIDTH = 4.25

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
    min-height: 52px;
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
    color: inherit;
  }

  .${rootHashClass} .ant-popover-arrow {
    width: ${ARROW_SIZE}px;
    height: ${ARROW_SIZE}px;
    border: none;
  }

  .${rootHashClass} .ant-popover-arrow:before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: block;
    margin: auto;
    content: '';
    pointer-events: auto;
    background-color: ${cssConfig.background};
    box-shadow: ${cssConfig.boxShadowLine}, ${cssConfig.arrowBoxShadow};
    width: ${ARROW_SIZE}px;
    height: ${ARROW_SIZE}px;
  }

  .${rootHashClass}.ant-popover-placement-top,
  .${rootHashClass}.ant-popover-placement-topLeft,
  .${rootHashClass}.ant-popover-placement-topRight {
    .ant-popover-arrow { 
      bottom: 2px !important;
      transform: translateX(-50%);
    }

    .ant-popover-arrow:before {
      border-bottom-right-radius: 2px;
      transform: translateY(-${ROTATE_WIDTH}px) rotate(45deg);
    }
  }

  .${rootHashClass}.ant-popover-placement-right,
  .${rootHashClass}.ant-popover-placement-rightTop,
  .${rootHashClass}.ant-popover-placement-rightBottom {
    .ant-popover-arrow {
      left: 2px !important;
      transform: translateY(-50%);
    }

    .ant-popover-arrow:before {
      border-bottom-left-radius: 2px;
      transform: translateX(${ROTATE_WIDTH}px) rotate(45deg);
    }
  }

  .${rootHashClass}.ant-popover-placement-bottom,
  .${rootHashClass}.ant-popover-placement-bottomLeft,
  .${rootHashClass}.ant-popover-placement-bottomRight {
    .ant-popover-arrow {
      top: 2px !important;
      transform: translateX(-50%);
    }

    .ant-popover-arrow:before {
      border-top-left-radius: 2px;
      transform: translateY(${ROTATE_WIDTH}px) rotate(45deg);
    }
  }

  .${rootHashClass}.ant-popover-placement-left,
  .${rootHashClass}.ant-popover-placement-leftTop,
  .${rootHashClass}.ant-popover-placement-leftBottom {
    .ant-popover-arrow {
      right: 2px !important;
      transform: translateY(-50%);
    }

    .ant-popover-arrow:before {
      border-top-right-radius: 2px;
      transform: translateX(-${ROTATE_WIDTH}px) rotate(45deg);
    }
  }
  `
}
