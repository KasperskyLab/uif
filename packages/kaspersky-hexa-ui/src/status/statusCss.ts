import { SPACES } from '@design-system/theme'
import { getTextSizes } from '@design-system/tokens'
import { getFromProps } from '@helpers/getFromProps'
import styled, { css } from 'styled-components'

import { textLevels } from '@kaspersky/hexa-ui-core/typography/js'

import { StatusCssConfig } from './types'

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
    color: ${fromProps('icon')};
  }

  > span {
    translate: none;
  }
`
