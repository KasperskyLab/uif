import { ThemedPalette, ThemedPaletteProps } from '@design-system/palette'
import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { sbHideControls } from '@sb/helpers'
import { Space } from '@src/space'
import { Text } from '@src/typography'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import styled from 'styled-components'

import { componentColors } from '@kaspersky/hexa-ui-core/colors/js'
import { Placeholder } from '@kaspersky/icons/16'

import MetaData from './__meta__/meta.json'
import { Card } from './Card'
import { CardProps, CardTitleProps } from './types'

const cardContentInner = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in eros sagittis, varius lorem nec, eleifend arcu. Fusce accumsan erat purus.'
const cardContent = <Text>{cardContentInner}</Text>

const Wrapper = styled.div`
  width: 400px;
`

const defaultProps = {
  title: {
    value: 'Title',
    elementBefore: {
      component: 'icon',
      name: 'Placeholder',
      size: 'small'
    },
    elementAfter: {
      component: 'text',
      children: 'Text',
      type: 'BTM3'
    }
  } as CardTitleProps,
  longTitle: {
    value: cardContentInner,
    elementBefore: {
      component: 'checkbox'
    },
    elementAfter: {
      component: 'toggle'
    }
  } as CardTitleProps,
  actions: [
    {
      icon: <Placeholder />,
      value: 'Action 1'
    },
    {
      icon: <Placeholder />,
      value: 'Action 2'
    }
  ]
}

const meta: Meta<CardProps> = {
  title: 'Hexa UI Components/Card',
  component: Card,
  argTypes: {
    ...sbHideControls(['theme', 'style', 'className', 'children', 'title', 'actions'])
  },
  args: {
    children: cardContent,
    draggable: false,
    closable: false,
    interactive: false,
    testId: 'card-test-id',
    klId: 'card-kl-id'
  },
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    docs: {
      page: withMeta(MetaData)
    },
    design: MetaData.figmaView
  },
  decorators: [
    (Story, context) => (
      <Wrapper>
        <Story {...context} />
      </Wrapper>
    )
  ]
}
export default meta

type Story = StoryObj<CardProps>

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
  args: {
    title: defaultProps.title
  }
}

export const WithLongTitle: Story = {
  args: {
    title: defaultProps.longTitle
  }
}

export const WithActions: Story = {
  args: {
    closable: true,
    size: 'large',
    actions: defaultProps.actions
  },
  argTypes: {
    ...sbHideControls(['closable', 'size'])
  }
}

export const WithTitleAndActions: Story = {
  args: {
    closable: true,
    title: defaultProps.title,
    actions: defaultProps.actions
  },
  argTypes: {
    ...sbHideControls(['closable'])
  }
}

export const WithLongTitleAndActions: Story = {
  args: {
    closable: true,
    title: defaultProps.longTitle,
    actions: defaultProps.actions
  },
  argTypes: {
    ...sbHideControls(['closable'])
  }
}

export const Mode: Story = {
  render: (args) => (
    <Space vertical gap={16}>
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
    <Space vertical gap={16}>
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
    <Card title={defaultProps.title} closable>
      <Space vertical gap={16} style={{ paddingTop: '16px' }}>
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

type PaletteStory = StoryObj<ThemedPaletteProps>
export const ColorTokens: PaletteStory = {
  args: { source: componentColors.card },
  render: args => <ThemedPalette {...args} />
}
