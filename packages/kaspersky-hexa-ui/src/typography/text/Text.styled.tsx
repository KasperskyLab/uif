import { colors, getTextSizes } from '@design-system/tokens'
import { ThemeConfig } from '@design-system/types'
import styled from 'styled-components'

import { textLevels } from '@kaspersky/hexa-ui-core/typography/js'

import { TextTag } from './Text'
import { CriticalityStatuses, TextIconsElements, TextProps } from './types'

export const Text = styled(TextTag)`
  color: ${({
    color,
    themedColor,
    theme
  }: TextProps & { theme: ThemeConfig }) => {
    // @ts-ignore
    if (color) return theme?.colors?.product?.text[color] ?? colors[color]

    if (theme?.colors) {
      if (themedColor) {
        if (themedColor in theme.colors.textIconsElements) {
          return theme.colors.textIconsElements[
            themedColor as TextIconsElements
          ]
        }
        if (themedColor in theme.colors.criticalitystatuses) {
          return theme.colors.criticalitystatuses[
            themedColor as CriticalityStatuses
          ]
        }
      }
      return theme.colors.textIconsElements.primary
    }
  }};
  ${({ type }: TextProps) => getTextSizes(textLevels[type || 'BTR3'])};
  margin-bottom: 0;
`
