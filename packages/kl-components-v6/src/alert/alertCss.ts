import { SPACES, BORDER_RADIUS } from '@design-system/theme/themes/variables'
import { getTextSizes, TextTypes } from '@design-system/tokens'
import { getFromProps } from '@helpers/getFromProps'
import styled, { css } from 'styled-components'
import { AlertCssConfig, AlertMode, AlertSizeConfig, AlertType } from './types'
import { Space, SpaceProps } from '..'
import { Text, TextProps } from '@src/typography/text'

const fromProps = getFromProps<AlertCssConfig>()

export const IconStyled = styled.span<{
  cssConfig: AlertCssConfig,
  mode: AlertMode
}>`
  .anticon {
    svg {
      height: ${SPACES[10]}px;
      width: ${SPACES[10]}px;
    }
  }
  display: grid;
  gap: ${SPACES[4]}px;
  position: relative;
  margin-right: ${SPACES[4]}px;
  top: ${SPACES[2]}px;
  color: ${fromProps('icon.color')};
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

export const alertSize: AlertSizeConfig = {
  fontStretch: 'normal',
  margin: 0,
  ...getTextSizes(TextTypes.BTR3)
}

export const TextBox = styled(Text)<TextProps>`
  display: flex;
  flex-direction: column;
`

export const alertCss = css`
  display: flex;
  padding: ${(props: {
    cssConfig: AlertCssConfig,
    type: AlertType,
    noIcon?: boolean,
    width?: string | number
  }) =>
    props.type === 'alert'
      ? `${SPACES[5]}px ${SPACES[6]}px ${SPACES[5]}px ${SPACES[6]}px`
      : `${SPACES[8]}px ${SPACES[8]}px ${SPACES[8]}px ${SPACES[9]}px`};
  flex-direction: row;
  ${({ noIcon }) =>
    !noIcon && {
      gap: `${SPACES[2]}px`
    }};
  align-items: baseline;
  position: relative;
  border-radius: ${() => `${BORDER_RADIUS[4]}px`};
  border-top: ${({ type }) =>
    type !== 'alert' ? `${SPACES[2]}px solid` : 'none'};
  background: ${fromProps('mode.normal.background')};
  color: ${fromProps('mode.normal.color')};
  border-color: ${fromProps('mode.normal.borderColor')};
  width: ${({ width }) => (width ? `${width}px` : '624px')};
  ${alertSize};
`
