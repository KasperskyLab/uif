import { BORDER_RADIUS, SPACES } from '@design-system/theme'
import { getTextSizes } from '@design-system/tokens'
import { getFromProps } from '@helpers/getFromProps'
import styled, { css } from 'styled-components'

import { textLevels } from '@kaspersky/hexa-ui-core/typography/js'

import { InformationCardCssStateConfig, InformationCardType } from './types'

const fromProps = getFromProps<InformationCardCssStateConfig>()

export const defaultShouldForwardProp = (prop: string | number): boolean => !['type', 'cssConfig'].includes(prop as string)

export const informationCardCss = css<{
  cssConfig: InformationCardCssStateConfig,
  type: InformationCardType,
  selected: boolean,
  disabled: boolean,
  interactive: boolean,
  width?: number | string
}>`
  display: flex;
  flex-direction: ${props => props.type === 'horizontal' ? 'row' : 'column'};
  align-items: ${props => props.type === 'center' ? 'center' : 'start'};
  gap: ${SPACES[8]}px;
  
  padding: ${fromProps('padding')};
  background: ${fromProps('enabled.background')};
  color: ${fromProps('enabled.color')};
  border: 1px solid ${fromProps('enabled.border')};
  border-radius: ${BORDER_RADIUS[4]}px;
  &:focus-visible {
    box-shadow: none;
    outline: none;
  }

  width: ${({ width }) => typeof width === 'string' ? width : `${width}px`};

  ${(props) => props.interactive && `
  cursor: pointer;
  &:hover {
    background: ${fromProps('hover.background')(props)};
  }
  &:active {
    background: ${fromProps('pressed.background')(props)};
  }
  &:focus-visible {
    box-shadow: ${fromProps('focus.boxShadow')(props)};
  }`}

  ${(props) => props.disabled && `
  &, &:hover, &:active {
    cursor: not-allowed;
    background: ${fromProps('disabled.background')(props)};
    color: ${fromProps('disabled.color')(props)};
    border-color: ${fromProps('disabled.border')(props)};
  }`}
`

export const Content = styled.div.withConfig<{ type: InformationCardType }>({
  shouldForwardProp: defaultShouldForwardProp
})`
  display: flex;
  flex-direction: column;
  height: 100%;
  ${props => props.type === 'center' && 'align-items: center'};
  gap: ${SPACES[8]}px;
`

export const Header = styled.div.withConfig<{ type: InformationCardType }>({
  shouldForwardProp: defaultShouldForwardProp
})`
  display: flex;
  gap: ${SPACES[4]}px;
  flex-direction: column;
  ${props => props.type === 'center' && 'align-items: center'};
  width: 100%;
`

export const Title = styled.div.withConfig<{ type: InformationCardType, cssConfig: InformationCardCssStateConfig }>({
  shouldForwardProp: defaultShouldForwardProp
})`
  display: flex;
  gap: ${SPACES[4]}px;
  flex-direction: row;
  justify-content: ${props => props.type === 'center' ? 'center' : 'space-between'};
  width: 100%;
  font-family: ${fromProps('fontFamily')};
  font-size: ${fromProps('fontSize')};
  font-weight: ${fromProps('fontWeight')};
  font-style: ${fromProps('fontStyle')};
  line-height: ${fromProps('lineHeight')};
  letter-spacing: ${fromProps('letterSpacing')};
`

export const RightCorner = styled.div`
  height: ${getTextSizes(textLevels.H5).lineHeight};
  display: flex;
  align-items: center;
`

export const Description = styled.div.withConfig<{
  type: InformationCardType,
  cssConfig: InformationCardCssStateConfig,
  disabled: boolean
}>({
  shouldForwardProp: defaultShouldForwardProp
})`
  color: ${props => fromProps(props.disabled ? 'disabled.color' : 'enabled.descriptionColor')(props)};
  text-align: ${props => props.type === 'center' ? 'center' : 'start'}
`

export const Footer = styled.div`
  margin-top: auto;
`
