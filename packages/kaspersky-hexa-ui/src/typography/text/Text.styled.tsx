import { getTextSizes } from '@design-system/tokens'
import styled, { css } from 'styled-components'

import { textLevels } from '@kaspersky/hexa-ui-core/typography/js'

import { TextTag } from './Text'
import { TextProps } from './types'

export const Text = styled(TextTag)<TextProps>`
  ${({ color, themedColor }) => {
    if (color) {
      return css`color: var(--text--${color});`
    }

    if (themedColor) {
      return css`color: var(--text-icons-elements--${themedColor});`
    }

    return css`color: var(--text--primary);`
  }};
  ${({ type }: TextProps) => getTextSizes(textLevels[type || 'BTR3'])};
  margin-bottom: 0;
`
