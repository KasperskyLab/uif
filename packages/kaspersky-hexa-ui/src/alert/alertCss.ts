import { SPACES } from '@design-system/theme/themes/variables'
import { getTextSizes } from '@design-system/tokens'
import { getFromProps } from '@helpers/getFromProps'
import { Space, SpaceProps } from '@src/space'
import styled, { css } from 'styled-components'

import { TextTypes } from '@kaspersky/hexa-ui-core/typography/js'

import { AlertCssConfig, AlertSizeConfig } from './types'

const fromProps = getFromProps<AlertCssConfig>()

export const IconStyled = styled.span`
  min-width: ${SPACES[8]}px;
  height: ${SPACES[10]}px;

  svg {
    color: ${fromProps('icon')};
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
        alignItems: 'start',
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

export const alertSize: AlertSizeConfig = {
  fontStretch: 'normal',
  margin: 0,
  ...getTextSizes(TextTypes.BTR3)
}

export const alertCss = css<{
  cssConfig: AlertCssConfig,
  width?: string | number
}>`
  display: flex;
  gap: ${SPACES[4]}px;
  padding: ${SPACES[6]}px ${SPACES[8]}px ${SPACES[6] - 1}px ${SPACES[8]}px;
  align-items: baseline;
  position: relative;
  border-bottom: 1px solid ${fromProps('border')};
  background: ${fromProps('background')};
  color: ${fromProps('color')};
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  ${alertSize};
  
  .alert-action-separator:after {
    display: block;
    content: '';
    width: 1px;
    height: 20px;
    background: ${fromProps('separator')};
  }
`
