import { withDesignControls } from '@sb/components/designControls'
import { Tag } from '@src/tag'
import { Text } from '@src/typography'
import { Meta, StoryObj } from '@storybook/react-webpack5'
import React from 'react'

import { Panel, PanelProps } from '../index'
import { panelTitleSize } from '../types'

import { mockText, OtherArea, PanelsCol, PanelsLayout, storySettings } from './PanelStoryLayout'

const meta: Meta<PanelProps> = {
  component: Panel,
  title: 'Hexa UI Components/Panel',
  ...withDesignControls<PanelProps>({
    componentName: 'panel',
    meta: storySettings
  })
}
export default meta

type Story = StoryObj<PanelProps>

export const SinglePanel: Story = {
  render: (args) => {
    return (
      <PanelsLayout>
        <OtherArea></OtherArea>
        <Panel {...args}>
          {mockText}
        </Panel>
      </PanelsLayout>
    )
  },
  argTypes: {
    resizeHandle: { control: false }
  }
}

export const SectionBottom: Story = {
  render: (args) => {
    return (
      <PanelsLayout>
        <OtherArea></OtherArea>
        <Panel {...args}>
          {mockText}
        </Panel>
      </PanelsLayout>
    )
  },
  args: {
    sectionBottom: <Text>Section bottom ReactNode</Text>
  },
  argTypes: {
    resizeHandle: { control: false }
  }
}

export const ElementAfterTitle: Story = {
  render: (args) => {
    return (
      <PanelsLayout>
        <OtherArea></OtherArea>
        <Panel {...args} >
          {mockText}
        </Panel>
      </PanelsLayout>
    )
  },
  args: {
    elementAfter: <Tag>Tag after</Tag>
  },
  argTypes: {
    resizeHandle: { control: false }
  }
}

export const Headers: Story = {
  render: (args) => {
    return (
      <PanelsLayout>
        <OtherArea></OtherArea>
        {panelTitleSize.map(size => (
          <Panel {...args} key={size} title={size.charAt(0).toUpperCase() + size.slice(1)} titleSize={size}>
            {mockText}
          </Panel>
        ))}
      </PanelsLayout>
    )
  },
  args: {
    initialSize: 150
  },
  argTypes: {
    title: { control: false },
    titleSize: { control: false },
    resizeHandle: { control: false }
  }
}

export const Variations: Story = {
  render: (args) => {
    return (
      <PanelsLayout>
        <Panel {...args} resizeHandle="right" title="Left Panel">
          {mockText}
        </Panel>
        <PanelsCol>
          <OtherArea></OtherArea>
          <Panel {...args} resizeHandle="top" title="Footer Panel" initialSize={150}>
            {mockText}
          </Panel>
        </PanelsCol>
        <Panel {...args} title="Right Panel">
          {mockText}
        </Panel>
      </PanelsLayout>
    )
  },
  argTypes: {
    resizeHandle: { control: false },
    initialSize: { control: false },
    title: { control: false }
  },
  args: {}
}

export const MediumPadding: Story = {
  render: (args) => (
    <PanelsLayout>
      <OtherArea />
      <Panel {...args} padding="medium">
        {mockText}
      </Panel>
    </PanelsLayout>
  ),
  argTypes: {
    resizeHandle: { control: false },
    padding: { control: false }
  }
}
