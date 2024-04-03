import React from 'react'
import styled from 'styled-components'
import { Meta, StoryObj } from '@storybook/react'
import { badges } from '@sb/badges'
import { useTheme } from '@design-system/theme'
import { ThemeKey } from '@design-system/types'
import { withMeta } from '@helpers/hocs/MetaComponent/withMeta'
import MetaData from '../__meta__/meta.json'
import { useThemedScrollbar } from '../useThemedScrollbar'
import { scrollbarCss } from './scrollbarCss'
import { ScrollbarProps } from './types'
import { ScrollbarCssConfig } from '../types'
import { content, wrapperCss } from '../common'

const meta: Meta<ScrollbarProps> = {
  title: 'Atoms/Scrollbar/Browser',
  parameters: {
    badges: [badges.needsDesignReview],
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
