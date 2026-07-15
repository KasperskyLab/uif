import { ThemedPalette, ThemedPaletteProps } from '@design-system/palette'
import { useTheme } from '@design-system/theme'
import { ThemeKey } from '@design-system/types'
import { badges } from '@sb/badges'
import {
  buildStoryArgTypes,
  getControlsInclude
} from '@sb/components/Documentation'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import styled from 'styled-components'

import { componentColors } from '@kaspersky/hexa-ui-core/colors/js'

import MetaData from '../__meta__/meta.json'
import { content, wrapperCss } from '../common'

import { Scrollbar } from './Scrollbar'
import { ScrollbarProps } from './types'
import {
  defaultArgs,
  scrollbarPropPresentation
} from './stories/Scrollbar.controls'

export const scrollbarStorySettings: Meta<ScrollbarProps> = {
  argTypes: buildStoryArgTypes(scrollbarPropPresentation),
  args: defaultArgs,
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    design: MetaData.pixsoView
  }
}

const meta = {
  title: 'Hexa UI Components/Scrollbar',
  component: Scrollbar,
  tags: ['!autodocs'],
  includeStories: ['Playground'],
  excludeStories: ['scrollbarStorySettings'],
  ...scrollbarStorySettings
} satisfies Meta<ScrollbarProps>
export default meta

const Wrapper = styled.div<{ theme: ThemeKey }>`
  p { width: 600px; }
  ${wrapperCss}
`

export const Playground: StoryObj<ScrollbarProps> = {
  name: 'Playground',
  render: (args: ScrollbarProps) => {
    const theme = useTheme()
    const children = args.children ? <p>{args.children}</p> : undefined

    return (
      <Wrapper theme={theme.key}>
        <Scrollbar {...args} theme={args.theme ?? theme.key}>
          {children}
        </Scrollbar>
      </Wrapper>
    )
  },
  parameters: {
    controls: {
      include: getControlsInclude(scrollbarPropPresentation),
      sort: 'none'
    }
  }
}

type PaletteStory = StoryObj<ThemedPaletteProps>
export const ColorTokens: PaletteStory = {
  args: { source: componentColors.scrollbar },
  render: args => <ThemedPalette {...args} />
}
