import { ThemedPalette, ThemedPaletteProps } from '@design-system/palette'
import { useTheme } from '@design-system/theme'
import { ThemeKey } from '@design-system/types'
import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import styled from 'styled-components'

import { componentColors } from '@kaspersky/hexa-ui-core/colors/js'

import MetaData from '../__meta__/meta.json'
import { content, wrapperCss } from '../common'
import { ScrollbarCssConfig } from '../types'
import { useThemedScrollbar } from '../useThemedScrollbar'

import { scrollbarCss } from './scrollbarCss'
import { ScrollbarProps } from './types'

const meta: Meta<ScrollbarProps> = {
  title: 'Hexa UI Components/Scrollbar/Browser',
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    docs: {
      page: withMeta(MetaData)
    },
    design: MetaData.figmaView
  }
}
export default meta

const VerticalWrapper = styled.div.withConfig({ shouldForwardProp: prop => !['cssConfig'].includes(prop) })<{
  theme: ThemeKey,
  cssConfig: ScrollbarCssConfig
}>`
  overflow-y: scroll;
  overflow-x: hidden;
  ${wrapperCss}
  ${scrollbarCss}
`

const HorizontalWrapper = styled.div.withConfig({ shouldForwardProp: prop => !['cssConfig'].includes(prop) })<{
  theme: ThemeKey,
  cssConfig: ScrollbarCssConfig
}>`
  overflow-y: hidden;
  overflow-x: scroll;
  p { width: 800px; }
  ${wrapperCss}
  ${scrollbarCss}
`

const Wrapper = styled.div.withConfig({ shouldForwardProp: prop => !['cssConfig'].includes(prop) })<{
  theme: ThemeKey,
  cssConfig: ScrollbarCssConfig
}>`
  overflow: scroll;
  p { width: 600px; }
  ${wrapperCss}
  ${scrollbarCss}
`

export const Vertical: StoryObj<ScrollbarProps> = {
  render: () => {
    const theme = useTheme()
    const { cssConfig } = useThemedScrollbar({ theme: theme.key })
    return (
      <VerticalWrapper cssConfig={cssConfig} theme={theme.key}>
        <p>{content}</p>
      </VerticalWrapper>
    )
  }
}

export const Horizontal: StoryObj<ScrollbarProps> = {
  render: () => {
    const theme = useTheme()
    const { cssConfig } = useThemedScrollbar({ theme: theme.key })
    return (
      <HorizontalWrapper cssConfig={cssConfig} theme={theme.key}>
        <p>{content}</p>
      </HorizontalWrapper>
    )
  }
}

export const Both: StoryObj<ScrollbarProps> = {
  render: () => {
    const theme = useTheme()
    const { cssConfig } = useThemedScrollbar({ theme: theme.key })
    return (
      <Wrapper cssConfig={cssConfig} theme={theme.key}>
        <p>{content}</p>
      </Wrapper>
    )
  }
}

type PaletteStory = StoryObj<ThemedPaletteProps>
export const ColorTokens: PaletteStory = {
  args: { source: componentColors.scrollbar },
  render: args => <ThemedPalette {...args} />
}
