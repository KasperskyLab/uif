import { badges } from '@sb/badges'
import { buildStoryArgTypes, getControlsInclude } from '@sb/components/Documentation'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import MetaData from '../__meta__/meta.json'
import { StatusCard as StatusCardComponent } from '../StatusCard'
import { StatusCardProps } from '../types'
import {
  defaultArgs,
  statusCardPropPresentation
} from './StatusCard.controls'

type StoryStatusCardProps = Omit<StatusCardProps, 'actions' | 'children' | 'description'> & {
  actions: boolean,
  children: boolean,
  description: boolean
}

const meta = {
  title: 'Hexa UI Components/StatusCard',
  // @ts-expect-error Playground maps story-only boolean controls in render
  component: StatusCardComponent,
  tags: ['!autodocs'],
  includeStories: ['Playground'],
  argTypes: buildStoryArgTypes(statusCardPropPresentation),
  args: defaultArgs,
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    design: MetaData.pixsoView
  }
} satisfies Meta<StoryStatusCardProps>

export default meta

type Story = StoryObj<StoryStatusCardProps>

export const Playground: Story = {
  name: 'Playground',
  render: ({ actions, children, description, ...args }) => (
    <StatusCardComponent
      {...args}
      actions={actions ? [{ text: 'Action', onClick: () => alert('Action') }] : undefined}
      description={description ? 'Описание статуса' : undefined}
    >
      {children ? 'Дополнительное содержимое' : null}
    </StatusCardComponent>
  ),
  parameters: {
    controls: {
      include: getControlsInclude(statusCardPropPresentation),
      sort: 'none'
    }
  }
}
