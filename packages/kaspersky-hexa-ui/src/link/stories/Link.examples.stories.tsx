import { ThemedPalette, ThemedPaletteProps } from '@design-system/palette'
import { renderVariants, StoryComponentContainer } from '@sb/StoryComponents'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { componentColors } from '@kaspersky/hexa-ui-core/colors/js'

import { Link as LinkComponent } from '../Link'
import { linkStorySettings } from './Link.stories'
import type { LinkProps, LinkSize } from '../types'

const linkSizes: LinkSize[] = ['medium', 'large', 'noSize']

const meta = {
  title: 'Hexa UI Components/Link/Stories',
  component: LinkComponent,
  tags: ['!autodocs'],
  ...linkStorySettings
}

export default meta

type Story = StoryObj<LinkProps>

export const Basic: Story = {
  args: {
    href: '#',
    target: '_top'
  }
}

export const WithIcon: Story = {
  args: {
    href: 'https://www.kaspersky.com',
    target: '_blank',
    decoration: 'icon',
    isTooltipVisible: true
  }
}

export const IsTooltipVisible: Story = {
  render: (args) =>
    renderVariants(
      [
        {
          label: 'isTooltipVisible: true',
          content: <LinkComponent {...args} isTooltipVisible />
        },
        {
          label: 'isTooltipVisible: false',
          content: <LinkComponent {...args} isTooltipVisible={false} />
        }
      ],
      true
    ),
  argTypes: {
    isTooltipVisible: { control: false }
  },
  args: {
    href: 'https://www.kaspersky.com',
    target: '_blank',
    decoration: 'icon',
    text: 'External link'
  },
  name: 'Is Tooltip Visible'
}

export const InText: Story = {
  render: (args: LinkProps) => (
    <div>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
      been the industry&apos;s standard dummy text ever since the 1500s, <LinkComponent {...args} /> when
      an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
      survived not only five centuries, but also the leap into electronic typesetting, remaining
      essentially unchanged.
    </div>
  )
}

export const Size: Story = {
  render: (args) =>
    renderVariants(
      linkSizes.map(size => ({
        label: size,
        content: <LinkComponent {...args} size={size} />
      })),
      true
    ),
  argTypes: {
    size: { control: false }
  },
  args: {
    href: '#'
  }
}

export const Disabled: Story = {
  render: (args: LinkProps) => (
    <StoryComponentContainer>
      <LinkComponent {...args} />
      <LinkComponent {...args} decoration="icon" />
    </StoryComponentContainer>
  ),
  args: {
    disabled: true,
    href: '#'
  }
}

export const Visited: Story = {
  render: (args: LinkProps) => (
    <StoryComponentContainer>
      <LinkComponent {...args} />
      <LinkComponent {...args} decoration="icon" />
    </StoryComponentContainer>
  ),
  args: {
    visited: true,
    href: '#'
  }
}

type PaletteStory = StoryObj<ThemedPaletteProps>
export const ColorTokens: PaletteStory = {
  args: { source: componentColors.link },
  render: args => <ThemedPalette {...args} />
}
