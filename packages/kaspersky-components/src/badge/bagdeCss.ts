import { css } from 'styled-components'
import { getFromProps } from '@helpers/getFromProps'
import { BadgeCssConfig } from './types'
import { BORDER_RADIUS, SPACES } from '@design-system/theme'
import { getTextSizes, TextTypes } from '@design-system/tokens'

const fromProps = getFromProps<BadgeCssConfig>()

const textSizes = getTextSizes(TextTypes.BTM4)

export const badgeCss = css`
  .ant-badge-count {
    font-family: ${textSizes.fontFamily};
    font-size: ${textSizes.fontSize};
    line-height: ${textSizes.lineHeight};
    font-weight: ${textSizes.fontWeight};
    font-style: ${textSizes.fontStyle};
    letter-spacing: ${textSizes.letterSpacing};

    background-color: ${fromProps('background')};
    color: ${fromProps('color')};
    height: 16px;
    min-width: 16px;
    padding: 0 ${SPACES[3]}px;
    box-shadow: none;
    border-radius: ${BORDER_RADIUS[4]}px;
  }

  .ant-badge-dot {
    transform: none;
    height: 8px;
    width: 8px;
    box-shadow: none;
  }
`
