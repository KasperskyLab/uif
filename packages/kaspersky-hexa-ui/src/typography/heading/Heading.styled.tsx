import { colors, getTextSizes } from '@design-system/tokens'
import React from 'react'
import styled from 'styled-components'

import { textLevels } from '@kaspersky/hexa-ui-core/typography/js'

import { HTag } from './Heading'
import { HeadingProps } from './types'

export const StyledHeading = styled((props: HeadingProps) => <HTag {...props} />)`
  color: ${({ color, themedColor, theme }) => {
    // @ts-ignore
    if (color) return theme?.colors?.product?.text[color] ?? colors[color]

    if (theme?.colors) {
      return theme.colors.textIconsElements[themedColor || 'primary']
    }
  }} !important;
  ${({ type }) => getTextSizes(textLevels[type || 'H1'])};
  margin-bottom: 0;
`
