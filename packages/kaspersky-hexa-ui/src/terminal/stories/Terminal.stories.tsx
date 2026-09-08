import { badges } from '@sb/badges'
import { buildStoryArgTypes, getControlsInclude } from '@sb/components/Documentation'
import { StoryColumn } from '@sb/StoryComponents'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import MetaData from '../__meta__/meta.json'
import { Terminal } from '../Terminal'
import { TerminalProps } from '../types'

import { defaultArgs, terminalPropPresentation } from './Terminal.controls'
import { TerminalDemo } from './TerminalDemo'

export const terminalStorySettings: Meta<TerminalProps> = {
  argTypes: buildStoryArgTypes(terminalPropPresentation),
  args: defaultArgs,
  decorators: [
    (Story, context) => (
      <StoryColumn style={{ minWidth: '100px', maxWidth: '400px' }}>
        <Story {...context} />
      </StoryColumn>
    )
  ],
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    design: MetaData.pixsoView
  }
}

const meta = {
  title: 'Hexa UI Components/Terminal',
  component: Terminal,
  tags: ['!autodocs'],
  includeStories: ['Playground'],
  excludeStories: ['terminalStorySettings'],
  ...terminalStorySettings
} satisfies Meta<typeof Terminal>

export default meta

type Story = StoryObj<TerminalProps>

export const Playground: Story = {
  render: () => <TerminalDemo />,
  parameters: {
    controls: {
      include: getControlsInclude(terminalPropPresentation),
      sort: 'none'
    }
  }
}
