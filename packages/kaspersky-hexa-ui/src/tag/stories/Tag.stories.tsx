import { badges } from '@sb/badges'
import { buildStoryArgTypes, getControlsInclude } from '@sb/components/Documentation'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { Advertisement } from '@kaspersky/hexa-ui-icons/16'
import { Placeholder } from '@kaspersky/hexa-ui-icons/16'

import MetaData from '../__meta__/meta.json'
import Tag from '../Tag'
import { TagProps } from '../types'
import { defaultArgs, tagIconOptions, tagPropPresentation } from './Tag.controls'

const tagIconVariants: Record<typeof tagIconOptions[number], React.ReactElement | undefined> = {
  none: undefined,
  placeholder: <Placeholder />,
  advertisement: <Advertisement />
}

type TagStoryProps = Omit<TagProps, 'icon'> & { icon: typeof tagIconOptions[number] }

const tagStorySettings: Meta<TagStoryProps> = {
  argTypes: buildStoryArgTypes(tagPropPresentation),
  args: defaultArgs,
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    design: MetaData.pixsoView
  }
}

const meta: Meta<TagStoryProps> = {
  title: 'Hexa UI Components/Tag',
  component: Tag as React.ComponentType<TagStoryProps>,
  tags: ['!autodocs'],
  includeStories: ['Playground'],
  excludeStories: ['tagStorySettings'],
  ...tagStorySettings
}

export default meta

type Story = StoryObj<TagStoryProps>

export const Playground: Story = {
  name: 'Playground',
  render: ({ icon: iconKey, children, ...args }) => (
    <Tag {...args} icon={tagIconVariants[iconKey as typeof tagIconOptions[number]]}>
      {children}
    </Tag>
  ),
  parameters: {
    controls: {
      include: getControlsInclude(tagPropPresentation),
      sort: 'none'
    }
  }
}
