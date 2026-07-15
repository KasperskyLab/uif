import { colors, getTextSizes } from '@design-system/tokens'
import React from 'react'
import styled, { css } from 'styled-components'

import { textLevels } from '@kaspersky/hexa-ui-core/typography/js'

import { HTag } from './Heading'
import { HeadingProps } from './types'

export const Heading = styled((props: HeadingProps) => <HTag {...props} />)<{ $color?: string; $themedColor?: string }>`
  ${({ $color, $themedColor }) => {
    if ($color) {
      return css`color: var(--text-icons-elements--${$color}) !important;`
    }

    if ($themedColor) {
      return css`color: var(--text-icons-elements--${$themedColor}) !important;`
    }

    return css`color: var(--text-icons-elements--primary) !important;`
  }};
  ${({ type }) => getTextSizes(textLevels[type || 'H1'])};
  margin-bottom: 0;
`
