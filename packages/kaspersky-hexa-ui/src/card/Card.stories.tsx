import { ThemedPalette, ThemedPaletteProps } from '@design-system/palette'
import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { sbHideControls } from '@sb/helpers'
import { Space } from '@src/space'
import { Text } from '@src/typography'
import { Meta, StoryObj } from '@storybook/react-webpack5'
import React from 'react'
import styled from 'styled-components'

import { componentColors } from '@kaspersky/hexa-ui-core/colors/js'
import { Placeholder } from '@kaspersky/hexa-ui-icons/16'

import MetaData from './__meta__/meta.json'
import { Card } from './Card'
import { CardProps, CardTitleProps } from './types'

const cardContentInner = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in eros sagittis, varius lorem nec, eleifend arcu. Fusce accumsan erat purus.'
const cardContent = <Text>{cardContentInner}</Text>

const Wrapper = styled.div`
  width: 400px;
`

const defaultProps: CardProps = {
  title: {
    value: 'Title',
    elementBefore: {
      component: 'icon',
      name: 'Map',
      size: 24,
      testId: 'title-icon-id'
    },
    elementAfter: {
      component: 'text',
      children: 'Text',
      type: 'BTM3'
    },
    size: 'small'
  },
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

const longTitle: CardTitleProps = {
  value: cardContentInner,
  size: 'small',
  elementBefore: { component: 'checkbox' },
  elementAfter: { component: 'toggle' }
}

type StoryCardProps = CardProps & {
  titleSize?: 'small' | 'medium'
}

const meta: Meta<StoryCardProps> = {
  title: 'Hexa UI Components/Card',
  component: Card,
  argTypes: {
    ...sbHideControls(['theme', 'style', 'className', 'children', 'title', 'actions']),
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
    titleSize: 'small',
    testId: 'card-test-id',
    klId: 'card-kl-id'
  },
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    docs: {
      page: withMeta(MetaData)
    },
    design: MetaData.pixsoView
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
    <Card {...props} title={{ ...defaultProps.title, size: titleSize } as CardTitleProps}/>
  ),
  args: {
    title: defaultProps.title
  }
}

export const WithLongTitle: Story = {
  render: ({ titleSize, ...props }) => (
    <Card {...props} title={{ ...longTitle, size: titleSize } as CardTitleProps}/>
  ),
  args: {
    title: longTitle
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
  render: ({ titleSize, ...props }) => (
    <Card {...props} title={{ ...defaultProps.title, size: titleSize } as CardTitleProps}/>
  ),
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
  render: ({ titleSize, ...props }) => (
    <Card {...props} title={{ ...longTitle, size: titleSize } as CardTitleProps}/>
  ),
  args: {
    closable: true,
    title: longTitle,
    actions: defaultProps.actions
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
    <Card title={defaultProps.title} closable>
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

type PaletteStory = StoryObj<ThemedPaletteProps>
export const ColorTokens: PaletteStory = {
  args: { source: componentColors.card },
  render: args => <ThemedPalette {...args} />
}
