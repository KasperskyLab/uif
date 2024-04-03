import styled, { createGlobalStyle, css } from 'styled-components'
import { BORDER_RADIUS, SPACES } from '@design-system/theme'
import { getTextSizes, textLevels } from '@design-system/tokens'
import { getFromProps } from '@helpers/getFromProps'
import { ModalCssConfig } from './types'

const fromProps = getFromProps<ModalCssConfig>()

const modalSize = {
  minHeight: '180px',
  borderWidth: '1px',
  titlePadding: `${SPACES[12]}px`,
  footerPadding: `${SPACES[12]}px`
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
    color: ${fromProps('modeBorderColor')};
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
  padding: 0 ${SPACES[12]}px;
`

export const ModalGlobalStyles = createGlobalStyle<{
  cssConfig: ModalCssConfig,
  contentHeight: number,
  titleHeight: number,
  footerHeight: number,
  showTopBorder: boolean,
  showBottomBorder: boolean,
  closable: boolean
}>`
  &.ant-modal-mask {
    background-color: ${fromProps('maskBackground')};
  }

  &.ant-modal-close {
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

  &.ant-modal-content, 
  &.ant-modal-header,
  &.ant-modal-footer {
    background: ${fromProps('background')};
    color: ${fromProps('color')};
  }

  &.ant-modal-content {
    width: 100%;
    border-radius: ${BORDER_RADIUS[6]}px;
    box-shadow: ${fromProps('boxShadow')};
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: ${SPACES[2]}px;
      background-color: ${fromProps('modeBorderColor')};
    }

    .ant-modal-body {
      padding: 0;
      ${getTextSizes(textLevels.BTR3)}
    }
  }

  &.ant-modal-header {
    padding: ${modalSize.titlePadding};
    border-bottom: ${modalSize.borderWidth} solid;
    border-bottom-color: ${(props) => props.showTopBorder ? `${fromProps('borderColor')(props)}` : 'transparent'};

    .ant-modal-title div {
      display: flex;
      gap: ${SPACES[4]}px;
      color: ${fromProps('color')};
      ${(props) => props.closable && 'padding-right: 40px;'}
      word-wrap: break-word;
      ${getTextSizes(textLevels.H5)}
    }
  }

  &.ant-modal-footer {
    padding: ${modalSize.titlePadding};
    border-top: ${modalSize.borderWidth} solid;
    border-top-color: ${(props) => props.showBottomBorder ? `${fromProps('borderColor')(props)}` : 'transparent'};
    border-radius: 0;

    && .ant-btn + .ant-btn {
      margin-left: 0;
    }
  }
`

export const modalCss = css`
  display: flex;
  padding: 0;
  margin: 0 auto;
  flex-direction: row;
  align-items: baseline;
  position: relative;
  top: ${fromProps('top')};
  width: ${fromProps('width')};
  min-width: ${fromProps('width')};
  max-width: ${fromProps('width')};
`
