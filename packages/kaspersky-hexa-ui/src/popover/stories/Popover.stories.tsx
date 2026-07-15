import { badges } from '@sb/badges'
import { buildStoryArgTypes, getControlsInclude } from '@sb/components/Documentation'
import { Button } from '@src/button'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import MetaData from '../__meta__/meta.json'
import { Popover as PopoverComponent } from '../Popover'
import { popoverPropPresentation } from './Popover.properties'
import { PopoverProps } from '../types'

type PopoverPlaygroundProps = Omit<PopoverProps, 'content' | 'children'> & {
  content: string
  children: string
}

export const popoverStorySettings: Meta<PopoverProps> = {
  argTypes: buildStoryArgTypes(popoverPropPresentation),
  args: {
    trigger: 'click',
    placement: 'bottom',
    shouldLimitSize: true,
    defaultVisible: false,
    content: 'Popover content',
    children: 'Open popover'
  },
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    design: MetaData.pixsoView
  }
}

const meta: Meta<typeof PopoverComponent> = {
  title: 'Hexa UI Components/Popover',
  component: PopoverComponent,
  tags: ['!autodocs'],
  includeStories: ['Playground'],
  excludeStories: ['popoverStorySettings'],
  ...popoverStorySettings
}

export default meta

type Story = StoryObj<PopoverPlaygroundProps>

export const Playground: Story = {
  name: 'Playground',
  render: ({ content, children, ...rest }: PopoverPlaygroundProps) => (
    <div style={{ padding: '120px' }}>
      <PopoverComponent {...rest} content={content}>
        <Button>{children}</Button>
      </PopoverComponent>
    </div>
  ),
  parameters: {
    controls: {
      include: getControlsInclude(popoverPropPresentation)
    }
  }
}
