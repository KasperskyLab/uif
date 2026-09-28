import { getTextSizes } from '@design-system/tokens'
import styled, { css } from 'styled-components'

import { textLevels } from '@kaspersky/hexa-ui-core/typography/js'

import { HTag } from './Heading'
import { HeadingProps } from './types'

export const Heading = styled(HTag)<HeadingProps>`
  ${({ color, themedColor }) => {
    if (color) {
      return css`color: var(--text--${color}) !important;`
    }

    if (themedColor) {
      return css`color: var(--text-icons-elements--${themedColor}) !important;`
    }

    return css`color: var(--text--primary) !important;`
  }};
  ${({ type }) => getTextSizes(textLevels[type || 'H1'])};
  margin-bottom: 0;
`
