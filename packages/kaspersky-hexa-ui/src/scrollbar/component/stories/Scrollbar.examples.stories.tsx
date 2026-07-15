import { ThemedPalette, ThemedPaletteProps } from '@design-system/palette'
import { useTheme } from '@design-system/theme'
import { ThemeKey } from '@design-system/types'
import { withDesignControls } from '@sb/components/designControls'
import { Button } from '@src/button'
import { Meta, StoryObj } from '@storybook/react'
import React, { useRef } from 'react'
import { Scrollbars } from 'react-custom-scrollbars-2'
import styled from 'styled-components'

import { componentColors } from '@kaspersky/hexa-ui-core/colors/js'

import { content, wrapperCss } from '../../common'
import { Scrollbar as ScrollbarComponent } from '../Scrollbar'
import { scrollbarStorySettings } from '../Scrollbar.stories'
import { ScrollbarProps } from '../types'

const meta = {
  title: 'Hexa UI Components/Scrollbar/Stories',
  component: ScrollbarComponent,
  tags: ['!autodocs'],
  ...withDesignControls({
    componentName: 'scrollbar',
    meta: scrollbarStorySettings
  })
} satisfies Meta<typeof ScrollbarComponent>

export default meta

const VerticalWrapper = styled.div<{ theme: ThemeKey }>`
  ${wrapperCss}
`

const HorizontalWrapper = styled.div<{ theme: ThemeKey }>`
  p { width: 800px; }
  ${wrapperCss}
`

const Wrapper = styled.div<{ theme: ThemeKey }>`
  p { width: 600px; }
  ${wrapperCss}
`

type Story = StoryObj<ScrollbarProps>

export const Vertical: Story = {
  render: (args) => {
    const theme = useTheme()

    return (
      <VerticalWrapper theme={theme.key}>
        <ScrollbarComponent {...args} theme={args.theme ?? theme.key}>
          <p>{content}</p>
        </ScrollbarComponent>
      </VerticalWrapper>
    )
  }
}

export const Horizontal: Story = {
  render: (args) => {
    const theme = useTheme()

    return (
      <HorizontalWrapper theme={theme.key}>
        <ScrollbarComponent {...args} theme={args.theme ?? theme.key}>
          <p>{content}</p>
        </ScrollbarComponent>
      </HorizontalWrapper>
    )
  }
}

export const Both: Story = {
  render: (args) => {
    const theme = useTheme()

    return (
      <Wrapper theme={theme.key}>
        <ScrollbarComponent {...args} theme={args.theme ?? theme.key}>
          <p>{content}</p>
        </ScrollbarComponent>
      </Wrapper>
    )
  }
}

export const WithRef: Story = {
  render: (args) => {
    const theme = useTheme()
    const ref = useRef<Scrollbars | null>(null)

    return (
      <VerticalWrapper theme={theme.key}>
        <ScrollbarComponent {...args} theme={args.theme ?? theme.key} ref={ref}>
          <Button onClick={() => ref.current?.scrollToBottom()}>Scroll to bottom</Button>
          <p>{content}</p>
          <Button onClick={() => ref.current?.scrollToTop()}>Scroll to top</Button>
        </ScrollbarComponent>
      </VerticalWrapper>
    )
  }
}

type PaletteStory = StoryObj<ThemedPaletteProps>

export const ColorTokens: PaletteStory = {
  args: { source: componentColors.scrollbar },
  render: args => <ThemedPalette {...args} />
}
