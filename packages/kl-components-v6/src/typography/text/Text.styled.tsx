import styled from 'styled-components'
import { colors, getTextSizes, textLevels } from '../../../design-system/tokens'
import { ThemeConfig } from '../../../design-system/types'
import { TextTag } from './Text'
import { TextProps, Criticalitystatuses, TextIconsElements } from './types'

export const Text = styled(TextTag)`
  color: ${({ color, themedColor, theme }: TextProps & { theme: ThemeConfig }) => {
    if (color) {
      return colors[color]
    } else if (theme?.colors && themedColor) {
      if (themedColor in theme.colors.textIconsElements) {
        return theme.colors.textIconsElements[themedColor as TextIconsElements]
      }
      if (themedColor in theme.colors.criticalitystatuses) {
        return theme.colors.criticalitystatuses[themedColor as Criticalitystatuses]
      }
      return theme.colors.textIconsElements.primary
    }
  }};
  ${({ type }: TextProps) => getTextSizes(textLevels[type || 'BTM1'])};
  margin-bottom: 0;
`
