import { getTextSizes } from '@design-system/tokens'
import { getFromProps } from '@helpers/getFromProps'
import { CSSProperties } from 'react'
import styled, { createGlobalStyle, css } from 'styled-components'

import { textLevels } from '@kaspersky/hexa-ui-core/typography/js'

import { ModalCssConfig } from './types'

const fromProps = getFromProps<ModalCssConfig>()

const modalSize = {
  minHeight: '180px',
  borderWidth: '1px',
  titlePadding: '24px',
  footerPadding: '24px'
}

const maxModalContentHeight = (cssConfig: ModalCssConfig, titleHeight: number, footerHeight: number) => `
  calc(100vh - ${cssConfig.top} * 2 - ${titleHeight}px - ${footerHeight}px -
    ${modalSize.titlePadding} * 2 - ${modalSize.footerPadding} * 2)
`

const minModalContentHeight = (titleHeight: number, footerHeight: number) => `
  calc(${modalSize.minHeight} - ${titleHeight}px - ${footerHeight}px -
    ${modalSize.titlePadding} * 2 - ${modalSize.footerPadding} * 2)
`

export const StyledIcon = styled.span<{ cssConfig: ModalCssConfig }>`
  padding: 0;
  height: ${getTextSizes(textLevels.H5).lineHeight};
  svg {
    color: ${fromProps('icon')};
  }
`

export const ModalContent = styled.div<{
  cssConfig: ModalCssConfig,
  titleHeight: number,
  footerHeight: number
}>`
  max-height: ${(props) => `${maxModalContentHeight(props.cssConfig, props.titleHeight, props.footerHeight)}`};
  min-height: ${(props) => `${minModalContentHeight(props.titleHeight, props.footerHeight)}`};
  overflow-y: auto;
  padding: 0 24px;
`

type ModalStyledCssProps = {
  cssConfig: ModalCssConfig,
  titleHeight: number,
  footerHeight: number,
  showTopBorder: boolean,
  showBottomBorder: boolean,
  closable: boolean
}

export const ModalGlobalStyles = createGlobalStyle<ModalStyledCssProps>``

export function getMaskStyle (cssConfig: ModalCssConfig): CSSProperties {
  return {
    backgroundColor: cssConfig.maskBackground
  }
}

export const modalCss = css<ModalStyledCssProps>`
  padding: 0;
  margin: 0 auto;
  position: relative;
  min-width: ${fromProps('width')};
  max-width: ${fromProps('width')};
  
  .ant-modal-close {
    width: auto;
    height: auto;
    top: 28px;
    right: 24px;

    .ant-modal-close-x {
      width: auto;
      height: auto;
      display: flex;
    }
  }

  .ant-modal-content, 
  .ant-modal-header,
  .ant-modal-footer {
    background: ${fromProps('background')};
    color: ${fromProps('color')};
  }

  .ant-modal-content {
    width: 100%;
    border-radius: 12px;
    box-shadow: ${fromProps('boxShadow')};
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: ${fromProps('modeBorder')};
    }

    .ant-modal-body {
      padding: 0;
      ${getTextSizes(textLevels.BTR3)}
    }
  }

  .ant-modal-header {
    padding: ${modalSize.titlePadding};
    border-bottom: ${modalSize.borderWidth} solid;
    border-bottom-color: ${(props) => props.showTopBorder ? `${fromProps('border')(props)}` : 'transparent'};

    .ant-modal-title div {
      display: flex;
      gap: 8px;
      color: ${fromProps('color')};
      ${(props) => props.closable && 'padding-right: 40px;'}
      word-wrap: break-word;
      ${getTextSizes(textLevels.H5)}
    }
  }

  .ant-modal-footer {
    padding: ${modalSize.titlePadding};
    border-top: ${modalSize.borderWidth} solid;
    border-top-color: ${(props) => props.showBottomBorder ? `${fromProps('border')(props)}` : 'transparent'};
    border-radius: 0;

    .ant-btn + .ant-btn {
      margin-left: 0;
    }
  }

  &:not(:has(.ant-modal-footer))
   ${ModalContent} {
      padding-bottom: ${modalSize.footerPadding};
    }
`
