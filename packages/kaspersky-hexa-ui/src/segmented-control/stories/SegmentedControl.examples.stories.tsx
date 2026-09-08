import { ThemedPalette, ThemedPaletteProps } from '@design-system/palette'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { componentColors } from '@kaspersky/hexa-ui-core/colors/js'
import { Placeholder } from '@kaspersky/hexa-ui-icons/16'

import { SegmentedControl } from '../SegmentedControl'
import {
  SegmentedContentProperties,
  SegmentedControlProps
} from '../types'

const tabsData = [
  {
    name: 'one',
    content: 'default',
    properties: { state: 'disabled', text: 'im text from tab One properties' },
    text: 'One'
  },
  {
    name: 'two',
    content: 'default',
    properties: { state: 'disabled', text: 'im text from tab Two properties' },
    text: 'Two'
  },
  {
    name: 'three',
    content: 'another',
    properties: { text: 'im text from tab Three properties' },
    text: 'Three'
  },
  {
    name: 'four',
    content: 'another',
    properties: { state: 'disabled', text: 'im text from tab Four properties' },
    text: 'Four'
  }
]

const contentData = {
  default: (properties: SegmentedContentProperties | undefined) => (
    <div>{String(properties?.text ?? '')}</div>
  ),
  another: (properties: SegmentedContentProperties | undefined) => (
    <div>{String(properties?.text ?? '')}</div>
  )
}

const meta = {
  title: 'Hexa UI Components/SegmentedControl/Stories',
  component: SegmentedControl,
  tags: ['!autodocs']
} satisfies Meta<SegmentedControlProps>

export default meta

type Story = StoryObj<SegmentedControlProps>
type PaletteStory = StoryObj<ThemedPaletteProps>

const baseArgs = {
  size: 'large' as const,
  tabsData,
  contentData,
  defaultActiveTab: 'two',
  testId: 'segmented-control-test-id'
}

export const Basic: Story = { args: baseArgs }

export const Icons: Story = {
  args: {
    ...baseArgs,
    tabsData: tabsData.map(tab => ({ ...tab, iconBefore: <Placeholder /> }))
  }
}

export const WithIndicator: Story = {
  args: {
    ...baseArgs,
    tabsData: tabsData.map(tab => ({ ...tab, iconBefore: <Placeholder />, indicator: Math.floor(Math.random() * 10) > 5 ? 'new' : 'critical' }))
  }
}

export const WithCounter: Story = {
  args: {
    ...baseArgs,
    tabsData: tabsData.map(tab => ({
      ...tab,
      iconBefore: <Placeholder />,
      counter: {
        number: Math.floor(Math.random() * 14),
        mode: Math.floor(Math.random() * 10) > 5 ? 'critical_transparent' : 'neutral_transparent'
      }
    }))
  }
}

export const WithTooltip: Story = {
  args: {
    ...baseArgs,
    tabsData: tabsData.map(tab => ({ ...tab, iconBefore: <Placeholder />, infoTooltip: 'Lorem ipsum' }))
  }
}

export const ColorTokens: PaletteStory = {
  args: {
    source: {
      segmented_control: componentColors.segmented_control,
      segmented_control_item: componentColors.segmented_control_item
    }
  },
  render: args => <ThemedPalette {...args} />
}
