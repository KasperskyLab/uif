import styled from 'styled-components'
import { getTextSizes, textLevels } from '../../design-system/tokens'
import { ThemeConfig } from '../../design-system/types'
import { MarkdownProps } from './types'

export const StyledText = styled.span`
  ${getTextSizes(textLevels.BTR3)};
  color: ${({ themedColor, theme }: MarkdownProps & { theme: ThemeConfig }) => {
    if (theme?.colors) {
      return theme.colors.textIconsElements[themedColor || 'primary']
    }
  }};
  
  strong {
    ${getTextSizes(textLevels.BTM3)};
  }
`
