import styled, { css } from 'styled-components'
import { getFromProps } from '@helpers/getFromProps'
import { BORDER_RADIUS, SPACES } from '@design-system/theme'
import { getTextSizes, textLevels } from '@design-system/tokens'
import { InformationCardCssStateConfig, InformationCardType } from './types'

const fromProps = getFromProps<InformationCardCssStateConfig>()

export const FlexContainer = styled.div<{
  type: InformationCardType,
  definedTypes: InformationCardType[]
}>`
  display: flex;
  ${(props) => {
    if (props.type === 'vertical' && props.definedTypes.includes('vertical')) {
      return `
        flex-direction: column;
        align-items: start;
      `
    } else if (props.type === 'horizontal' && props.definedTypes.includes('horizontal')) {
      return `
        flex-direction: row;
        align-items: start;
      `
    } else if (props.type === 'center' && props.definedTypes.includes('center')) {
      return `
        flex-direction: column;
        align-items: center;
      `
    } else {
      return `
        flex-direction: column;
        align-items: start;
      `
    }
  }}
`

export const informationCardCss = css<{
  cssConfig: InformationCardCssStateConfig,
  selected: boolean,
  disabled: boolean,
  interactive: boolean,
  width?: number | string
}>`
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

  ${(props) => {
    if (typeof props.width === 'number') {
      return `width: ${props.width}px;`
    }
    if (typeof props.width === 'string') {
      return `width: ${props.width};`
    }
    return null
  }}

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

export const Content = styled(FlexContainer)`
  gap: ${SPACES[8]}px;
`

export const Header = styled(FlexContainer)`
  gap: ${SPACES[4]}px;
  flex-direction: column;
  width: 100%;
`

export const Title = styled.div<{
  cssConfig: InformationCardCssStateConfig,
  type: InformationCardType
}>`
  display: flex;
  gap: ${SPACES[4]}px;
  flex-direction: row;
  ${(props) => {
    if (props.type === 'vertical' || props.type === 'horizontal') {
      return 'justify-content: space-between;'
    } else if (props.type === 'center') {
      return 'justify-content: center;'
    }
  }}
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

export const Description = styled.div<{
  cssConfig: InformationCardCssStateConfig,
  disabled: boolean,
  type: InformationCardType
}>`
  color: ${fromProps('enabled.descriptionColor')};
  ${(props) => props.disabled && `color: ${fromProps('disabled.color')(props)};`}
  
  ${(props) => {
    if (props.type === 'vertical' || props.type === 'horizontal') {
      return 'text-align: start;'
    } else if (props.type === 'center') {
      return 'text-align: center;'
    }
  }}
`

export const LeftSide = styled.div``

export const ChildrenContent = styled.div``

export const Footer = styled.div``
