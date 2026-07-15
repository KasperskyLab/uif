import { withDesignControls } from '@sb/components/designControls'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { Space, Table, Tabs } from '../..'
import { columns, dataSource } from '../../table/stories/HorizontalScroll'
import { Panel, PanelProps } from '../index'

import {
  mockText,
  OtherArea,
  PanelsCol,
  PanelsLayout,
  storySettings
} from './PanelStoryLayout'

const meta: Meta<PanelProps> = {
  component: Panel,
  title: 'Hexa UI Components/Panel/PanelGroup',
  ...withDesignControls<PanelProps>({
    componentName: 'panel',
    meta: storySettings
  }),
  tags: ['!autodocs'],
  argTypes: {
    resizeHandle: { control: false },
    padding: { control: false }
  },
  args: {
    closable: false,
    title: '',
    resizeHandle: 'right',
    parentLayout: true,
    initialSize: 350
  }
}
export default meta

type Story = StoryObj<PanelProps>

export const PanelGroupVertical: Story = {
  render: (args) => (
    <PanelsLayout>
      <Panel {...args} resizable={true}>
        <Panel resizeHandle="bottom" title="Top" closable={false} resizable={true} initialSize={250}>{mockText}</Panel>
        <Panel closable={false} title="Bottom" resizable={false}>{mockText}</Panel>
      </Panel>
      <OtherArea />
    </PanelsLayout>
  )
}

export const PanelGroupHorizontal: Story = {
  render: (args) => (
    <PanelsLayout>
      <PanelsCol>
        <OtherArea></OtherArea>
        <Panel {...args} resizable={true}>
          <Panel resizeHandle="right" title="Left" closable={false} resizable={true} initialSize={450}>{mockText}</Panel>
          <Panel closable={false} title="Right" resizable={false}>{mockText}</Panel>
        </Panel>
      </PanelsCol>
    </PanelsLayout>
  ),
  args: {
    resizeHandle: 'top',
    initialSize: 250
  }
}

export const PanelWithTable: Story = {
  render: (args) => (
    <Tabs>
      <Tabs.TabPane
        tab={<Tabs.TabPaneHead testId="tab-1" text="Tab" />}
        key="1"
      >
        <PanelsLayout style={{ height: '500px' }}>
          <Panel {...args} resizable={true}>
            <Panel resizeHandle="bottom" title="Top" closable={false} resizable={true} initialSize={250}>{mockText}</Panel>
            <Panel closable={false} title="Bottom" resizable={false}>{mockText}</Panel>
          </Panel>
          <div style={{ flex: '1', overflowX: 'auto', maxWidth: '100%', padding: '16px' }}>
            <Space direction="vertical" align="start">
              <Table dataSource={dataSource} columns={columns} resizingMode="scroll" stickyHeader={-16} />
            </Space>
          </div>

        </PanelsLayout>
      </Tabs.TabPane>
    </Tabs>
  )
}
