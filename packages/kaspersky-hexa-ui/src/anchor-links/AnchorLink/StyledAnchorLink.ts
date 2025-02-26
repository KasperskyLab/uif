import { BORDER_RADIUS, SPACES } from '@design-system/theme'
import { getTextSizes } from '@design-system/tokens'
import { getFromProps } from '@helpers/getFromProps'
import { Anchor as AnchorAntd } from 'antd'
import styled, { css } from 'styled-components'

import { TextTypes } from '@kaspersky/hexa-ui-core/typography/js'

import { AnchorLinkCssConfig } from './types'

const fromProps = getFromProps<AnchorLinkCssConfig>()

const textSizes = getTextSizes(TextTypes.BTM3)

export const style = css<{ hidden: boolean, cssConfig: AnchorLinkCssConfig }>`
  &.ant-anchor-link {
    transition: opacity .2s;
    padding: 0;

    ${({ hidden }) => hidden && 'opacity: 0; pointer-events: none;'}

    && .ant-anchor-link-title {
      &:not([disabled]):focus-visible {
        box-shadow: ${fromProps('focus.boxShadow')};
      }
    }

    .ant-anchor-link-title {
      color: ${fromProps('default.enabled.color')};
      font-family: ${textSizes.fontFamily};
      font-size: ${textSizes.fontSize};
      font-weight: ${textSizes.fontWeight};
      font-style: ${textSizes.fontStyle};
      line-height: ${textSizes.lineHeight};
      letter-spacing: ${textSizes.letterSpacing};
      margin-bottom: 0;
      position: relative;
      padding: ${SPACES[5]}px ${SPACES[8]}px;
      border-radius: ${BORDER_RADIUS[4]}px;

      &:not([disabled]) {
        &:hover {
          background-color: ${fromProps('default.hover.background')};
        }
        &:active {
          background-color: ${fromProps('default.pressed.background')};
        }
      }

      &-active {
        &,
        :not([disabled]):hover,
        :not([disabled]):active {
          background: ${fromProps('active.background')};
          box-shadow: ${fromProps('boxShadow')};
        }
      }

      .content-container {
        display: flex;
        column-gap: 4px;
        align-items: center;
      }

      .notification-container {
        position: absolute;
        right: 4px;
        top: 4px;
        line-height: 0;
      }
    }
  }
`
export const StyledAnchorLink = styled(AnchorAntd.Link as any).withConfig({
  shouldForwardProp: (prop) =>
    !['cssConfig', 'hidden'].includes(prop as string)
})`
  ${style}
`
