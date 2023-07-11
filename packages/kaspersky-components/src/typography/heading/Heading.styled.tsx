import React from 'react'
import styled from 'styled-components'
import { colors, getTextSizes, textLevels } from '../../../design-system/tokens'
import { HeadingProps } from './types'
import { HTag } from './Heading'
export const StyledHeading = styled((props: HeadingProps) => <HTag {...props} />)`
  color: ${({ color, themedColor, theme }) => {
    if (color) {
      return colors[color]
    }
    if (theme?.colors) {
      return theme.colors.textIconsElements[themedColor || 'primary']
    }
  }};
  ${({ type }) => getTextSizes(textLevels[type || 'H1'])};
  margin-bottom: 0;
`
