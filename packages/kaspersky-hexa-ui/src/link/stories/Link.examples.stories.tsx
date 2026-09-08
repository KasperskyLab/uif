import { ThemedPalette, ThemedPaletteProps } from '@design-system/palette'
import { renderVariants, StoryComponentContainer } from '@sb/StoryComponents'
import { StoryObj } from '@storybook/react'
import React from 'react'

import { componentColors } from '@kaspersky/hexa-ui-core/colors/js'

import { Link as LinkComponent } from '../Link'
import type { LinkSize } from '../types'

import { BasicLink, linkIconVariants, StoryLinkProps } from './helpers'
import { linkStorySettings } from './Link.stories'

const linkSizes: LinkSize[] = ['medium', 'large', 'noSize']

const meta = {
  title: 'Hexa UI Components/Link/Stories',
  component: LinkComponent,
  tags: ['!autodocs'],
  render: BasicLink.bind({}),
  ...linkStorySettings
}

export default meta

type Story = StoryObj<StoryLinkProps>

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
  render: ({ decoration, icon, ...args }) =>
    renderVariants(
      [
        {
          label: 'isTooltipVisible: true',
          content: (
            <LinkComponent
              {...args} decoration={decoration}
              icon={decoration === 'icon' ? linkIconVariants[icon] : undefined}
              isTooltipVisible
            />
          )
        },
        {
          label: 'isTooltipVisible: false',
          content: (
            <LinkComponent
              {...args}
              decoration={decoration}
              icon={decoration === 'icon' ? linkIconVariants[icon] : undefined}
              isTooltipVisible={false}
            />
          )
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
  render: ({ decoration, icon, ...args }) => (
    <div>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
      been the industry&apos;s standard dummy text ever since the 1500s,  <LinkComponent
        {...args}
        decoration={decoration}
        icon={decoration === 'icon' ? linkIconVariants[icon] : undefined}
      /> when
      an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
      survived not only five centuries, but also the leap into electronic typesetting, remaining
      essentially unchanged.
    </div>
  )
}

export const Size: Story = {
  render: ({ decoration, icon, ...args }) =>
    renderVariants(
      linkSizes.map(size => ({
        label: size,
        content: (
          <LinkComponent
            {...args}
            decoration={decoration}
            icon={decoration === 'icon' ? linkIconVariants[icon] : undefined}
            size={size}
          />
        )
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
  render: ({ decoration, icon, ...args }) => (
    <StoryComponentContainer>
      <LinkComponent
        {...args}
        decoration={decoration}
        icon={decoration === 'icon' ? linkIconVariants[icon] : undefined}
      />
      <LinkComponent {...args} decoration="icon" />
    </StoryComponentContainer>
  ),
  args: {
    disabled: true,
    href: '#'
  }
}

export const Visited: Story = {
  render: ({ decoration, icon, ...args }) => (
    <StoryComponentContainer>
      <LinkComponent {...args}
        decoration={decoration}
        icon={decoration === 'icon' ? linkIconVariants[icon] : undefined}
      />
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
