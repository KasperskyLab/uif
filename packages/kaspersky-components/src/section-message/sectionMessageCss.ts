import { SPACES, BORDER_RADIUS } from '@design-system/theme/themes/variables'
import { getTextSizes, TextTypes } from '@design-system/tokens'
import { getFromProps } from '@helpers/getFromProps'
import styled, { css } from 'styled-components'
import { SectionMessageCssConfig, SectionMessageSizeConfig } from './types'
import { Space, SpaceProps } from '@src/space'
import { Text, TextProps } from '@src/typography/text'

const fromProps = getFromProps<SectionMessageCssConfig>()

export const IconStyled = styled.span`
  min-width: ${SPACES[8]}px;
  height: ${SPACES[10]}px;

  svg {
    color: ${fromProps('icon.color')};
    transform: translateY(${SPACES[1]}px);
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
  padding: ${SPACES[8]}px ${SPACES[8]}px ${SPACES[8]}px ${SPACES[8]}px;
  gap: ${SPACES[4]}px;
  flex-direction: row;
  align-items: baseline;
  position: relative;
  border-radius: ${BORDER_RADIUS[4]}px;
  background: ${fromProps('sectionMessage.background')};
  color: ${fromProps('sectionMessage.color')};
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  overflow: hidden;
  ${alertSize};
  
  &:before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    top: 0;
    width: ${SPACES[2]}px;
    background: ${fromProps('sectionMessage.borderColor')};
  }
  
  h6 {
    color: ${fromProps('sectionMessage.color')};
  }
  .rotated-icon {
     transform: rotate(-90deg)
  }
`
