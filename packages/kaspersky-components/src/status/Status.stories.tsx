import React from 'react'
import styled from 'styled-components'
import { Meta, StoryObj } from '@storybook/react'
import { StoryColumn } from '@sb/StoryComponents'
import { badges } from '@sb/badges'
import { sbHideControls } from '@helpers/storybookHelpers'
import { withMeta } from '@helpers/hocs/MetaComponent/withMeta'
import MetaData from './__meta__/meta.json'
import { Status } from './Status'
import { StatusModes, StatusProps } from './types'
import { Placeholder } from '@kaspersky/icons/16'

const meta: Meta<StatusProps> = {
  title: 'Atoms/Status',
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
    badges: [badges.stable, badges.needsDesignReview],
    docs: {
      page: withMeta(MetaData)
    },
    design: MetaData.figmaView
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
