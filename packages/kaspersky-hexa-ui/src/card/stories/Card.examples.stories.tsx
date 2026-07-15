import { ThemedPalette, ThemedPaletteProps } from '@design-system/palette'
import { sbHideControls } from '@sb/helpers'
import { Space } from '@src/space'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { componentColors } from '@kaspersky/hexa-ui-core/colors/js'

import { Card } from '../Card'
import { CardProps, CardTitleProps } from '../types'

import { cardStorySettings } from './Card.stories'
import {
  cardContent,
  cardContentInner,
  defaultCardActions,
  defaultTitle,
  longTitle
} from './constants'

type StoryCardProps = CardProps & {
  titleSize?: 'small' | 'medium'
}

const meta = {
  title: 'Hexa UI Components/Card/Stories',
  // @ts-expect-error Stories use story-only props and map them in render
  component: Card,
  tags: ['!autodocs'],
  argTypes: {
    titleSize: {
      control: {
        type: 'radio'
      },
      options: ['small', 'medium']
    }
  },
  args: {
    children: cardContent,
    draggable: false,
    closable: false,
    interactive: false,
    testId: 'card-test-id',
    klId: 'card-kl-id',
    titleSize: 'small'
  },
  ...cardStorySettings
} satisfies Meta<StoryCardProps>

export default meta

type Story = StoryObj<StoryCardProps>

export const Basic: Story = {}

export const Draggable: Story = {
  args: {
    draggable: true
  }
}

export const Interactive: Story = {
  args: {
    interactive: true
  }
}

export const WithTitle: Story = {
  render: ({ titleSize, ...props }) => (
    <Card {...props} title={{ ...defaultTitle, size: titleSize } as CardTitleProps} />
  ),
  args: {
    title: defaultTitle
  }
}

export const WithLongTitle: Story = {
  render: ({ titleSize, ...props }) => (
    <Card {...props} title={{ ...longTitle, size: titleSize } as CardTitleProps} />
  ),
  args: {
    title: longTitle
  }
}

export const WithActions: Story = {
  args: {
    closable: true,
    size: 'large',
    actions: defaultCardActions
  },
  argTypes: {
    ...sbHideControls(['closable', 'size'])
  }
}

export const WithTitleAndActions: Story = {
  render: ({ titleSize, ...props }) => (
    <Card {...props} title={{ ...defaultTitle, size: titleSize } as CardTitleProps} />
  ),
  args: {
    closable: true,
    title: defaultTitle,
    actions: defaultCardActions
  },
  argTypes: {
    ...sbHideControls(['closable'])
  }
}

export const WithLongTitleAndActions: Story = {
  render: ({ titleSize, ...props }) => (
    <Card {...props} title={{ ...longTitle, size: titleSize } as CardTitleProps} />
  ),
  args: {
    closable: true,
    title: longTitle,
    actions: defaultCardActions
  },
  argTypes: {
    ...sbHideControls(['closable'])
  }
}

export const Mode: Story = {
  render: (args) => (
    <Space direction="vertical" gap="grouped">
      <Card mode="base" {...args}>
        {cardContent}
      </Card>
      <Card mode="filled" {...args}>
        {cardContent}
      </Card>
      <Card mode="selected" {...args}>
        {cardContent}
      </Card>
    </Space>
  ),
  argTypes: {
    ...sbHideControls(['mode'])
  }
}

export const Size: Story = {
  render: (args) => (
    <Space direction="vertical" gap="grouped">
      <Card size="small" {...args}>
        {cardContent}
      </Card>
      <Card size="medium" {...args}>
        {cardContent}
      </Card>
      <Card size="large" {...args}>
        {cardContent}
      </Card>
    </Space>
  ),
  argTypes: {
    ...sbHideControls(['size'])
  }
}

export const CardsInsideCard: Story = {
  render: (args) => (
    <Card title={defaultTitle} closable>
      <Space direction="vertical" gap="grouped" style={{ paddingTop: '16px' }}>
        <Card {...args}>
          {cardContent}
        </Card>
        <Card {...args}>
          {cardContent}
        </Card>
        <Card {...args}>
          {cardContent}
        </Card>
      </Space>
    </Card>
  ),
  args: {
    draggable: true,
    mode: 'filled',
    interactive: true
  }
}

export const Scrollable: Story = {
  render: ({ titleSize, ...props }) => (
    <Card {...props} title={{ ...defaultTitle, size: titleSize } as CardTitleProps}>
      {cardContentInner.repeat(10)}
    </Card>
  ),
  args: {
    maxHeight: '200px'
  }
}

type PaletteStory = StoryObj<ThemedPaletteProps>
export const ColorTokens: PaletteStory = {
  args: { source: componentColors.card },
  render: args => <ThemedPalette {...args} />
}
