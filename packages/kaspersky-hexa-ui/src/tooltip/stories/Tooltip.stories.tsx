import { badges } from '@sb/badges'
import { buildStoryArgTypes, getControlsInclude } from '@sb/components/Documentation'
import { StoryColumn } from '@sb/StoryComponents'
import { Button } from '@src/button'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import MetaData from '../__meta__/meta.json'
import { Tooltip } from '../Tooltip'
import { TooltipProps } from '../types'

import { defaultArgs, tooltipPropPresentation } from './Tooltip.controls'

export const tooltipStorySettings: Meta<TooltipProps> = {
  argTypes: buildStoryArgTypes(tooltipPropPresentation),
  args: defaultArgs,
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    design: MetaData.pixsoView
  }
}

const meta = {
  title: 'Hexa UI Components/Tooltip',
  component: Tooltip,
  tags: ['!autodocs'],
  includeStories: ['Playground'],
  excludeStories: ['tooltipStorySettings'],
  ...tooltipStorySettings
} satisfies Meta<TooltipProps>
export default meta

type Story = StoryObj<TooltipProps>

export const Playground: Story = {
  name: 'Playground',
  parameters: {
    controls: {
      include: getControlsInclude(tooltipPropPresentation),
      sort: 'none'
    }
  },
  render: (args: TooltipProps) => (
    <StoryColumn style={{ paddingLeft: '200px' }}>
      <Tooltip {...args}>
        <Button>Навести курсор</Button>
      </Tooltip>
    </StoryColumn>
  )
}
