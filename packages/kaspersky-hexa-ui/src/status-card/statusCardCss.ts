import { getFromProps } from '@helpers/getFromProps'
import styled, { css } from 'styled-components'

import { StatusCardCssConfig } from './types'

const fromProps = getFromProps<StatusCardCssConfig>()

export const StyledIcon = styled.span``
export const StyledImage = styled.span``

export const statusCardCss = css<{
  cssConfig: StatusCardCssConfig,
  $initialIconSize: number,
  $width?: number
}>`
  display: flex;
  align-items: start;
  padding: 16px 16px 16px 8px;
  border-radius: 8px;
  width: ${({ $width }) => $width ? `${$width}px` : '100%'};
  background: ${fromProps('background')};
  border: 1px solid ${fromProps('border')};
  color: ${fromProps('color')};

  ${StyledImage} {
    position: relative;
    width: ${fromProps('imageWidth')}px;
    height: ${fromProps('imageHeight')}px;
    margin: -8px 0;

    ${StyledIcon} {
      display: flex;
      align-items: center;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      > svg {
        color: ${fromProps('icon')};
        transform: scale(calc(${fromProps('iconSize')} / ${({ $initialIconSize }) => $initialIconSize}));
      }
    }
  }
`
