import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import MetaData from './__meta__/meta.json'
import { TabsProps } from './types'
import { Tabs } from './Tabs'
import { badges } from '@sb/badges'
import { withMeta } from '@helpers/hocs/MetaComponent/withMeta'
import { sbHideControls } from '@helpers/storybookHelpers'
import { Placeholder } from '@kaspersky/icons/16'
import { Button, GroupTabs, H3, Space } from '..'
import styled from 'styled-components'

const meta: Meta<TabsProps> = {
  title: 'Atoms/Tabs',
  component: Tabs,
  argTypes: {
    ...sbHideControls(['onChange', 'onTabClick', 'style', 'destroyInactiveTabPane', 'theme', 'className', 'type'])
  },
  args: {
    tabPosition: 'top',
    defaultActiveKey: '1',
    children: (
      Array.from({ length: 3 }).map((_, index) => (
        <Tabs.TabPane tab="Tab" key={index + 1}>
          Content of Tab Pane {index + 1}
        </Tabs.TabPane>
      ))
    ),
    testId: 'tabs-test-id',
    klId: 'tabs-kl-id'
  },
  parameters: {
    badges: [badges.reviewedByDesign],
    docs: {
      page: withMeta(MetaData)
    },
    design: MetaData.figmaView
  },
  decorators: [
    (Story, context) => (
      <Container>
        <Story {...context}/>
      </Container>
    )
  ]
}
export default meta

type Story = StoryObj<TabsProps>

const Container = styled.div`
  width: 100%;
`

export const Basic: Story = {}

export const WithIconAndNumber: Story = {
  render: (args: TabsProps) => (
    <Tabs {...args}>
      <Tabs.TabPane tab={<Tabs.TabPaneHead text="Tab" number={5} />} key="1">
        Content of Tab Pane 1
      </Tabs.TabPane>
      <Tabs.TabPane
        tab={<Tabs.TabPaneHead text="Tab" icon={<Placeholder />} />}
        key="2"
      >
        Content of Tab Pane 2
      </Tabs.TabPane>
      <Tabs.TabPane
        tab={
          <Tabs.TabPaneHead text="Tab" icon={<Placeholder />} number={5} />
        }
        key="3"
      >
        Content of Tab Pane 3
      </Tabs.TabPane>
    </Tabs>
  )
}

export const WithIndicator: Story = {
  render: (args: TabsProps) => (
    <Tabs {...args}>
      <Tabs.TabPane tab={<Tabs.TabPaneHead text="Tab" indicator />} key="1">
        Content of Tab Pane 1
      </Tabs.TabPane>
      <Tabs.TabPane
        tab={<Tabs.TabPaneHead text="Tab" indicator number={5} />}
        key="2"
      >
        Content of Tab Pane 2
      </Tabs.TabPane>
      <Tabs.TabPane
        tab={<Tabs.TabPaneHead text="Tab" indicator icon={<Placeholder />} />}
        key="3"
      >
        Content of Tab Pane 3
      </Tabs.TabPane>
      <Tabs.TabPane
        tab={
          <Tabs.TabPaneHead
            text="Tab"
            indicator
            icon={<Placeholder />}
            number={5}
          />
        }
        key="4"
      >
        Content of Tab Pane 4
      </Tabs.TabPane>
    </Tabs>
  )
}

export const WithDisabled: Story = {
  render: (args: TabsProps) => (
    <Tabs {...args}>
      <Tabs.TabPane
        tab={
          <Tabs.TabPaneHead
            text="Tab"
            indicator
            icon={<Placeholder />}
            number={5}
          />
        }
        key="1"
      >
        Content of Tab Pane 1
      </Tabs.TabPane>
      <Tabs.TabPane tab="Tab" key="2">
        Content of Tab Pane 2
      </Tabs.TabPane>
      <Tabs.TabPane tab="Tab" disabled key="3">
        Content of Tab Pane 3
      </Tabs.TabPane>
      <Tabs.TabPane
        tab={
          <Tabs.TabPaneHead text="Tab" icon={<Placeholder />} number={5} />
        }
        disabled
        key="4"
      >
        Content of Tab Pane 4
      </Tabs.TabPane>
    </Tabs>
  )
}

export const CollapsedHorizontalGroup: Story = {
  render: (props: TabsProps) => (
    <Tabs {...props}>
      {[
        ...Array.from({ length: 15 }, (_, i) => i)
      ].map((i) => (
        <Tabs.TabPane
          tab={
            <Tabs.TabPaneHead text={`Tab ${i + 1}`} icon={<Placeholder />} />
          }
          key={i + 1}
          disabled={i === 8}
        >
          Content of tab {i + 1}
        </Tabs.TabPane>
      ))}
    </Tabs>
  )
}

const RightButton = <Button mode='secondary' text='Right extra button'/>
const LeftButton = <Button mode='secondary' text='Left extra button'/>

export const WithExtraContent: Story = {
  render: (args: TabsProps) => (
    <Space size={16}>
      <H3>Отступы и другие стили пока задавать надо вручную, в будущем будет проработано со стороны дизайна</H3>
      <Tabs {...args} tabBarExtraContent={RightButton} />
      <Tabs {...args} tabBarExtraContent={{ right: RightButton, left: LeftButton }} />
    </Space>
  )
}

export const WithGroupedTabs: Story = {
  render: (args: TabsProps) => (
    <GroupTabs {...args}>
      {/* Группа 1 */}
      <GroupTabs.TabPaneHeader
        title={'Group 1 heading'}
        key="tab-group-header-1"
      />
      <Tabs.TabPane
        tab={
          <Tabs.TabPaneHead
            text="Tab 1"
            indicator
            icon={<Placeholder />}
            number={5}
          />
        }
        key="1"
      >
        Content of Tab Pane 1
      </Tabs.TabPane>
      <Tabs.TabPane tab="Tab 2" key="2">
        Content of Tab Pane 2
      </Tabs.TabPane>
      <Tabs.TabPane tab="Tab 3" key="3">
        Content of Tab Pane 3
      </Tabs.TabPane>

      {/* Группа 2 */}
      <GroupTabs.TabPaneHeader
        divider
        title={'Group 2 heading'}
        key="tab-group-header-2"
      />
      <Tabs.TabPane tab="Tab 4" key="4">
        Content of Tab Pane 4
      </Tabs.TabPane>
      <Tabs.TabPane tab="Tab 5" key="5">
        Content of Tab Pane 5
      </Tabs.TabPane>

      {/* Группа 3 */}
      <GroupTabs.TabPaneHeader
        divider
        title={'Group 3 heading'}
        key="tab-group-header-3"
      />
      <Tabs.TabPane tab="Tab 6" key="6">
        Content of Tab Pane 6
      </Tabs.TabPane>
      <Tabs.TabPane tab="Tab 7" key="7">
        Content of Tab Pane 7
      </Tabs.TabPane>
    </GroupTabs>
  ),
  args: {
    defaultActiveKey: undefined
  },
  argTypes: {
    ...sbHideControls(['tabPosition'])
  }
}

export const TabsInsideTabs: Story = {
  render: (args: TabsProps) => (
    <Tabs {...args} tabPosition={'left'} >
      <Tabs.TabPane tab='Tab 1' key='1'>
        <Tabs tabPosition='top'>
          <Tabs.TabPane tab='Tab 1.1' key='1.1'>
            Content in Tab 1.1
          </Tabs.TabPane>
          <Tabs.TabPane tab='Tab 1.2' key='1.2'>
            Content in Tab 1.2
          </Tabs.TabPane>
        </Tabs>
      </Tabs.TabPane>
      <Tabs.TabPane tab='Tab 2' key='2'>Content in Tab 2</Tabs.TabPane>
    </Tabs>
  )
}
