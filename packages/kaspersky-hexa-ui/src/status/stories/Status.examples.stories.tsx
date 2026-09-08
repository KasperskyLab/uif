import { ThemedPalette, ThemedPaletteProps } from '@design-system/palette'
import { badges } from '@sb/badges'
import { StoryColumn } from '@sb/StoryComponents'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import styled from 'styled-components'

import { componentColors } from '@kaspersky/hexa-ui-core/colors/js'
import { Placeholder } from '@kaspersky/hexa-ui-icons/16'

import MetaData from '../__meta__/meta.json'
import { Status } from '../Status'
import { StatusGroupProps, StatusModes, StatusProps } from '../types'

const meta = {
  title: 'Hexa UI Components/Status/Stories',
  component: Status,
  tags: ['!autodocs'],
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    design: MetaData.pixsoView
  }
} satisfies Meta<typeof Status>

export default meta

type Story = StoryObj<StatusProps>
type GroupStory = StoryObj<StatusGroupProps>
type PaletteStory = StoryObj<ThemedPaletteProps>

const Cell = styled.span`
  padding: 2px 10px;
`

export const Basic: Story = {
  args: {
    label: 'Status',
    icon: <Placeholder />
  }
}

export const WithIcons: Story = {
  args: { label: 'Status', icon: <Placeholder /> },
  render: args => (
    <StoryColumn>
      {StatusModes.map(mode => <Cell key={mode}><Status mode={mode} {...args} /></Cell>)}
    </StoryColumn>
  )
}

export const WithIndicator: Story = {
  args: { label: 'Status' },
  render: args => (
    <StoryColumn>
      {StatusModes.map(mode => <Cell key={mode}><Status mode={mode} {...args} /></Cell>)}
    </StoryColumn>
  )
}

export const Group: GroupStory = {
  args: {
    items: Array.from({ length: 5 }, (_, index) => ({ label: `Status ${index + 1}`, icon: <Placeholder /> }))
  },
  render: args => <Status.Group {...args} />
}

export const ColorTokens: PaletteStory = {
  args: { source: componentColors.status },
  render: args => <ThemedPalette {...args} />
}
