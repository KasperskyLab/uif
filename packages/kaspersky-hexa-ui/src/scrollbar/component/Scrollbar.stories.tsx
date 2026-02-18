import { ThemedPalette, ThemedPaletteProps } from '@design-system/palette'
import { useTheme } from '@design-system/theme'
import { ThemeKey } from '@design-system/types'
import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { sbHideControls } from '@sb/helpers'
import { Button } from '@src/button'
import { Meta, StoryObj } from '@storybook/react-webpack5'
import React, { useRef } from 'react'
import { Scrollbars } from 'react-custom-scrollbars-2'
import styled from 'styled-components'

import { componentColors } from '@kaspersky/hexa-ui-core/colors/js'

import MetaData from '../__meta__/meta.json'
import { content, wrapperCss } from '../common'

import { Scrollbar } from './Scrollbar'
import { ScrollbarProps } from './types'

const meta: Meta = {
  title: 'Hexa UI Components/Scrollbar/Component',
  component: Scrollbar,
  argTypes: {
    autoHide: {
      description: 'Will the scrollbars be hidden when the element is not active'
    },
    ...sbHideControls(['theme'])
  },
  args: {
    autoHide: false
  },
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    docs: {
      page: withMeta(MetaData)
    },
    design: MetaData.pixsoView
  }
}
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

export const Vertical: StoryObj<ScrollbarProps> = {
  render: (args: ScrollbarProps) => {
    const theme = useTheme()
    return (
      <VerticalWrapper theme={theme.key}>
        <Scrollbar {...args} theme={theme.key}>
          <p>{content}</p>
        </Scrollbar>
      </VerticalWrapper>
    )
  }
}

export const Horizontal: StoryObj<ScrollbarProps> = {
  render: (args: ScrollbarProps) => {
    const theme = useTheme()
    return (
      <HorizontalWrapper theme={theme.key}>
        <Scrollbar {...args} theme={theme.key}>
          <p>{content}</p>
        </Scrollbar>
      </HorizontalWrapper>
    )
  }
}

export const Both: StoryObj<ScrollbarProps> = {
  render: (args: ScrollbarProps) => {
    const theme = useTheme()
    return (
      <Wrapper theme={theme.key}>
        <Scrollbar {...args} theme={theme.key}>
          <p>{content}</p>
        </Scrollbar>
      </Wrapper>
    )
  }
}

export const WithRef: StoryObj<ScrollbarProps> = {
  render: (args: ScrollbarProps) => {
    const theme = useTheme()
    const ref = useRef<Scrollbars | null>(null)

    const scrollToBottom = () => {
      ref.current?.scrollToBottom()
    }

    const scrollToTop = () => {
      ref.current?.scrollToTop()
    }

    return (
      <VerticalWrapper theme={theme.key}>
        <Scrollbar {...args} theme={theme.key} ref={ref}>
          <Button onClick={scrollToBottom}>Scroll to bottom</Button>
          <p>{content}</p>
          <Button onClick={scrollToTop}>Scroll to top</Button>
        </Scrollbar>
      </VerticalWrapper>
    )
  }
}

type PaletteStory = StoryObj<ThemedPaletteProps>
export const ColorTokens: PaletteStory = {
  args: { source: componentColors.scrollbar },
  render: args => <ThemedPalette {...args} />
}
