import { convertToCssString, getTextSizes } from '@design-system/tokens'

import { TextTypes } from '@kaspersky/hexa-ui-core/typography/js'

import { TooltipCssConfig } from './types'

const ARROW_SIZE = 7
const ROTATE_WIDTH = 6.5

/** 
 * Note: default values of CSS variables can be removed when the issue with backward compatibility is resolved 
 * See more - Pull Request 1639376: [graph] fix: skip using hexa-ui css vars to maintain compatibility with ksc 14.x
*/
export const getTooltipGlobalStyles = (cssConfig: TooltipCssConfig, rootHashClass: string): string => {
  const textConfig = convertToCssString(getTextSizes(TextTypes.BTR4))
  return `
  .${rootHashClass} .ant-tooltip-inner {
      border-radius: 8px;
      padding: 8px 12px;
      background-color: var(--tooltip--bg, ${cssConfig.background});
      color: var(--tooltip--text, ${cssConfig.color});
      box-shadow: 0px 8px 12px 0px var(--elevation--medium--2, ${cssConfig.boxShadow}),
        0px 0px 1px 0px var(--elevation--medium--1, ${cssConfig.boxShadowLine});
      ${textConfig};
  }

  .${rootHashClass} .ant-tooltip-arrow:before {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      display: block;
      margin: auto;
      content: '';
      pointer-events: auto;
      background-color: var(--tooltip--bg, ${cssConfig.background});
      width: ${ARROW_SIZE}px;
      height: ${ARROW_SIZE}px;
  }

  .${rootHashClass}.ant-tooltip-placement-top,
  .${rootHashClass}.ant-tooltip-placement-topLeft,
  .${rootHashClass}.ant-tooltip-placement-topRight {
    .ant-tooltip-arrow { 
      bottom: -5px !important;
      transform: translateX(-50%);
    }

    .ant-tooltip-arrow:before {
      border-bottom-right-radius: 2px;
      transform: translateY(-${ROTATE_WIDTH}px) rotate(45deg);
    }
  }

  .${rootHashClass}.ant-tooltip-placement-right,
  .${rootHashClass}.ant-tooltip-placement-rightTop,
  .${rootHashClass}.ant-tooltip-placement-rightBottom {
    .ant-tooltip-arrow {
      left: -5px !important;
      transform: translateY(-50%);
    }

    .ant-tooltip-arrow:before {
      border-bottom-left-radius: 2px;
      transform: translateX(${ROTATE_WIDTH}px) rotate(45deg);
    }
  }

  .${rootHashClass}.ant-tooltip-placement-bottom,
  .${rootHashClass}.ant-tooltip-placement-bottomLeft,
  .${rootHashClass}.ant-tooltip-placement-bottomRight {
    .ant-tooltip-arrow {
      top: -5px !important;
      transform: translateX(-50%);
    }

    .ant-tooltip-arrow:before {
      border-top-left-radius: 2px;
      transform: translateY(${ROTATE_WIDTH}px) rotate(45deg);
    }
  }

  .${rootHashClass}.ant-tooltip-placement-left,
  .${rootHashClass}.ant-tooltip-placement-leftTop,
  .${rootHashClass}.ant-tooltip-placement-leftBottom {
    .ant-tooltip-arrow {
      right: -5px !important;
      transform: translateY(-50%);
    }

    .ant-tooltip-arrow:before {
      border-top-right-radius: 2px;
      transform: translateX(-${ROTATE_WIDTH}px) rotate(45deg);
    }
  }
  `
}
