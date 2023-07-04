import styled, { createGlobalStyle, css } from 'styled-components'
import {
  BORDER_RADIUS,
  SPACES
} from '../../design-system/theme/themes/variables'
import { getFromProps } from '../../helpers/getFromProps'
import { ModalCssConfig, ModalMode, ModalProps } from './types'
import { TextProps } from '../typography/text'
import { Space, SpaceProps } from '../space'
import { Text } from '../typography'
import { getTextSizes, textLevels } from '../../design-system/tokens'

const maxModalContentHeight = 160

const fromProps = getFromProps<ModalCssConfig>()

export const IconStyled = styled.span<{
  mode: ModalMode,
  cssConfig: ModalCssConfig
}>`
  svg {
    height: ${SPACES[10]}px;
    width: ${SPACES[10]}px;
    fill: ${fromProps('mode.normal.borderColor')};
  }

  display: grid;
  gap: ${SPACES[4]}px;
  position: relative;
  top: ${SPACES[2]}px;
`

export const SpaceBox = styled(Space)<SpaceProps>`
  display: flex;
  gap: 20px;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: baseline;
  justify-content: space-between;
  width: 100%;
`

export const TextBox = styled(Text)<TextProps>`
  display: flex;
  flex-direction: column;
`

export const ModalContent = styled.div<{ height: number }>`
  ${({ height }) =>
    height === maxModalContentHeight &&
    css`
      padding-right: ${SPACES[7]}px;
    `};
  max-height: ${maxModalContentHeight}px;
  overflow-y: auto;
`

export const ModalGlobalStyles = createGlobalStyle<{
  cssConfig: ModalCssConfig,
  height: number
}>`
&.ant-modal-close {
  color: ${fromProps('closeIconColor')};
}

.ant-modal-close:focus, .ant-modal-close:hover {
  color: ${fromProps('closeIconColorHover')} !important;
}

&.ant-modal-content, 
&.ant-modal-header {
  background-color: ${fromProps('background')};
  color: ${fromProps('textColor')};
}
&.ant-modal-title {
  display: flex;
  gap: ${SPACES[5]}px;
  color: ${fromProps('textColor')};
}

&.ant-modal-content {
  border-top: ${SPACES[2]}px solid;
  border-top-color: ${fromProps('mode.normal.borderColor')};
  border-radius: ${() => `${BORDER_RADIUS[2]}px`};
  box-shadow: 0px 3px 5px rgba(9, 30, 66, 0.2), 0px 0px 1px rgba(9, 30, 66, 0.31);
}
  &.ant-modal-header {
  padding: ${SPACES[8]}px ${SPACES[12]}px;
  border-bottom: ${({ height }) => (height === maxModalContentHeight ? '1px solid' : 'none')};
  border-bottom-color: ${fromProps('borderColor')};
  .ant-modal-title{
    ${getTextSizes(textLevels.S4)}
  }
}

&.ant-modal-body {
  max-width: 624px;
  padding: ${({ height }) =>
    height === maxModalContentHeight ? `${SPACES[8]}px ${SPACES[12]}px` : `0px ${SPACES[12]}px`};
  ${getTextSizes(textLevels.BTR3)}
}

&.ant-modal-footer {
  padding: ${SPACES[12]}px; 
  border-top: ${({ height }) => (height === maxModalContentHeight ? '1px solid' : 'none')};
  border-top-color: ${fromProps('borderColor')};
  border-radius: none;
}
`

export const modalCss = css<ModalProps>`
  display: flex;
  padding: ${`${SPACES[12]}px`};
  flex-direction: row;
  ${({ noIcon }) =>
    !noIcon && {
      gap: `${SPACES[4]}px`
    }};
  align-items: baseline;
  position: relative;
  border-radius: ${() => `${BORDER_RADIUS[2]}px`};
  width: ${({ width }) => (width ? `${width}px` : '624px')};
`
