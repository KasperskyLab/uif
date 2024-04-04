import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { badges } from '@sb/badges'
import { sbHideControls } from '@helpers/storybookHelpers'
import { withMeta } from '@helpers/hocs/MetaComponent/withMeta'
import MetaData from './meta.json'
import { Link } from './Link'
import { LinkProps } from './types'

const meta: Meta<LinkProps> = {
  title: 'Atoms/Link',
  component: Link,
  argTypes: {
    title: {
      control: { type: 'text' }
    },
    ...sbHideControls(['theme', 'type'])
  },
  args: {
    disabled: false,
    iconPosition: 'after',
    size: 'medium',
    text: 'Link',
    visited: false,
    testId: 'link-test-id',
    klId: 'link-kl-id'
  },
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    docs: {
      page: withMeta(MetaData)
    },
    design: MetaData.figmaView
  }
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
    decoration: 'icon'
  }
}

export const InText: Story = {
  render: (args: LinkProps) => (
    <div>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
      been the industry&apos;s standard dummy text ever since the 1500s, <Link {...args} /> when
      an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
      survived not only five centuries, but also the leap into electronic typesetting, remaining
      essentially unchanged.
    </div>
  )
}
