import { ThemedPalette, ThemedPaletteProps } from '@design-system/palette'
import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { sbHideControls } from '@sb/helpers'
import { StoryColumn } from '@sb/StoryComponents'
import { Meta, StoryObj } from '@storybook/react-webpack5'
import React from 'react'
import styled from 'styled-components'

import { componentColors } from '@kaspersky/hexa-ui-core/colors/js'
import { Placeholder } from '@kaspersky/hexa-ui-icons/16'

import MetaData from '../__meta__/meta.json'
import { Status } from '../Status'
import { StatusModes, StatusProps } from '../types'

const meta: Meta<StatusProps> = {
  title: 'Hexa UI Components/Status',
  component: Status,
  argTypes: {
    ...sbHideControls(['theme'])
  },
  args: {
    label: 'Status',
    icon: <Placeholder />,
    testId: 'status-test-id',
    klId: 'status-kl-id'
  },
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    docs: {
      page: withMeta(MetaData)
    },
    design: MetaData.pixsoView
  }
}
export default meta

type Story = StoryObj<StatusProps>

export const Basic: Story = {}

const Cell = styled.span`
  padding: 2px 10px;
`

export const WithIcons: Story = {
  render: (args: StatusProps) => (
    <StoryColumn>
      {StatusModes.map(mode => (
        <Cell key={mode}><Status mode={mode} {...args} /></Cell>
      ))}
    </StoryColumn>
  )
}

export const WithIndicator: Story = {
  render: (args: StatusProps) => (
    <StoryColumn>
      {StatusModes.map(mode => <Cell key={mode}><Status mode={mode} {...args} /></Cell>)}
    </StoryColumn>
  ),
  args: {
    icon: undefined
  }
}

type PaletteStory = StoryObj<ThemedPaletteProps>
export const ColorTokens: PaletteStory = {
  args: { source: componentColors.status },
  render: args => <ThemedPalette {...args} />
}
