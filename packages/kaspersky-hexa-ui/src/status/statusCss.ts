import { getTextSizes } from '@design-system/tokens'
import { getFromProps } from '@helpers/getFromProps'
import styled, { css } from 'styled-components'

import { textLevels, typography } from '@kaspersky/hexa-ui-core/typography/js'

import { StatusCssConfig } from './types'

const fromProps = getFromProps<StatusCssConfig>()

export const statusCss = css`
  display: flex;
  gap: var(--spacing--gap_dependent);
  color: ${fromProps('color')};
  ${getTextSizes(textLevels.BTR3)}
`

export const StyledStatusElement = styled.span<{
  cssConfig: StatusCssConfig
}>`
  display: flex;
  align-items: center;
  height: ${typography['BodyTextRegular/BTR3'].lineHeight};

  svg {
    color: ${fromProps('icon')};
  }

  > span {
    translate: none;
  }
`
