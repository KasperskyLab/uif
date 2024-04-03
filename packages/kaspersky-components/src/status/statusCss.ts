import styled, { css } from 'styled-components'
import { getTextSizes, textLevels } from '@design-system/tokens'
import { getFromProps } from '@helpers/getFromProps'
import { StatusCssConfig } from './types'
import { SPACES } from '@design-system/theme'

const fromProps = getFromProps<StatusCssConfig>()

export const statusCss = css`
  display: flex;
  gap: ${SPACES[2]}px;
  color: ${fromProps('color')};
  ${getTextSizes(textLevels.BTR3)}
`

export const StyledStatusElement = styled.span<{
  cssConfig: StatusCssConfig
}>`
  display: flex;
  align-items: center;

  svg {
    color: ${fromProps('background')};
  }

  > span {
    translate: none;
  }
`
