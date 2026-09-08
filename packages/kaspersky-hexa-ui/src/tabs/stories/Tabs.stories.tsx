import { buildStoryArgTypes, getControlsInclude } from '@sb/components/Documentation'
import { badges } from '@sb/badges'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import styled from 'styled-components'

import MetaData from '../__meta__/meta.json'
import { Tabs } from '../Tabs'
import { TabsProps } from '../types'

import { defaultArgs, tabsPropPresentation } from './Tabs.controls'

const Container = styled.div`
  width: 100%;
`

const meta: Meta<TabsProps> = {
  title: 'Hexa UI Components/Tabs',
  component: Tabs,
  tags: ['!autodocs'],
  includeStories: ['Playground'],
  excludeStories: ['defaultArgs', 'tabsPropPresentation'],
  argTypes: buildStoryArgTypes(tabsPropPresentation),
  args: defaultArgs,
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    design: MetaData.pixsoView
  },
  decorators: [
    (Story, context) => (
      <Container>
        <Story {...context} />
      </Container>
    )
  ]
}
export default meta

type Story = StoryObj<TabsProps>

export const Playground: Story = {
  render: (args) => (
    <Tabs {...args}>
      <Tabs.TabPane tab="Tab 1" key="1">Content of Tab Pane 1</Tabs.TabPane>
      <Tabs.TabPane tab="Tab 2" key="2">Content of Tab Pane 2</Tabs.TabPane>
      <Tabs.TabPane tab="Tab 3" key="3">Content of Tab Pane 3</Tabs.TabPane>
    </Tabs>
  ),
  parameters: {
    controls: {
      include: getControlsInclude(tabsPropPresentation),
      sort: 'none'
    }
  }
}
