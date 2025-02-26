import { getTextSizes } from '@design-system/tokens'
import { getFromProps } from '@helpers/getFromProps'
import { Space, SpaceProps } from '@src/space'
import { Text, TextProps } from '@src/typography'
import styled, { css } from 'styled-components'

import { TextTypes } from '@kaspersky/hexa-ui-core/typography/js'

import { SectionMessageCssConfig, SectionMessageSizeConfig } from './types'

const fromProps = getFromProps<SectionMessageCssConfig>()

export const IconStyled = styled.span`
  min-width: 16px;
  height: 20px;

  svg {
    color: ${fromProps('icon')};
    transform: translateY(2px);
  }
`

export const SpaceBox = styled(Space)<SpaceProps>`
  ${({ direction }) => {
    if (direction === 'horizontal') {
      return {
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%'
      }
    } else {
      return {
        width: '100%'
      }
    }
  }}
`

export const alertSize: SectionMessageSizeConfig = {
  fontStretch: 'normal',
  margin: 0,
  ...getTextSizes(TextTypes.BTR3)
}

export const TextBox = styled(Text)<TextProps>`
  display: flex;
  flex-direction: column;
`

export const sectionMessageCss = css<{
  cssConfig: SectionMessageCssConfig,
  width?: string | number
}>`
  display: flex;
  padding: 16px;
  gap: 8px;
  flex-direction: row;
  align-items: baseline;
  position: relative;
  border-radius: 8px;
  background: ${fromProps('background')};
  color: ${fromProps('color')};
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  overflow: hidden;
  white-space: pre-wrap;
  ${alertSize};
  
  &:before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    top: 0;
    width: 4px;
    background: ${fromProps('border')};
  }
  
  h6 {
    color: ${fromProps('color')};
  }
  .rotated-icon {
     transform: rotate(-90deg)
  }

  .hexa-ui-section-message-close-container {
    display: flex;
    padding: 2px;
  }
`
