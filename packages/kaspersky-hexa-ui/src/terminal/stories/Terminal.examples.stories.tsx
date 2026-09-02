import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { Terminal } from '../Terminal'
import { TerminalProps } from '../types'

import { terminalStorySettings } from './Terminal.stories'
import { TerminalDemo } from './TerminalDemo'

const meta = {
  title: 'Hexa UI Components/Terminal/Stories',
  component: Terminal,
  tags: ['!autodocs'],
  ...terminalStorySettings
} satisfies Meta<typeof Terminal>

export default meta

type Story = StoryObj<TerminalProps>

export const Basic: Story = {
  render: () => <TerminalDemo />
}
