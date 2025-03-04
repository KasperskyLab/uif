import { badges } from '@sb/badges'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { Placeholder } from '@kaspersky/hexa-ui-icons/16'

import MetaData from '../__meta__/meta.json'
import { Status } from '../Status'
import { StatusGroupProps } from '../types'

const meta: Meta<StatusGroupProps> = {
  title: 'Hexa UI Components/Status/Group',
  component: Status.Group,
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    design: MetaData.figmaView
  }
}
export default meta

type Story = StoryObj<StatusGroupProps>

export const Basic: Story = {
  args: {
    items: Array.from({ length: 5 }, (_, index) => ({ label: `Status ${index + 1}`, icon: <Placeholder /> }))
  }
}
